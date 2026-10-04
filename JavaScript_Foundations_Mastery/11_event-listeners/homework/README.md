# 🎯 Event Listeners — Homework

---

## 🧠 WHAT You're Practicing

Wiring up user interactions with `addEventListener` — clicks, keyboard events, and input events — all applied to a fully interactive Task Board.

---

## ❓ WHY This Project?

The Task Board from DOM Manipulation already looks like a real app. Now it needs to behave like one. Every feature you add tonight — adding tasks, marking complete, filtering, removing, keyboard shortcuts — is something you'll wire up in every web project you ever build.

---

## 🔍 WHAT You're Building

A **fully interactive Task Board** where users can:
- Add new tasks by filling in a form and clicking Add
- Press Enter in the title field to add quickly
- Mark tasks complete — they move to the Done column
- Remove tasks — they disappear from the board
- Filter tasks by priority with the header buttons
- Press Escape to clear the form inputs

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in your browser — nothing to edit (except stretch goal) |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 7 tasks + stretch goal |
| `debug.js` | Three bugs to fix — swap the script tag to run them |

---

## 🌍 Real-World Connection

Every interactive web app uses exactly these patterns:

- **Trello** — click to complete, drag to move (same delegation logic)
- **GitHub Issues** — filter by label (same filter button pattern)
- **Linear** — keyboard shortcut to create issues (same keydown pattern)
- **Notion** — press Enter to confirm, Escape to cancel (same keydown pattern)

---

## ⚠️ Common Mistakes to Watch For

1. **Calling the function instead of passing it** — `addEventListener("click", handleAddTask())` runs it immediately and the button does nothing. Remove the `()`.

2. **Inverted filter condition** — read your condition out loud. "If priority is NOT the filter, show the card" is backwards. It should be "if priority IS the filter, show the card."

3. **Not guarding against null from `.closest()`** — clicking empty space in the board returns `null`. Always check `if (!card) { return; }` before using it.

4. **No `renderBoard()` call before testing delegation** — if there are no cards on the page, your delegation handler fires but has nothing to act on. Always render first, then test.

5. **Using `change` instead of `input` for live search** — `change` fires when the input loses focus. `input` fires on every keystroke. Live search needs `input`.

---

## ✅ Done When You Can

- [ ] Complete all 7 tasks — the board is fully interactive
- [ ] Fix all 3 debug tasks with explanations as comments
- [ ] Complete the stretch goal — live search filters cards as you type
- [ ] Explain the difference between `event.target` and `event.currentTarget`
- [ ] Explain why `.closest()` is safer than `event.target` for delegation
- [ ] Explain why `event.preventDefault()` isn't needed on a button click but is on a form submit
