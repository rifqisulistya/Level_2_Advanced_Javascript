// ============================================================
// 🏠  OBJECTS — HOMEWORK
// ============================================================
// Mini Project: Product Inventory System
//
// You are building the logic for a product inventory — an
// array of product objects, each with related data grouped
// together. Loop through it, calculate stats, find problems,
// and update records.
//
// CONNECTING THE DOTS — all seven lessons:
//   Lesson 1 → variables for totals, thresholds, counters
//   Lesson 2 → operators to calculate values and update stock
//   Lesson 3 → data types (strings, numbers, booleans)
//   Lesson 4 → conditionals to check stock levels and categories
//   Lesson 5 → loops to process every product automatically
//   Lesson 6 → arrays to hold the collection of products
//   Lesson 7 → objects to keep each product's data together
//
// All output goes to the console. No HTML edits needed.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Build the inventory
// ----------------------------------------------------------
// Declare a const called inventory — an array of 5 product objects.
// Each product should have these properties:
//
//   id          → 1, 2, 3, 4, 5        (number — unique identifier)
//   name        → a product name       (string)
//   category    → "Electronics", "Clothing", "Food", or "Books"
//   price       → a number             (use at least one under $10 and one over $100)
//   stock       → a number             (use at least one 0 and one under 5)
//   isAvailable → true if stock > 0, false if stock === 0  (boolean)
//
// Make sure at least:
//   - 2 products are in "Electronics"
//   - 1 product has stock of 0
//   - 1 product has stock between 1 and 4
//
// Log: "📦 Inventory loaded: " + inventory.length + " products"

// ----------------------------------------------------------
// TASK 2 — Display all products
// ----------------------------------------------------------
// Write a for loop through inventory.
// On each iteration log a product summary:
//
//   "#" + inventory[i].id + " " + inventory[i].name
//   + " | $" + inventory[i].price
//   + " | Stock: " + inventory[i].stock
//   + " | " + (inventory[i].isAvailable ? "✅ Available" : "❌ Out of stock")

// ----------------------------------------------------------
// TASK 3 — Calculate inventory stats
// ----------------------------------------------------------
// Declare these accumulators OUTSIDE the loop:
//   let totalValue      = 0     (price * stock for each product)
//   let totalItems      = 0     (sum of all stock counts)
//   let outOfStockCount = 0
//   let lowStockCount   = 0     (stock > 0 but stock < 5)
//
// Declare a const called lowStockThreshold = 5
//
// Write a for loop. On each iteration:
//   - Add (price * stock) to totalValue
//   - Add stock to totalItems
//   - IF stock === 0 → increment outOfStockCount
//   - ELSE IF stock < lowStockThreshold → increment lowStockCount
//
// After the loop log:
//   "💰 Total inventory value: $" + totalValue
//   "📦 Total items in stock: "  + totalItems
//   "❌ Out of stock: "          + outOfStockCount + " product(s)"
//   "⚠️  Low stock: "             + lowStockCount   + " product(s)"

// ----------------------------------------------------------
// TASK 4 — Find products by category
// ----------------------------------------------------------
// Declare a const called searchCategory = "Electronics"
// Declare a let called found = 0
//
// Write a for loop. On each iteration:
//   IF inventory[i].category === searchCategory:
//     - increment found
//     - log: "🔍 " + inventory[i].name + " — $" + inventory[i].price
//
// After the loop:
//   Log: "Found " + found + " product(s) in " + searchCategory

// ----------------------------------------------------------
// TASK 5 — Apply a sale discount
// ----------------------------------------------------------
// Electronics are 15% off today.
// Declare a const called discountRate = 0.15
//
// Write a for loop. On each iteration:
//   IF inventory[i].category === "Electronics":
//     - Calculate the discount amount (price * discountRate)
//     - Subtract it from inventory[i].price using -=
//     - Round to 2 decimal places:
//       inventory[i].price = Math.round(inventory[i].price * 100) / 100
//     - Log: "🏷️  " + inventory[i].name + " discounted to $" + inventory[i].price
//
// After the loop, log the full inventory array to see updated prices.

// ----------------------------------------------------------
// TASK 6 — Restock low inventory
// ----------------------------------------------------------
// Any product with stock < 5 (but not 0) needs a restock of 20 units.
// Any product with stock === 0 needs a restock of 50 units.
//
// Write a for loop. On each iteration:
//   IF stock === 0:
//     - Add 50 to inventory[i].stock
//     - Set inventory[i].isAvailable to true
//     - Log: "🚚 Emergency restock: " + inventory[i].name + " → " + inventory[i].stock + " units"
//   ELSE IF stock < 5:
//     - Add 20 to inventory[i].stock
//     - Log: "📦 Restock: " + inventory[i].name + " → " + inventory[i].stock + " units"

// ----------------------------------------------------------
// TASK 7 — Access nested data
// ----------------------------------------------------------
// Add a supplier property to each product in inventory.
// The supplier should be a NESTED OBJECT with:
//   name     → a supplier company name
//   country  → a country
//
// You can do this directly in your inventory declaration (go back to Task 1)
// OR add it after using: inventory[i].supplier = { name: "...", country: "..." }
//
// After adding, write a for loop that logs:
//   inventory[i].name + " supplied by " + inventory[i].supplier.name
//   + " (" + inventory[i].supplier.country + ")"

// ----------------------------------------------------------
// TASK 8 — Connect the dots: most valuable product
// ----------------------------------------------------------
// The most valuable product = highest (price * stock).
//
// Declare a let called topValueIndex = 0
//
// Write a for loop. On each iteration:
//   Calculate currentValue = inventory[i].price * inventory[i].stock
//   Calculate topValue     = inventory[topValueIndex].price * inventory[topValueIndex].stock
//
//   IF currentValue > topValue → update topValueIndex to i
//
// After the loop:
//   const top = inventory[topValueIndex]
//   Log: "🏆 Most valuable: " + top.name
//        + " | $" + top.price + " × " + top.stock
//        + " units = $" + (top.price * top.stock)

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Category summary report
// ----------------------------------------------------------
// Declare a const called categories = ["Electronics", "Clothing", "Food", "Books"]
//
// Write an OUTER for loop through categories.
// Inside, write an INNER for loop through inventory.
//
// For each category:
//   - Count how many products belong to it
//   - Sum their total stock
//   - Sum their total value (price * stock)
//
// Log a summary for each category:
//   "--- " + categories[c] + " ---"
//   "Products: " + count
//   "Total stock: " + stock
//   "Category value: $" + value
//
// Reset count, stock, and value to 0 between each category.
//
// Hint: declare count, stock, value inside the OUTER loop
// so they reset automatically on each category iteration.
