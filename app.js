const APP_LOGO_B64 = 'data:image/png;base64,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';

// ============================================================================
// JAL KAVACH — Application logic
// Smart Community Health Monitoring & Early Warning System (Rural NE India)
// ============================================================================

/* ----------------------------- CONSTANTS -------------------------------- */

const DISTRICTS = [
  { name: 'Assam',             lat: 26.2006, lng: 92.9376 },
  { name: 'Meghalaya',         lat: 25.4670, lng: 91.3662 },
  { name: 'Manipur',           lat: 24.6637, lng: 93.9063 },
  { name: 'Mizoram',           lat: 23.1645, lng: 92.9376 },
  { name: 'Nagaland',          lat: 26.1584, lng: 94.5624 },
  { name: 'Tripura',           lat: 23.9408, lng: 91.9882 },
  { name: 'Arunachal Pradesh', lat: 28.2180, lng: 94.7278 },
  { name: 'Sikkim',            lat: 27.5330, lng: 88.5122 }
];

const DISEASES = ['Acute Diarrhoeal Disease', 'Cholera', 'Typhoid', 'Hepatitis A', 'Dysentery', 'Gastroenteritis', 'Other'];

const SYMPTOMS_LIST = ['Fever', 'Vomiting', 'Watery Stools', 'Abdominal Pain', 'Dehydration', 'Jaundice', 'Nausea', 'Headache', 'Fatigue', 'Blood in Stool'];

const WATER_SOURCES = ['Hand Pump / Tube Well', 'Open Well', 'River / Stream', 'Pond', 'Piped Tap Water', 'Community Tank', 'Spring Water'];

// General reference ranges (Indian Standard IS 10500 / common WHO guidance for
// drinking water). Used only to flag samples for follow-up — not a clinical or
// regulatory determination.
const WATER_STANDARDS = {
  ph:        { min: 6.5, max: 8.5, unit: '',     label: 'pH' },
  turbidity: { min: 0,   max: 5,   unit: 'NTU',  label: 'Turbidity' },
  tds:       { min: 0,   max: 500, unit: 'mg/L', label: 'TDS' }
};

const MODULES = ['patients', 'water', 'alerts', 'tasks', 'users', 'villages'];

const ROLE_TEMPLATES = {
  admin: perms(true, true, true, true),
  asha: {
    patients: perm(true, true, true, false),
    water: perm(true, true, false, false),
    alerts: perm(true, false, false, false),
    tasks: perm(false, false, false, false),
    users: perm(false, false, false, false),
    villages: perm(true, false, false, false)
  },
  rrt: {
    patients: perm(true, false, false, false),
    water: perm(true, true, false, false),
    alerts: perm(true, false, false, false),
    tasks: perm(true, false, true, false),
    users: perm(false, false, false, false),
    villages: perm(true, true, false, false)
  }
};
function perm(view, add, edit, del) { return { view, add, edit, delete: del }; }
function perms(view, add, edit, del) {
  const o = {};
  MODULES.forEach(m => o[m] = perm(view, add, edit, del));
  return o;
}

const ROLE_LABELS = { admin: 'District Admin', asha: 'ASHA Worker', rrt: 'Rapid Response Team' };

const NAV = [
  { id: 'dashboard',  label: 'Dashboard',        icon: 'fa-chart-pie',           roles: ['admin', 'asha', 'rrt'] },
  { id: 'map',        label: 'Map & Districts',  icon: 'fa-map-location-dot',    roles: ['admin', 'rrt'] },
  { id: 'patients',   label: 'Patients',         icon: 'fa-notes-medical',       roles: ['admin', 'asha'] },
  { id: 'water',      label: 'Water Quality',    icon: 'fa-droplet',             roles: ['admin', 'asha', 'rrt'] },
  { id: 'alerts',     label: 'Alerts',           icon: 'fa-triangle-exclamation',roles: ['admin', 'asha', 'rrt'] },
  { id: 'tasks',      label: 'Tasks',            icon: 'fa-list-check',          roles: ['admin', 'rrt'] },
  { id: 'reports',    label: 'Field Reports',    icon: 'fa-file-lines',          roles: ['admin'] },
  { id: 'analytics',  label: 'Analytics',        icon: 'fa-chart-line',          roles: ['admin'] },
  { id: 'guidelines', label: 'Guidelines',       icon: 'fa-book-medical',        roles: ['admin', 'asha', 'rrt'] },
  { id: 'users',      label: 'Users',            icon: 'fa-users-gear',          roles: ['admin'] }
];

const GUIDELINES = [
  {
    disease: 'Cholera', icon: 'fa-virus', color: '#dc2626',
    overview: 'An acute intestinal infection caused by the bacterium Vibrio cholerae, spread mainly through water or food contaminated with faecal matter. It can cause severe watery diarrhoea and dehydration within hours if untreated.',
    transmission: 'Contaminated drinking water, poor sanitation, unwashed food, and open defecation near water sources.',
    symptoms: ['Sudden onset watery diarrhoea ("rice-water" stools)', 'Vomiting', 'Rapid dehydration', 'Muscle cramps', 'Low blood pressure'],
    precautions: ['Drink only boiled or chlorinated water', 'Use ORS immediately at first sign of diarrhoea', 'Wash hands with soap before eating and after defecation', 'Avoid open defecation; use latrines', 'Cook food thoroughly and eat while hot'],
    alertAt: 'Report immediately if 2 or more suspected cases occur in the same village within 7 days — cholera can spread very fast.'
  },
  {
    disease: 'Typhoid', icon: 'fa-temperature-high', color: '#b45309',
    overview: 'A bacterial infection (Salmonella Typhi) spread through contaminated water and food, causing sustained high fever and systemic illness over 1–3 weeks.',
    transmission: 'Faecally contaminated water/food; carriers who handle food without proper hand hygiene.',
    symptoms: ['Prolonged high fever (often worse in the evening)', 'Headache', 'Abdominal pain', 'Fatigue', 'Loss of appetite', 'Sometimes a faint rash'],
    precautions: ['Ensure safe drinking water at the source', 'Encourage typhoid vaccination where available', 'Promote handwashing among food handlers', 'Isolate and treat carriers promptly', 'Boil water during outbreaks'],
    alertAt: 'Flag clusters of prolonged fever cases in one village for water source inspection.'
  },
  {
    disease: 'Acute Diarrhoeal Disease', icon: 'fa-tint', color: '#0f9d8f',
    overview: 'A broad category of watery or loose stools (3+ times a day), commonly linked to unsafe water, poor sanitation, and seasonal contamination of water sources, especially during monsoon.',
    transmission: 'Contaminated water, poor hand hygiene, spoiled food, flies.',
    symptoms: ['Loose/watery stools', 'Abdominal cramps', 'Mild fever', 'Dehydration in severe cases'],
    precautions: ['Start ORS + zinc supplementation early, especially in children', 'Continue feeding/breastfeeding during illness', 'Boil or filter drinking water', 'Maintain safe disposal of waste and clean latrines'],
    alertAt: 'A rising 3-day trend of new cases in one village should trigger a water source check.'
  },
  {
    disease: 'Hepatitis A', icon: 'fa-lungs-virus', color: '#7c3aed',
    overview: 'A viral liver infection transmitted through faecally contaminated water and food. Common in areas with inadequate sanitation.',
    transmission: 'Contaminated water/food, close contact with an infected person.',
    symptoms: ['Yellowing of eyes/skin (jaundice)', 'Fatigue', 'Nausea', 'Abdominal discomfort', 'Dark urine'],
    precautions: ['Ensure safe drinking water and food hygiene', 'Vaccinate where feasible', 'Isolate acute cases from food handling duties', 'Practice good hand hygiene, especially after toilet use'],
    alertAt: 'Multiple jaundice cases in the same village strongly suggest a contaminated shared water source.'
  },
  {
    disease: 'Dysentery', icon: 'fa-biohazard', color: '#991b1b',
    overview: 'Intestinal inflammation causing diarrhoea with blood/mucus, caused by bacteria (Shigella) or parasites (Entamoeba) usually spread via contaminated water.',
    transmission: 'Faecal contamination of water and food, poor sanitation.',
    symptoms: ['Diarrhoea with blood or mucus', 'Abdominal cramps', 'Fever', 'Painful urge to pass stool'],
    precautions: ['Seek prompt treatment — avoid self-medication with antibiotics', 'Maintain hydration with ORS', 'Boil water and cook food thoroughly', 'Dispose of faecal waste safely away from water sources'],
    alertAt: 'Any blood-in-stool cluster in a village warrants urgent water sample collection.'
  }
];

const GENERAL_PRECAUTIONS = [
  'Boil or chlorinate drinking water, especially during and after monsoon flooding.',
  'Keep water storage containers covered and clean them regularly.',
  'Build and use latrines; avoid open defecation near ponds, rivers or wells.',
  'Wash hands with soap at key times: before eating, before cooking, after toilet use.',
  'Keep water collection points away from drainage, cattle sheds and waste dumps.',
  'Start ORS immediately for any diarrhoea and continue feeding.',
  'Report clusters of fever, diarrhoea or jaundice to the local ASHA worker without delay.'
];

/* ------------------------------- STATE ----------------------------------- */

const STATE = {
  user: null,
  users: [], villages: [], patients: [], water: [], alerts: [], tasks: [], reports: [],
  section: 'dashboard',
  listenersAttached: false,
  editing: {},
  charts: {},
  map: null, mapMarkers: []
};

const LS_USER = 'jk_currentUser';

/* ------------------------------- UTILS ------------------------------------ */

function $(id) { return document.getElementById(id); }
function esc(s) { return (s ?? '').toString().replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
function todayStr() { return new Date().toISOString().slice(0, 10); }
function fmtDate(d) { if (!d) return '—'; const dt = typeof d === 'string' ? new Date(d) : d; return isNaN(dt) ? '—' : dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }); }
function fmtDateTime(d) { if (!d) return '—'; const dt = typeof d === 'string' ? new Date(d) : d; return isNaN(dt) ? '—' : dt.toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }); }
function daysAgo(dateStr) { if (!dateStr) return 9999; const d = new Date(dateStr); return Math.floor((Date.now() - d.getTime()) / 86400000); }
function withinDays(dateStr, n) { return daysAgo(dateStr) <= n && daysAgo(dateStr) >= 0; }
function isChildAge(age) { return Number(age) <= 12; }
function toast(msg, isError) {
  const t = $('toast');
  $('toastMsg').textContent = msg;
  t.querySelector('i').className = isError ? 'fas fa-exclamation-circle text-red-400' : 'fas fa-check-circle text-teal-400';
  t.classList.remove('translate-y-20', 'opacity-0');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.add('translate-y-20', 'opacity-0'), 3200);
}
function setLoading(v) { $('loadingOverlay').classList.toggle('hidden', !v); }

function can(module, action) {
  if (!STATE.user) return false;
  const p = STATE.user.permissions?.[module];
  return !!(p && p[action]);
}

function districtStatus(d) {
  const casesRecent = STATE.patients.filter(p => p.district === d && withinDays(p.onset || p.reportedAtDate, 14));
  const unsafeWater = STATE.water.filter(w => w.district === d && w.status !== 'Safe');
  const activeAlerts = STATE.alerts.filter(a => a.district === d && a.active);
  const villagesIn = STATE.villages.filter(v => v.district === d);
  const population = villagesIn.reduce((s, v) => s + (Number(v.population) || 0), 0);
  const score = casesRecent.length * 3 + unsafeWater.length * 2 + activeAlerts.length * 4;
  let risk = 'healthy', color = '#16a34a', label = 'Healthy';
  if (score >= 15) { risk = 'high'; color = '#dc2626'; label = 'High Risk'; }
  else if (score >= 6) { risk = 'moderate'; color = '#d97706'; label = 'Moderate'; }
  return { district: d, casesRecent: casesRecent.length, unsafeWater: unsafeWater.length, activeAlerts: activeAlerts.length, villages: villagesIn.length, population, score, risk, label, color };
}

function waterStatus(ph, turbidity, tds) {
  const issues = [];
  if (ph !== '' && ph != null) { const v = Number(ph); if (v < WATER_STANDARDS.ph.min || v > WATER_STANDARDS.ph.max) issues.push('pH'); }
  if (turbidity !== '' && turbidity != null) { const v = Number(turbidity); if (v > WATER_STANDARDS.turbidity.max) issues.push('Turbidity'); }
  if (tds !== '' && tds != null) { const v = Number(tds); if (v > WATER_STANDARDS.tds.max) issues.push('TDS'); }
  if (issues.length === 0) return 'Safe';
  if (issues.length === 1) return 'Marginal';
  return 'Unsafe';
}

/* -------------------------------- AUTH ------------------------------------ */

