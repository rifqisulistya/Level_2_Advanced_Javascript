# 📋 Arrays — Homework

---

## 🧠 WHAT You're Practicing

Declaring arrays, accessing elements by index, updating elements, looping through arrays, and using `push`, `pop`, `shift`, `unshift` — all combined with variables, operators, conditionals, and loops from the previous four lessons.

---

## ❓ WHY This Project?

A gradebook is one of the clearest real-world uses of parallel arrays — two lists that stay in sync by index. Every school portal, every learning management system, every grade reporting tool works exactly like this under the hood.

It also forces you to use every tool you've learned so far at once. You can't calculate an average without operators. You can't assign letter grades without conditionals. You can't process every student without a loop. And you can't store the class data cleanly without arrays.

---

## 🔍 WHAT You're Building

A **Student Gradebook** that:
- Stores student names and scores in parallel arrays
- Accesses individual students by index
- Updates a score after extra work
- Loops through the class to display everyone
- Calculates average, high score, low score, pass/fail counts
- Assigns a letter grade to each student
- Adds a new student and removes a transferred one
- Finds the top student using an index tracker

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

- **School portals** store student records in arrays and loop through them to generate reports
- **Leaderboards** find the top score using the same index-tracking pattern as Task 8
- **Grade curves** (stretch goal) work exactly like `.map()` — which is the next lesson
- **E-commerce** tracks products with parallel arrays (names + prices + stock) before graduating to objects

---

## ⚠️ Common Mistakes to Watch For

1. **Out-of-sync parallel arrays** — whenever you `push` or `shift` on one array, do the same to the other. Missing this breaks the name↔score pairing.

2. **Seeding `lowScore` at 0** — if all real scores are above 0, `lowScore` will never update. Always seed with `scores[0]`.

3. **`i <= array.length` in the loop** — the last valid index is `length - 1`. Using `<=` reads one index past the end, producing `undefined` and poisoning your calculations with `NaN`.

4. **Declaring accumulators inside the loop** — `totalScore`, `passCount`, etc. must live outside. Inside the loop, they reset every iteration.

5. **Tracking the score instead of the index** — in Task 8, you need the index to look up the name. Track `topStudentIndex`, not `topScore` alone.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks with correct console output
- [ ] Fix all 3 debug tasks with explanations as comments
- [ ] Justify every `const` vs `let` choice
- [ ] Complete the stretch goal and count newly passing students
- [ ] Explain out loud why `lowScore` must seed at `scores[0]` and not `0`
