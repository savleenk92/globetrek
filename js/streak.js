// ── streak.js ─────────────────────────────────────────────
function getStreak() {
  try {
    return JSON.parse(localStorage.getItem('gt_streak') || '{"count":0,"lastPlayed":null}');
  } catch { return { count: 0, lastPlayed: null }; }
}

function updateStreak() {
  const data = getStreak();
  const today = getTodayStr();
  const yesterday = getYesterdayStr();
  if (data.lastPlayed === today) return data; // already played today
  if (data.lastPlayed === yesterday) {
    data.count = (data.count || 0) + 1;
  } else {
    data.count = 1;
  }
  data.lastPlayed = today;
  localStorage.setItem('gt_streak', JSON.stringify(data));
  return data;
}

function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}
function getYesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function hasPlayedToday() {
  const saved = getSavedResult();
  return saved && saved.date === getTodayStr();
}

function getSavedResult() {
  try {
    return JSON.parse(localStorage.getItem('gt_result_' + getTodayStr()));
  } catch { return null; }
}

function saveResult(result) {
  localStorage.setItem('gt_result_' + getTodayStr(), JSON.stringify({ ...result, date: getTodayStr() }));
}

function getUsername() {
  return localStorage.getItem('gt_username') || '';
}
function setUsername(name) {
  localStorage.setItem('gt_username', name);
}