async function bootAuth() {
  $('authLoading').classList.remove('hidden');
  $('setupWrap').classList.add('hidden');
  $('loginWrap').classList.add('hidden');
  try {
    const snap = await COL.users.limit(1).get();
    $('authLoading').classList.add('hidden');
    if (snap.empty) {
      $('setupWrap').classList.remove('hidden');
    } else {
      $('loginWrap').classList.remove('hidden');
    }
  } catch (e) {
    $('authLoading').classList.add('hidden');
    $('loginWrap').classList.remove('hidden');
    console.error(e);
  }

  const saved = localStorage.getItem(LS_USER);
  if (saved) {
    try {
      const u = JSON.parse(saved);
      const doc = await COL.users.doc(u.id).get();
      if (doc.exists && doc.data().active !== false) {
        enterApp({ id: doc.id, ...doc.data() });
        return;
      } else {
        localStorage.removeItem(LS_USER);
      }
    } catch { localStorage.removeItem(LS_USER); }
  }
}

async function handleSetupAdmin(e) {
  e.preventDefault();
  const name = $('setupName').value.trim();
  const loginId = $('setupLoginId').value.trim();
  const password = $('setupPass').value;
  if (!name || !loginId || !password) return false;
  setLoading(true);
  try {
    const docRef = await COL.users.add({
      name, loginId, password, role: 'admin',
      district: '', village: '', active: true,
      permissions: ROLE_TEMPLATES.admin,
      createdAt: new Date().toISOString()
    });
    const doc = await docRef.get();
    toast('Admin account created — welcome to Jal Kavach!');
    enterApp({ id: doc.id, ...doc.data() });
  } catch (err) {
    console.error(err);
    toast('Could not create account: ' + err.message, true);
  }
  setLoading(false);
  return false;
}

async function handleLogin(e) {
  e.preventDefault();
  const loginId = $('loginId').value.trim();
  const pass = $('loginPass').value;
  $('loginError').classList.add('hidden');
  setLoading(true);
  try {
    const snap = await COL.users.where('loginId', '==', loginId).limit(1).get();
    if (snap.empty) throw new Error('No account found with that login ID.');
    const doc = snap.docs[0];
    const data = doc.data();
    if (data.password !== pass) throw new Error('Incorrect password.');
    if (data.active === false) throw new Error('This account has been deactivated. Contact your admin.');
    enterApp({ id: doc.id, ...data });
  } catch (err) {
    $('loginError').textContent = err.message;
    $('loginError').classList.remove('hidden');
  }
  setLoading(false);
  return false;
}

function logout() {
  Object.values(STATE.unsubs || {}).forEach(fn => { try { fn(); } catch {} });
  STATE.unsubs = {};
  STATE.listenersAttached = false;
  STATE.user = null;
  localStorage.removeItem(LS_USER);
  $('appScreen').classList.add('hidden');
  $('authScreen').classList.remove('hidden');
  $('loginForm').reset();
  bootAuth();
}

function enterApp(user) {
  STATE.user = user;
  localStorage.setItem(LS_USER, JSON.stringify({ id: user.id }));
  $('authScreen').classList.add('hidden');
  $('appScreen').classList.remove('hidden');
  $('userName').textContent = user.name;
  $('userRole').textContent = ROLE_LABELS[user.role] || user.role;
  $('userAvatar').textContent = (user.name || '?').trim().charAt(0).toUpperCase();
  buildNav();
  attachListeners();
  showSection('dashboard');
}

/* -------------------------------- NAV -------------------------------------- */

function buildNav() {
  const items = NAV.filter(n => n.roles.includes(STATE.user.role));
  const render = (mobile) => items.map(n => `
    <button onclick="showSection('${n.id}')${mobile ? ';toggleMobileNav(false)' : ''}" data-nav="${n.id}${mobile ? '-m' : ''}"
      class="nav-item w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-300 kbd-focus">
      <i class="fas ${n.icon} w-4 text-center"></i><span>${n.label}</span>
    </button>`).join('');
  $('navList').innerHTML = render(false);
  $('navListMobile').innerHTML = render(true);
}

function toggleMobileNav(open) {
  $('mobileNavBackdrop').classList.toggle('hidden', !open);
  $('mobileSidebar').classList.toggle('hidden', !open);
  $('mobileSidebar').classList.toggle('flex', open);
}

const SECTION_META = {
  dashboard: ['Dashboard', 'Real-time community health overview'],
  map: ['Map & Districts', 'Risk map, districts, villages & water resources'],
  patients: ['Patients', 'Reported disease cases'],
  water: ['Water Quality', 'Water sample testing against safety standards'],
  alerts: ['Alerts', 'Active early-warning alerts'],
  tasks: ['Tasks', 'Rapid Response Team assignments'],
  reports: ['Field Reports', 'Reports submitted by Rapid Response teams'],
  analytics: ['Analytics', 'Trends, patterns and demographics'],
  guidelines: ['Guidelines', 'Disease reference & community precautions'],
  users: ['Users', 'Manage accounts, roles & permissions']
};

function showSection(id) {
  const meta = NAV.find(n => n.id === id);
  if (!meta || !meta.roles.includes(STATE.user.role)) id = 'dashboard';
  STATE.section = id;
  document.querySelectorAll('[data-nav]').forEach(el => el.classList.toggle('active', el.dataset.nav === id || el.dataset.nav === id + '-m'));
  const [title, sub] = SECTION_META[id];
  $('pageTitle').textContent = title;
  $('pageSubtitle').textContent = sub;
  renderSection(id);
}

function renderSection(id) {
  const map = {
    dashboard: renderDashboard, map: renderMapSection, patients: renderPatients,
    water: renderWater, alerts: renderAlerts, tasks: renderTasks, reports: renderReports,
    analytics: renderAnalytics, guidelines: renderGuidelines, users: renderUsers
  };
  ($('sectionRoot').innerHTML = '');
  (map[id] || renderDashboard)();
}

/* ---------------------------- FIRESTORE SYNC -------------------------------- */

