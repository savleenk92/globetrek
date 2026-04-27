// ── share.js ──────────────────────────────────────────────
function generateShareText(result) {
  const puzzleEmojis = result.puzzleCluesUsed !== null
    ? Array.from({ length: 5 }, (_, i) => i < result.puzzleCluesUsed ? '🟥' : '🟩').join('')
    : '❌❌❌❌❌';

  const quizEmojis = result.quizAnswers
    ? result.quizAnswers.map(a => a ? '🟩' : '🟥').join('')
    : '❌❌❌❌❌';

  const epoch = new Date('2025-01-01');
  const today = new Date(); today.setHours(0,0,0,0);
  const dayNum = Math.floor((today - epoch) / 86400000) + 1;

  const streak = getStreak();
  const streakEmoji = streak.count >= 7 ? '🔥' : streak.count >= 3 ? '⭐' : '✈️';

  return `🌍 GlobeTrek #${dayNum}
🧩 City Puzzle: ${puzzleEmojis} (${result.puzzleScore}pts)
📚 Travel Quiz: ${quizEmojis} (${result.quizScore}pts)
🏆 Total: ${result.totalScore}pts
${streakEmoji} Streak: ${streak.count} day${streak.count !== 1 ? 's' : ''}

Play at: globetrek.netlify.app`;
}

async function shareResult(result) {
  const text = generateShareText(result);
  if (navigator.share) {
    try {
      await navigator.share({ title: 'GlobeTrek', text });
      return true;
    } catch {}
  }
  // Fallback: copy to clipboard
  await navigator.clipboard.writeText(text);
  return false;
}
