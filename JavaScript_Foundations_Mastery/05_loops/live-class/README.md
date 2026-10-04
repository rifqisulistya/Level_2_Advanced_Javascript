# 🔁 Loops — Live Class

---

## 🧠 WHAT Are Loops?

A **loop** runs a block of code repeatedly — automatically — so you don't have to write the same thing over and over.

Imagine you need to send a reminder email to 500 users. Without a loop you'd write 500 separate `console.log()` calls. With a loop, you write it once and tell JavaScript how many times to repeat it.

```js
// Without a loop — painful
console.log("Reminder sent to user 1");
console.log("Reminder sent to user 2");
console.log("Reminder sent to user 3");
// ... 497 more lines

// With a loop — clean
for (let i = 1; i <= 500; i++) {
  console.log("Reminder sent to user " + i);
}
```

Same result. One approach scales. The other doesn't.

---

## ❓ WHY Do Loops Exist?

Three reasons every developer reaches for loops daily:

1. **Repetition** — do something N times (send 500 emails, generate 12 month labels)
2. **Accumulation** — build up a total, a list, or a result over many iterations
3. **Searching** — go through a collection until you find what you need

Without loops, programs can only work with a fixed, known amount of data. With loops, they can handle any amount.

---

## 🔍 HOW They Work

### The `for` Loop — When You Know How Many Times

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Three parts inside the parentheses:

| Part           | Example     | Meaning                         |
| -------------- | ----------- | ------------------------------- |
| Initialization | `let i = 0` | Start the counter here          |
| Condition      | `i < 5`     | Keep looping while this is true |
| Update         | `i++`       | Do this after each iteration    |

`i++` is shorthand for `i = i + 1`.

⚠️ **`<` vs `<=` — the off-by-one trap:**

```js
for (let i = 1; i < 5; i++) {} // runs for 1, 2, 3, 4   — stops BEFORE 5
for (let i = 1; i <= 5; i++) {} // runs for 1, 2, 3, 4, 5 — includes 5
```

Always think: "do I want to include the last number or stop before it?"

---

### The `while` Loop — When You Don't Know How Many Times

```js
let balance = 100;
while (balance > 0) {
  balance -= 30;
}
```

Use `while` when the number of iterations depends on a condition that changes inside the loop — like withdrawing from a balance until it runs out, or retrying a request until it succeeds.

⚠️ **You must update the counter yourself.** Forgetting to change the variable inside the loop means the condition never becomes false → **infinite loop** → frozen browser tab.

---

### Conditionals Inside Loops

A loop repeats. A conditional decides. Together they decide on every repeat:

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
```

This is one of the most used patterns in all of JavaScript.

---

### `break` and `continue`

```js
// break — exit the loop entirely
for (let i = 1; i <= 10; i++) {
  if (i === 6) break; // stops the whole loop
  console.log(i); // logs 1–5 only
}

// continue — skip this iteration, move to the next
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skips 3
  console.log(i); // logs 1, 2, 4, 5
}
```

Think of `break` as pulling the emergency stop.
Think of `continue` as skipping a song on a playlist.

---

## 🌍 Real-World Usage

Loops are everywhere in every codebase:

- **Social feed:** loop through posts and render each one
- **Invoice:** loop through items and add to a running total
- **Search:** loop through results until a match is found
- **Game:** loop runs every frame — checking input, moving objects, drawing the screen
- **Form validation:** loop through fields and flag any that are empty

---

## ⚠️ Common Mistakes

1. **Off-by-one error — `<` vs `<=`**

   ```js
   for (let i = 1; i < 5; i++) {} // misses 5 if you wanted to include it
   ```

2. **Infinite loop — forgetting to update in a `while`**

   ```js
   let i = 0;
   while (i < 5) {
     console.log(i);
     // forgot i++ → i never changes → loop runs forever
   }
   ```

3. **Accumulator variable inside the loop**

   ```js
   for (let i = 1; i <= 5; i++) {
     let total = 0; // ❌ resets to 0 every iteration
     total += i;
   }
   // Fix: declare total OUTSIDE the loop
   ```

4. **`break` with no condition**

   ```js
   for (let i = 1; i <= 5; i++) {
     break; // ❌ exits immediately — loop body never runs
     console.log(i);
   }
   ```

5. **FizzBuzz order — checking single conditions before the combined one**
   ```js
   if (i % 3 === 0) { ... }           // ❌ 15 logs "Fizz" and stops
   if (i % 3 === 0 && i % 5 === 0) { } // never reached for 15
   // Fix: check the combined condition first
   ```

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Write a `for` loop with correct initialization, condition, and update
- [ ] Explain the difference between `<` and `<=` in a loop condition
- [ ] Write a `while` loop and remember to update the counter
- [ ] Use a conditional inside a loop
- [ ] Use `break` to exit a loop and `continue` to skip an iteration
- [ ] Solve FizzBuzz and explain why the order of conditions matters
- [ ] Declare accumulator variables outside the loop
