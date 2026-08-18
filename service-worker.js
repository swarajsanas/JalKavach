// Jal Kavach — Service Worker
// Provides offline app-shell caching for STATIC assets only (icons, manifest,
// third-party libraries). Live data (patients, water samples, alerts, tasks)
// is handled separately by Firestore's own offline persistence layer.
//
// IMPORTANT: index.html, app.js and firebase-config.js are the actively
// developed core of this app and are DELIBERATELY NOT cached or intercepted
// by this service worker at all — every request for them goes straight to
// the network, using the browser's normal (non-SW) HTTP caching. This is on
// purpose: SW caching of frequently-updated app logic previously caused
// "I uploaded new files but nothing changed" bugs that were very hard for
// non-developers to diagnose and fix. The small tradeoff is that these three
// files require a live connection the very first time the app is opened on
// a device; after that, normal browser caching still helps repeat visits.

const CACHE_VERSION = 'jalkavach-v3';
const NEVER_CACHE = ['index.html', 'app.js', 'firebase-config.js'];

const APP_SHELL = [
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

  // Never touch the core app files or the page navigation itself — let the
  // browser fetch them normally every time.
  if (url.origin === self.location.origin) {
    const isCoreFile = NEVER_CACHE.some((f) => url.pathname.endsWith(f)) || req.mode === 'navigate';
    if (isCoreFile) return; // do not call respondWith — falls through to normal network handling

    // Other same-origin static assets (manifest, icons): network-first with cache fallback.
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Known CDN runtime deps: stale-while-revalidate.
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
