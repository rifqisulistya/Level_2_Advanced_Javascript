# 🔀 Conditionals — Homework

---

## 🧠 WHAT You're Practicing

`if`, `else if`, `else`, and logical operators (`&&`, `||`, `!`) — all three lessons working together as one program.

This is the first homework where you'll feel the three lessons click into place. You declare the data, calculate with it, and then make decisions based on it. That sequence is the foundation of every real program you'll ever write.

---

## ❓ WHY This Project?

A grade calculator is one of the best projects for conditionals because it naturally needs all three lesson types at once:

- Variables to store the student's name, scores, and thresholds
- Operators to calculate percentages and apply bonuses
- Conditionals to decide the letter grade, pass/fail, honor roll eligibility, and attendance status

By the end of this project you won't be thinking about three separate lessons — you'll be thinking about one program.

---

## 🔍 WHAT You're Building

A **student grade calculator** that:
1. Applies extra credit if applicable
2. Calculates a percentage from the score
3. Assigns a letter grade (A through F)
4. Determines pass or fail
5. Checks attendance eligibility
6. Checks honor roll qualification

All output goes to the console.

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

Grade systems, eligibility checkers, and access control all work exactly like this:

- University portals check score AND attendance before releasing final grades
- Honor roll systems check GPA AND conduct records
- Scholarship portals check average scores across multiple subjects

Tonight's homework is the direct logic behind all of it.

---

## ⚠️ Common Mistakes to Watch For

1. **Forgetting `else if` — using separate `if` blocks instead**
   For the grade assignment, three separate `if` blocks would run multiple branches for the same score. Always use `else if` when the options are mutually exclusive.

2. **Wrong operator order in `else if` chains**
   The grade thresholds must go from highest (90) to lowest (60). Putting 60 first would match everything above 60 and stop there.

3. **`=` instead of `===` in conditions**
   You've seen this bug three times now. By this homework you should be catching it on instinct.

4. **`&&` when `||` is needed (or vice versa)**
   Read the requirement in plain English first. "Both must be true" → `&&`. "Either is enough" → `||`.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks with correct console output
- [ ] Fix all 3 debug tasks with explanations as comments
- [ ] Justify every `const` vs `let` choice
- [ ] Complete the stretch goal including the `||` subject check
