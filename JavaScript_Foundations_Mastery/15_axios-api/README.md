# ⚡ Axios — Practice Dashboard

This dashboard is where you practice `axios` — a small library that wraps the browser's `fetch()` with a few conveniences. Same four mini-projects as the Fetch dashboard, same look — rebuilt with `axios` + `async/await`.

---

## 🧠 WHAT Is `axios`?

`axios` is a JavaScript library — not built into the browser like `fetch` — that sends the same kind of request, but hands back an **already-parsed** response and automatically **rejects on bad status codes**.

```js
async function getUser() {
  const response = await axios.get("https://api.github.com/users/octocat");
  console.log(response.data.name); // already parsed — no .json() step
}
```

---

## ❓ WHY Use `axios` Instead of `fetch`?

`fetch` makes you do two things by hand, every single time: check `response.ok` yourself, and call `.json()` yourself. `axios` does both automatically — less boilerplate, same underlying request.

The tradeoff: `axios` isn't built into the browser, so it needs to be loaded from a CDN before your own script runs. You're trading one extra `<script>` tag for less repeated code.

---

## 🔍 HOW It Works

### What's a CDN, and why does axios come from one here?

A **CDN (Content Delivery Network)** is a network of servers that host popular files — libraries, fonts, icons — so any website can load them with a single `<script>` tag, instantly, with nothing to install.

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

That one line downloads axios directly into the browser the moment the page loads. There's no install step, no build tool, no `node_modules` folder — which is exactly why it's the right choice for pages like these four, opened straight in a browser with no build process behind them.

### Script order matters

