# 🖥️ DOM Manipulation — Homework

---

## 🧠 WHAT You're Practicing

Selecting elements, updating content, building new elements with `createElement`, appending them to the correct place, toggling classes, and composing everything into an orchestrator function — all applied to a real visual project.

---

## ❓ WHY This Project?

A task board is one of the best DOM projects because every feature maps directly to a DOM operation you need to know:

- Rendering cards from data → `createElement` + `appendChild` in a loop
- Showing counts in the header → `textContent` updates
- Marking tasks complete → `classList.add("completed")`
- Moving a card → `appendChild` on a different parent
- Building the remove button → `createElement` + append

By the time you finish, you won't just have done exercises — you'll have a real working board in your browser.

---

## 🔍 WHAT You're Building

A **three-column Task Board** (To Do / In Progress / Done) that:
- Renders 8 tasks from an array of objects
- Distributes each card into the correct column based on its status
- Shows live task counts in the header
- Adds remove buttons to every card
- Highlights high-priority labels
- Supports adding new tasks dynamically
- Moves a task to Done and marks it visually complete

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in your browser — nothing to edit |
| `style.css` | Already written and explained — nothing to edit |
| `app.js` | All 8 tasks + stretch goal go here |
| `debug.js` | Three bugs to fix — swap the script tag to run them |

To switch to debug mode: in `index.html`, change `<script src="app.js">` to `<script src="debug.js">`.

---

## 🌍 Real-World Connection

Every project management tool — Trello, Jira, Linear, Asana — is built on exactly this pattern:

- Tasks are objects in an array (or database)
- `createElement` + `appendChild` renders each one as a card
- Drag-and-drop moves cards between columns (event listeners + `appendChild`)
- Status changes update both the data AND the DOM

Tonight you're building the core of any Kanban board.

---

## ⚠️ Common Mistakes to Watch For

1. **Calling DOM functions before elements exist** — if `querySelectorAll` returns an empty NodeList, you're calling the function before `renderBoard` has run. Order matters: render first, then augment.

2. **`innerHTML =` in a loop** — replaces the entire content each iteration. Only the last item survives. Always use `appendChild` in a loop.

3. **Wrong selector prefix** — `getElementById("board-title")` needs no prefix. `querySelector` needs `#` for ids and `.` for classes.

4. **Not updating the data array** — when adding a new task, push to the `tasks` array FIRST, then update the DOM. The array is your source of truth.

5. **Off-by-one with NodeList** — `i < list.length`, not `i <= list.length`. Same rule as arrays.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks — the board renders correctly in the browser
- [ ] Fix all 3 debug tasks with explanations as comments
- [ ] Complete the stretch goal — markComplete moves a card to Done
- [ ] Explain out loud why `createElement` + `appendChild` is better than `innerHTML =` in a loop
- [ ] Explain what `dataset` is used for
