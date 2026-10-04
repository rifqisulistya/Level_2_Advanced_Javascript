# ➕ Operators — Live Class

---

## 🧠 WHAT Are Operators?

Operators are symbols that **perform actions on values**.

You already know some from math class: `+`, `-`, `*`, `/`. In JavaScript they work the same way — but instead of operating on raw numbers written in your code, they operate on **variables**.

That connection is the key insight of this lesson: operators are only truly useful when they work with data stored in variables. A calculator that only works on hardcoded numbers is useless. A program that can operate on any value stored in a variable is powerful.

---

## ❓ WHY Do Operators Exist?

Every meaningful program needs to **do something with data** — calculate a total, update a score, check if a password matches, decide if stock is running low.

Operators are how you make that happen.

Without operators your variables just sit there holding values. With operators, those values can interact, update, and produce new information.

---

## 🔍 HOW They Work

### Arithmetic Operators — Do the Math

| Operator | Name           | Example            | Result           |
| -------- | -------------- | ------------------ | ---------------- |
| `+`      | Addition       | `price + tax`      | sum              |
| `-`      | Subtraction    | `total - discount` | difference       |
| `*`      | Multiplication | `qty * price`      | product          |
| `/`      | Division       | `total / people`   | quotient         |
| `%`      | Modulus        | `137 % 60`         | `17` (remainder) |

The modulus `%` is the one that surprises people. It gives you the **remainder** after division — not a percentage. Think of it like this: 137 minutes divided by 60 goes in twice with 17 left over. That `17` is what `%` returns.

Real uses: checking if a number is even (`n % 2 === 0`), wrapping carousel items, building pagination.

---

### Assignment Operators — Update in Place

These are shortcuts. Instead of writing `score = score + 10` you write `score += 10`. Same result, less typing.

| Shorthand     | Means                |
| ------------- | -------------------- |
| `score += 10` | `score = score + 10` |
| `score -= 5`  | `score = score - 5`  |
| `score *= 2`  | `score = score * 2`  |
| `score /= 4`  | `score = score / 4`  |

⚠️ These only work with `let` — never `const`. You're reassigning the variable, and `const` doesn't allow that.

---

### Comparison Operators — Ask a Question

Comparison operators always return `true` or `false`. They don't change any values — they just evaluate a condition.

| Operator | Meaning               | Example               | Result     |
| -------- | --------------------- | --------------------- | ---------- |
| `===`    | Strictly equal        | `age === 18`          | true/false |
| `!==`    | Strictly not equal    | `status !== "active"` | true/false |
| `>`      | Greater than          | `score > 100`         | true/false |
| `<`      | Less than             | `price < budget`      | true/false |
| `>=`     | Greater than or equal | `age >= 18`           | true/false |
| `<=`     | Less than or equal    | `stock <= 5`          | true/false |

**Always use `===` not `==`.**

`==` does "loose" comparison — it tries to convert types before comparing, which leads to genuinely bizarre results:

```js
0 == false; // true  ← surprising
"" == false; // true  ← also surprising
0 === false; // false ← correct
```

`===` checks value **and** type. It never surprises you. Use it every time.

---

## 🌍 Real-World Usage

Operators power every calculation you've ever seen in an app:

- **E-commerce:** `subtotal * taxRate`, `total - discount`
- **Games:** `score += points`, `lives -= 1`
- **Auth:** `enteredPassword === storedPassword`
- **Inventory:** `stockCount <= reorderPoint`
- **Streaming:** `currentTime / totalDuration` (progress bar percentage)

---

## ⚠️ Common Mistakes

1. **Using `=` instead of `===` in a comparison**

   ```js
   if (age = 18)  // ❌ this ASSIGNS 18 to age
   if (age === 18) // ✅ this COMPARES age to 18
   ```

2. **Using `+=` on a `const`**

   ```js
   const score = 0;
   score += 10; // ❌ TypeError — const can't be reassigned
   let score = 0;
   score += 10; // ✅
   ```

3. **Confusing `%` with percentage**

   ```js
   const tip = total % 20; // ❌ this is the remainder, not 20%
   const tip = total * 0.2; // ✅ this is 20%
   ```

4. **Using `+` when you need `*`**

   ```js
   const total = price + qty; // ❌ adds instead of multiplies
   const total = price * qty; // ✅
   ```

5. **Forgetting that `===` is case-sensitive on strings**
   ```js
   "hello" === "Hello"; // false — capital H makes them different
   ```

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Use all five arithmetic operators with variables
- [ ] Use `+=`, `-=`, `*=`, `/=` to update variable values
- [ ] Explain what `%` (modulus) does and give a real example
- [ ] Use comparison operators and explain why they return `true` or `false`
- [ ] Explain the difference between `=` and `===`
- [ ] Combine variables and operators in a multi-step calculation