function attachListeners() {
  if (STATE.listenersAttached) return;
  STATE.listenersAttached = true;
  STATE.unsubs = {};

  const bind = (col, key, sortFn) => {
    STATE.unsubs[key] = COL[col].onSnapshot(snap => {
      STATE[key] = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      if (sortFn) STATE[key].sort(sortFn);
      onDataChange();
    }, err => console.error(key, err));
  };

  bind('users', 'users', (a, b) => (a.name || '').localeCompare(b.name || ''));
  bind('villages', 'villages', (a, b) => (a.name || '').localeCompare(b.name || ''));
  bind('patients', 'patients', (a, b) => new Date(b.reportedAtDate || 0) - new Date(a.reportedAtDate || 0));
  bind('water', 'water', (a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  bind('alerts', 'alerts', (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  bind('tasks', 'tasks', (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  bind('reports', 'reports', (a, b) => new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0));
}

let __renderDebounce = null;
function onDataChange() {
  updateAlertBadge();
  clearTimeout(__renderDebounce);
  __renderDebounce = setTimeout(() => {
    if (STATE.user && STATE.user.role === 'admin') autoGenerateAlerts();
    renderSection(STATE.section);
  }, 80);
}

function updateAlertBadge() {
  const active = STATE.alerts.filter(a => a.active).length;
  const badge = $('alertBadge');
  if (active > 0) { badge.textContent = active > 99 ? '99+' : active; badge.classList.remove('hidden'); }
  else badge.classList.add('hidden');
}

/* ------------------------- AUTO ALERT GENERATION ---------------------------- */

let __autoAlertRunning = false;
async function autoGenerateAlerts() {
  if (__autoAlertRunning) return;
  __autoAlertRunning = true;
  try {
    const candidates = [];

    // Disease clustering: 2+ cases of same disease, same village, within 7 days
    const byKey = {};
    STATE.patients.filter(p => withinDays(p.onset || p.reportedAtDate, 7)).forEach(p => {
      const k = `${p.village}|${p.disease}`;
      (byKey[k] = byKey[k] || []).push(p);
    });
    Object.entries(byKey).forEach(([k, list]) => {
      if (list.length >= 2) {
        const [village, disease] = k.split('|');
        candidates.push({
          type: 'disease_cluster', village, district: list[0].district,
          title: `${disease} cluster in ${village}`,
          message: `${list.length} suspected ${disease} cases reported in ${village} within the last 7 days. Recommend water source inspection and Rapid Response dispatch.`,
          severity: list.length >= 4 ? 'critical' : 'high'
        });
      }
    });

    // Unsafe water samples
    STATE.water.filter(w => w.status === 'Unsafe' && withinDays(w.date, 10)).forEach(w => {
      candidates.push({
        type: 'unsafe_water', village: w.village, district: w.district,
        title: `Unsafe water source in ${w.village}`,
        message: `Water sample from ${w.source || 'a local source'} in ${w.village} failed multiple safety parameters (pH ${w.ph ?? '—'}, Turbidity ${w.turbidity ?? '—'} NTU, TDS ${w.tds ?? '—'} mg/L). Immediate follow-up recommended.`,
        severity: 'high'
      });
    });

    for (const c of candidates) {
      const dupe = STATE.alerts.find(a => a.active && a.type === c.type && a.village === c.village && withinDays(a.createdAt?.slice(0, 10), 3));
      if (!dupe) {
        await COL.alerts.add({ ...c, active: true, auto: true, createdAt: new Date().toISOString(), createdBy: 'system' });
      }
    }
  } catch (e) { console.error('autoGenerateAlerts', e); }
  __autoAlertRunning = false;
}

/* -------------------------------- MODAL ------------------------------------- */

function openModal(title, bodyHtml) {
  $('modalTitle').textContent = title;
  $('modalBody').innerHTML = bodyHtml;
  $('modalBackdrop').classList.remove('hidden');
  $('modalBackdrop').classList.add('flex');
}
function closeModal() {
  $('modalBackdrop').classList.add('hidden');
  $('modalBackdrop').classList.remove('flex');
  $('modalBody').innerHTML = '';
}

/* ----------------------------- CSV / PDF EXPORT ------------------------------ */

function toCSV(rows, columns) {
  const header = columns.map(c => `"${c.label.replace(/"/g, '""')}"`).join(',');
  const body = rows.map(r => columns.map(c => {
    const v = typeof c.get === 'function' ? c.get(r) : (r[c.key] ?? '');
    return `"${String(v).replace(/"/g, '""')}"`;
  }).join(',')).join('\n');
  return header + '\n' + body;
}

function downloadCSV(filename, rows, columns) {
  if (!rows.length) { toast('Nothing to export yet', true); return; }
  const csv = toCSV(rows, columns);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
  toast('CSV downloaded');
}

function exportPDF(title, columns, rows, filename) {
  if (!rows.length) { toast('Nothing to export yet', true); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: columns.length > 5 ? 'landscape' : 'portrait' });
  try { doc.addImage(APP_LOGO_B64, 'PNG', 14, 10, 14, 14); } catch {}
  doc.setFontSize(14); doc.setTextColor(10, 61, 98);
  doc.text('Jal Kavach', 32, 16);
  doc.setFontSize(10); doc.setTextColor(100);
  doc.text(title, 32, 21);
  doc.text('Generated: ' + new Date().toLocaleString('en-IN'), 32, 26);
  doc.autoTable({
    startY: 32,
    head: [columns.map(c => c.label)],
    body: rows.map(r => columns.map(c => String(typeof c.get === 'function' ? c.get(r) : (r[c.key] ?? '')))),
    styles: { fontSize: 8, cellPadding: 2.5 },
    headStyles: { fillColor: [15, 157, 143] },
    theme: 'grid'
  });
  doc.save(filename);
  toast('PDF downloaded');
}

/* ================================ DASHBOARD ================================= */

function renderDashboard() {
  const u = STATE.user;
  const scopedPatients = scopeByUser(STATE.patients);
  const cases14 = STATE.patients.filter(p => withinDays(p.onset || p.reportedAtDate, 14));
  const unsafeWater = STATE.water.filter(w => w.status !== 'Safe');
  const activeAlerts = STATE.alerts.filter(a => a.active);
  const villagesMonitored = STATE.villages.length;
  const population = STATE.villages.reduce((s, v) => s + (Number(v.population) || 0), 0);
  const overallScore = DISTRICTS.reduce((s, d) => s + districtStatus(d.name).score, 0);
  let overallRisk = { label: 'Healthy', cls: 'risk-healthy', msg: 'No significant water-borne disease risk detected across monitored districts.' };
  if (overallScore >= 40) overallRisk = { label: 'High Risk', cls: 'risk-high', msg: 'Multiple districts show elevated case clusters or unsafe water sources. Immediate action recommended.' };
  else if (overallScore >= 15) overallRisk = { label: 'Moderate Risk', cls: 'risk-moderate', msg: 'Some districts show emerging signals. Continue close monitoring and follow-up.' };

  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-6">
    <div class="rounded-2xl p-6 text-white shadow-lg ${overallRisk.cls} flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-wide opacity-80 mb-1">Region-wide Early Warning Status</p>
        <h2 class="text-2xl font-extrabold font-display">${overallRisk.label}</h2>
        <p class="text-sm opacity-90 mt-1 max-w-xl">${overallRisk.msg}</p>
      </div>
      <div class="text-right">
        <p class="text-4xl font-extrabold font-display">${overallScore}</p>
        <p class="text-xs opacity-80">composite risk score</p>
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-5 gap-3">
      ${kpi('fa-user-injured', 'Active Cases (14d)', cases14.length, 'text-red-600 bg-red-50')}
      ${kpi('fa-droplet-slash', 'Unsafe Water Sources', unsafeWater.length, 'text-amber-600 bg-amber-50')}
      ${kpi('fa-triangle-exclamation', 'Active Alerts', activeAlerts.length, 'text-orange-600 bg-orange-50')}
      ${kpi('fa-house-flag', 'Villages Monitored', villagesMonitored, 'text-teal-600 bg-teal-50')}
      ${kpi('fa-people-group', 'Population Covered', population.toLocaleString('en-IN'), 'text-blue-600 bg-blue-50')}
    </div>

    <div class="grid lg:grid-cols-3 gap-5">
      <div class="card p-5 lg:col-span-2">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-bold text-slate-800">District Risk Snapshot</h3>
          ${u.role === 'admin' ? `<button onclick="showSection('map')" class="text-xs text-teal-600 font-semibold hover:underline">View Map <i class="fas fa-arrow-right ml-0.5"></i></button>` : ''}
        </div>
        <div class="grid sm:grid-cols-2 gap-2.5" id="districtSnapshot"></div>
      </div>
      <div class="card p-5">
        <h3 class="font-bold text-slate-800 mb-3">14-Day Case Trend</h3>
        <div class="h-52"><canvas id="chartTrendMini"></canvas></div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-5">
      <div class="card p-5">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-bold text-slate-800">Recent Cases</h3>
          ${can('patients', 'add') ? `<button onclick="showSection('patients')" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Report Case</button>` : ''}
        </div>
        <div class="space-y-2 max-h-72 overflow-y-auto" id="recentCasesList"></div>
      </div>
      <div class="card p-5">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-bold text-slate-800">Recent Water Logs</h3>
          ${can('water', 'add') ? `<button onclick="showSection('water')" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Log Sample</button>` : ''}
        </div>
        <div class="space-y-2 max-h-72 overflow-y-auto" id="recentWaterList"></div>
      </div>
    </div>
  </div>`;

  $('districtSnapshot').innerHTML = DISTRICTS.map(d => {
    const s = districtStatus(d.name);
    return `<div class="rounded-xl p-3 flex items-center justify-between" style="background:${s.color}14;border:1px solid ${s.color}33">
      <div>
        <p class="font-semibold text-sm text-slate-800">${d.name}</p>
        <p class="text-[11px] text-slate-500">${s.casesRecent} cases · ${s.unsafeWater} unsafe sources</p>
      </div>
      <span class="badge text-white" style="background:${s.color}">${s.label}</span>
    </div>`;
  }).join('');

  const cases = scopedPatients.slice(0, 8);
  $('recentCasesList').innerHTML = cases.length ? cases.map(c => `
    <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
      <div class="min-w-0">
        <p class="font-medium text-slate-800 text-sm truncate">${esc(c.name)} <span class="text-slate-400 font-normal">(${c.age}${isChildAge(c.age) ? ', child' : ''})</span></p>
        <p class="text-xs text-slate-500 truncate">${esc(c.disease)} · ${esc(c.village)}</p>
      </div>
      <span class="text-[11px] text-slate-400 shrink-0 ml-2">${fmtDate(c.onset || c.reportedAtDate)}</span>
    </div>`).join('') : emptyMsg('No cases reported yet');

  const water = STATE.water.slice(0, 8);
  $('recentWaterList').innerHTML = water.length ? water.map(w => `
    <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
      <div class="min-w-0">
        <p class="font-medium text-slate-800 text-sm truncate">${esc(w.village)}</p>
        <p class="text-xs text-slate-500 truncate">pH ${w.ph ?? '—'} · Turb ${w.turbidity ?? '—'} NTU · TDS ${w.tds ?? '—'}</p>
      </div>
      <span class="badge ${statusBadgeClass(w.status)} shrink-0 ml-2">${w.status}</span>
    </div>`).join('') : emptyMsg('No water quality logs yet');

  drawMiniTrendChart();
}

function kpi(icon, label, value, cls) {
  return `<div class="card p-4">
    <div class="w-9 h-9 rounded-lg flex items-center justify-center ${cls} mb-2"><i class="fas ${icon} text-sm"></i></div>
    <p class="text-2xl font-extrabold font-display text-slate-800">${value}</p>
    <p class="text-[11px] text-slate-500 leading-tight">${label}</p>
  </div>`;
}
function emptyMsg(msg) { return `<p class="text-sm text-slate-400 text-center py-8"><i class="fas fa-inbox mb-1 block text-lg"></i>${msg}</p>`; }
function statusBadgeClass(s) { return s === 'Safe' ? 'bg-green-100 text-green-700' : s === 'Marginal' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'; }
function severityBadgeClass(s) { return s === 'critical' ? 'bg-red-600 text-white' : s === 'high' ? 'bg-orange-100 text-orange-700' : s === 'moderate' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'; }

function scopeByUser(list) {
  const u = STATE.user;
  if (u.role === 'admin') return list;
  if (u.role === 'asha') return list.filter(x => !u.village || x.village === u.village || x.reportedBy === u.id);
  return list;
}

function drawMiniTrendChart() {
  const days = [], counts = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push(key.slice(5));
    counts.push(STATE.patients.filter(c => (c.onset || c.reportedAtDate) === key).length);
  }
  destroyChart('trendMini');
  const el = $('chartTrendMini'); if (!el) return;
  STATE.charts.trendMini = new Chart(el, {
    type: 'line',
    data: { labels: days, datasets: [{ data: counts, borderColor: '#0f9d8f', backgroundColor: 'rgba(15,157,143,.12)', fill: true, tension: 0.35, pointRadius: 2 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1, precision: 0 } }, x: { ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 7 } } } }
  });
}
function destroyChart(key) { if (STATE.charts[key]) { STATE.charts[key].destroy(); delete STATE.charts[key]; } }

/* ============================== MAP & DISTRICTS ============================== */

function renderMapSection() {
  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-5">
    <div class="card p-4">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <h3 class="font-bold text-slate-800"><i class="fas fa-map-location-dot text-teal-600 mr-1.5"></i>Northeast India — District Risk Map</h3>
        <div class="flex items-center gap-3 text-xs">
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span> Healthy</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> Moderate</span>
          <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span> High Risk</span>
        </div>
      </div>
      <div id="mapEl" class="w-full h-[420px] rounded-xl overflow-hidden border border-slate-200"></div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" id="districtCards"></div>

    <div class="card p-5">
      <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
        <h3 class="font-bold text-slate-800">Villages &amp; Water Resources</h3>
        <div class="flex gap-2">
          ${can('villages', 'add') ? `<button onclick="openVillageModal()" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Add Village</button>` : ''}
          <button onclick="downloadCSV('villages.csv', STATE.villages, villageColumns())" class="btn btn-outline btn-sm"><i class="fas fa-file-csv"></i> CSV</button>
          <button onclick="exportPDF('Villages & Water Resources', villageColumns(), STATE.villages, 'villages.pdf')" class="btn btn-outline btn-sm"><i class="fas fa-file-pdf"></i> PDF</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead><tr class="border-b border-slate-100">
            <th class="th">Village</th><th class="th">District</th><th class="th">Population</th><th class="th">Water Sources</th><th class="th">Actions</th>
          </tr></thead>
          <tbody id="villagesTableBody"></tbody>
        </table>
      </div>
    </div>
  </div>`;

  $('districtCards').innerHTML = DISTRICTS.map(d => {
    const s = districtStatus(d.name);
    return `<div class="card p-4 border-t-4" style="border-top-color:${s.color}">
      <div class="flex items-center justify-between mb-1">
        <p class="font-bold text-slate-800 text-sm">${d.name}</p>
        <span class="badge text-white" style="background:${s.color}">${s.label}</span>
      </div>
      <div class="grid grid-cols-2 gap-1 text-[11px] text-slate-500 mt-2">
        <p><i class="fas fa-user-injured w-4"></i> ${s.casesRecent} cases (14d)</p>
        <p><i class="fas fa-droplet-slash w-4"></i> ${s.unsafeWater} unsafe</p>
        <p><i class="fas fa-triangle-exclamation w-4"></i> ${s.activeAlerts} alerts</p>
        <p><i class="fas fa-house w-4"></i> ${s.villages} villages</p>
      </div>
    </div>`;
  }).join('');

  renderVillagesTable();
  setTimeout(initOrUpdateMap, 30);
}

function villageColumns() {
  return [
    { label: 'Village', key: 'name' }, { label: 'District', key: 'district' },
    { label: 'Population', key: 'population' },
    { label: 'Water Sources', get: v => (v.waterSources || []).join('; ') }
  ];
}

function renderVillagesTable() {
  const tbody = $('villagesTableBody'); if (!tbody) return;
  tbody.innerHTML = STATE.villages.length ? STATE.villages.map(v => `
    <tr>
      <td class="td font-medium">${esc(v.name)}</td>
      <td class="td">${esc(v.district)}</td>
      <td class="td">${Number(v.population || 0).toLocaleString('en-IN')}</td>
      <td class="td">${(v.waterSources || []).map(s => `<span class="badge bg-slate-100 text-slate-600 mr-1 mb-1 inline-block">${esc(s)}</span>`).join('') || '—'}</td>
      <td class="td whitespace-nowrap">
        ${can('villages', 'edit') ? `<button onclick="openVillageModal('${v.id}')" class="text-slate-500 hover:text-teal-600 mr-2"><i class="fas fa-pen"></i></button>` : ''}
        ${can('villages', 'delete') ? `<button onclick="deleteDoc('villages','${v.id}','village')" class="text-slate-500 hover:text-red-600"><i class="fas fa-trash"></i></button>` : ''}
      </td>
    </tr>`).join('') : `<tr><td colspan="5" class="td text-center text-slate-400 py-6">No villages added yet</td></tr>`;
}

function initOrUpdateMap() {
  const el = $('mapEl'); if (!el || typeof L === 'undefined') return;
  if (!STATE.map) {
    STATE.map = L.map('mapEl', { scrollWheelZoom: false }).setView([25.8, 92.5], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors', maxZoom: 12 }).addTo(STATE.map);
  } else {
    STATE.map.invalidateSize();
  }
  STATE.mapMarkers.forEach(m => STATE.map.removeLayer(m));
  STATE.mapMarkers = [];
  DISTRICTS.forEach(d => {
    const s = districtStatus(d.name);
    const radius = 14 + Math.min(s.casesRecent, 20) * 1.6;
    const marker = L.circleMarker([d.lat, d.lng], {
      radius, color: s.color, weight: 2, fillColor: s.color, fillOpacity: 0.45
    }).addTo(STATE.map);
    marker.bindPopup(`
      <div style="font-family:Inter,sans-serif;min-width:180px">
        <b>${d.name}</b> <span style="background:${s.color};color:#fff;border-radius:999px;padding:1px 8px;font-size:10px;margin-left:4px">${s.label}</span>
        <div style="font-size:12px;color:#475569;margin-top:6px;line-height:1.6">
          Cases (14d): <b>${s.casesRecent}</b><br>
          Unsafe water sources: <b>${s.unsafeWater}</b><br>
          Active alerts: <b>${s.activeAlerts}</b><br>
          Villages monitored: <b>${s.villages}</b><br>
          Population: <b>${s.population.toLocaleString('en-IN')}</b>
        </div>
      </div>`);
    STATE.mapMarkers.push(marker);
  });
}

async function deleteDoc(col, id, label) {
  if (!confirm(`Delete this ${label}? This cannot be undone.`)) return;
  setLoading(true);
  try { await COL[col].doc(id).delete(); toast((label.charAt(0).toUpperCase() + label.slice(1)) + ' deleted'); }
  catch (e) { toast('Delete failed: ' + e.message, true); }
  setLoading(false);
}

function openVillageModal(id) {
  const v = id ? STATE.villages.find(x => x.id === id) : null;
  STATE.editing.village = id || null;
  openModal(v ? 'Edit Village' : 'Add Village', `
    <form onsubmit="return saveVillage(event)" class="space-y-3">
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Village Name</label>
        <input id="vName" required class="input" value="${esc(v?.name || '')}"></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">District</label>
        <select id="vDistrict" class="input">${DISTRICTS.map(d => `<option ${v?.district === d.name ? 'selected' : ''}>${d.name}</option>`).join('')}</select></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Population</label>
        <input id="vPopulation" type="number" min="0" class="input" value="${v?.population ?? ''}"></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Water Sources (comma separated)</label>
        <input id="vWaterSources" class="input" placeholder="e.g. Hand Pump, Pond, River" value="${esc((v?.waterSources || []).join(', '))}"></div>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline">Cancel</button>
        <button type="submit" class="btn btn-primary">Save Village</button>
      </div>
    </form>`);
}
async function saveVillage(e) {
  e.preventDefault();
  const payload = {
    name: $('vName').value.trim(),
    district: $('vDistrict').value,
    population: Number($('vPopulation').value) || 0,
    waterSources: $('vWaterSources').value.split(',').map(s => s.trim()).filter(Boolean)
  };
  setLoading(true);
  try {
    if (STATE.editing.village) await COL.villages.doc(STATE.editing.village).update(payload);
    else await COL.villages.add(payload);
    toast('Village saved'); closeModal();
  } catch (err) { toast('Save failed: ' + err.message, true); }
  setLoading(false);
  return false;
}

/* ================================= PATIENTS =================================== */
// (see above)
/* placeholder to keep section markers readable */

function renderPatients() {
  const rows = scopeByUser(STATE.patients);
  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-4">
    <div class="card p-4">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div class="flex flex-wrap gap-2" id="patientFilters"></div>
        <div class="flex gap-2">
          ${can('patients', 'add') ? `<button onclick="openPatientModal()" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Report Case</button>` : ''}
          <button onclick="downloadCSV('patients.csv', patientFilteredRows(), patientColumns())" class="btn btn-outline btn-sm"><i class="fas fa-file-csv"></i> CSV</button>
          <button onclick="exportPDF('Patient Case Records', patientColumns(), patientFilteredRows(), 'patients.pdf')" class="btn btn-outline btn-sm"><i class="fas fa-file-pdf"></i> PDF</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead><tr class="border-b border-slate-100">
            <th class="th">Date</th><th class="th">Name</th><th class="th">Age/Gender</th><th class="th">Disease</th><th class="th">Village</th><th class="th">Severity</th><th class="th">Status</th><th class="th">Treatment</th><th class="th">Actions</th>
          </tr></thead>
          <tbody id="patientsTableBody"></tbody>
        </table>
      </div>
    </div>
  </div>`;

  STATE.filters = STATE.filters || {};
  const diseaseOpts = ['All', ...DISEASES];
  $('patientFilters').innerHTML = diseaseOpts.map(d => `<span class="chip ${((STATE.filters.disease||'All')===d)?'on':''}" onclick="setPatientFilter('${d}')">${d}</span>`).join('');
  renderPatientsTable(rows);
}

function patientFilteredRows() {
  const f = (STATE.filters || {}).disease || 'All';
  const rows = scopeByUser(STATE.patients);
  return f === 'All' ? rows : rows.filter(p => p.disease === f);
}
function setPatientFilter(d) { STATE.filters = STATE.filters || {}; STATE.filters.disease = d; renderPatients(); }

function patientColumns() {
  return [
    { label: 'Date', get: p => fmtDate(p.onset || p.reportedAtDate) },
    { label: 'Name', key: 'name' }, { label: 'Age', key: 'age' }, { label: 'Gender', key: 'gender' },
    { label: 'Disease', key: 'disease' }, { label: 'Village', key: 'village' }, { label: 'District', key: 'district' },
    { label: 'Severity', key: 'severity' }, { label: 'Status', key: 'status' },
    { label: 'Symptoms', get: p => (p.symptoms || []).join('; ') }, { label: 'Reported By', key: 'reportedByName' },
    { label: 'Treatment Given', key: 'treatmentGiven' }, { label: 'Medicine Given', key: 'medicineGiven' }, { label: 'Treated By', key: 'treatedByName' }
  ];
}

function renderPatientsTable(rows) {
  const tbody = $('patientsTableBody'); if (!tbody) return;
  tbody.innerHTML = rows.length ? rows.map(p => `
    <tr>
      <td class="td">${fmtDate(p.onset || p.reportedAtDate)}</td>
      <td class="td font-medium">${esc(p.name)}</td>
      <td class="td">${p.age}y · ${esc(p.gender)}</td>
      <td class="td">${esc(p.disease)}</td>
      <td class="td">${esc(p.village)}</td>
      <td class="td"><span class="badge ${p.severity === 'Severe' ? 'bg-red-100 text-red-700' : p.severity === 'Moderate' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'}">${p.severity || '—'}</span></td>
      <td class="td"><span class="badge ${p.status === 'Recovered' ? 'bg-green-100 text-green-700' : p.status === 'Referred' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}">${p.status || 'Active'}</span></td>
      <td class="td">${p.treatedByName ? `<span class="text-[11px] text-slate-600"><i class="fas fa-kit-medical text-teal-600 mr-1"></i>by ${esc(p.treatedByName)}</span>` : `<span class="text-[11px] text-slate-300">Pending</span>`}</td>
      <td class="td whitespace-nowrap">
        ${can('patients', 'edit') ? `<button onclick="openPatientModal('${p.id}')" class="text-slate-500 hover:text-teal-600 mr-2"><i class="fas fa-pen"></i></button>` : ''}
        ${can('patients', 'delete') ? `<button onclick="deleteDoc('patients','${p.id}','case')" class="text-slate-500 hover:text-red-600"><i class="fas fa-trash"></i></button>` : ''}
      </td>
    </tr>`).join('') : `<tr><td colspan="9" class="td text-center text-slate-400 py-8">No cases reported yet</td></tr>`;
}

function openPatientModal(id) {
  const p = id ? STATE.patients.find(x => x.id === id) : null;
  STATE.editing.patient = id || null;
  const villageOpts = STATE.villages.length ? STATE.villages.map(v => `<option data-d="${esc(v.district)}" ${p?.village === v.name ? 'selected' : ''}>${esc(v.name)}</option>`).join('') : DISTRICTS.map(d=>`<option>${d.name} HQ</option>`).join('');
  openModal(p ? 'Edit Patient Case' : 'Report New Case', `
    <form onsubmit="return savePatient(event)" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Patient Name</label><input id="pName" required class="input" value="${esc(p?.name || '')}"></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Age</label><input id="pAge" type="number" min="0" max="120" required class="input" value="${p?.age ?? ''}"></div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Gender</label>
          <select id="pGender" class="input"><option ${p?.gender==='Male'?'selected':''}>Male</option><option ${p?.gender==='Female'?'selected':''}>Female</option><option ${p?.gender==='Other'?'selected':''}>Other</option></select></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Onset Date</label><input id="pOnset" type="date" class="input" value="${p?.onset || todayStr()}"></div>
      </div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Suspected Disease</label>
        <select id="pDisease" class="input">${DISEASES.map(d => `<option ${p?.disease===d?'selected':''}>${d}</option>`).join('')}</select></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Village</label>
        <select id="pVillage" class="input" onchange="document.getElementById('pDistrict').value=this.selectedOptions[0].dataset.d||''">${villageOpts}</select></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">District</label>
        <select id="pDistrict" class="input">${DISTRICTS.map(d => `<option ${p?.district===d.name?'selected':''}>${d.name}</option>`).join('')}</select></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Symptoms</label>
        <div class="flex flex-wrap gap-1.5" id="pSymptoms">${SYMPTOMS_LIST.map(s => `<span class="chip ${(p?.symptoms||[]).includes(s)?'on':''}" onclick="this.classList.toggle('on')" data-symptom="${s}">${s}</span>`).join('')}</div></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Severity</label>
          <select id="pSeverity" class="input"><option ${p?.severity==='Mild'?'selected':''}>Mild</option><option ${!p||p?.severity==='Moderate'?'selected':''}>Moderate</option><option ${p?.severity==='Severe'?'selected':''}>Severe</option></select></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Status</label>
          <select id="pStatus" class="input"><option ${!p||p?.status==='Active'?'selected':''}>Active</option><option ${p?.status==='Recovered'?'selected':''}>Recovered</option><option ${p?.status==='Referred'?'selected':''}>Referred</option><option ${p?.status==='Deceased'?'selected':''}>Deceased</option></select></div>
      </div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Notes</label><textarea id="pNotes" rows="2" class="input">${esc(p?.notes || '')}</textarea></div>
      <div class="border-t border-slate-100 pt-3">
        <p class="text-xs font-semibold text-slate-700 mb-1.5"><i class="fas fa-kit-medical text-teal-600 mr-1"></i>Treatment Given</p>
        <textarea id="pTreatment" rows="2" class="input mb-2" placeholder="e.g. ORS administered, oral rehydration counselling given">${esc(p?.treatmentGiven || '')}</textarea>
        <input id="pMedicine" class="input" placeholder="Medicines given, e.g. ORS sachets, Zinc tablets" value="${esc(p?.medicineGiven || '')}">
        ${p?.treatedByName ? `<p class="text-[11px] text-slate-400 mt-1.5"><i class="fas fa-user-check mr-1"></i>Given by <b>${esc(p.treatedByName)}</b> on ${fmtDate(p.treatmentDate)}</p>` : ''}
      </div>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline">Cancel</button>
        <button type="submit" class="btn btn-primary">Save Case</button>
      </div>
    </form>`);
}
async function savePatient(e) {
  e.preventDefault();
  const symptoms = Array.from(document.querySelectorAll('#pSymptoms .chip.on')).map(el => el.dataset.symptom);
  const treatmentGiven = $('pTreatment').value.trim();
  const medicineGiven = $('pMedicine').value.trim();
  const existing = STATE.editing.patient ? STATE.patients.find(x => x.id === STATE.editing.patient) : null;
  const payload = {
    name: $('pName').value.trim(), age: Number($('pAge').value), gender: $('pGender').value,
    onset: $('pOnset').value, disease: $('pDisease').value, village: $('pVillage').value, district: $('pDistrict').value,
    symptoms, severity: $('pSeverity').value, status: $('pStatus').value, notes: $('pNotes').value.trim(),
    treatmentGiven, medicineGiven
  };
  // Record who gave treatment the first time it's entered (or if the wording changes)
  if (treatmentGiven && (!existing || existing.treatmentGiven !== treatmentGiven)) {
    payload.treatedBy = STATE.user.id;
    payload.treatedByName = STATE.user.name;
    payload.treatmentDate = todayStr();
  }
  setLoading(true);
  try {
    if (STATE.editing.patient) {
      await COL.patients.doc(STATE.editing.patient).update(payload);
    } else {
      payload.reportedBy = STATE.user.id;
      payload.reportedByName = STATE.user.name;
      payload.reportedAtDate = todayStr();
      payload.reportedAt = new Date().toISOString();
      await COL.patients.add(payload);
    }
    toast('Case saved'); closeModal();
  } catch (err) { toast('Save failed: ' + err.message, true); }
  setLoading(false);
  return false;
}

/* =============================== WATER QUALITY ================================= */

function renderWater() {
  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-4">
    <div class="grid sm:grid-cols-3 gap-3">
      ${Object.entries(WATER_STANDARDS).map(([k, s]) => `
        <div class="card p-4">
          <p class="text-xs text-slate-500 uppercase tracking-wide font-semibold">${s.label}</p>
          <p class="text-lg font-bold text-slate-800 mt-1">${s.min} \u2013 ${s.max} <span class="text-xs font-normal text-slate-400">${s.unit}</span></p>
          <p class="text-[11px] text-slate-400 mt-0.5">Acceptable range (IS 10500 / WHO general guidance)</p>
        </div>`).join('')}
    </div>
    <div class="card p-4">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 class="font-bold text-slate-800">Water Sample Logs</h3>
        <div class="flex gap-2">
          ${can('water', 'add') ? `<button onclick="openWaterModal()" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Log Sample</button>` : ''}
          <button onclick="downloadCSV('water_samples.csv', STATE.water, waterColumns())" class="btn btn-outline btn-sm"><i class="fas fa-file-csv"></i> CSV</button>
          <button onclick="exportPDF('Water Quality Samples', waterColumns(), STATE.water, 'water_samples.pdf')" class="btn btn-outline btn-sm"><i class="fas fa-file-pdf"></i> PDF</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead><tr class="border-b border-slate-100">
            <th class="th">Date</th><th class="th">Village</th><th class="th">Source</th><th class="th">pH</th><th class="th">Turbidity</th><th class="th">TDS</th><th class="th">Status</th><th class="th">Lab Report</th><th class="th">Actions</th>
          </tr></thead>
          <tbody id="waterTableBody"></tbody>
        </table>
      </div>
    </div>
  </div>`;
  const tbody = $('waterTableBody');
  tbody.innerHTML = STATE.water.length ? STATE.water.map(w => `
    <tr>
      <td class="td">${fmtDate(w.date)}</td>
      <td class="td font-medium">${esc(w.village)}</td>
      <td class="td">${esc(w.source || '\u2014')}</td>
      <td class="td">${w.ph ?? '\u2014'}</td>
      <td class="td">${w.turbidity ?? '\u2014'} NTU</td>
      <td class="td">${w.tds ?? '\u2014'} mg/L</td>
      <td class="td"><span class="badge ${statusBadgeClass(w.status)}">${w.status}</span></td>
      <td class="td">${labStatusCell(w)}</td>
      <td class="td whitespace-nowrap">
        ${can('water', 'edit') ? `<button onclick="openWaterModal('${w.id}')" class="text-slate-500 hover:text-teal-600 mr-2" title="Edit"><i class="fas fa-pen"></i></button>` : ''}
        ${can('water', 'delete') ? `<button onclick="deleteDoc('water','${w.id}','water sample')" class="text-slate-500 hover:text-red-600" title="Delete"><i class="fas fa-trash"></i></button>` : ''}
      </td>
    </tr>`).join('') : `<tr><td colspan="9" class="td text-center text-slate-400 py-8">No water quality logs yet</td></tr>`;
}

function labStatusCell(w) {
  let label = 'Not sent', cls = 'bg-slate-100 text-slate-500';
  if (w.labReportUrl) { label = 'Report received'; cls = 'bg-green-100 text-green-700'; }
  else if (w.sentToLab) { label = 'Sent to lab'; cls = 'bg-amber-100 text-amber-700'; }
  const viewBtn = w.labReportUrl ? `<button onclick="viewLabReport('${esc(w.labReportUrl)}','${esc(w.labReportType || '')}','${esc((w.labReportName || 'report').replace(/'/g, "\\'"))}')" class="text-teal-600 hover:text-teal-800 ml-1.5" title="View lab report"><i class="fas fa-eye"></i></button>` : '';
  return `<span class="badge ${cls}">${label}</span>${viewBtn}`;
}

function viewLabReport(url, type, name) {
  if (type && type.includes('pdf')) { window.open(url, '_blank'); return; }
  openModal('Lab Report \u2014 ' + name, `
    <div class="text-center">
      <img src="${url}" alt="Lab report" class="max-w-full rounded-lg border border-slate-200 mx-auto">
      <a href="${url}" target="_blank" class="btn btn-outline btn-sm mt-3 inline-flex"><i class="fas fa-up-right-from-square"></i> Open full size</a>
    </div>`);
}

function waterColumns() {
  return [
    { label: 'Date', get: w => fmtDate(w.date) }, { label: 'Village', key: 'village' }, { label: 'District', key: 'district' },
    { label: 'Source', key: 'source' }, { label: 'pH', key: 'ph' }, { label: 'Turbidity (NTU)', key: 'turbidity' },
    { label: 'TDS (mg/L)', key: 'tds' }, { label: 'Status', key: 'status' }, { label: 'Collected By', key: 'collectedByName' },
    { label: 'Sent to Lab', get: w => w.sentToLab ? 'Yes' : 'No' }, { label: 'Lab Sent Date', key: 'labSentDate' }, { label: 'Lab Name', key: 'labName' },
    { label: 'Lab Report Received', get: w => w.labReportUrl ? 'Yes' : 'No' }, { label: 'Lab Report Date', key: 'labReportReceivedDate' }
  ];
}

function openWaterModal(id) {
  const w = id ? STATE.water.find(x => x.id === id) : null;
  STATE.editing.water = id || null;
  const villageOpts = STATE.villages.length ? STATE.villages.map(v => `<option data-d="${esc(v.district)}" ${w?.village === v.name ? 'selected' : ''}>${esc(v.name)}</option>`).join('') : DISTRICTS.map(d=>`<option>${d.name} HQ</option>`).join('');
  openModal(w ? 'Edit Water Sample' : 'Log Water Sample', `
    <form onsubmit="return saveWater(event, ${id ? `'${id}'` : 'null'})" class="space-y-3">
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Village</label>
        <select id="wVillage" class="input" onchange="document.getElementById('wDistrict').value=this.selectedOptions[0].dataset.d||''">${villageOpts}</select></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">District</label>
        <select id="wDistrict" class="input">${DISTRICTS.map(d => `<option ${w?.district===d.name?'selected':''}>${d.name}</option>`).join('')}</select></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Water Source</label>
        <select id="wSource" class="input">${WATER_SOURCES.map(s => `<option ${w?.source===s?'selected':''}>${s}</option>`).join('')}</select></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Collection Date</label><input id="wDate" type="date" class="input" value="${w?.date || todayStr()}"></div>
      <div class="grid grid-cols-3 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">pH</label><input id="wPh" type="number" step="0.1" class="input" value="${w?.ph ?? ''}"></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Turbidity (NTU)</label><input id="wTurb" type="number" step="0.1" class="input" value="${w?.turbidity ?? ''}"></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">TDS (mg/L)</label><input id="wTds" type="number" step="1" class="input" value="${w?.tds ?? ''}"></div>
      </div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Notes</label><textarea id="wNotes" rows="2" class="input">${esc(w?.notes || '')}</textarea></div>

      <div class="border-t border-slate-100 pt-3">
        <p class="text-xs font-semibold text-slate-700 mb-1.5"><i class="fas fa-flask-vial text-teal-600 mr-1"></i>Lab Submission</p>
        <label class="flex items-center gap-2 text-xs text-slate-600 mb-2"><input type="checkbox" id="wSentToLab" ${w?.sentToLab ? 'checked' : ''} onchange="document.getElementById('wLabFields').classList.toggle('hidden', !this.checked)"> Sample sent to lab for testing</label>
        <div id="wLabFields" class="grid grid-cols-2 gap-3 ${w?.sentToLab ? '' : 'hidden'}">
          <div><label class="block text-xs font-medium text-slate-600 mb-1">Sent to Lab On</label><input id="wLabSentDate" type="date" class="input" value="${w?.labSentDate || ''}"></div>
          <div><label class="block text-xs font-medium text-slate-600 mb-1">Lab Name</label><input id="wLabName" class="input" placeholder="e.g. District PHE Lab" value="${esc(w?.labName || '')}"></div>
        </div>
      </div>

      <div class="border-t border-slate-100 pt-3">
        <p class="text-xs font-semibold text-slate-700 mb-1.5"><i class="fas fa-file-medical text-teal-600 mr-1"></i>Lab Report</p>
        ${w?.labReportUrl ? `<div class="flex items-center gap-2 mb-2 bg-slate-50 rounded-lg p-2">
            <button type="button" onclick="viewLabReport('${esc(w.labReportUrl)}','${esc(w.labReportType||'')}','${esc((w.labReportName||'report').replace(/'/g,"\\'"))}')" class="text-teal-600 hover:text-teal-800"><i class="fas fa-eye"></i></button>
            <span class="text-xs text-slate-600 truncate flex-1">${esc(w.labReportName || 'Uploaded file')}</span>
            <button type="button" onclick="this.closest('div').remove(); document.getElementById('wClearLabReport').value='1';" class="text-slate-400 hover:text-red-600" title="Remove"><i class="fas fa-xmark"></i></button>
          </div><input type="hidden" id="wClearLabReport" value="0">` : ''}
        <input id="wLabFile" type="file" accept="image/*,.pdf" class="input">
        <div class="grid grid-cols-2 gap-3 mt-2">
          <div><label class="block text-xs font-medium text-slate-600 mb-1">Report Received On</label><input id="wLabReportDate" type="date" class="input" value="${w?.labReportReceivedDate || ''}"></div>
        </div>
        <p class="text-[11px] text-slate-400 mt-1">Upload a photo or PDF of the lab report. It will show as a small viewable icon in the Water Quality table.</p>
        <div id="wUploadProgress" class="hidden text-[11px] text-teal-600 mt-1"><i class="fas fa-circle-notch fa-spin mr-1"></i>Uploading report\u2026</div>
      </div>

      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline">Cancel</button>
        <button type="submit" id="wSaveBtn" class="btn btn-primary">Save Sample</button>
      </div>
    </form>`);
}
async function saveWater(e, editId) {
  e.preventDefault();
  const ph = $('wPh').value, turb = $('wTurb').value, tds = $('wTds').value;
  const sentToLab = $('wSentToLab').checked;
  const payload = {
    village: $('wVillage').value, district: $('wDistrict').value, source: $('wSource').value, date: $('wDate').value,
    ph: ph === '' ? null : Number(ph), turbidity: turb === '' ? null : Number(turb), tds: tds === '' ? null : Number(tds),
    notes: $('wNotes').value.trim(), status: waterStatus(ph, turb, tds),
    sentToLab, labSentDate: sentToLab ? ($('wLabSentDate').value || null) : null, labName: sentToLab ? $('wLabName').value.trim() : ''
  };
  const labReportDate = $('wLabReportDate').value;
  if (labReportDate) payload.labReportReceivedDate = labReportDate;
  const clearReport = document.getElementById('wClearLabReport');
  if (clearReport && clearReport.value === '1') {
    payload.labReportUrl = null; payload.labReportName = null; payload.labReportType = null;
  }
  const file = $('wLabFile').files[0];
  setLoading(true);
  try {
    let docId = editId;
    if (docId) {
      await COL.water.doc(docId).update(payload);
    } else {
      payload.collectedBy = STATE.user.id; payload.collectedByName = STATE.user.name;
      const ref = await COL.water.add(payload);
      docId = ref.id;
    }
    if (file) {
      $('wUploadProgress').classList.remove('hidden');
      const path = `labReports/${docId}/${Date.now()}_${file.name}`;
      const snap = await storage.ref(path).put(file);
      const url = await snap.ref.getDownloadURL();
      await COL.water.doc(docId).update({
        labReportUrl: url, labReportName: file.name, labReportType: file.type,
        labReportUploadedBy: STATE.user.name, labReportUploadedAt: new Date().toISOString()
      });
    }
    toast('Water sample saved'); closeModal();
  } catch (err) { toast('Save failed: ' + err.message, true); }
  setLoading(false);
  return false;
}

/* ================================== ALERTS ====================================== */

function renderAlerts() {
  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-4">
    <div class="card p-4">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 class="font-bold text-slate-800">Alerts <span class="text-slate-400 font-normal text-sm">(${STATE.alerts.filter(a=>a.active).length} active)</span></h3>
        <div class="flex gap-2">
          ${STATE.user.role === 'admin' ? `<button onclick="openAlertModal()" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> New Alert</button>` : ''}
          <button onclick="downloadCSV('alerts.csv', STATE.alerts, alertColumns())" class="btn btn-outline btn-sm"><i class="fas fa-file-csv"></i> CSV</button>
        </div>
      </div>
      <div class="space-y-2.5" id="alertsList"></div>
    </div>
  </div>`;
  const list = $('alertsList');
  list.innerHTML = STATE.alerts.length ? STATE.alerts.map(a => `
    <div class="rounded-xl p-4 border ${a.active ? 'border-amber-200 bg-amber-50/50' : 'border-slate-100 bg-slate-50/50 opacity-70'}">
      <div class="flex items-start justify-between gap-3 flex-wrap">
        <div class="flex items-start gap-3 min-w-0">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${severityBadgeClass(a.severity)}"><i class="fas fa-triangle-exclamation text-sm"></i></div>
          <div class="min-w-0">
            <p class="font-semibold text-slate-800 text-sm">${esc(a.title)}</p>
            <p class="text-xs text-slate-600 mt-0.5">${esc(a.message)}</p>
            <p class="text-[11px] text-slate-400 mt-1.5"><i class="far fa-clock mr-1"></i>${fmtDateTime(a.createdAt)} \u00b7 ${esc(a.village || '')}${a.village ? ', ' : ''}${esc(a.district || '')} ${a.auto ? '\u00b7 <i class="fas fa-robot"></i> Auto-detected' : ''}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="badge ${severityBadgeClass(a.severity)}">${a.severity}</span>
          ${STATE.user.role === 'admin' ? `<button onclick="toggleAlert('${a.id}', ${!a.active})" class="btn btn-outline btn-sm">${a.active ? 'Resolve' : 'Reopen'}</button>` : ''}
        </div>
      </div>
    </div>`).join('') : emptyMsg('No alerts \u2014 all clear');
}
function alertColumns() {
  return [{ label: 'Date', get: a => fmtDateTime(a.createdAt) }, { label: 'Title', key: 'title' }, { label: 'Severity', key: 'severity' }, { label: 'Village', key: 'village' }, { label: 'District', key: 'district' }, { label: 'Status', get: a => a.active ? 'Active' : 'Resolved' }, { label: 'Message', key: 'message' }];
}
async function toggleAlert(id, active) {
  setLoading(true);
  try { await COL.alerts.doc(id).update({ active, resolvedAt: active ? null : new Date().toISOString() }); toast(active ? 'Alert reopened' : 'Alert marked resolved'); }
  catch (e) { toast('Update failed', true); }
  setLoading(false);
}
function openAlertModal() {
  openModal('Create Manual Alert', `
    <form onsubmit="return saveAlert(event)" class="space-y-3">
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Title</label><input id="aTitle" required class="input" placeholder="e.g. Suspected contamination near river intake"></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Message</label><textarea id="aMessage" required rows="3" class="input"></textarea></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Severity</label>
          <select id="aSeverity" class="input"><option>low</option><option selected>moderate</option><option>high</option><option>critical</option></select></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">District</label>
          <select id="aDistrict" class="input">${DISTRICTS.map(d => `<option>${d.name}</option>`).join('')}</select></div>
      </div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Village (optional)</label><input id="aVillage" class="input"></div>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline">Cancel</button>
        <button type="submit" class="btn btn-primary">Publish Alert</button>
      </div>
    </form>`);
}
async function saveAlert(e) {
  e.preventDefault();
  setLoading(true);
  try {
    await COL.alerts.add({
      title: $('aTitle').value.trim(), message: $('aMessage').value.trim(), severity: $('aSeverity').value,
      district: $('aDistrict').value, village: $('aVillage').value.trim(), active: true, auto: false, type: 'manual',
      createdAt: new Date().toISOString(), createdBy: STATE.user.name
    });
    toast('Alert published'); closeModal();
  } catch (err) { toast('Failed: ' + err.message, true); }
  setLoading(false);
  return false;
}

/* =================================== TASKS ======================================= */

function renderTasks() {
  const isRRT = STATE.user.role === 'rrt';
  const rows = isRRT ? STATE.tasks.filter(t => t.assignedTo === STATE.user.id) : STATE.tasks;
  const rrtUsers = STATE.users.filter(u => u.role === 'rrt' && u.active !== false);
  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-4">
    <div class="card p-4">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 class="font-bold text-slate-800">${isRRT ? 'My Assigned Tasks' : 'Rapid Response Tasks'}</h3>
        <div class="flex gap-2">
          ${STATE.user.role === 'admin' ? `<button onclick="openTaskModal()" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Assign Task</button>` : ''}
          <button onclick="downloadCSV('tasks.csv', rowsForTaskExport(), taskColumns())" class="btn btn-outline btn-sm"><i class="fas fa-file-csv"></i> CSV</button>
        </div>
      </div>
      ${STATE.user.role === 'admin' && !rrtUsers.length ? `<p class="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg p-2.5 mb-3"><i class="fas fa-circle-info mr-1"></i>No Rapid Response Team users yet \u2014 add one from the Users panel before assigning tasks.</p>` : ''}
      <div class="space-y-2.5" id="tasksList"></div>
    </div>
  </div>`;
  window.rowsForTaskExport = () => rows;
  const list = $('tasksList');
  list.innerHTML = rows.length ? rows.map(t => {
    const assignee = STATE.users.find(u => u.id === t.assignedTo);
    const statusCls = t.status === 'Completed' ? 'bg-green-100 text-green-700' : t.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600';
    return `<div class="rounded-xl p-4 border border-slate-100 bg-slate-50/40">
      <div class="flex items-start justify-between gap-3 flex-wrap">
        <div class="min-w-0">
          <p class="font-semibold text-slate-800 text-sm">${esc(t.title)} <span class="badge ${t.priority==='Urgent'?'bg-red-100 text-red-700':'bg-slate-100 text-slate-500'} ml-1">${t.priority||'Normal'}</span></p>
          <p class="text-xs text-slate-600 mt-0.5">${esc(t.description || '')}</p>
          <p class="text-[11px] text-slate-400 mt-1.5">${esc(t.type)} \u00b7 ${esc(t.village || '')}, ${esc(t.district || '')} \u00b7 Assigned to <b>${esc(assignee?.name || '\u2014')}</b> \u00b7 Due ${fmtDate(t.dueDate)}</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="badge ${statusCls}">${t.status}</span>
          ${(isRRT && t.status !== 'Completed') ? `<button onclick="openCompleteTaskModal('${t.id}')" class="btn btn-primary btn-sm">Submit Report</button>` : ''}
          ${(!isRRT && t.status !== 'Completed') ? `<button onclick="deleteDoc('tasks','${t.id}','task')" class="text-slate-400 hover:text-red-600 p-1"><i class="fas fa-trash"></i></button>` : ''}
        </div>
      </div>
    </div>`;
  }).join('') : emptyMsg(isRRT ? 'No tasks assigned to you yet' : 'No tasks created yet');
}
function taskColumns() {
  return [{ label: 'Title', key: 'title' }, { label: 'Type', key: 'type' }, { label: 'Village', key: 'village' }, { label: 'District', key: 'district' }, { label: 'Status', key: 'status' }, { label: 'Due', get: t => fmtDate(t.dueDate) }, { label: 'Priority', key: 'priority' }];
}
function openTaskModal() {
  const rrtUsers = STATE.users.filter(u => u.role === 'rrt' && u.active !== false);
  const openCases = STATE.patients.filter(p => p.status === 'Active').slice(0, 50);
  openModal('Assign Rapid Response Task', `
    <form onsubmit="return saveTask(event)" class="space-y-3">
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Title</label><input id="tTitle" required class="input" placeholder="e.g. Investigate cholera cluster"></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Type</label>
        <select id="tType" class="input"><option>Case Investigation</option><option>Water Sample Collection</option><option>Treatment &amp; Medicine</option><option>Awareness Drive</option></select></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Description</label><textarea id="tDescription" rows="2" class="input"></textarea></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Assign To</label>
        <select id="tAssignedTo" required class="input">${rrtUsers.map(u => `<option value="${u.id}">${esc(u.name)}</option>`).join('') || '<option value="">No RRT users available</option>'}</select></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">District</label><select id="tDistrict" class="input">${DISTRICTS.map(d => `<option>${d.name}</option>`).join('')}</select></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Village</label><input id="tVillage" class="input"></div>
      </div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Related Case (optional)</label>
        <select id="tRelatedCase" class="input"><option value="">\u2014 None \u2014</option>${openCases.map(c => `<option value="${c.id}">${esc(c.name)} \u2014 ${esc(c.disease)} (${esc(c.village)})</option>`).join('')}</select></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Due Date</label><input id="tDueDate" type="date" class="input" value="${todayStr()}"></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Priority</label><select id="tPriority" class="input"><option>Normal</option><option>Urgent</option></select></div>
      </div>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline">Cancel</button>
        <button type="submit" class="btn btn-primary" ${rrtUsers.length ? '' : 'disabled'}>Assign Task</button>
      </div>
    </form>`);
}
async function saveTask(e) {
  e.preventDefault();
  setLoading(true);
  try {
    await COL.tasks.add({
      title: $('tTitle').value.trim(), type: $('tType').value, description: $('tDescription').value.trim(),
      assignedTo: $('tAssignedTo').value, assignedBy: STATE.user.name, district: $('tDistrict').value, village: $('tVillage').value.trim(),
      relatedCaseId: $('tRelatedCase').value || null, dueDate: $('tDueDate').value, priority: $('tPriority').value,
      status: 'Pending', createdAt: new Date().toISOString()
    });
    toast('Task assigned'); closeModal();
  } catch (err) { toast('Failed: ' + err.message, true); }
  setLoading(false);
  return false;
}
const WATER_ACTIONS = ['No action needed', 'Chlorination administered', 'Source disinfected & cleaned', 'Source closed / marked unsafe', 'Villagers advised alternate source', 'Repair/maintenance requested', 'Referred to PHED / water department'];

function openCompleteTaskModal(id) {
  const t = STATE.tasks.find(x => x.id === id);
  if (!t) return;
  openModal('Complete Task: ' + t.title, `
    <form onsubmit="return submitTaskReport(event,'${id}')" class="space-y-3">
      <div class="bg-slate-50 rounded-lg p-3 text-xs text-slate-600">${esc(t.description || 'No description')} \u00b7 ${esc(t.village)}, ${esc(t.district)}</div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Symptoms Checked</label>
        <div class="flex flex-wrap gap-1.5" id="rSymptoms">${SYMPTOMS_LIST.map(s => `<span class="chip" onclick="this.classList.toggle('on')" data-symptom="${s}">${s}</span>`).join('')}</div></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Treatment Given</label><textarea id="rTreatment" rows="2" class="input" placeholder="e.g. ORS administered, oral rehydration counselling"></textarea></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Medicines Given</label><input id="rMedicine" class="input" placeholder="e.g. ORS sachets, Zinc tablets, Paracetamol"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Patients Seen</label><input id="rPatientsSeen" type="number" min="0" class="input" value="0"></div>
        <div class="flex items-end pb-2"><label class="text-xs font-medium text-slate-600 flex items-center gap-2"><input type="checkbox" id="rWaterCollected"> Water sample collected</label></div>
      </div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1"><i class="fas fa-droplet text-teal-600 mr-1"></i>Action Taken on Water Source</label>
        <select id="rWaterAction" class="input">${WATER_ACTIONS.map(a => `<option>${a}</option>`).join('')}</select></div>
      <div><label class="block text-xs font-medium text-slate-600 mb-1">Field Notes</label><textarea id="rNotes" rows="2" class="input"></textarea></div>
      <p class="text-[11px] text-slate-400"><i class="fas fa-circle-info mr-1"></i>If you collected a water sample, remember to also log it under Water Quality with test results.</p>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit Report &amp; Complete Task</button>
      </div>
    </form>`);
}
async function submitTaskReport(e, taskId) {
  e.preventDefault();
  const symptomsChecked = Array.from(document.querySelectorAll('#rSymptoms .chip.on')).map(el => el.dataset.symptom);
  setLoading(true);
  try {
    const t = STATE.tasks.find(x => x.id === taskId);
    await COL.reports.add({
      taskId, taskTitle: t?.title || '', village: t?.village || '', district: t?.district || '',
      symptomsChecked, treatmentGiven: $('rTreatment').value.trim(), medicineGiven: $('rMedicine').value.trim(),
      patientsSeen: Number($('rPatientsSeen').value) || 0, waterCollected: $('rWaterCollected').checked,
      waterActionTaken: $('rWaterAction').value,
      notes: $('rNotes').value.trim(), submittedBy: STATE.user.id, submittedByName: STATE.user.name,
      submittedAt: new Date().toISOString()
    });
    await COL.tasks.doc(taskId).update({ status: 'Completed', completedAt: new Date().toISOString() });
    toast('Report submitted \u2014 task marked completed'); closeModal();
  } catch (err) { toast('Failed: ' + err.message, true); }
  setLoading(false);
  return false;
}

/* ================================= REPORTS (admin) =============================== */

function renderReports() {
  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-4">
    <div class="card p-4">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 class="font-bold text-slate-800">Field Reports Submitted by Rapid Response Teams</h3>
        <div class="flex gap-2">
          <button onclick="downloadCSV('field_reports.csv', STATE.reports, reportColumns())" class="btn btn-outline btn-sm"><i class="fas fa-file-csv"></i> CSV</button>
          <button onclick="exportPDF('Rapid Response Field Reports', reportColumns(), STATE.reports, 'field_reports.pdf')" class="btn btn-outline btn-sm"><i class="fas fa-file-pdf"></i> PDF</button>
        </div>
      </div>
      <div class="space-y-2.5" id="reportsList"></div>
    </div>
  </div>`;
  $('reportsList').innerHTML = STATE.reports.length ? STATE.reports.map(r => `
    <div class="rounded-xl p-4 border border-slate-100 bg-slate-50/40">
      <div class="flex items-start justify-between gap-3 flex-wrap">
        <div class="min-w-0">
          <p class="font-semibold text-slate-800 text-sm">${esc(r.taskTitle)} <span class="text-slate-400 font-normal">\u2014 ${esc(r.village)}, ${esc(r.district)}</span></p>
          <p class="text-xs text-slate-600 mt-1">Treatment: ${esc(r.treatmentGiven || '\u2014')}</p>
          <p class="text-xs text-slate-600">Medicine: ${esc(r.medicineGiven || '\u2014')} \u00b7 Patients seen: ${r.patientsSeen ?? 0} ${r.waterCollected ? '\u00b7 <i class="fas fa-droplet text-teal-500"></i> Water sample collected' : ''}</p>
          ${r.waterActionTaken && r.waterActionTaken !== 'No action needed' ? `<p class="text-xs text-slate-600 mt-1"><i class="fas fa-hand-holding-droplet text-amber-500 mr-1"></i>Water action: ${esc(r.waterActionTaken)}</p>` : ''}
          ${r.symptomsChecked?.length ? `<p class="text-[11px] text-slate-400 mt-1">Symptoms checked: ${r.symptomsChecked.map(esc).join(', ')}</p>` : ''}
          <p class="text-[11px] text-slate-400 mt-1"><i class="far fa-clock mr-1"></i>${fmtDateTime(r.submittedAt)} by ${esc(r.submittedByName)}</p>
        </div>
      </div>
    </div>`).join('') : emptyMsg('No field reports submitted yet');
}
function reportColumns() {
  return [{ label: 'Task', key: 'taskTitle' }, { label: 'Village', key: 'village' }, { label: 'District', key: 'district' },
  { label: 'Treatment', key: 'treatmentGiven' }, { label: 'Medicine', key: 'medicineGiven' }, { label: 'Patients Seen', key: 'patientsSeen' },
  { label: 'Water Collected', get: r => r.waterCollected ? 'Yes' : 'No' }, { label: 'Water Action Taken', key: 'waterActionTaken' }, { label: 'Submitted By', key: 'submittedByName' }, { label: 'Date', get: r => fmtDateTime(r.submittedAt) }];
}

/* ================================= ANALYTICS ===================================== */

function renderAnalytics() {
  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-5">
    <div class="grid lg:grid-cols-2 gap-5">
      <div class="card p-5"><h3 class="font-bold text-slate-800 mb-3">Disease Distribution</h3><div class="h-64"><canvas id="chartDisease"></canvas></div></div>
      <div class="card p-5"><h3 class="font-bold text-slate-800 mb-3">14-Day Case Trend</h3><div class="h-64"><canvas id="chartTrend"></canvas></div></div>
    </div>
    <div class="grid lg:grid-cols-2 gap-5">
      <div class="card p-5"><h3 class="font-bold text-slate-800 mb-3">Cases by Village</h3><div class="h-64"><canvas id="chartVillage"></canvas></div></div>
      <div class="card p-5"><h3 class="font-bold text-slate-800 mb-3">Patient Demographics</h3><div class="h-64"><canvas id="chartDemo"></canvas></div></div>
    </div>
    <div class="grid lg:grid-cols-2 gap-5">
      <div class="card p-5"><h3 class="font-bold text-slate-800 mb-3">Water Quality Compliance</h3><div class="h-64"><canvas id="chartWaterCompliance"></canvas></div></div>
      <div class="card p-5">
        <h3 class="font-bold text-slate-800 mb-3">District Risk Summary</h3>
        <div class="overflow-x-auto"><table class="w-full text-sm">
          <thead><tr class="border-b border-slate-100"><th class="th">District</th><th class="th">Cases (14d)</th><th class="th">Unsafe Water</th><th class="th">Alerts</th><th class="th">Risk</th></tr></thead>
          <tbody id="riskSummaryBody"></tbody>
        </table></div>
      </div>
    </div>
    <div class="card p-5">
      <h3 class="font-bold text-slate-800 mb-2"><i class="fas fa-lightbulb text-amber-500 mr-1.5"></i>Patterns, Likely Causes &amp; Recommended Precautions</h3>
      <div id="patternInsights" class="space-y-2 text-sm text-slate-600"></div>
    </div>
  </div>`;

  const patients = STATE.patients;
  const diseaseCount = {}; patients.forEach(p => diseaseCount[p.disease] = (diseaseCount[p.disease] || 0) + 1);
  destroyChart('disease');
  STATE.charts.disease = new Chart($('chartDisease'), { type: 'doughnut', data: { labels: Object.keys(diseaseCount).length ? Object.keys(diseaseCount) : ['No data'], datasets: [{ data: Object.values(diseaseCount).length ? Object.values(diseaseCount) : [1], backgroundColor: ['#0f9d8f', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6', '#ec4899', '#64748b'], borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 11, font: { size: 11 } } } } } });

  const days = [], counts = [];
  for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); const key = d.toISOString().slice(0, 10); days.push(key.slice(5)); counts.push(patients.filter(c => (c.onset || c.reportedAtDate) === key).length); }
  destroyChart('trend');
  STATE.charts.trend = new Chart($('chartTrend'), { type: 'line', data: { labels: days, datasets: [{ label: 'Cases', data: counts, borderColor: '#0f9d8f', backgroundColor: 'rgba(15,157,143,.12)', fill: true, tension: 0.3, pointRadius: 3 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1, precision: 0 } } } } });

  const villageCount = {}; patients.forEach(p => villageCount[p.village] = (villageCount[p.village] || 0) + 1);
  destroyChart('village');
  STATE.charts.village = new Chart($('chartVillage'), { type: 'bar', data: { labels: Object.keys(villageCount), datasets: [{ label: 'Cases', data: Object.values(villageCount), backgroundColor: '#12b8a6', borderRadius: 6 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1, precision: 0 } } } } });

  const male = patients.filter(p => p.gender === 'Male' && !isChildAge(p.age)).length;
  const female = patients.filter(p => p.gender === 'Female' && !isChildAge(p.age)).length;
  const kids = patients.filter(p => isChildAge(p.age)).length;
  destroyChart('demo');
  STATE.charts.demo = new Chart($('chartDemo'), { type: 'bar', data: { labels: ['Adult Male', 'Adult Female', 'Children (\u226412y)'], datasets: [{ data: [male, female, kids], backgroundColor: ['#3b82f6', '#ec4899', '#f59e0b'], borderRadius: 8 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1, precision: 0 } } } } });

  const safe = STATE.water.filter(w => w.status === 'Safe').length, marginal = STATE.water.filter(w => w.status === 'Marginal').length, unsafe = STATE.water.filter(w => w.status === 'Unsafe').length;
  destroyChart('waterCompliance');
  STATE.charts.waterCompliance = new Chart($('chartWaterCompliance'), { type: 'doughnut', data: { labels: ['Safe', 'Marginal', 'Unsafe'], datasets: [{ data: [safe, marginal, unsafe], backgroundColor: ['#16a34a', '#f59e0b', '#dc2626'], borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } } });

  $('riskSummaryBody').innerHTML = DISTRICTS.map(d => { const s = districtStatus(d.name); return `<tr><td class="td font-medium">${d.name}</td><td class="td">${s.casesRecent}</td><td class="td">${s.unsafeWater}</td><td class="td">${s.activeAlerts}</td><td class="td"><span class="badge text-white" style="background:${s.color}">${s.label}</span></td></tr>`; }).join('');

  renderPatternInsights(diseaseCount, villageCount);
}

function renderPatternInsights(diseaseCount, villageCount) {
  const insights = [];
  const topDisease = Object.entries(diseaseCount).sort((a, b) => b[1] - a[1])[0];
  const topVillage = Object.entries(villageCount).sort((a, b) => b[1] - a[1])[0];
  const unsafeCount = STATE.water.filter(w => w.status === 'Unsafe').length;

  if (topDisease) insights.push(`<b>${esc(topDisease[0])}</b> is currently the most reported condition (${topDisease[1]} case${topDisease[1] === 1 ? '' : 's'}). This pattern is typically linked to contaminated shared water sources or lapses in sanitation during monsoon runoff.`);
  if (topVillage) insights.push(`<b>${esc(topVillage[0])}</b> has the highest case concentration (${topVillage[1]}). Recommend prioritising a water source inspection and community awareness visit here.`);
  if (unsafeCount > 0) insights.push(`${unsafeCount} water sample${unsafeCount === 1 ? '' : 's'} currently fail safety parameters. Unsafe pH, high turbidity or elevated TDS often indicate surface run-off contamination, inadequate well protection, or nearby open defecation — all can be reduced with source protection and chlorination.`);
  insights.push('General precaution: promote boiling/chlorinating drinking water, ORS at first sign of diarrhoea, safe latrine use, and handwashing with soap — these remain the most effective community-level defences against water-borne outbreaks.');

  $('patternInsights').innerHTML = insights.map(t => `<p class="flex gap-2"><i class="fas fa-circle text-[5px] text-teal-500 mt-2"></i><span>${t}</span></p>`).join('');
}

/* ================================= GUIDELINES ====================================== */

function renderGuidelines() {
  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-5">
    <div class="card p-5">
      <h3 class="font-bold text-slate-800 mb-3"><i class="fas fa-shield-heart text-teal-600 mr-1.5"></i>General Community Precautions</h3>
      <div class="grid sm:grid-cols-2 gap-2">
        ${GENERAL_PRECAUTIONS.map(p => `<p class="flex gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg p-3"><i class="fas fa-check text-teal-600 mt-0.5"></i><span>${esc(p)}</span></p>`).join('')}
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-5" id="guidelineCards"></div>
  </div>`;
  $('guidelineCards').innerHTML = GUIDELINES.map(g => `
    <div class="card p-5">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white" style="background:${g.color}"><i class="fas ${g.icon}"></i></div>
        <h4 class="font-bold text-slate-800">${g.disease}</h4>
      </div>
      <p class="text-sm text-slate-600 mb-3">${g.overview}</p>
      <p class="text-xs font-semibold text-slate-700 mb-1">Transmission</p>
      <p class="text-xs text-slate-500 mb-3">${g.transmission}</p>
      <p class="text-xs font-semibold text-slate-700 mb-1">Common Symptoms</p>
      <div class="flex flex-wrap gap-1 mb-3">${g.symptoms.map(s => `<span class="badge bg-slate-100 text-slate-600">${s}</span>`).join('')}</div>
      <p class="text-xs font-semibold text-slate-700 mb-1">Precautions</p>
      <ul class="text-xs text-slate-500 space-y-1 mb-3 list-disc list-inside">${g.precautions.map(p => `<li>${p}</li>`).join('')}</ul>
      <p class="text-xs bg-amber-50 border border-amber-200 text-amber-700 rounded-lg p-2.5"><i class="fas fa-triangle-exclamation mr-1"></i>${g.alertAt}</p>
    </div>`).join('');
}

/* =================================== USERS ========================================= */

function renderUsers() {
  $('sectionRoot').innerHTML = `
  <div class="fade-in space-y-4">
    <div class="card p-4">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 class="font-bold text-slate-800">Users &amp; Role-Based Access</h3>
        <div class="flex gap-2">
          <button onclick="openUserModal()" class="btn btn-primary btn-sm"><i class="fas fa-user-plus"></i> Add User</button>
          <button onclick="seedDemoData()" class="btn btn-outline btn-sm"><i class="fas fa-seedling"></i> Seed Demo Data</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead><tr class="border-b border-slate-100"><th class="th">Name</th><th class="th">Login ID</th><th class="th">Role</th><th class="th">District/Village</th><th class="th">Status</th><th class="th">Actions</th></tr></thead>
          <tbody id="usersTableBody"></tbody>
        </table>
      </div>
    </div>
  </div>`;
  $('usersTableBody').innerHTML = STATE.users.map(u => `
    <tr>
      <td class="td font-medium">${esc(u.name)}</td>
      <td class="td">${esc(u.loginId)}</td>
      <td class="td"><span class="badge bg-slate-100 text-slate-700">${ROLE_LABELS[u.role] || u.role}</span></td>
      <td class="td">${esc(u.village || '')}${u.village && u.district ? ', ' : ''}${esc(u.district || '\u2014')}</td>
      <td class="td"><span class="badge ${u.active !== false ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}">${u.active !== false ? 'Active' : 'Inactive'}</span></td>
      <td class="td whitespace-nowrap">
        <button onclick="openUserModal('${u.id}')" class="text-slate-500 hover:text-teal-600 mr-2"><i class="fas fa-pen"></i></button>
        ${u.id !== STATE.user.id ? `<button onclick="deleteDoc('users','${u.id}','user')" class="text-slate-500 hover:text-red-600"><i class="fas fa-trash"></i></button>` : ''}
      </td>
    </tr>`).join('') || `<tr><td colspan="6" class="td text-center text-slate-400 py-8">No users yet</td></tr>`;
}

function permGrid(existing) {
  const p = existing || ROLE_TEMPLATES.asha;
  return `<div class="overflow-x-auto"><table class="w-full text-xs">
    <thead><tr><th class="th">Module</th><th class="th text-center">View</th><th class="th text-center">Add</th><th class="th text-center">Edit</th><th class="th text-center">Delete</th></tr></thead>
    <tbody>${MODULES.map(m => `<tr>
      <td class="td capitalize">${m}</td>
      ${['view', 'add', 'edit', 'delete'].map(a => `<td class="td text-center"><input type="checkbox" data-module="${m}" data-action="${a}" class="permCheck w-4 h-4 accent-teal-600" ${p[m]?.[a] ? 'checked' : ''}></td>`).join('')}
    </tr>`).join('')}</tbody></table></div>`;
}

function openUserModal(id) {
  const u = id ? STATE.users.find(x => x.id === id) : null;
  STATE.editing.user = id || null;
  openModal(u ? 'Edit User' : 'Add User', `
    <form onsubmit="return saveUser(event)" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Full Name</label><input id="uName" required class="input" value="${esc(u?.name || '')}"></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Role</label>
          <select id="uRole" class="input" onchange="applyRoleTemplate()">
            <option value="admin" ${u?.role==='admin'?'selected':''}>District Admin</option>
            <option value="asha" ${!u||u?.role==='asha'?'selected':''}>ASHA Worker</option>
            <option value="rrt" ${u?.role==='rrt'?'selected':''}>Rapid Response Team</option>
          </select></div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Login ID (phone/email)</label><input id="uLoginId" required class="input" value="${esc(u?.loginId || '')}"></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Password</label>
          <div class="relative">
            <input id="uPassword" type="password" class="input pr-10" placeholder="${u ? 'Leave blank to keep current' : 'Required'}" ${u ? '' : 'required'}>
            <button type="button" onclick="togglePasswordVisibility('uPassword', this)" class="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1" tabindex="-1"><i class="fas fa-eye"></i></button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-xs font-medium text-slate-600 mb-1">District</label><select id="uDistrict" class="input"><option value="">\u2014</option>${DISTRICTS.map(d => `<option ${u?.district===d.name?'selected':''}>${d.name}</option>`).join('')}</select></div>
        <div><label class="block text-xs font-medium text-slate-600 mb-1">Village</label><input id="uVillage" class="input" value="${esc(u?.village || '')}"></div>
      </div>
      <label class="flex items-center gap-2 text-xs font-medium text-slate-600"><input type="checkbox" id="uActive" ${u?.active !== false ? 'checked' : ''}> Account active</label>
      <div>
        <p class="text-xs font-semibold text-slate-700 mb-1.5">Permissions <span class="font-normal text-slate-400">(auto-filled by role, editable)</span></p>
        <div id="permGridWrap">${permGrid(u?.permissions || ROLE_TEMPLATES[u?.role || 'asha'])}</div>
      </div>
      <p class="text-[11px] text-amber-600"><i class="fas fa-triangle-exclamation mr-1"></i>Testing mode: password stored as plain text.</p>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline">Cancel</button>
        <button type="submit" class="btn btn-primary">Save User</button>
      </div>
    </form>`);
}
function applyRoleTemplate() {
  const role = $('uRole').value;
  $('permGridWrap').innerHTML = permGrid(ROLE_TEMPLATES[role]);
}
async function saveUser(e) {
  e.preventDefault();
  const permissions = {};
  MODULES.forEach(m => permissions[m] = { view: false, add: false, edit: false, delete: false });
  document.querySelectorAll('.permCheck').forEach(cb => { permissions[cb.dataset.module][cb.dataset.action] = cb.checked; });
  const payload = {
    name: $('uName').value.trim(), loginId: $('uLoginId').value.trim(), role: $('uRole').value,
    district: $('uDistrict').value, village: $('uVillage').value.trim(), active: $('uActive').checked, permissions
  };
  const pass = $('uPassword').value;
  if (pass) payload.password = pass;
  setLoading(true);
  try {
    if (STATE.editing.user) {
      await COL.users.doc(STATE.editing.user).update(payload);
      if (STATE.editing.user === STATE.user.id) { STATE.user = { ...STATE.user, ...payload }; buildNav(); }
    } else {
      if (!pass) throw new Error('Password is required for a new user.');
      payload.createdAt = new Date().toISOString();
      await COL.users.add(payload);
    }
    toast('User saved'); closeModal();
  } catch (err) { toast('Save failed: ' + err.message, true); }
  setLoading(false);
  return false;
}

/* ============================== SEED DEMO DATA ===================================== */

async function seedDemoData() {
  if (!confirm('This will add sample villages, patients, water samples and demo ASHA/RRT accounts to Firestore so you can explore the app. Continue?')) return;
  setLoading(true);
  try {
    const sampleVillages = [
      { name: 'Majuli', district: 'Assam', population: 4200, waterSources: ['Hand Pump / Tube Well', 'River / Stream'] },
      { name: 'Barpeta Rural', district: 'Assam', population: 3100, waterSources: ['Open Well', 'Piped Tap Water'] },
      { name: 'Tura', district: 'Meghalaya', population: 2800, waterSources: ['Spring Water', 'Community Tank'] },
      { name: 'Kohima Rural', district: 'Nagaland', population: 1900, waterSources: ['Hand Pump / Tube Well'] },
      { name: 'Imphal East', district: 'Manipur', population: 3600, waterSources: ['Pond', 'Piped Tap Water'] },
      { name: 'Aizawl Rural', district: 'Mizoram', population: 2100, waterSources: ['Community Tank'] },
      { name: 'Agartala Rural', district: 'Tripura', population: 3300, waterSources: ['Open Well', 'River / Stream'] },
      { name: 'Itanagar Rural', district: 'Arunachal Pradesh', population: 1500, waterSources: ['Spring Water'] },
      { name: 'Gangtok Rural', district: 'Sikkim', population: 1200, waterSources: ['Spring Water', 'Piped Tap Water'] }
    ];
    const villageIds = {};
    const existingNames = new Set(STATE.villages.map(v => v.name));
    for (const v of sampleVillages) {
      if (existingNames.has(v.name)) continue;
      const ref = await COL.villages.add(v);
      villageIds[v.name] = ref.id;
    }

    const demoUsers = [
      { name: 'Rina ASHA (Demo)', loginId: 'asha.demo@jalkavach.org', password: 'asha123', role: 'asha', district: 'Assam', village: 'Majuli', active: true, permissions: ROLE_TEMPLATES.asha, createdAt: new Date().toISOString() },
      { name: 'Robin RRT (Demo)', loginId: 'rrt.demo@jalkavach.org', password: 'rrt123', role: 'rrt', district: 'Assam', village: '', active: true, permissions: ROLE_TEMPLATES.rrt, createdAt: new Date().toISOString() }
    ];
    const existingLogins = new Set(STATE.users.map(u => u.loginId));
    for (const u of demoUsers) { if (!existingLogins.has(u.loginId)) await COL.users.add(u); }

    const names = ['Anita Devi', 'Ravi Kumar', 'Sunita Boro', 'Manoj Das', 'Priya Sharma', 'Amit Gogoi', 'Laxmi Rai', 'Deepak Singh', 'Chandni Roy', 'Bipul Nath', 'Meena Kumari', 'Suresh Yadav'];
    const villageNames = sampleVillages.map(v => v.name);
    for (let i = 0; i < 14; i++) {
      const village = villageNames[Math.floor(Math.random() * villageNames.length)];
      const vDef = sampleVillages.find(v => v.name === village);
      const disease = DISEASES[Math.floor(Math.random() * (DISEASES.length - 1))];
      const daysBack = Math.floor(Math.random() * 13);
      const d = new Date(); d.setDate(d.getDate() - daysBack);
      const age = Math.random() < 0.25 ? Math.floor(Math.random() * 12) + 1 : Math.floor(Math.random() * 55) + 13;
      await COL.patients.add({
        name: names[Math.floor(Math.random() * names.length)], age, gender: Math.random() < 0.5 ? 'Male' : 'Female',
        onset: d.toISOString().slice(0, 10), disease, village, district: vDef.district,
        symptoms: SYMPTOMS_LIST.filter(() => Math.random() < 0.35),
        severity: ['Mild', 'Moderate', 'Severe'][Math.floor(Math.random() * 3)], status: 'Active',
        notes: '', reportedBy: STATE.user.id, reportedByName: STATE.user.name,
        reportedAtDate: d.toISOString().slice(0, 10), reportedAt: d.toISOString()
      });
    }

    for (let i = 0; i < 8; i++) {
      const village = villageNames[Math.floor(Math.random() * villageNames.length)];
      const vDef = sampleVillages.find(v => v.name === village);
      const unsafe = Math.random() < 0.4;
      const ph = unsafe ? (Math.random() < 0.5 ? 5.5 : 9.2) : 7 + (Math.random() - 0.5);
      const turb = unsafe ? 8 + Math.random() * 6 : Math.random() * 3;
      const tds = unsafe ? 600 + Math.random() * 400 : 150 + Math.random() * 250;
      const daysBack = Math.floor(Math.random() * 10);
      const d = new Date(); d.setDate(d.getDate() - daysBack);
      await COL.water.add({
        village, district: vDef.district, source: WATER_SOURCES[Math.floor(Math.random() * WATER_SOURCES.length)],
        date: d.toISOString().slice(0, 10), ph: Math.round(ph * 10) / 10, turbidity: Math.round(turb * 10) / 10, tds: Math.round(tds),
        status: waterStatus(ph, turb, tds), notes: '', collectedBy: STATE.user.id, collectedByName: STATE.user.name
      });
    }

    toast('Demo data seeded! Try logging in as asha.demo@jalkavach.org / asha123 or rrt.demo@jalkavach.org / rrt123');
  } catch (err) {
    console.error(err);
    toast('Seeding failed: ' + err.message, true);
  }
  setLoading(false);
}

/* ============================== THEMES ============================= */

const THEMES = {
  ocean:  { name: 'Ocean Teal',   swatch: '#0f9d8f', deep: '#04121a', navy: '#0a2e42', navy2: '#0e3b56', teal: '#0f9d8f', teal2: '#12b8a6', leaf: '#7cb342' },
  forest: { name: 'Forest',       swatch: '#2f9e58', deep: '#0a1f0f', navy: '#123a1e', navy2: '#1c4d29', teal: '#2f9e58', teal2: '#4cbf74', leaf: '#a3d977' },
  sunset: { name: 'Sunset',       swatch: '#e08a2b', deep: '#1a0f04', navy: '#3a220a', navy2: '#4d2e0e', teal: '#e08a2b', teal2: '#f0a94e', leaf: '#f4c869' },
  royal:  { name: 'Royal Purple', swatch: '#7c3aed', deep: '#120a1a', navy: '#2a1042', navy2: '#38155a', teal: '#7c3aed', teal2: '#9d5cf5', leaf: '#c084fc' },
  slate:  { name: 'Slate Blue',   swatch: '#3b82f6', deep: '#0b0f14', navy: '#1a2330', navy2: '#24303f', teal: '#3b82f6', teal2: '#60a5fa', leaf: '#93c5fd' }
};
const LS_THEME = 'jk_theme';

function hexToRgb(hex) {
  const m = hex.replace('#', '').match(/.{1,2}/g);
  return m.map(h => parseInt(h, 16)).join(',');
}
function applyTheme(key) {
  const t = THEMES[key] ? key : 'ocean';
  const c = THEMES[t];
  const root = document.documentElement.style;
  root.setProperty('--deep', c.deep);
  root.setProperty('--navy', c.navy);
  root.setProperty('--navy2', c.navy2);
  root.setProperty('--teal', c.teal);
  root.setProperty('--teal2', c.teal2);
  root.setProperty('--leaf', c.leaf);
  root.setProperty('--teal-rgb', hexToRgb(c.teal));
  root.setProperty('--teal2-rgb', hexToRgb(c.teal2));
  root.setProperty('--leaf-rgb', hexToRgb(c.leaf));
  localStorage.setItem(LS_THEME, t);
  renderThemeSwatches();
}
function renderThemeSwatches() {
  const active = localStorage.getItem(LS_THEME) || 'ocean';
  const html = Object.entries(THEMES).map(([key, t]) => `
    <button onclick="applyTheme('${key}')" title="${t.name}"
      class="w-6 h-6 rounded-full border-2 ${active === key ? 'border-white scale-110' : 'border-transparent opacity-70 hover:opacity-100'} transition-all"
      style="background:${t.swatch}"></button>`).join('');
  ['authThemeSwatches', 'sidebarThemeSwatches'].forEach(id => { const el = $(id); if (el) el.innerHTML = html; });
}

/* ============================== PASSWORD VISIBILITY ================================ */

function togglePasswordVisibility(inputId, btn) {
  const input = $(inputId);
  const icon = btn.querySelector('i');
  if (input.type === 'password') { input.type = 'text'; icon.className = 'fas fa-eye-slash'; }
  else { input.type = 'password'; icon.className = 'fas fa-eye'; }
}

/* ============================== PWA / OFFLINE / INSTALL ============================= */

let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  $('installBtn').classList.remove('hidden');
});
function promptInstall() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.finally(() => { deferredInstallPrompt = null; $('installBtn').classList.add('hidden'); });
}

function updateConnectionUI() {
  const online = navigator.onLine;
  $('offlineBanner').classList.toggle('hidden', online);
  document.body.style.paddingTop = online ? '' : '28px';
  const dot = $('connDot'), txt = $('connText');
  if (dot) { dot.className = online ? 'w-2 h-2 rounded-full bg-green-400 pulse-dot' : 'w-2 h-2 rounded-full bg-amber-400 pulse-dot'; }
  if (txt) txt.textContent = online ? 'Online' : 'Offline (cached)';
  const pt = $('persistText');
  if (pt) {
    if (window.__persistenceEnabled === true) pt.textContent = 'Offline cache ready';
    else if (window.__persistenceEnabled === false) pt.textContent = 'Offline cache unavailable (close other tabs)';
    else pt.textContent = 'Checking offline cache\u2026';
  }
}
window.addEventListener('online', updateConnectionUI);
window.addEventListener('offline', updateConnectionUI);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(err => console.warn('SW registration failed', err));
  });
}

/* ==================================== INIT =========================================== */

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(localStorage.getItem(LS_THEME) || 'ocean');
  updateConnectionUI();
  const persistPoll = setInterval(() => {
    updateConnectionUI();
    if (window.__persistenceEnabled !== undefined) clearInterval(persistPoll);
  }, 500);
  bootAuth();
});
