# 🗂️ Objects — Homework

---

## 🧠 WHAT You're Practicing

Declaring objects, accessing and updating properties, nesting objects, looping through arrays of objects, and using all six lessons together in one program.

---

## ❓ WHY This Project?

A product inventory is one of the most practical programs you can build. It's also one of the clearest demonstrations of why objects matter — every product has multiple related attributes that need to travel together.

Without objects, you'd have six parallel arrays: `productNames`, `productPrices`, `productStocks`, `productCategories`, `productAvailability`, `productIds`. Keeping all six in sync manually would be a nightmare.

With objects, every product is one self-contained record. That's the upgrade this lesson delivers.

---

## 🔍 WHAT You're Building

A **Product Inventory System** that:
- Stores 5 products as objects in an array
- Displays a full inventory summary
- Calculates total value, out-of-stock count, and low-stock alerts
- Searches for products by category
- Applies a percentage discount to a specific category
- Restocks low-inventory products and flips their availability
- Accesses nested supplier data
- Finds the most valuable product using index tracking

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

This is exactly how product data works in the real world:

- **Shopify** stores every product as an object with name, price, inventory, variants
- **Amazon** calculates total warehouse value using price × stock for each product
- **Every e-commerce API** returns product data as an array of objects — identical to what you're building tonight

The stretch goal (nested loops by category) is what every analytics dashboard does when it breaks down totals by department, region, or category.

---

## ⚠️ Common Mistakes to Watch For

1. **Case mismatch on property names** — `product.Category` vs `product.category`. One capital letter breaks everything and returns `undefined` silently.

2. **`products.stock` vs `products[i].stock`** — `products` is the array. `products[i]` is the object. Always drill into the object with `[i]` before accessing a property.

3. **Off-by-one in the loop** — `i <= inventory.length` goes one step too far. Use `i < inventory.length`.

4. **Forgetting to reset accumulators between categories (stretch goal)** — declare `count`, `stock`, and `value` inside the outer loop so they reset for each category.

5. **Not updating `isAvailable` when restocking** — if a product's stock goes from 0 to 50, `isAvailable` must be manually flipped to `true`. Objects don't auto-sync related properties.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks with correct console output
- [ ] Fix all 3 debug tasks with explanations as comments
- [ ] Justify every `const` vs `let` choice
- [ ] Complete the stretch goal with correct per-category totals
- [ ] Explain out loud why objects are better than parallel arrays for this data
