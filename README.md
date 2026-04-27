# 🌍 GlobeTrek — Daily Travel Puzzle

A daily travel quiz and mystery city puzzle game with streaks and leaderboards.

## How to Play

- **City Puzzle** — A mystery city is revealed through up to 5 clues. Guess in fewer clues to score higher.
- **Travel Quiz** — Answer 5 geography/travel trivia questions against a 15-second timer.
- **Streak** — Play every day to maintain your streak!
- **Leaderboard** — Compete with other players for today's top score.

## Scoring

| Action | Points |
|--------|--------|
| Puzzle — correct on clue 1 | 500 |
| Puzzle — correct on clue 2 | 400 |
| Puzzle — correct on clue 3 | 300 |
| Puzzle — correct on clue 4 | 200 |
| Puzzle — correct on clue 5 | 100 |
| Puzzle — not solved | 0 |
| Quiz — correct answer | 100 + speed bonus (up to 50) |

**Max daily score: 850 pts**

## Project Structure

```
globetrek/
├── index.html          ← Full game (HTML + JS logic)
├── styles.css          ← All styling
├── js/
│   ├── puzzles.js      ← 60 city clue sets
│   ├── questions.js    ← 120 trivia questions
│   ├── streak.js       ← Streak & localStorage
│   └── share.js        ← Emoji result card
└── README.md
```

## 🚀 Deploy on GitHub Pages (Free)

1. Create a new repository on [github.com](https://github.com) named `globetrek`
2. Upload all files (or use Git):
   ```bash
   git init
   git add .
   git commit -m "Launch GlobeTrek"
   git remote add origin https://github.com/YOUR_USERNAME/globetrek.git
   git push -u origin main
   ```
3. Go to your repo → **Settings** → **Pages**
4. Under *Source*, select **Deploy from a branch** → `main` → `/ (root)`
5. Click **Save** — your game will be live at:
   `https://YOUR_USERNAME.github.io/globetrek`

## 🚀 Deploy on Netlify (Even Easier — 30 seconds)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your entire `globetrek` folder onto the page
3. You're live instantly at a random Netlify URL
4. Optionally: rename the site in Site Settings → Site Name → `globetrek`
5. Your URL: `https://globetrek.netlify.app`

## Custom Domain (Optional)

1. Buy a domain on [Namecheap](https://namecheap.com) (~$10/yr) e.g. `globetrek.app`
2. In Netlify: Site Settings → Domain Management → Add custom domain
3. Follow their DNS instructions (takes ~10 min to propagate)

## Adding New Content

**New puzzle city** — Add to `js/puzzles.js`:
```js
{
  city: "Your City",
  country: "Country",
  emoji: "🇺🇸",
  clues: [
    "Clue 1 (vague)",
    "Clue 2",
    "Clue 3",
    "Clue 4",
    "Clue 5 (most obvious)"
  ]
}
```

**New quiz question** — Add to `js/questions.js`:
```js
{
  q: "Your question?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0,  // index of correct option (0-3)
  category: "geography",
  difficulty: 1  // 1=easy, 2=medium, 3=hard
}
```

## Upgrading the Leaderboard

The current leaderboard uses `localStorage` — players only see their own scores unless on the same device.

To add a **real shared leaderboard**:

1. Create a free [Supabase](https://supabase.com) account
2. Create a table: `scores (id, username, date, total_score, puzzle_score, quiz_score, streak, created_at)`
3. Replace the `getLeaderboard()` and `submitToLeaderboard()` functions in `index.html` with Supabase fetch calls
4. Add your Supabase URL and anon key to the script

## Tech Stack

- **Pure HTML/CSS/JS** — no build tools, no framework, no dependencies
- **Fonts**: Playfair Display + DM Sans (Google Fonts)
- **Storage**: localStorage (offline-first, no backend required)
- **PWA-ready**: add a `manifest.json` for installable app

---

Made with ✈️ by GlobeTrek
