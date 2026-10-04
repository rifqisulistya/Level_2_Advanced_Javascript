# 🔀 Conditionals — Live Class

---

## 🧠 WHAT Are Conditionals?

A **conditional** lets your program make a decision.

Think of it like a bouncer at a door. The bouncer has a rulebook: _"If the person is 18 or older AND has a valid ID, let them in. Otherwise, turn them away."_ The bouncer doesn't need to know in advance who's coming — the rules apply to whoever shows up.

JavaScript conditionals work the same way. You write the rules once, and the code applies them to whatever data it receives.

```js
if (userAge >= 18) {
  console.log("Welcome in!");
} else {
  console.log("Sorry, you must be 18+.");
}
```

---

## ❓ WHY Do Conditionals Exist?

Without conditionals, your program does the same thing every time — which makes it useless for anything real.

Every meaningful app makes decisions:

- Is the user logged in? Show their dashboard or the login page.
- Did the password match? Grant access or reject it.
- Is the item in stock? Show "Add to cart" or "Sold out."

Conditionals are what turn a static script into a program that _responds_ to data.

---

## 🔍 HOW They Work

### if / else — Two Options

```js
if (condition) {
  // runs when condition is true
} else {
  // runs when condition is false
}
```

The `condition` is any expression that evaluates to `true` or `false` — exactly what comparison operators produce.

---

### else if — Multiple Options

```js
if (condition1) {
  // first option
} else if (condition2) {
  // second option
} else if (condition3) {
  // third option
} else {
  // fallback
}
```

⚠️ **Order matters.** JavaScript checks each condition top to bottom and **stops at the first true one**. Everything below it is skipped. This means your most specific conditions must come first.

---

### Logical Operators — Combine Conditions

| Operator | Name | Meaning           | Example              |
| -------- | ---- | ----------------- | -------------------- | ------------------------- | ---------------------- |
| `&&`     | AND  | Both must be true | `hasTicket && hasID` |
| `'       |      | '`                | OR                   | At least one must be true | `hasCash \|\| hasCard` |
| `!`      | NOT  | Flips the value   | `!isLoggedIn`        |

**AND (`&&`)** — strict. Think: "ticket AND ID required."
Only `true && true` → `true`. Any false in the chain → `false`.

**OR (`||`)** — generous. Think: "cash OR card is fine."
Only `false || false` → `false`. Any true in the chain → `true`.

**NOT (`!`)** — flips it. `!false` → `true`. `!true` → `false`.
Reads naturally: `if (!isMaintenanceMode)` → "if NOT in maintenance mode."

---

### Truthy and Falsy

In JavaScript, you don't always need `=== true` or `=== false`. Every value has a built-in "truthiness."

**Falsy** (behaves like `false` in a condition):

```
false    0    ""    null    undefined    NaN
```

**Truthy** (everything else):

```
true    1    "hello"    []    {}    "0"
```

This means you can write:

```js
if (username) { ... }         // runs if username is a non-empty string
if (!errorMessage) { ... }    // runs if no error exists
```

---

## 🌍 Real-World Usage

Conditionals are the decision-making engine behind every app:

- **Auth systems:** `if (password === stored && !isLocked)`
- **E-commerce:** `if (stockCount > 0)` → show "Add to Cart"
- **Streaming:** `if (isPremium)` → play video, else → show paywall
- **Forms:** `if (emailIsValid && passwordIsStrong)` → submit
- **Games:** `if (lives === 0)` → game over screen

---

## ⚠️ Common Mistakes

1. **`=` instead of `===` in a condition**

   ```js
   if (score = 100) { ... }  // ❌ assigns 100 to score — always true
   if (score === 100) { ... } // ✅
   ```

2. **Wrong logical operator**

   ```js
   // "Let in if they have a ticket OR an ID"
   if (hasTicket && hasID) { ... } // ❌ requires both
   if (hasTicket || hasID) { ... } // ✅ either is enough
   ```

3. **Separate ifs instead of else if**

   ```js
   if (score >= 50) {
     console.log("Bronze");
   } // runs
   if (score >= 70) {
     console.log("Silver");
   } // ALSO runs for score = 75
   // Fix: use else if so only one branch runs
   ```

4. **Wrong order in else if chains**

   ```js
   if (speed >= 20) { ... }   // ❌ matches everything above 20 — too early
   if (speed >= 50) { ... }   // never reached for speed = 85
   // Fix: put the highest threshold first
   ```

5. **Forgetting the `else` fallback**
   If none of your conditions match and there's no `else`, nothing happens — silently. Always include a fallback.

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Write `if`, `else if`, and `else` blocks correctly
- [ ] Combine conditions using `&&`, `||`, and `!`
- [ ] Explain what truthy and falsy mean with examples
- [ ] Explain why order matters in an `else if` chain
- [ ] Combine variables, operators, and conditionals in one program
- [ ] Spot the difference between separate `if` statements and an `else if` chain
