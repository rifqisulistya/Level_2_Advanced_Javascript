# ⚙️ Functions — Homework

---

## 🧠 WHAT You're Practicing

All four function styles — **declaration**, **expression**, **anonymous**, and **arrow** — applied deliberately in a user management system. Each task specifies which style to use and why.

---

## ❓ WHY This Project?

Real codebases mix all four styles. Knowing which to reach for — and why — is what separates someone who can write JavaScript from someone who understands it.

By the time you finish this homework, you won't just know that four styles exist — you'll have written each one in a realistic context and seen the specific advantage each brings.

---

## 🔍 Quick Reference

**Declaration** — `function name(p) { }` — hoisted ✅ — main named functions

**Expression** — `const name = function(p) { }` — not hoisted ❌ — stored/passed functions

**Anonymous** — `function(p) { }` — not hoisted ❌ — one-time callbacks

**Arrow** — `const name = (p) => value` — not hoisted ❌ — short transforms, callbacks

---

## 🔍 WHAT You're Building

A **User Account Manager** with these functions:

- `createUser` — **Declaration** — complex, multi-line, benefits from hoisting
- `isValidUser` — **Expression** — passed directly to filter without a wrapper
- `formatUserDisplay` — **Arrow** — short, pure transformation, one-liner
- `getUserById` — **Declaration** — named search utility
- `filterByAge` — **Expression** — stored as a reusable value with a default param
- `getAccountStats` — **Declaration** — complex multi-step logic
- `promoteUser` — **Arrow** — short mutation, one-liner
- `processAccounts` — **Declaration** — pipeline that composes all of the above

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in browser — nothing to edit |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 8 tasks + stretch goal |
| `debug.js` | Three bugs to fix |

---

## 🌍 Real-World Connection

Every production JavaScript codebase uses all four styles. Understanding when to reach for each is a senior developer habit you're building now:

- Auth systems use **declarations** for their main logic functions
- Validation helpers are often **expressions** passed to form validators
- **Anonymous functions** live inside event handlers and API callbacks
- **Arrow functions** dominate modern React, Vue, and Node code

---

## ⚠️ Common Mistakes to Watch For

1. **Arrow with braces but no return** — `(n) => { n * 2 }` → undefined. Either add `return` or remove the braces.

2. **Missing return in a branch** — every `if`, `else if`, `else` that should produce a value needs `return`. Missing one branch → silent undefined.

3. **Passing a function vs calling it** — `filter(isValidUser)` is correct. `filter(isValidUser())` calls it with no args and passes the result (false) → TypeError.

4. **Discount percent without /100** — `price * 20` is 2000% not 20%. Always `price * (percent / 100)`.

5. **Expecting a number to mutate** — numbers are passed by value (copied). Objects are passed by reference (the original can be mutated). This is the key difference between Task 7 (arrow + object) and Debug 2 (primitive).

---

## ✅ Done When You Can

- [ ] Write the same logic as all four function styles from memory
- [ ] Explain which styles are hoisted and why it matters
- [ ] Explain when to use `return` in an arrow function
- [ ] Pass a named function to `filter` without calling it
- [ ] Complete all 8 tasks and the stretch goal
- [ ] Fix all 3 debug tasks with explanations
