# 🖥️ DOM Manipulation — Live Class

---

## 🧠 WHAT Is the DOM?

The **DOM (Document Object Model)** is the browser's representation of your HTML page as a JavaScript object you can read and modify.

When the browser loads your HTML, it builds a tree of objects — one for every element. JavaScript can reach into that tree, grab any element, and change its text, styles, attributes, or structure.

Think of it like this: your HTML file is a blueprint. The DOM is the actual building. JavaScript is the renovation crew — it can change anything in the building at any time, without touching the original blueprint.

```
HTML file (blueprint)          DOM (living building)
─────────────────────          ─────────────────────
<body>                         document.body
  <h1 id="title">...</h1>  →   document.getElementById("title")
  <ul id="list">             →   document.getElementById("list")
    <li>Item 1</li>            .children[0]
  </ul>
</body>
```

---

## ❓ WHY Does DOM Manipulation Exist?

Without DOM manipulation, web pages are static — they show the same content no matter what. DOM manipulation is what makes pages **dynamic**: updating in response to data, user actions, or time.

Every modern web feature uses it: showing search results, toggling a menu, updating a cart total, rendering a post feed, showing an error message.

---

## 🔍 HOW It Works

### Selecting Elements

Always select before you modify.

```js
// getElementById — by id, no # prefix
const titleEl = document.getElementById("page-title");

// querySelector — first match, CSS selector syntax
const nameEl = document.querySelector("#user-name");
const firstBtn = document.querySelector("button");
const firstCard = document.querySelector(".card");

// querySelectorAll — all matches, returns a NodeList
const allStats = document.querySelectorAll(".stat");
allStats.forEach((stat) => console.log(stat));
```

Store selections in `const` — the element reference won't change, only its contents.

---

### Changing Content

```js
// textContent — safe, treats everything as plain text
element.textContent = "Hello, Alex!";

// innerHTML — renders actual HTML markup
element.innerHTML = "<strong>Bold text</strong>";
```

⚠️ **Never use `innerHTML` with user-provided data.** An attacker can inject malicious scripts. `textContent` escapes everything — it's always safe for user-facing text.

---

### Changing Styles

```js
// Inline style — direct CSS property (camelCase)
element.style.backgroundColor = "#4f46e5";
element.style.fontSize = "1.5rem";

// classList — add, remove, or toggle CSS class names
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("dark"); // adds if absent, removes if present
element.classList.contains("dark"); // true or false
```

**Prefer `classList` over inline styles** for predefined states. Write the CSS once, let JS control which classes are active. Cleaner separation of concerns.

---

### Creating and Inserting Elements

```js
// 1. Create
const li = document.createElement("li");

// 2. Configure
li.textContent = "JavaScript";
li.classList.add("skill-tag");

<ul id="parent">
<li class="skill-tag">First</li>

<ul>



// 3. Insert
parent.appendChild(li);   // adds as LAST child
parent.prepend(li);        // adds as FIRST child

// Remove
li.remove();               // removes from the DOM entirely
```

---

## 🌍 Real-World Usage

- **React, Vue, Angular** — all frameworks compile down to DOM manipulation under the hood
- **Search results** — each result is a `createElement` + `appendChild` in a loop
- **Dark mode** — `classList.toggle("dark")` on the body
- **Notifications** — `createElement` a toast, `appendChild` to body, `remove()` after 3 seconds
- **Cart updates** — select the total element, set its `textContent` to the new value

---

## ⚠️ Common Mistakes

1. **`getElementById` with a `#` prefix**

   ```js
   document.getElementById("#page-title"); // ❌ returns null
   document.getElementById("page-title"); // ✅
   ```

2. **`innerHTML` with user data (XSS risk)**

   ```js
   nameEl.innerHTML = userInput; // ❌ dangerous
   nameEl.textContent = userInput; // ✅ safe
   ```

3. **Forgetting to check for null before using an element**

   ```js
   const el = document.getElementById("missing-id"); // null
   el.textContent = "Hi"; // ❌ TypeError: Cannot set properties of null
   if (el) {
     el.textContent = "Hi";
   } // ✅
   ```

4. **Wrong selector in querySelector**

   ```js
   document.querySelector("button"); // ❌ looks for a <skills-list> tag
   document.querySelector("#skills-list"); // ✅ looks for id="skills-list"
   document.querySelector(".skills-list"); // ✅ looks for class="skills-list"
   ```

5. **Using innerHTML in a loop (slow and risky)**

   ```js
   // ❌ re-parses entire innerHTML every iteration
   list.innerHTML += "<li>" + item + "</li>";

   // ✅ createElement + appendChild
   const li = document.createElement("li");
   li.textContent = item;
   list.appendChild(li);
   ```

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Explain what the DOM is in plain English
- [ ] Select elements using `getElementById`, `querySelector`, `querySelectorAll`
- [ ] Update text content with `textContent`
- [ ] Explain when NOT to use `innerHTML`
- [ ] Add and remove CSS classes with `classList`
- [ ] Toggle a class and check if a class is active
- [ ] Create a new element, set its content, and append it to the page
- [ ] Remove an element from the DOM
- [ ] Wrap all DOM operations inside named functions
