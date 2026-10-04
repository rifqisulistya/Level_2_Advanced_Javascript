# ➕ Operators — Homework

---

## 🧠 WHAT You're Practicing

Arithmetic, assignment, and comparison operators — all working with variables declared from Lesson 1.

This is the first homework where two lessons connect. Every task requires you to think about both: *what keyword do I declare this variable with?* and *which operator do I use to work with it?*

---

## ❓ WHY This Project?

A score tracker is one of the most operator-heavy programs you can build. Every meaningful action — earning points, losing lives, comparing to a record, calculating accuracy — requires a different operator. By the time you're done you'll have used all five arithmetic operators, all four assignment shortcuts, and multiple comparisons.

That's the whole lesson in one project.

---

## 🔍 WHAT You're Building

A **game session tracker** for a fictional game called Space Blaster. No visuals — everything runs in the console. You'll track a player's score from 0 through a full game session: earning points, taking damage, collecting bonuses, and comparing against the high score.

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in browser — nothing to edit |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 8 tasks + stretch goal go here |
| `debug.js` | Three bugs to fix — swap the `<script>` tag to run them |

---

## 🌍 Real-World Connection

Every game ever made — from Tetris to Fortnite — runs score logic exactly like this:

- `score += pointsEarned` — every kill, every combo
- `lives -= 1` — every hit
- `score > highScore` — every leaderboard check
- `accuracy * 100` — every end-of-match screen

Tonight's homework is the core logic that sits under all of it.

---

## ⚠️ Common Mistakes to Watch For

1. **Using `%` for percentages** — `80 % 15` is not 15% of 80. It's the remainder after dividing 80 by 15. For percentages, use `* 0.15` or `* (15 / 100)`.

2. **Using `+=` on a `const`** — if a value needs to update, it must be `let`. Go back and check your keyword choices before running the file.

3. **Using `=` instead of `===`** — in a comparison, `=` overwrites the variable. It will not throw an error, but your logic will be completely wrong.

4. **Forgetting to chain calculations through variables** — don't write raw numbers in your operator expressions. Use the variables you declared. That's the whole point.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks with correct console output
- [ ] Fix all 3 debug tasks with explanations as comments
- [ ] Justify every `const` vs `let` choice with a comment
- [ ] Complete the stretch goal and answer the bonus question
