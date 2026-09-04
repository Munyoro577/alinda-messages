// ===== Alinda Messages — App Logic =====
// Built by Alinda Creation Hub

const { messages, categories, catMeta } = window.AM_DATA;

// ===== Verification Gate =====
const gate = document.getElementById('verifyGate');
const ageCheckbox = document.getElementById('ageCheckbox');
const termsCheckbox = document.getElementById('termsCheckbox');
const enterBtn = document.getElementById('enterBtn');

function checkGate() {
  enterBtn.disabled = !(ageCheckbox.checked && termsCheckbox.checked);
}
ageCheckbox.addEventListener('change', checkGate);
termsCheckbox.addEventListener('change', checkGate);

enterBtn.addEventListener('click', () => {
  if (enterBtn.disabled) return;
  try { sessionStorage.setItem('am_verified', 'true'); } catch(e) {}
  gate.classList.add('hidden');
  document.body.classList.remove('no-scroll');
  setTimeout(() => gate.style.display = 'none', 600);
  initApp();
});

(function autoVerify() {
  let verified = false;
  try { verified = sessionStorage.getItem('am_verified') === 'true'; } catch(e) {}
  if (verified) {
    gate.style.display = 'none';
    document.body.classList.remove('no-scroll');
    initApp();
  } else {
    document.body.classList.add('no-scroll');
  }
})();

// ===== App State =====
let currentCat = 'all';
let filtered = [...messages];
let currentIdx = 0;
let lastIndex = -1;

const card = document.getElementById('card');
const messageEl = document.getElementById('message');
const emojiEl = document.getElementById('emoji');
const tagEl = document.getElementById('tag');
const shuffleBtn = document.getElementById('shuffle');
const copyBtn = document.getElementById('copy');
const shareBtn = document.getElementById('share');
const toastEl = document.getElementById('toast');
const searchInput = document.getElementById('search');
const filtersContainer = document.getElementById('filters');

function initApp() {
  if (document.getElementById('filters').children.length > 0) return;
  buildFilters();
  newMessage();
}

function buildFilters() {
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.cat = cat.id;
    btn.textContent = `${cat.emoji} ${cat.label}`;
    if (cat.id === currentCat) btn.classList.add('active');
    filtersContainer.appendChild(btn);
  });
}

function pickRandom() {
  if (filtered.length === 0) return null;
  if (filtered.length === 1) return 0;
  let idx;
  do { idx = Math.floor(Math.random() * filtered.length); }
  while (idx === lastIndex);
  lastIndex = idx;
  return idx;
}

function showMessage(idx) {
  const m = filtered[idx];
  const meta = catMeta[m.cat];
  card.classList.remove('fade-in');
  card.classList.add('fade-out');
  setTimeout(() => {
    emojiEl.textContent = meta ? meta.emoji : '💬';
    messageEl.textContent = m.text;
    tagEl.textContent = meta ? meta.label : m.cat;
    card.classList.remove('fade-out');
    card.classList.add('fade-in');
  }, 280);
}

function newMessage() {
  const idx = pickRandom();
  if (idx === null) {
    messageEl.textContent = 'No messages found. Try a different category or search.';
    emojiEl.textContent = '🔍';
    tagEl.textContent = '—';
    return;
  }
  currentIdx = idx;
  showMessage(idx);
}

filtersContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = btn.dataset.cat;
  applyFilters();
});

let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(applyFilters, 200);
});

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  filtered = messages.filter(m => {
    const catMatch = currentCat === 'all' || m.cat === currentCat;
    const searchMatch = !query || m.text.toLowerCase().includes(query);
    return catMatch && searchMatch;
  });
  lastIndex = -1;
  newMessage();
}

shuffleBtn.addEventListener('click', newMessage);

copyBtn.addEventListener('click', async () => {
  if (!filtered[currentIdx]) return;
  const text = filtered[currentIdx].text;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  showToast('Copied to clipboard!');
});

shareBtn.addEventListener('click', async () => {
  if (!filtered[currentIdx]) return;
  const text = filtered[currentIdx].text;
  if (navigator.share) {
    try { await navigator.share({ title: 'Alinda Messages', text }); } catch {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast('Copied — ready to share!');
    } catch {}
  }
});

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 1800);
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && document.activeElement === document.body) {
    e.preventDefault();
    newMessage();
  }
});
