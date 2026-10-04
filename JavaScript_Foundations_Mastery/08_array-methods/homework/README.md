# 🔧 Array Methods — Homework

---

## 🧠 WHAT You're Practicing

`forEach`, `map`, `filter`, `find`, `some`, `every`, and `reduce` — used on a real dataset of order objects, with no manual `for` loops allowed.

---

## ❓ WHY This Project?

An order processing system is one of the best datasets for array methods because every method has a natural, obvious use:

- `forEach` → display every order
- `map` → build receipt strings or reshape data
- `filter` → separate by status
- `find` → look up a specific order by ID
- `some` / `every` → ask questions about the order set
- `reduce` → calculate revenue totals

By the time you finish, you'll have a complete picture of when to reach for each method — which is exactly the skill that makes real code readable.

---

## 🔍 WHAT You're Building

An **Order Processing System** that displays, filters, searches, and summarises a set of customer orders using only array methods. All output goes to the console.

**The rule for this homework: no manual `for` loops.**  
Every task must use at least one array method.

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in browser — nothing to edit |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 10 tasks + stretch goal go here |
| `debug.js` | Three bugs to fix — swap the `<script>` tag to run them |

---

## 🌍 Real-World Connection

Every e-commerce backend, analytics tool, and dashboard uses this exact pattern:

- Shopify's order management filters by status, maps to display format, reduces to totals
- Stripe's dashboard uses reduce to build revenue summaries by time period
- Amazon's seller tools use filter + reduce to separate and total orders by fulfilment status

The stretch goal — `reduce` building a summary object — is literally how every analytics report is generated.

---

## ⚠️ Common Mistakes to Watch For

1. **Missing `return` in `map`** — the most common method mistake. If `withTax` is full of `undefined`, you forgot to `return` from the callback.

2. **Missing `return` in `filter`** — if `filter` returns all elements or an empty array when it shouldn't, check your `return`.

3. **`=` instead of `===` in `filter`** — `return order.status = "pending"` assigns and corrupts your data. Always `===` in conditions.

4. **Missing initial value in `reduce`** — without `0`, `acc` starts as the first element object. Add the value you're coercing number operations with objects, you'll get `[object Object]` concatenation.

5. **Using `forEach` and expecting a return value** — `forEach` always returns `undefined`. If you need the result, use `map`, `filter`, or `reduce`.

---

## ✅ Done When You Can

- [ ] Complete all 10 tasks with correct console output
- [ ] Fix all 3 debug tasks with explanations as comments
- [ ] Complete the stretch goal `reduce` object
- [ ] Explain out loud the difference between `map`, `filter`, and `forEach`
- [ ] Explain why `reduce` needs an initial value
- [ ] Chain at least two methods together without storing the intermediate result
