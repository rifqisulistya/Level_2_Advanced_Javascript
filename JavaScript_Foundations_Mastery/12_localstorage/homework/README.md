# 💾 localStorage — Homework

---

## 🧠 WHAT You're Practicing

Saving data to localStorage with `JSON.stringify`, reading it back with `JSON.parse`, handling the null case on first load, and clearing data — all applied to a real board that persists across page refreshes.

---

## ❓ WHY This Project?

The Task Board you built across the last two lessons was fully interactive — but every refresh wiped it. That's a broken experience. Tonight you fix it.

After this homework, your Task Board will be genuinely usable: add tasks, mark them complete, close the tab, come back tomorrow — everything is still there.

---

## 🔍 WHAT You're Building

A **Persistent Task Board** where:
- Tasks load from localStorage on page start (or from defaults on first visit)
- Every change (add, complete, remove) is saved immediately
- A save indicator flashes briefly to confirm the save
- Clearing all tasks resets to defaults with a confirmation dialog

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in browser — nothing to edit |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 8 tasks + stretch goal |
| `debug.js` | Three bugs to fix — swap the script tag to run them |

To verify persistence is working: add a task, then press F5 (or Cmd+R). The task should still be there.

---

## 🌍 Real-World Connection

This is exactly how offline-capable apps work:

- **Trello** saves board state to localStorage for offline access
- **Google Docs** saves drafts locally every few seconds
- **Notion** caches page content locally to reduce load time
- **VS Code** saves unsaved file content across crashes using localStorage-like mechanisms

The pattern — load from storage, render, save on every change — is the same in all of them.

---

## ⚠️ Common Mistakes to Watch For

1. **Forgetting `JSON.parse` after `getItem`** — you get a string, not an array. `tasks.length` will be the string's character count, not the number of tasks.

2. **No null check before parsing** — `getItem` returns `null` on first load. `JSON.parse(null)` returns `null`. Then `null.forEach` crashes. Always check `if (!raw)` first.

3. **Not clearing the DOM before re-rendering** — calling `renderBoard()` twice without `innerHTML = ""` duplicates every card. Always clear before a full re-render.

4. **Using `localStorage.clear()` instead of `removeItem`** — `clear()` deletes everything for the domain. `removeItem("taskBoardData")` deletes only your key. Always prefer `removeItem`.

5. **Not copying the defaults array** — `tasks = defaultTasks` creates a reference, not a copy. Mutating `tasks` would also mutate `defaultTasks`. Always use `tasks = [...defaultTasks]`.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks — board persists across refreshes
- [ ] Fix all 3 debug tasks with explanations
- [ ] Complete the stretch goal — active filter persists on refresh
- [ ] Explain the stringify/parse round-trip from memory
- [ ] Explain why the null check is essential on first load
- [ ] Open DevTools → Application → Local Storage and find your saved data
