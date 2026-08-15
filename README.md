# Jal Kavach 💧
**Protecting people from unsafe water** — Smart community health monitoring & early-warning system for water-borne diseases in rural Northeast India.

A Progressive Web App (installable, works offline) built with plain HTML/CSS/JS + Firebase Firestore. No build step — just static files you can host on GitHub Pages.

---

## What's included

| File | Purpose |
|---|---|
| `index.html` | App shell — auth screen + main app UI |
| `app.js` | All application logic (auth, RBAC, CRUD, charts, map, exports) |
| `firebase-config.js` | Your Firebase project config + Firestore init |
| `service-worker.js` | Offline app-shell caching (PWA) |
| `manifest.json` | PWA install manifest (uses your logo as the app icon) |
| `icons/` | App icons generated from your uploaded logo |
| `firestore.rules` | Starter Firestore security rules (testing mode — see warnings inside) |

## Roles

- **District Admin** — full access: real-time dashboard, district risk map, patients, water quality, alerts, assigns tasks to Rapid Response teams, views field reports, analytics, guidelines, and manages users/RBAC.
- **ASHA Worker** — reports patient cases, logs water quality, views alerts & guidelines.
- **Rapid Response Team (RRT)** — views assigned tasks, submits field reports (treatment given, medicines, symptoms checked, water sample collected), logs water samples.

## First run

1. Deploy the files (see below) or open `index.html` directly via a local server (Firestore/Service Workers need `http(s)://`, not `file://` — use e.g. `npx serve` or the VS Code "Live Server" extension).
2. Since no users exist yet, you'll see **"Create the first Admin account"** — fill it in. This becomes your District Admin login.
3. Log in, go to **Users → Seed Demo Data** to populate sample districts/villages/patients/water samples, plus two demo accounts:
   - ASHA: `asha.demo@jalkavach.org` / `asha123`
   - RRT: `rrt.demo@jalkavach.org` / `rrt123`
4. Add your real ASHA and Rapid Response users from **Users**, and adjust their permissions there (view/add/edit/delete per module).

## Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "Jal Kavach"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
Then in the repo: **Settings → Pages → Deploy from branch → `main` / root**. Your app will be live at `https://<you>.github.io/<repo>/`.

## Firebase setup

The app already points at the `jalkavach` Firebase project using the config you provided. You still need to:

1. In the [Firebase console](https://console.firebase.google.com/) → **Firestore Database** → create a database (test mode is fine to start).
2. Paste the contents of `firestore.rules` into **Firestore → Rules** and publish.
3. In **Firestore → Rules**, note the large warning comment: this app does **not** use Firebase Authentication. It checks plain-text passwords stored in the `users` collection itself, entirely from the browser. That was requested for testing — it is **not safe for real deployment** with real patient/health data. Before going live:
   - Switch to Firebase Authentication.
   - Hash passwords (or drop custom passwords entirely).
   - Tighten `firestore.rules` to check `request.auth`.

## Data model (Firestore collections)

- `users` — name, loginId, password, role (`admin`/`asha`/`rrt`), district, village, active, permissions `{module: {view,add,edit,delete}}`
- `villages` — name, district, population, waterSources[]
- `patients` — name, age, gender, disease, symptoms[], village, district, onset, severity, status, reportedBy/reportedByName
- `waterSamples` — village, district, source, ph, turbidity, tds, status (auto-computed), collectedBy/collectedByName
- `alerts` — title, message, severity, district, village, active, auto (bool), createdAt
- `tasks` — title, type, description, assignedTo, district, village, relatedCaseId, dueDate, priority, status
- `reports` — taskId, treatmentGiven, medicineGiven, symptomsChecked[], patientsSeen, waterCollected, submittedBy/submittedByName

## Notes on data sources

Guideline content (disease overview, transmission, precautions) is written as general public-health reference material informed by common WHO/BIS drinking-water and communicable-disease guidance — it's meant for community awareness, not clinical diagnosis. Water parameter reference ranges (pH 6.5–8.5, Turbidity ≤5 NTU, TDS ≤500 mg/L) follow the commonly used Indian Standard IS 10500 acceptable limits. Live datasets weren't fetched automatically (no network access at build time) — the **Seed Demo Data** button gives you realistic sample data to explore the app immediately; replace with real district data as it comes in.

## Offline behavior

- **App shell** (HTML/CSS/JS/icons) is cached by the service worker so the app opens without a connection.
- **Data** (patients, water samples, alerts, tasks) uses Firestore's built-in offline persistence — reads serve cached data, writes queue locally and sync automatically once back online. A banner appears at the top when offline.

## Customizing

- 8 states are currently used as the "districts" (Assam, Meghalaya, Manipur, Mizoram, Nagaland, Tripura, Arunachal Pradesh, Sikkim) — edit the `DISTRICTS` array in `app.js` if you want actual sub-state districts instead, and add matching lat/lng.
- Colors/branding live in `index.html` `<style>` (CSS variables at the top) — derived from your Jal Kavach logo.