Every project's `index.html` on this dashboard loads **two** scripts, in this order:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="app.js"></script>
```

The CDN script has to load FIRST — it's what creates the global `axios` object that `app.js` immediately starts using. Swap the order and every project breaks with `axios is not defined` — one of the most common real-world setup errors. Now you've seen why it happens.

### CDN vs `npm install` — what's actually different

In a real production app, most teams install axios with **npm** instead of a CDN:

```bash
npm install axios
```

That downloads axios into a local `node_modules` folder inside your own project, and you bring it into your code with an `import` instead of a script tag:

```js
import axios from "axios";
```

| | CDN `<script>` tag | `npm install` |
| --- | --- | --- |
| Where axios lives | Fetched fresh from a remote server | Downloaded once into your project's files |
| Setup needed | None — one `<script>` tag | Node.js + npm, and usually a bundler (Vite, webpack) |
| Works by just double-clicking the HTML file? | Yes | No — `import` needs a build step first |
| Version control | Pin a version in the URL, or it can drift | Locked exactly in `package.json` |
| Best for | Learning, prototypes, simple static pages | Real production apps with a build pipeline |

Same library, same `axios.get(...)` calls either way — the API doesn't change. The only thing that changes is HOW axios gets into your page in the first place. These four projects use a CDN because it's the fastest path from zero to a working page; once you're building apps with a bundler, `npm install` becomes the default.

### `await` — no more `.then` chains

Every request becomes one line, inside an `async` function:

```js
async function getUser() {
  const response = await axios.get(url);
  console.log(response.data);
}
```

`await` pauses the function until the promise resolves. `async` is what allows `await` to be used at all — without it, `await` is a syntax error.

### `response.data` — already parsed for you

`fetch` needed a separate `.json()` step. `axios` skips it: the parsed body is already sitting at `response.data`.

```js
const response = await axios.get(url);
response.data; // parsed JSON — no .json() call needed
```

### `try` / `catch` — where the status checks used to be

`axios` rejects the promise automatically on a `404`, `403`, or any other error status — so those checks move into `catch`, reading `error.response.status`:

```js
async function getUser(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    console.log(response.data.login);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("User not found");
    } else if (error.response) {
      console.log(`Request failed: ${error.response.status}`);
    } else {
      console.log(`Network error: ${error.message}`); // no response at all
    }
  }
}
```

`error.response` exists when the server actually answered with an error. It's **missing** entirely on a true network failure — always guard with `&&` before reading `.status`, or a network error crashes your catch block too.

### What `axios` still can't do for you

A `200` response with an empty result, or a field that's simply missing from the data, never triggers `catch` — no matter which tool fetched it. `axios` only automates the LOUD failures (bad status codes). The quiet ones — zero search results, `hex.value` nested two levels deep, a repo with no description — are still yours to check, exactly like they were with `fetch`.

---

## 🔒 The Security Rule (still applies)

**No tokens in frontend JavaScript, ever.** Every project on this dashboard runs unauthenticated. GitHub's 60-requests-per-hour limit still applies — but now a `403` lands in your `catch` automatically instead of needing a manual `response.status` check.

---

## 🌍 Real-World Usage — The Same Four Projects

| Project | APIs | What changes from the fetch version |
| --- | --- | --- |
| 🐙 **GitHub Portfolio Checker** | GitHub REST | The three `throw` statements (404 / 403 / generic) become `catch` branches |
| 📚 **Code Concepts** *(live class)* | Stack Overflow + GitHub | Same two-request chain, now with `await` twice — no 404 branch left, since Stack Overflow doesn't error on zero results |
| 🎨 **Palette Builder** | TheColorAPI | Barely changes — this API rarely errors either way |
| 🎧 **Podcast Queue** | iTunes Search | The zero-results check stays a message, not a `catch` |

Your component functions, all `localStorage` code, and all event wiring copy over **unchanged** across every project — only the request functions get rebuilt. Count how many lines in each file are identical to its fetch version; that count is the argument for keeping your data layer separate from your UI layer.

### The failure styles, now split by who catches them

| Style | Where you'll meet it | Who catches it now |
| --- | --- | --- |
| **Loud** — error status | GitHub 404/403 | **axios**, automatically — `catch` |
| **Quiet** — 200 with nothing | Podcast search finds zero results · Stack Overflow search finds zero results | **still you** — a data check, not a catch |
| **Quietest** — missing/nested fields | Repo descriptions · `hex.value` · `name.value` | **still you** — always |

---

## ⚠️ Common Mistakes

1. **Missing `await`**
   ```js
   const response = axios.get(url);        // ❌ a pending Promise — no .data yet
   const response = await axios.get(url);  // ✅
   ```

2. **Reading `error.status` instead of `error.response.status`**
   ```js
   error.status === 404              // ❌ always undefined — silently never matches
   error.response.status === 404     // ❌ crashes on a real network failure (no .response)
   error.response && error.response.status === 404  // ✅ path AND guard
   ```

3. **Comparing `dataset` values to numbers without converting**
   ```js
   item.id === event.target.dataset.id   // ❌ dataset values are always strings
   item.id === Number(event.target.dataset.id)  // ✅
   ```

4. **Still trusting a nested or missing value**
   ```js
   response.data.product.nutriscore_grade;  // ❌ axios changes nothing here
   response.data.product.nutriscore_grade || "not rated";  // ✅ still your job
   ```

---

## 📝 fetch — Footnote

Everything here is a rebuild of the **fetch-practice-package** — same four projects, same pages, same CSS. If you haven't built those yet, start there: `fetch` is what every browser has built in, with no library and no script-order trap to remember. `axios` is worth learning because real teams use it, not because `fetch` is somehow wrong.

---

## ✅ Today's Goal

By the end of this session you should be able to:

- [ ] Explain what a CDN is, and why this dashboard loads axios from one instead of using npm
- [ ] Explain what `response.data` replaces from the fetch version, and why it's already there
- [ ] Point to where your fetch-version `throw` statements went, across all four projects
- [ ] Explain why `error.response &&` has to come before reading `.status`
- [ ] Rebuild all four projects — each behaves identically to its fetch version
- [ ] Say which failure styles axios took over — and which it can never take
- [ ] Fix all three debug snippets and explain each bug in a comment
