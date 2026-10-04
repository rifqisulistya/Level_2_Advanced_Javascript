# ⚙️ Functions — Live Class

---

## 🧠 WHAT Are Functions?

A **function** is a reusable, named block of code. You write the logic once, give it a name, and call it as many times as you need — with any input you choose.

Think of it like a recipe. Written once. Used whenever you want that dish. The ingredients (inputs) change — the recipe (logic) stays the same.

```js
function calculateTax(price, taxRate) {
  return price * taxRate;
}

calculateTax(100, 0.08); // 8
calculateTax(250, 0.1); // 25
calculateTax(49.99, 0.05); // 2.4995
```

---

## ❓ WHY Do Functions Exist?

Without functions, you copy-paste logic. Copy-pasted code is how bugs are born — fix it in one place, forget the other nine. Functions enforce the **DRY principle: Don't Repeat Yourself**.

---

## 🔍 THE FOUR WAYS TO DEFINE A FUNCTION

JavaScript gives you four ways to write a function. They all package reusable logic — they differ in syntax, hoisting, and when to use them.

---

### 1. Function Declaration

```js
function square(n) {
  return n * n;
}
```

- Has a name
- **Hoisted** — can be called before it appears in the file
- Best for: main named functions in your program

---

### 2. Function Expression

```js
const square = function (n) {
  return n * n;
};
```

- Stored in a variable (const or let)
- **Not hoisted** — must be declared before calling
- The function itself may or may not have a name (above it doesn't — it's anonymous)
- Best for: functions you assign conditionally, export, or pass around as values

---

### 3. Anonymous Function

```js
[1, 2, 3].forEach(function (num) {
  console.log(num);
});
```

- **No name** — exists only as the value being passed in
- You have been writing these since Lesson 9 without knowing the term
- Every `function(movie) { ... }` callback you passed to `forEach`, `map`, `filter` — those are anonymous functions
- Best for: one-time callbacks where a name adds no value

---

### 4. Arrow Function

```js
// With braces — explicit return required
const square = (n) => {
  return n * n;
};

// One-liner — implicit return (no braces, no return keyword)
const square = (n) => n * n;
```

- Stored in a variable
- **Not hoisted**
- Shortest syntax — ideal for short transformations
- One-liner only works when the body is a **single expression**
- Best for: array method callbacks, short utility functions

---

### Side-by-Side Comparison

All four doing the exact same thing:

```js
// Declaration
function squareA(n) {
  return n * n;
}

// Expression (anonymous function stored in a variable)
const squareB = function (n) {
  return n * n;
};

// Anonymous (passed directly, no variable)
[5].map(function (n) {
  return n * n;
});

// Arrow — one-liner
const squareC = (n) => n * n;
```

**Declaration**

- Has its own name ✅ — Hoisted ✅ — Not stored in a variable
- Use for: main named functions in your program

**Expression**

- Stored in a variable ✅ — Not hoisted ❌ — The function itself may be anonymous
- Use for: functions you assign, export, or pass around as values

**Anonymous**

- No name ❌ — Not hoisted ❌ — Not stored in a variable
- Use for: one-time callbacks passed directly to array methods

**Arrow**

- Stored in a variable ✅ — Not hoisted ❌ — Implicit return when no braces ✅
- Use for: short transformations, array method callbacks, modern style

---

## Other Key Concepts

### Parameters vs Arguments

```js
function greet(name) { ... }  // name = PARAMETER (the placeholder)
greet("Alex");                 // "Alex" = ARGUMENT (the actual value)
```

### Return Values

```js
function add(a, b) {
  return a + b; // sends the result back to the caller
}
const result = add(3, 4); // result = 7
```

Without `return`, a function gives back `undefined` — **silently**. Always make sure every branch returns something.

### Default Parameters

```js
function createTag(username, role = "member") {
  return "[" + role.toUpperCase() + "] " + username;
}
createTag("alex"); // "[MEMBER] alex"
createTag("alex", "admin"); // "[ADMIN] alex"
```

### Ternary Operator

```js
// Long form
if (age >= 18) {
  return "Adult";
} else {
  return "Minor";
}

// Ternary — same logic, one line
return age >= 18 ? "Adult" : "Minor";
```

Use when: exactly **two** outcomes, each a simple value.
Avoid when: logic is complex or needs more than two branches.

### Passing Functions vs Calling Them

```js
const isAboveFive = (n) => n > 5;

numbers.filter(isAboveFive); // ✅ passes the function itself
numbers.filter(isAboveFive()); // ❌ calls it immediately, passes the result (false)
```

---

## 🌍 Real-World Usage

- **Utility libraries** — `formatCurrency(amount)`, `slugify(title)`
- **Validation** — `isValidEmail(email)`, `isStrongPassword(pwd)`
- **Transformation** — `celsiusToFahrenheit(c)`, `formatDate(ts)`
- **Factory functions** — `createUser(name, email)` returns a new object
- **Array method callbacks** — every `.map()`, `.filter()`, `.reduce()` you write

---

## ⚠️ Common Mistakes

1. **Calling an arrow/expression before declaring it**

   ```js
   greet("Alex"); // ❌ ReferenceError
   const greet = (name) => "Hi " + name;
   ```

2. **Arrow with braces but no return**

   ```js
   const double = (n) => {
     n * 2;
   }; // ❌ undefined
   const double = (n) => {
     return n * 2;
   }; // ✅
   const double = (n) => n * 2; // ✅ no braces = implicit return
   ```

3. **Expecting a primitive to change inside a function**

   ```js
   function addTen(n) {
     n += 10;
   }
   let x = 5;
   addTen(x);
   console.log(x); // still 5 — numbers are passed by value (copied)
   ```

4. **Missing fallback return**

   ```js
   function getGrade(score) {
     if (score >= 60) {
       return "Pass";
     }
     // if score < 60: no return → undefined
   }
   ```

5. **Passing a called function instead of the function itself**
   ```js
   numbers.filter(isEven()); // ❌ passes false (the result)
   numbers.filter(isEven); // ✅ passes the function
   ```

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Write a function four ways: declaration, expression, anonymous, arrow
- [ ] Explain what hoisting means and which function types are hoisted
- [ ] Explain the difference between a parameter and an argument
- [ ] Return a value and explain what happens without `return`
- [ ] Write a default parameter
- [ ] Use the ternary operator for simple two-outcome returns
- [ ] Pass a named function to an array method without calling it
- [ ] Explain when to choose each function style
