# 🏠 Variables — Homework

---

## 🧠 WHAT You're Practicing

Everything from today's class — but now on your own.

Declaring variables, choosing between `const` and `let`, assigning and reassigning values, and logging output to the console.

No new syntax. No tricks. Just variables.

---

## ❓ WHY This Homework Matters

In class, you had your mentor walking you through each step. Tonight it's just you and the code.

That gap — between following along and doing it alone — is exactly where learning happens. Every task here is something you did in class. The goal is to build the muscle memory so that next lesson, variables feel automatic.

---

## 🔍 WHAT You're Building

A fake **app profile** — store info, product details, and some basic variable updates.

Everything runs in the console. No page changes, no DOM, no HTML edits. Open DevTools and watch your output appear as you complete each task.

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in your browser — nothing to edit |
| `style.css` | Already written — nothing to edit |
| `app.js` | This is where all your work goes |
| `debug.js` | Three buggy snippets to fix — change the `<script>` tag in `index.html` to `debug.js` to run them |

---

## 🌍 Real-World Connection

Every app you use daily — Instagram, Spotify, Gmail — is full of variables just like these.

- Spotify stores your `currentSong`, `volume`, `isPlaying` as variables
- Gmail tracks `isLoggedIn`, `unreadCount`, `userEmail`
- Instagram uses `followerCount`, `isVerified`, `username`

Tonight's homework is exactly that, just smaller.

---

## ⚠️ Common Mistakes to Watch For

1. **Using `let` for everything** — if a value never changes, it should be `const`. Train yourself to ask that question every time.

2. **Quoting numbers** — `const price = "49.99"` is a string, not a number. You can't do math with it reliably.

3. **Typos in variable names** — JavaScript is case-sensitive. `productName` and `ProductName` are two completely different variables.

4. **Re-using `let` or `const` when reassigning** — when you reassign, you just use the variable name:
   ```js
   let score = 0;
   score = 10;   // ✅ correct
   let score = 10; // ❌ SyntaxError — already declared
   ```

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks with correct output in the console
- [ ] Fix all 3 debug tasks and explain each bug as a comment
- [ ] Explain out loud (or in comments) why you chose `const` or `let` for each variable
- [ ] Complete the stretch goal
