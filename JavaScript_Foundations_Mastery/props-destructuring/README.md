# 🧩 Passing Props & Destructuring

---

## 🧠 WHAT Are Props?

**Props** (short for "properties") are the data and behavior you pass INTO a function from outside — the inputs that let one component work for many different situations instead of just one.

Without props, a component hardcodes everything it needs, which means it only ever works for one specific case:

```js
// ❌ Hardcoded — only ever shows Alex
function MemberCard() {
  const card = document.createElement("div");
  card.textContent = "Alex Rivera — Senior Engineer";
  return card;
}
```

With props, the same function works for anyone, because the data comes from outside instead of being written into the function body:

```js
// ✅ Reusable — works for any member
function MemberCard(props) {
  const card = document.createElement("div");
  card.textContent = props.member.name + " — " + props.member.role;
  return card;
}

MemberCard({ member: alex }); // "Alex Rivera — Senior Engineer"
MemberCard({ member: sofia }); // "Sofia Patel — Lead Designer"
```

Props aren't just data, either — a function can also receive **behavior**, in the form of a callback function it's expected to call:

```js
function MemberCard(props) {
  const btn = document.createElement("button");
  btn.addEventListener("click", function () {
    props.onContact(props.member.email); // notify — don't decide
  });
  return btn;
}
```

`MemberCard` doesn't decide what "Contact" means. It just calls whatever function it was handed. That's the core rule: **a component reads its props and calls its callbacks — it doesn't make its own decisions about what should happen.** The exact same `MemberCard` could log to a console, open a modal, or send an email, depending only on which function gets passed in as `onContact`.

---

## 🧠 WHAT Is Destructuring?

**Destructuring** is shorthand syntax for pulling values out of an object or array directly into named variables — it doesn't do anything new, it's just a shorter way of writing something you could already do with dot notation.

```js
// The long way
const name = member.name;
const role = member.role;

// Destructuring — same result, one line
const { name, role } = member;
```

Object destructuring works by property name, so order doesn't matter — `{ role, name }` and `{ name, role }` pull out the exact same values. It also works on **nested** objects, mirroring the shape of the data:

```js
const member = {
  name: "Alex",
  address: { city: "Austin", country: "USA" },
};

const {
  name,
  address: { city, country },
} = member;
// name = "Alex", city = "Austin", country = "USA"
// ⚠️ address itself is NOT created as a variable — only city and
//    country are. address is the PATH you walked through, not a result.
```

Array destructuring works the same way but is **position-based** instead of name-based — the variable in slot 0 gets index 0, and so on:

```js
let first = "Alex";
let last = "Rivera";
[first, last] = [last, first]; // swap — no temp variable needed
```

---

## ❓ WHY Learn Them Together?

Because destructuring a function's **parameter** is exactly what a real component's props declaration looks like, in every major framework:

```js
// What you'll build:
function MemberCard({ member: { name, role }, onContact }) { ... }

// A React component:
const MemberCard = ({ member: { name, role }, onContact }) => (...);

// A Vue component's props, destructured the same way:
const { name, role } = defineProps(["name", "role"]);
```

Same shape, everywhere. Teaching destructuring as a **refactor** of a props-based function you already built — rather than as an unrelated syntax topic — is what makes that connection click.

---

## 🔍 HOW the Refactor Works

Here's the same function, before and after:

```js
// Before — props the plain way
function MemberCard(props) {
  const nameEl = document.createElement("h3");
  nameEl.textContent = props.member.name;

  const contactBtn = document.createElement("button");
  contactBtn.addEventListener("click", function () {
    props.onContact(props.member.email);
  });
  // ...
}

// After — same body, destructured signature
function MemberCard({ member: { name, email }, onContact }) {
  const nameEl = document.createElement("h3");
  nameEl.textContent = name;

  const contactBtn = document.createElement("button");
  contactBtn.addEventListener("click", function () {
    onContact(email);
  });
  // ...
}
```

Nothing about the function's _behavior_ changed — every `props.member.x` became a bare variable, `props.onContact` became `onContact`. Only how you **reach** each value changed.

The important part: **the call site doesn't need to change at all.**

```js
// This line works identically with EITHER version of MemberCard above:
MemberCard({ member: alex, onContact: handleContact });
```

Destructuring is a receiving-end shorthand — it changes how a function unpacks what it was given, not what the caller has to provide.

### Prop threading

A component can also receive a callback and pass it straight down to something else it renders, without ever calling it:

```js
function TeamList(props) {
  props.members.forEach(function (member) {
    const card = MemberCard({
      member: member,
      onContact: props.onContact, // threaded through, untouched
    });
    // ...
  });
}
```

`TeamList` doesn't know or care what `onContact` does — it just passes it along. This is called **prop threading**, and it's how data and behavior flow through multiple layers of components in a real app.

---

## 🌍 Real-World Connection

This is the actual foundation of every component-based UI framework:

- **React** — `<MemberCard member={alex} onContact={handleContact} />`, received as `({ member, onContact }) => ...`
- **Vue** — props declared and destructured the same way
- **Svelte** — component props are just destructured function arguments under the hood

The syntax around it differs slightly between frameworks. The underlying idea — data and behavior in, decisions made by the caller, unpacked via destructuring — is identical to what you just built.

---

## ⚠️ Common Mistakes

1. **Hardcoding behavior instead of using the callback**

   ```js
   btn.onclick = () => console.log(email); // ❌ only ever does this
   btn.onclick = () => props.onContact(email); // ✅ caller decides
   ```

2. **Assuming the call site needs to change after destructuring**

   ```js
   // Both work with the destructured MemberCard — nothing to update:
   MemberCard({ member: alex, onContact: handleContact });
   ```

3. **Destructuring the wrong level of a nested object**

   ```js
   const { city } = member; // ❌ city is nested inside address
   const {
     address: { city },
   } = member; // ✅
   ```

4. **Mutating a prop instead of reading it**

   ```js
   props.member.name = props.member.name.toUpperCase(); // ❌ mutates the source
   const displayName = props.member.name.toUpperCase(); // ✅ derive locally
   ```

5. **Rest/spread outside of a single destructuring pattern**
   ```js
   const { name } = obj, ...rest = obj;  // ❌ syntax error
   const { name, ...rest } = obj;        // ✅ one pattern, together
   ```

---

The live class builds one `MemberCard` component, first with plain props, then refactored to use destructuring — plus one nested-destructuring example outside of props, and a quick look at array destructuring. The homework extends the same component into a small team list, adding prop threading and two more destructuring patterns: rest and default values.

---

## ✅ What You Should Be Able To Do

- [ ] Explain what props are and why they let a component be reused
- [ ] Build a component that accepts a data prop
- [ ] Build a component that accepts a callback prop, and explain the "notify, don't decide" rule
- [ ] Explain what destructuring is and how it differs from dot notation
- [ ] Refactor a props-based function to use a destructured parameter
- [ ] Explain why the call site doesn't need to change after that refactor
- [ ] Destructure a nested object, both inside and outside of a props context
- [ ] Recognize the array-destructuring swap pattern
- [ ] Thread a callback prop through an intermediate component
- [ ] Use rest and default values in a destructuring pattern
