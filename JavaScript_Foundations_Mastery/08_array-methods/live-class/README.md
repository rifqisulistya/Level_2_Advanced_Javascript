# 🔧 Array Methods — Live Class

---

## 🧠 WHAT Are Array Methods?

Array methods are **built-in functions** that come with every JavaScript array. They let you loop, transform, filter, search, and reduce arrays — without writing manual `for` loops.

You already know HOW to do all of these things. You've been doing them for four lessons. Array methods are just a cleaner, safer, more readable way to write the same logic.

```js
// Manual for loop — works, but verbose
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

// reduce — same result, intention is clearer
const total = prices.reduce(function (acc, price) {
  return acc + price;
}, 0);
```

---

## ❓ WHY Do Array Methods Exist?

Three reasons:

1. **No more off-by-one errors** — no `i < vs <=`, no manual index management
2. **Intention is explicit** — `filter` says "I'm filtering". A `for` loop with an `if` inside says nothing until you read every line
3. **Chainable** — `filter().map()` reads like English. Manual loops can't chain

---

## 🔍 HOW They Work

Every array method takes a **callback function** — a function you write that runs once per element. The method handles the looping. You just describe what to do with each element.

```js
array.methodName(function (element) {
  // your logic here
});
```

---

### forEach — iterate (replaces basic for loop)

```js
movies.forEach(function (movie) {
  console.log(movie.title);
});
```

Runs your function for every element. Returns **nothing** — use it for side effects like logging or updating external values.

---

### map — transform (returns a new array)

```js
const titles = movies.map(function (movie) {
  return movie.title; // ⚠️ must return!
});
// ["Inception", "The Dark Knight", ...]
```

Creates a **new array** of the same length. Every element is transformed by your function. The original array is untouched. **Must return** from the callback — forgetting `return` fills the new array with `undefined`.

---

### filter — select (returns a new array)

```js
const sciFi = movies.filter(function (movie) {
  return movie.genre === "Sci-Fi"; // ⚠️ must return true/false!
});
```

Creates a **new array** containing only elements where your function returns `true`. Original is untouched. **Must return** a boolean condition.

---

### find — search (returns one element or undefined)

```js
const movie = movies.find(function (movie) {
  return movie.id === 4;
});
// returns the first matching object, or undefined
```

Returns the **first** element that passes the test. Unlike `filter`, it returns the element itself — not an array.

---

### some and every — ask questions (return true/false)

```js
const hasAction = movies.some(function (m) {
  return m.genre === "Action";
});
const allWatched = movies.every(function (m) {
  return m.watched === true;
});
```

`some` → true if **at least one** element passes  
`every` → true only if **all** elements pass

---

### reduce — accumulate (returns one value)

```js
const total = prices.reduce(function (acc, price) {
  return acc + price;
}, 0);
```

The accumulator (`acc`) carries the running result. Always provide the **initial value** as the second argument — without it, `acc` starts as the first element, which causes bugs when working with objects.

---

### Method Chaining

Methods can be chained — the output of one feeds directly into the next:

```js
const watchlist = movies
  .filter(function (m) {
    return !m.watched;
  })
  .map(function (m) {
    return m.title;
  });
```

This replaces a manual loop with a push — cleanly, in two lines.

---

### Arrow Function Syntax (preview)

You'll often see callbacks written as arrow functions:

```js
movies.forEach((movie) => console.log(movie.title));
movies.map((movie) => movie.title);
movies.filter((movie) => movie.rating >= 8.5);
```

We cover arrow functions fully in the **Functions** lesson. Both syntaxes produce identical results.

---

## 🌍 Real-World Usage

- **Social feed:** `.filter()` removes blocked users, `.map()` transforms posts into rendered components
- **Shopping cart:** `.reduce()` calculates the total, `.some()` checks if any item is out of stock
- **Search:** `.filter()` narrows results as you type
- **Dashboard:** `.map()` transforms raw data into chart-ready format
- **API responses:** almost always an array of objects — all these methods apply immediately

---

## ⚠️ Common Mistakes

1. **Forgetting `return` in `map`**

   ```js
   const upper = names.map(function (n) {
     n.toUpperCase();
   }); // ❌ all undefined
   const upper = names.map(function (n) {
     return n.toUpperCase();
   }); // ✅
   ```

2. **Forgetting `return` in `filter`**

   ```js
   const cheap = prices.filter(function (p) {
     p < 10;
   }); // ❌ empty array
   const cheap = prices.filter(function (p) {
     return p < 10;
   }); // ✅
   ```

3. **Missing initial value in `reduce`**

   ```js
   items.reduce(function (acc, item) {
     return acc + item.price;
   }); // ❌ acc starts as first object
   items.reduce(function (acc, item) {
     return acc + item.price;
   }, 0); // ✅
   ```

4. **Using `forEach` when you need the return value**

   ```js
   const titles = movies.forEach((m) => m.title); // ❌ forEach returns undefined
   const titles = movies.map((m) => m.title); // ✅ map returns a new array
   ```

5. **Using `find` and not checking for `undefined`**
   ```js
   const movie = movies.find((m) => m.id === 99); // could be undefined
   console.log(movie.title); // ❌ TypeError if not found
   if (movie) {
     console.log(movie.title);
   } // ✅ check first
   ```

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Use `forEach` to iterate without a manual `for` loop
- [ ] Use `map` to transform an array and always remember to `return`
- [ ] Use `filter` to select elements and always remember to `return`
- [ ] Use `find` to locate a single element and handle `undefined`
- [ ] Use `some` and `every` to ask boolean questions about an array
- [ ] Use `reduce` with an initial value to accumulate a result
- [ ] Chain `filter` and `map` together
- [ ] Explain what each method returns (new array, element, boolean, single value)
