# 💾 localStorage — Live Class

---

## 🧠 WHAT Is localStorage?

**localStorage** is a key-value store built into every browser. It lets you save data that persists across page refreshes, tab closures, and even browser restarts.

Think of it like a small notepad that lives in the user's browser. You write something down, close the page, come back tomorrow — the note is still there.

```js
localStorage.setItem("username", "Alex"); // write
localStorage.getItem("username"); // read → "Alex"
localStorage.removeItem("username"); // delete one
localStorage.clear(); // delete everything
```

---

## ❓ WHY Does localStorage Exist?

Without localStorage, every page refresh wipes everything the user did. Changed a setting? Gone. Added items to a list? Gone. Logged in? Gone.

localStorage gives users a persistent experience without a server or database — perfect for preferences, saved states, draft content, and simple app data.

---

## 🔍 HOW It Works

### The Four Methods

**`setItem(key, value)`** — saves a value

```js
localStorage.setItem("theme", "dark");
```

**`getItem(key)`** — reads a value (returns `null` if key doesn't exist)

```js
const theme = localStorage.getItem("theme"); // "dark"
```

**`removeItem(key)`** — deletes one specific key

```js
localStorage.removeItem("theme");
```

**`clear()`** — deletes everything for this domain

```js
localStorage.clear(); // use carefully — removes ALL stored data
```

---

### ⚠️ Strings Only — JSON Is Required

localStorage stores **strings only**. Numbers, booleans, arrays, and objects are all converted to strings automatically — which produces useless results without JSON.

```js
// ❌ Storing an object without stringify
localStorage.setItem("user", { name: "Alex" });
localStorage.getItem("user"); // "[object Object]" — useless

// ✅ Correct: stringify before saving, parse after reading
localStorage.setItem("user", JSON.stringify({ name: "Alex", age: 28 }));
const user = JSON.parse(localStorage.getItem("user"));
user.name; // "Alex" ✅
```

The round-trip: `object → JSON.stringify → string → localStorage → getItem → JSON.parse → object`

Always use `stringify` and `parse` together. One without the other breaks.

---

### ⚠️ Always Check for null

`getItem` returns `null` when the key doesn't exist. On the **first load** of your app, nothing is saved yet — every key returns null.

```js
// ❌ Crashes on first load
const data = JSON.parse(localStorage.getItem("profile"));
data.bio; // TypeError: Cannot read properties of null

// ✅ Always check first
const raw = localStorage.getItem("profile");
if (!raw) {
  renderDefaults(); // show something on first visit
  return;
}
const data = JSON.parse(raw);
```

This is the most common localStorage bug. Always guard against null before parsing.

---

### The Load Pattern

Every app that uses localStorage follows the same pattern on startup:

```js
function loadData() {
  const raw = localStorage.getItem("myAppData");
  if (!raw) {
    renderDefaults(); // first visit — nothing saved yet
    return;
  }
  const data = JSON.parse(raw);
  renderFromData(data); // restore saved state
}

loadData(); // call on page start
```

---

### Inspecting localStorage

Open DevTools → **Application** tab → **Local Storage** → your domain.

You can see all saved key-value pairs, edit them, and delete them. Invaluable for debugging.

---

## 🌍 Real-World Usage

- **Dark mode preference** — saved so it persists across visits
- **Shopping cart** — items survive a refresh without logging in
- **Form drafts** — Google Docs auto-saves to localStorage every few seconds
- **Auth tokens** — some apps store login tokens (though cookies are more secure)
- **User settings** — language, font size, layout preferences

---

## ⚠️ Common Mistakes

1. **Storing objects without `JSON.stringify`**

   ```js
   localStorage.setItem("data", myObject); // ❌ saves "[object Object]"
   localStorage.setItem("data", JSON.stringify(myObject)); // ✅
   ```

2. **Reading without `JSON.parse`**

   ```js
   const data = localStorage.getItem("data"); // ❌ a string, not an object
   const data = JSON.parse(localStorage.getItem("data")); // ✅
   ```

3. **Not checking for null on first load**

   ```js
   const data = JSON.parse(localStorage.getItem("key")); // ❌ null on first load
   if (!localStorage.getItem("key")) {
     return;
   } // ✅ check first
   ```

4. **Using `clear()` in production**

   ```js
   localStorage.clear(); // ❌ deletes ALL data for the domain
   localStorage.removeItem("myKey"); // ✅ delete only what you own
   ```

5. **Storing sensitive data**
   localStorage is readable by any JavaScript on the page. Never store passwords, payment info, or sensitive personal data. Use secure cookies or server-side sessions instead.

---

## 📝 sessionStorage — Footnote

`sessionStorage` has the exact same API as localStorage — `setItem`, `getItem`, `removeItem`, `clear`. The only difference: data is cleared when the **tab is closed**.

Use `sessionStorage` for temporary session data (like a multi-step form in progress). Use `localStorage` for data that should persist across sessions.

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Save a string, number, and boolean to localStorage
- [ ] Save and retrieve an object or array using `JSON.stringify` and `JSON.parse`
- [ ] Load saved data on page start and handle the null case
- [ ] Clear a specific key with `removeItem`
- [ ] Explain why `JSON.stringify` / `JSON.parse` are required
- [ ] Find your saved data in DevTools Application tab
