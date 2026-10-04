not# 📦 Data Types — Live Class

---

## 🧠 WHAT Are Data Types?

Every value in JavaScript has a type. Knowing the type tells you what you can do with the value and how JavaScript will behave when you combine values.

```js
typeof "hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"  ← historic JS bug
```

---

## 🔍 The Five Types You Use Every Day

**`string`** — text, always in quotes (single, double, or backtick)

```js
"hello"   'world'   `template`
```

**`number`** — integers, decimals, and special values

```js
42   3.14   -7   Infinity   NaN
```

**`boolean`** — only ever `true` or `false`

**`undefined`** — a variable that was declared but never assigned a value

**`null`** — intentionally set to "no value" by a developer

---

## 🔍 Template Literals ← The Big Upgrade

Template literals use backticks and embed expressions with `${}`. Use them instead of string concatenation from now on.

```js
// Old way — tedious to read and write
"Hello, " +
  firstName +
  "! You are " +
  age +
  " years old."
  // Template literal — clean and readable
  `Hello, ${firstName}! You are ${age} years old.`;
```

Any JavaScript expression works inside `${}`:

```js
`Total: $${(price * 1.08).toFixed(2)}``Status: ${isAdmin ? "Admin" : "User"}``Items: ${items.length}`;
```

Multiline without escape characters:

```js
const card = `=== Profile ===
Name: ${name}
Email: ${email}`;
```

---

## 🔍 Essential String Methods

```js
"  hello  ".trim(); // "hello"
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"
"hello".length; // 5
"hello world".includes("world"); // true
"hello".startsWith("he"); // true
"hello".endsWith("lo"); // true
"hello".slice(1, 3); // "el".  array.slice(start, end)
"a,b,c".split(","); // ["a","b","c"]
```

Capitalising the first letter (no built-in method):

```js
const cap = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
```

---

## 🔍 Type Coercion — How JS Converts Types

JavaScript sometimes converts types automatically. The `+` operator is the main danger zone:

```js
"10" + 5; // "105"  ← + with a string → concatenation
"10" - 5; // 5      ← - forces numeric conversion
"10" * 2; // 20     ← same
true + 1; // 2      ← true coerces to 1
false + "!"; // "false!" ← string wins with +
```

**Rule:** `+` with any string → string concatenation. Every other arithmetic operator → numeric conversion.

**Always convert explicitly before doing arithmetic on form input:**

```js
const price = Number(inputValue); // fails completely if not numeric
const px = parseInt("42px"); // extracts 42, stops at "p"
const dec = parseFloat("3.14em"); // extracts 3.14
```

---

## 🔍 The Six Falsy Values

Memorise these — they're the only values that behave as `false` in an `if` statement:

```
false   0   ""   null   undefined   NaN
```

Everything else is **truthy** — including `"0"`, `"false"`, `[]`, `{}`.

```js
Boolean("0"); // true  ← non-empty string
Boolean([]); // true  ← arrays are always truthy
Boolean(0); // false ← the number zero
```

---

## 🔍 `null` vs `undefined`

```js
let score = null; // intentionally empty — developer said "no value"
let lastLogin; // undefined — never assigned

typeof null; // "object" ← JS bug, use === null to check
typeof undefined; // "undefined"
```

Both are falsy. Both mean "no value." The difference is intent:

- `null` = someone explicitly set it to nothing
- `undefined` = it was never set

---

## 🔍 `==` vs `===`

Always use `===`. It compares type AND value with no conversion.

```js
1 == "1"; // true  ← converts "1" to 1 first
1 === "1"; // false ← different types, full stop

0 == false; // true
0 === false; // false
```

The **one legitimate use of `==`**: checking for both `null` and `undefined`:

```js
if (value == null) { ... }
// equivalent to: if (value === null || value === undefined)
```

---

## ⚠️ Common Mistakes

1. **Adding a number to a string from a form**

   ```js
   const price = "19.99"; // from input
   price + tax; // ❌ "19.99 + tax" → concatenation
   parseFloat(price) + tax; // ✅
   ```

2. **Checking null but forgetting undefined**

   ```js
   if (score === null)  { ... } // ❌ misses undefined
   if (score == null)   { ... } // ✅ catches both
   ```

3. **Using NaN in arithmetic without checking**

   ```js
   const age = parseInt("twenty"); // NaN
   2025 - age; // NaN — silently wrong
   if (isNaN(age)) {
     return "Invalid";
   } // ✅ guard first
   ```

4. **Thinking "0" is falsy** — `"0"` is a non-empty string → truthy. `0` is falsy.

5. **typeof null === "object"** — always use `=== null` to check for null, not `typeof`.

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Name the 5 main primitive types and give an example of each
- [ ] Write template literals with embedded expressions
- [ ] Use `.trim()`, `.toLowerCase()`, `.includes()`, `.split()`, `.slice()`
- [ ] Explain what type coercion is and when `+` causes problems
- [ ] Convert between types explicitly with `Number()`, `parseInt()`, `String()`
- [ ] Name the six falsy values from memory
- [ ] Explain the difference between `null` and `undefined`
- [ ] Explain why `===` is preferred over `==`
