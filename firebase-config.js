// ============================================================================
// Jal Kavach — Firebase configuration
// ----------------------------------------------------------------------------
// This project uses Firestore as the sole backend (no Firebase Authentication):
// user accounts, roles and permissions all live in the `users` collection and
// are checked client-side. This is intentional for the current TESTING phase
// (plain-text passwords, as requested) — see README.md for how to harden this
// before any real deployment.
// ============================================================================

const firebaseConfig = {
  apiKey: "AIzaSyA7e-KoVZFIPJ2myKtw2hGFhbpvahQPFjo",
  authDomain: "jalkavach.firebaseapp.com",
  projectId: "jalkavach",
  storageBucket: "jalkavach.firebasestorage.app",
  messagingSenderId: "92379934364",
  appId: "1:92379934364:web:0d31c1c5f200e09ebb4759"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

// Tracks whether Firestore's IndexedDB-backed offline cache actually turned on
// (some browsers/tabs refuse it — see updateConnectionUI in app.js).
window.__persistenceEnabled = false;
db.enablePersistence({ synchronizeTabs: true }).then(() => {
  window.__persistenceEnabled = true;
}).catch((err) => {
  window.__persistenceEnabled = false;
  console.warn('Firestore offline persistence not enabled:', err.code);
});

const COL = {
  users: db.collection('users'),
  villages: db.collection('villages'),
  patients: db.collection('patients'),
  water: db.collection('waterSamples'),
  alerts: db.collection('alerts'),
  tasks: db.collection('tasks'),
  reports: db.collection('reports')
};
