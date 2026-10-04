# 📦 Data Types — Homework

---

## 🧠 WHAT You're Practicing

Template literals, string methods, type conversion, null/undefined handling, and truthiness — all applied to the validation functions a real sign-up form would need.

---

## ❓ WHY This Project?

Form validation is one of the most common JavaScript tasks. Every app that takes user input needs it. By the end of this homework you'll have built a full validation pipeline — clean input, validate each field, report results — using every concept from today's lesson.

---

## 🔍 WHAT You're Building

A **Data Validator** with these functions:

- `isValidUsername` — length check, no spaces, type check
- `isValidEmail` — contains @, has characters before and after
- `isValidAge` — converts string to number, range check, NaN guard
- `isValidPassword` — length, uppercase, number, special character
- `formatValidationResult` — displays results cleanly with ✅/❌
- `validateSignUpForm` — runs all validators, returns overall pass/fail
- `cleanFormData` — trims and lowercases before validating
- Full pipeline — clean → validate → display

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in browser — reference panel on the left |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 8 tasks + stretch goal |
| `debug.js` | Three bugs to fix — swap the script tag to run them |

---

## 🌍 Real-World Connection

This is exactly how real authentication systems work:

- Trim and lowercase before validating and storing
- Validate each field independently with clear error messages
- Collect all errors at once (don't stop at the first failure)
- Return structured objects `{ valid, message }` — not just true/false

---

## ⚠️ Common Mistakes to Watch For

1. **Using `parseInt` when `Number()` is stricter** — `parseInt("28 years")` returns 28. `Number("28 years")` returns NaN. For age fields, you want NaN — use `Number()`.

2. **Not trimming before checking emptiness** — `"   "` is truthy. `!username` passes for spaces-only input. Always `.trim()` before checking if empty.

3. **`> 3` instead of `>= 3`** — off-by-one in length checks. "Minimum 3 characters" means `length >= 3`, not `length > 3`.

4. **Not guarding against NaN** — `parseInt("abc")` returns NaN. NaN in arithmetic gives NaN. Always check `isNaN()` before using a converted value.

5. **Lowercasing passwords** — passwords are case-sensitive. Trim and lowercase usernames and emails. Never alter passwords.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks with correct console output
- [ ] Fix all 3 debug tasks with explanations
- [ ] Complete the `formatSummary` stretch goal
- [ ] Explain when to use `Number()` vs `parseInt()`
- [ ] Explain why you clean data before validating
- [ ] Name all six falsy values from memory
- [ ] Explain why `===` is safer than `==`
