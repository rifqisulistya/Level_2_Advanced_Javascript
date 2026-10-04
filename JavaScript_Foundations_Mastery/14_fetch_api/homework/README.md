# 🌐 Fetch API — Homework

---

## 🧠 WHAT You're Practicing

Writing complete `fetch` chains with `.then().catch().finally()`, checking `response.ok`, building URLs with query parameters, rendering API data to the DOM, and handling loading states — all with real weather data from a live API.

---

## ❓ WHY This Project?

A weather dashboard is one of the best fetch projects because it uses a real, free, no-key API that returns immediately interesting data. Every city is different, errors are testable, and the loading state pattern is clear because you can actually watch cards appear.

By the end you'll have a fully functional app that fetches live data — not mocked, not copied, real.

---

## 🔍 WHAT You're Building

A **Weather Dashboard** that:
- Fetches current weather for any of 6 cities from Open-Meteo
- Shows a per-city loading card while fetching
- Replaces each loading card with a real weather card on success
- Handles errors gracefully with a visible error message
- Supports fetching all cities at once
- Uses `Promise.all` in the stretch goal for a clean all-or-nothing load

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in browser — nothing to edit |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 8 tasks + stretch goal |
| `debug.js` | Three bugs to fix — swap the script tag to run them |

---

## 🌍 Real-World Connection

Weather dashboards, stock tickers, sports scoreboards — all of these work exactly like this project:

- A data object maps display names to API parameters (city name → lat/lon)
- Each item triggers its own fetch
- A loading placeholder appears immediately, replaced by real data when it arrives
- Errors show inline without breaking the rest of the UI

The `Promise.all` stretch goal is how production apps handle "load everything before showing anything" — dashboards, report pages, and data-heavy views all use it.

---

## ⚠️ Common Mistakes to Watch For

1. **Wrong path to temperature** — Open-Meteo wraps current data in `current_weather`. Always `data.current_weather.temperature`, never `data.temperature`.

2. **Missing `return response.json()`** — forgetting `return` in the first `.then` passes `undefined` to the next step. Always `return response.json()`.

3. **Not checking `response.ok`** — `safeFetch` handles this. Don't skip it in custom fetch chains.

4. **No null check on city lookup** — `CITIES[cityKey]` returns `undefined` for unknown keys. Always check `if (!city)` before accessing `.lat` or `.lon`.

5. **Confusing Promise.all and forEach** — forEach fires requests independently (progressive). Promise.all waits for all (all-or-nothing).

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks — the dashboard fetches real weather
- [ ] Fix all 3 debug tasks with explanations
- [ ] Complete the `fetchAllCitiesParallel` stretch goal
- [ ] Explain out loud why two `.then()` calls are needed
- [ ] Explain the difference between `Promise.all` and a forEach loop of fetches
- [ ] Explain why `response.ok` must be checked manually
