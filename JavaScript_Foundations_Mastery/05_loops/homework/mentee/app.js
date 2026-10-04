// ============================================================
// 🏠  LOOPS — HOMEWORK
// ============================================================
// Mini Project: Shopping Cart Simulator
//
// You are building the logic for a shopping cart that:
//   - Loops through a list of item prices
//   - Calculates a running total
//   - Flags items over a per-item limit
//   - Applies a discount when total crosses a threshold
//   - Counts how many items were added vs skipped
//
// CONNECTING THE DOTS — all five lessons at work:
//   Lesson 1 → variables for prices, totals, counters
//   Lesson 2 → operators to accumulate and calculate
//   Lesson 3 → data types (strings, numbers, type checking)
//   Lesson 4 → conditionals to check limits and apply discounts
//   Lesson 5 → loops to process each item automatically
//
// All output goes to the console. No HTML edits needed.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Set up the cart
// ----------------------------------------------------------
// Declare the following variables with the correct keyword.
// Add a comment on each line explaining your const/let choice.
//
//   storeName        → "QuickShop"          (string)
//   budget           → 100                  (number)
//   itemLimit        → 30                   (number — max price per item)
//   discountThreshold → 80                  (number — apply discount above this)
//   discountRate     → 0.10                 (number — 10% off)
//   cartTotal        → 0                    (number — accumulates)
//   itemsAdded       → 0                    (number — counter)
//   itemsSkipped     → 0                    (number — counter)
//
// Log: "🛒 " + storeName + " — Cart started"

// ----------------------------------------------------------
// TASK 2 — Declare your item prices
// ----------------------------------------------------------
// Declare a const for each item price:
//   item1Price → 22
//   item2Price → 35
//   item3Price → 15
//   item4Price → 8
//   item5Price → 42
//   item6Price → 28

// ----------------------------------------------------------
// TASK 3 — Loop through the items
// ----------------------------------------------------------
// Write a for loop from 1 to 6.
// Inside the loop, use an if / else if chain to get the
// correct price for each iteration, store it in a let
// called currentPrice (declared inside the loop).
//
// After getting currentPrice, write a conditional:
//   IF currentPrice > itemLimit:
//     - log: "⛔ Item " + i + " ($" + currentPrice + ") exceeds limit of $" + itemLimit
//     - increment itemsSkipped using ++
//     - use continue to skip to the next iteration
//
//   ELSE:
//     - add currentPrice to cartTotal using +=
//     - increment itemsAdded using ++
//     - log: "✅ Item " + i + " added ($" + currentPrice + ") | Cart: $" + cartTotal

// ----------------------------------------------------------
// TASK 4 — Apply the discount (after the loop)
// ----------------------------------------------------------
// After the loop finishes, check if cartTotal > discountThreshold.
//
//   IF cartTotal > discountThreshold:
//     - declare a const called discountAmount = cartTotal * discountRate
//     - subtract discountAmount from cartTotal using -=
//     - log: "🏷️  Discount applied: -$" + discountAmount
//     - log: "💰 Total after discount: $" + cartTotal
//   ELSE:
//     - log: "No discount applied. Total: $" + cartTotal

// ----------------------------------------------------------
// TASK 5 — Budget check
// ----------------------------------------------------------
// Write an if/else using cartTotal and budget:
//   IF cartTotal <= budget:
//     log: "✅ Within budget! Total: $" + cartTotal + " / $" + budget
//   ELSE:
//     log: "❌ Over budget by $" + (cartTotal - budget)

// ----------------------------------------------------------
// TASK 6 — Cart summary
// ----------------------------------------------------------
// Log a summary using your counter variables:
//   "📦 Items added:   " + itemsAdded
//   "🚫 Items skipped: " + itemsSkipped
//   "🛒 Final total:   $" + cartTotal

// ----------------------------------------------------------
// TASK 7 — while loop: restock counter
// ----------------------------------------------------------
// Declare a let called stock with the value 3.
// Declare a const called restockAmount with the value 10.
// Declare a const called maxStock with the value 50.
//
// Write a while loop that runs as long as stock < maxStock.
// On each iteration:
//   - Add restockAmount to stock using +=
//   - Log: "📦 Restocked. Stock now: " + stock
//
// After the loop, log: "✅ Fully restocked: " + stock + " units"

// ----------------------------------------------------------
// TASK 8 — Connect the dots: find the first affordable item
// ----------------------------------------------------------
// Declare a let called found with the value false.
// Declare a const called maxAffordable with the value 20.
//
// Write a for loop from 1 to 6.
// Inside, get the currentPrice for each item (same as Task 3).
//
// IF currentPrice <= maxAffordable AND found is false:
//   - log: "🎯 First affordable item: Item " + i + " at $" + currentPrice
//   - set found to true
//   - use break to stop searching
//
// After the loop:
//   IF found is false: log "😞 No affordable items found under $" + maxAffordable

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Loyalty points
// ----------------------------------------------------------
// Loyalty points: customers earn 1 point per $1 spent.
// Bonus: if an item is under $15, they earn double points for it.
//
// Declare a let called loyaltyPoints with value 0.
//
// Write a for loop from 1 to 6.
// Get each item's currentPrice.
// Skip items that were over itemLimit (same continue logic as Task 3).
//
// IF currentPrice < 15:
//   loyaltyPoints += currentPrice * 2   (double points)
//   log: "⭐⭐ Double points for item " + i + "! +" + (currentPrice * 2) + " pts"
// ELSE:
//   loyaltyPoints += currentPrice       (normal points)
//   log: "⭐ Item " + i + " earned " + currentPrice + " pts"
//
// After the loop, log: "🏆 Total loyalty points: " + loyaltyPoints
