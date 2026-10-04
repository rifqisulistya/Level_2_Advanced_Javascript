# 🌐 Fetch API — Practice Dashboard

This dashboard is where you practice `fetch()` — the browser's built-in tool for talking to servers. Four real mini-projects, one shared skeleton, zero API keys.

---

## 🧠 WHAT Is `fetch()`?

`fetch()` is a function built into every browser. You hand it a URL; it goes and asks a server for data, without reloading the page.

Think of it like sending a messenger. You don't stand there waiting — you hand `fetch` the address, and it hands you back a **promise**: a placeholder for an answer that isn't ready yet.

```js
fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => console.log(data.name));
```

---

## ❓ WHY Does `fetch()` Exist?

Before `fetch`, browsers used an older tool (`XMLHttpRequest`) that was verbose and callback-heavy. `fetch` is promise-based, built into every browser with no library required, and reads top-to-bottom instead of nesting callbacks inside callbacks.

It's the standard way modern JavaScript talks to APIs — and the four projects on this dashboard are where you'll actually use it against real, live data instead of a textbook example.

---

## 🔍 HOW It Works

### The basic call

`fetch(url)` sends a request and immediately returns a **Promise** — not your data. The data shows up later, inside a `.then`.

```js
fetch(url); // returns a Promise, not the data itself
```

### The two-step `.then` chain

The response you get back isn't your JSON yet — it's a `Response` object wrapping it. `.json()` unwraps the body, and `.json()` ITSELF returns a promise, so it needs its own `.then`:

```js
fetch(url)
  .then((response) => response.json()) // step 1: unwrap the body
  .then((data) => {
    // step 2: your actual data
    console.log(data);
  });
```

### ⚠️ `response.ok` — fetch does NOT reject on a bad status

The single most important fact about `fetch`: the promise only rejects on a **network failure** — no internet, DNS failure, CORS block. A `404`, `403`, or `500` from the server still counts as a "successful" fetch as far as the promise is concerned. `response.ok` will be `false`, but nothing throws on its own.

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`); // you throw it
  }
  return response.json();
});
```

### `.catch` — network failures, and anything YOU throw

```js
fetch(url)
  .then((response) => {
    /* ... */
  })
  .catch((error) => {
    console.log(`❌ ${error.message}`);
  });
```

### Building URLs with query parameters

Search terms, filters, and page sizes get added to the end of a URL with `?` and `&` — build them with a template literal:

```js
const term = "octocat";
fetch(`https://api.github.com/search/repositories?q=${term}&per_page=5`);
```

### Chaining a second request

Two projects on this dashboard (🐙 GitHub, 📚 Code Concepts) fire a **second** `fetch` only after the first one confirms something exists:

```js
fetch(firstURL)
  .then((response) => response.json())
  .then((data) => {
    renderFirstThing(data);
    fetchSecondThing(data.id); // ← only starts now
  });
```

Why sequential instead of firing both at once? If the first request comes back empty, the second one is wasted — and against a rate-limited API, waste is expensive.

---

## 🔒 The Security Rule (memorise this one)

**Never put a personal access token — or any API key — in frontend JavaScript.** Anyone can open DevTools and read it. Every project on this dashboard runs **unauthenticated**. GitHub allows 60 requests/hour per IP (search: ~10/minute) — shared classroom wifi counts as one IP.

---

## 🌍 Real-World Usage — This Dashboard's Four Projects

**Four real mini-projects, one shared skeleton** — `read input → fetch → check the response → render cards → optionally save to localStorage` — wearing four different outfits. Once you've built one, you can read the other three.

| Project                             | APIs                    | What you build                                                                          |
| ----------------------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| 🐙 **GitHub Portfolio Checker**     | GitHub REST             | Look up any username, get a "checks" report on portfolio readiness                      |
| 📚 **Code Concepts** _(live class)_ | Stackover Flow + GitHub | Search a concept, get a plain summary AND real code using it, track what you've learned |
| 🎨 **Palette Builder**              | TheColorAPI             | Generate a color scheme, check every swatch against real WCAG accessibility rules       |
| 🎧 **Podcast Queue**                | iTunes Search           | Search real shows, build a listening queue with notes and completion status.            |

### The three failure styles you'll meet

Real APIs don't fail the same way twice. Notice which project teaches which:

| Style                                | Where you'll meet it                           | Caught by                                    |
| ------------------------------------ | ---------------------------------------------- | -------------------------------------------- |
| **Loud** — error status              | GitHub 404/403 · Wikipedia 404                 | `response.status` checks                     |
| **Quiet** — 200 with nothing         | Podcast search finds zero results              | checking the data, as a message not an error |
| **Quietest** — missing/nested fields | Repo descriptions · `hex.value` · `name.value` | reading the ACTUAL shape, every time         |

`fetch` only rejects on network failure — the other two rows are always yours to check.

- **GitHub REST API** — `docs.github.com/en/rest`
- **Wikipedia REST API** — `en.wikipedia.org/api/rest_v1/`
- **TheColorAPI** — `www.thecolorapi.com` — the contrast math it inspired follows real WCAG 2.1 law
- **iTunes Search API** — `developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/`

---

## ⚠️ Common Mistakes

1. **Forgetting to return the parsed promise**

   ```js
   .then((response) => { response.json(); })  // ❌ parsed... and thrown away
   .then((response) => response.json())       // ✅ implicit return
   ```

2. **Assuming every endpoint from the same API has the same shape**

   ```js
   // GitHub's user-repos endpoint returns a bare array.
   // GitHub's OWN search endpoint wraps results in { items }.
   data.forEach(...)        // ❌ works on one endpoint, breaks on the other
   data.items.forEach(...)  // ✅ check which endpoint you're actually calling
   ```

3. **Trusting a nested value without checking it**

   ```js
   getContrastInfo(color.hex); // ❌ color.hex is an OBJECT, not a string
   getContrastInfo(color.hex.value); // ✅ the string lives one level deeper
   ```

4. **Reading a helper function's return shape wrong**
   ```js
   contrast.onWhite ? "readable" : "not"; // ❌ always truthy — it's an object!
   contrast.onWhite.passesAA ? "readable" : "not"; // ✅ the real answer
   ```

---

## 📝 axios — Footnote

There's also a library called `axios` that wraps the same underlying request with a few conveniences: automatic JSON parsing, and it rejects on bad status codes instead of making you check `response.ok` yourself. Same skills, cleaner syntax, one extra `<script>` tag.

The **axios-practice-package** rebuilds these exact same four projects with `axios` + `async/await` — build the fetch versions first, then compare.

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Explain what `fetch(url)` actually returns, and why you need `.then` to use it
- [ ] Explain why `response.ok` matters — and what happens if you skip it
- [ ] Build a URL with query parameters using a template literal
- [ ] Get YOUR GitHub portfolio report and know what to fix tonight
- [ ] Build 📚 Code Concepts along with the class and explain why it needs TWO requests
- [ ] Generate a palette and explain what `contrast.onWhite.passesAA` actually means
- [ ] Queue a podcast, add a note, mark it completed — and see it all survive a refresh
- [ ] Name the three failure styles and give one dashboard example of each
- [ ] Fix all three debug snippets and explain each bug in a comment
