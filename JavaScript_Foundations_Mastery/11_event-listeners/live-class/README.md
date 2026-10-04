# 🎯 Event Listeners — Live Class

---

## 🧠 WHAT Are Event Listeners?

An **event listener** watches a DOM element for something to happen — a click, a keypress, a form submission — and runs a function when it does.

Think of it like a motion sensor. You install it once. Every time someone walks past, it triggers automatically. You don't have to keep checking — it waits and responds.

```js
document.getElementById("theme-btn").addEventListener("click", handleThemeToggle);
//                                        ↑ event type    ↑ function to run
```

---

## ❓ WHY Do Event Listeners Exist?

Without event listeners, web pages can only respond to the initial load. They can't react to what a user does next. Event listeners are what turn a static page into an application — they're the bridge between user action and JavaScript logic.

Every interactive feature on the web uses them: button clicks, form submissions, keyboard shortcuts, live search, drag and drop, scroll effects.

---

## 🔍 HOW They Work

### Basic Syntax

```js
element.addEventListener("eventType", callbackFunction);
```

The callback receives an **event object** automatically — it contains details about what happened.

---

### Common Event Types

**`click`** — user clicks the element
```js
btn.addEventListener("click", handleClick);
```

**`input`** — user types in an input or textarea (fires on every keystroke)
```js
input.addEventListener("input", handleInput);
```

**`change`** — user changes a select or checkbox and moves away
```js
select.addEventListener("change", handleChange);
```

**`submit`** — user submits a form
```js
form.addEventListener("submit", handleSubmit);
```

**`keydown`** — any key is pressed (attach to `document` for global shortcuts)
```js
document.addEventListener("keydown", handleKeyDown);
```

---

### The Event Object

Every callback receives the event object automatically:

```js
function handleClick(event) {
  console.log(event.target);        // the element that was clicked
  console.log(event.target.value);  // the value of an input
  console.log(event.key);           // the key pressed (for keydown)
}
```

---

### event.preventDefault()

Stops the browser's default behavior. Always call it on form submit handlers:

```js
function handleSubmit(event) {
  event.preventDefault(); // stops page reload
  // now handle the submission with JS
}
```

Other uses: preventing anchor tag navigation, controlling checkbox toggles, enabling drag-and-drop targets.

---

### Passing a Function vs Calling It

⚠️ This is the most common event listener mistake:

```js
btn.addEventListener("click", handleClick);   // ✅ passes the function
btn.addEventListener("click", handleClick()); // ❌ calls it immediately, passes undefined
```

The `()` calls the function right away and passes its return value as the callback. Without `()`, you pass the function itself — which is what addEventListener needs.

---

### removeEventListener

Removes a listener you no longer need. You must pass the **exact same function reference**:

```js
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick); // works — same reference

// Anonymous functions CANNOT be removed:
btn.addEventListener("click", function() { ... }); // can never be removed
```

This is why named functions matter — you can't remove what you can't reference.

---

### Event Delegation

Instead of adding a listener to every child element, add one to the parent:

```js
// ❌ Individual listeners — doesn't work for dynamically added elements
skills.forEach(skill => skill.addEventListener("click", remove));

// ✅ Delegation — one listener, covers all children (present AND future)
skillsList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
```

**`event.target`** → the element that was actually clicked (the `<li>`)
**`event.currentTarget`** → the element the listener is attached to (the `<ul>`)

---

## 🌍 Real-World Usage

- **Dark mode toggle** — `click` on a button, `classList.toggle` on the body
- **Live search** — `input` on a text field, filter results on every keystroke
- **Form validation** — `submit` on a form, `preventDefault`, validate fields
- **Keyboard shortcuts** — `keydown` on `document`, check `event.key`
- **Dynamic lists** — delegation on a parent container, handle clicks on children

---

## ⚠️ Common Mistakes

1. **Calling the function instead of passing it**
   ```js
   btn.addEventListener("click", doThing());  // ❌ fires immediately
   btn.addEventListener("click", doThing);    // ✅
   ```

2. **Forgetting `event.preventDefault()` on form submit**
   ```js
   form.addEventListener("submit", function(event) {
     // missing preventDefault → page reloads
   });
   ```

3. **`event.currentTarget` instead of `event.target` in delegation**
   ```js
   list.addEventListener("click", function(event) {
     if (event.currentTarget.tagName === "LI") { ... } // ❌ currentTarget is the list
     if (event.target.tagName === "LI") { ... }         // ✅
   });
   ```

4. **Trying to remove an anonymous listener**
   ```js
   btn.addEventListener("click", function() { ... });
   btn.removeEventListener("click", function() { ... }); // ❌ different reference
   ```

5. **Document-level keydown firing inside inputs**
   ```js
   document.addEventListener("keydown", function(event) {
     if (event.key === "d") toggleDark(); // fires when typing "d" in any input!
   });
   ```

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Add a `click` listener to a button and update the DOM inside it
- [ ] Use `event.target.value` to read an input's current value
- [ ] Use `event.preventDefault()` on a form submit handler
- [ ] Attach a `keydown` listener to `document` and read `event.key`
- [ ] Use event delegation on a parent element
- [ ] Explain the difference between `event.target` and `event.currentTarget`
- [ ] Explain why you pass a function reference and not a call
- [ ] Remove an event listener with `removeEventListener`
