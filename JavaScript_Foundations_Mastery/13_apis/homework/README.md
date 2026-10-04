# 🌐 APIs — Homework

---

## 🧠 WHAT You're Practicing

Reading real API responses, navigating nested JSON, building and parsing URLs with query parameters, matching HTTP methods and status codes to real scenarios.

---

## ❓ WHY This Homework?

The next two lessons — Fetch API and Axios — require you to write actual network requests. This homework makes sure you can read and interpret what comes back before you worry about how to ask for it.

Every bug you'd face in Fetch and Axios is either a network problem or a data navigation problem. This homework trains the data navigation side so when you get to Fetch, you can focus entirely on the new syntax.

---

## 🔍 WHAT You're Building

Not a visual project — a set of exercises that build fluency with API data:

- Exploring real APIs in the browser (JSONPlaceholder + Open-Meteo)
- Navigating deeply nested JSON with dot notation and array indexing
- Using query parameters to filter and paginate results
- Building and parsing URL query strings as functions
- Matching scenarios to status codes
- Analysing a complete user + posts dataset with array methods

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in browser — reference links and quick reference |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 8 tasks + stretch goal |
| `debug.js` | Three bugs to fix — swap the script tag to run them |

---

## 🌐 APIs Used

Both are free, no sign-up, no API key required:

**JSONPlaceholder** — `jsonplaceholder.typicode.com`
Fake but realistic REST API. 100 posts, 10 users, 200 todos. Perfect for learning.

**Open-Meteo** — `api.open-meteo.com`
Real live weather data. Free forever, no key needed.

---

## 🌍 Real-World Connection

Everything in this homework reflects real API work:

- Reading docs to find the right URL → what you do before every fetch call
- Navigating nested JSON → what you do with every API response
- Building query strings → what every search and filter feature does
- Matching status codes → what you do when debugging a failed request

---

## ⚠️ Common Mistakes to Watch For

1. **Shallow access on nested data** — `user.city` when city is at `user.address.city`. Always trace the full path.

2. **Case sensitivity on property names** — `user.Role` vs `user.role`. Copy key names directly from the JSON response.

3. **`data.length` when data is an object** — objects don't have `.length`. Find the array inside the object first: `data.users.length`.

4. **Leading `&` in query strings** — use `.map().join("&")` instead of manually prepending `&` to every key.

5. **Not checking for `?` before splitting a URL** — if the URL has no query params, `.split("?")[1]` is undefined. Always check `url.includes("?")` first.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks with correct console output
- [ ] Fix all 3 debug tasks with explanations
- [ ] Complete the stretch goal `parseUrl` function
- [ ] Explain the difference between a path parameter and a query parameter
- [ ] Explain what 401 vs 403 means without looking it up
- [ ] Navigate any JSON response to any depth using dot and bracket notation
