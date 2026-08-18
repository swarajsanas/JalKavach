// Jal Kavach — Service Worker
// Provides offline app-shell caching so field workers (ASHA / Rapid Response)
// can open the app and use previously loaded data without a network connection.
// Live data sync (patients, water samples, alerts, tasks) is handled separately
// by Firestore's own offline persistence layer (see firebase-config.js).
//
// IMPORTANT: same-origin app files (index.html, app.js, firebase-config.js)
// use a NETWORK-FIRST strategy. This means every time the app is opened with
// a connection, it fetches the latest version straight away and updates the
// cache in the background — so new deployments show up immediately instead
// of being stuck behind a stale cached copy. The cache is only used as a
// fallback when there's no network at all.

const CACHE_VERSION = 'jalkavach-v2';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-16.png',
  './icons/icon-32.png',
  './icons/icon-128.png',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

const RUNTIME_HOSTS = [
  'cdn.tailwindcss.com',
  'cdn.jsdelivr.net',
  'cdnjs.cloudflare.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'unpkg.com',
  'www.gstatic.com',
  'firestore.googleapis.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // App shell (same-origin: index.html, app.js, firebase-config.js, manifest, icons):
  // NETWORK-FIRST. Always try the network so updates land immediately; only
  // fall back to the cache when the network request fails (offline).
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Known CDN runtime deps: stale-while-revalidate (fine for libraries that
  // rarely change and benefit from instant load).
  if (RUNTIME_HOSTS.some((h) => url.hostname.includes(h))) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req)
          .then((res) => {
            if (res && (res.status === 200 || res.type === 'opaque')) {
              cache.put(req, res.clone());
            }
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
