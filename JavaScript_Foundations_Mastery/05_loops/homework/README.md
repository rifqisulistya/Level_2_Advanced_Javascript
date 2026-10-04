# 🔁 Loops — Homework

---

## 🧠 WHAT You're Practicing

`for` loops, `while` loops, `break`, `continue` — and all of them working together with variables, operators, and conditionals from the previous three lessons.

This is the homework where everything compounds. You're not practicing one skill — you're practicing four at once, the way real programs actually use them.

---

## ❓ WHY This Project?

A shopping cart is one of the most loop-heavy programs in everyday software. Every time you add something to an online cart, a loop is running somewhere — processing items, calculating totals, checking stock, applying discounts.

By building the logic yourself, you'll understand what every e-commerce site is doing under the hood.

---

## 🔍 WHAT You're Building

A **Shopping Cart Simulator** that:
- Loops through 6 item prices
- Skips items over a per-item spending limit
- Accumulates a running cart total
- Applies a discount if the total crosses a threshold
- Checks whether the final total fits the budget
- Counts items added vs skipped
- Uses a `while` loop to simulate restocking
- Uses `break` to find the first affordable item

All output goes to the console.

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in browser — nothing to edit |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 8 tasks + stretch goal go here |
| `debug.js` | Three bugs to fix — swap the `<script>` tag to run them |

---

## 🌍 Real-World Connection

This is exactly how real cart logic works:

- Amazon loops through your cart items, skips out-of-stock ones, applies promo codes, and checks against your payment limit
- Subscription apps use while loops to retry failed payments until they succeed or hit a max attempt count
- Loyalty programs use conditionals inside loops to award bonus points for qualifying items

Tonight's homework is that logic — simplified but structurally identical.

---

## ⚠️ Common Mistakes to Watch For

1. **Accumulator inside the loop** — `cartTotal`, `itemsAdded`, `itemsSkipped` must all be declared OUTSIDE the loop. If declared inside, they reset to 0 on every iteration.

2. **Off-by-one in the for loop** — your loop runs from 1 to 6 inclusive. Make sure your condition is `i <= 6`, not `i < 6`.

3. **Forgetting `continue` after the skip log** — if you log the skipped item but forget `continue`, the code below still runs and adds it to the cart anyway.

4. **`found` flag not checked after the loop** — if no affordable item is found, the message should log after the loop ends. If `found` lives inside the loop, you can't check it outside.

5. **`while` loop without an update** — in Task 7, make sure `stock += restockAmount` is inside the loop body. Without it, stock never increases and the loop runs forever.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks with correct console output
- [ ] Fix all 3 debug tasks with explanations as comments
- [ ] Justify every `const` vs `let` choice
- [ ] Complete the stretch goal with correct loyalty point totals
- [ ] Explain out loud why accumulator variables must live outside the loop
