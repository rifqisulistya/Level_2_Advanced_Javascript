// ============================================================
// 🟧  LOOPS — LIVE CLASS
// ============================================================
// All your work happens here. Open DevTools (F12 → Console).
//
// CONNECTING THE DOTS:
//   Lesson 1 → variables to store data and counters
//   Lesson 2 → operators to increment and calculate
//   Lesson 3 → conditionals inside loops to make decisions
//   Lesson 4 → loops to run all of the above repeatedly
// ============================================================

// ----------------------------------------------------------
// PART 1 — THE for LOOP
// ----------------------------------------------------------
// A for loop runs a block of code a set number of times.
// It has three parts inside the parentheses:
//
//   for (initialization; condition; update) {
//     // code to repeat
//   }
//
//   initialization → declare a counter variable  (let i = 0)
//   condition      → keep looping while this is true  (i < 5)
//   update         → change the counter each iteration  (i++)
//
// i++ is shorthand for i = i + 1  (you can also write i += 1)
//
// Think of it like a recipe timer:
//   Start at 0. Keep going while under 5. Add 1 each step.

// TASK 1
// Write a for loop that counts from 1 to 5.
// Log the value of i on each iteration.
// Expected output:
//   1
//   2
//   3
//   4
//   5

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// TASK 2
// Declare a const called target with the value 10.
// Write a for loop that counts from 0 UP TO target (inclusive).
// On each iteration, log: "Count: " + i
//
// ⚠️ Should your condition use < or <=?
//    Think carefully and write your answer as a comment.

const target = 10;

for (let i = 0; i <= target; i++) {
  console.log(`Count ${i}`);
}

// TASK 3
// Write a for loop that counts DOWN from 5 to 1.
// Initialize i at 5. The condition should keep going while i >= 1.
// The update should subtract 1 each time: i--
// Log each value.
// Expected output: 5  4  3  2  1

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// TASK 4 — for loop + operator (connect Lessons 2 & 4)
// Declare a let called total with the value 0.
// Declare a const called ticketPrice with the value 12.
//
// Write a for loop that runs 5 times (i = 1 to 5).
// On each iteration:
//   - Add ticketPrice to total using +=
//   - Log: "Ticket " + i + " | Running total: $" + total
//
// After the loop, log: "Final total: $" + total

let total = 0;
const ticketPrice = 12;

for (let i = 1; i <= 5; i++) {
  total += ticketPrice;
  console.log(`Ticket ${i} | Running total: $${total}`);
}
console.log(`Final total: $${total}`);

// ----------------------------------------------------------
// PART 2 — CONDITIONALS INSIDE LOOPS (connect Lessons 3 & 4)
// ----------------------------------------------------------
// A loop runs your code repeatedly.
// A conditional inside a loop makes a decision on EACH run.
// Together they are incredibly powerful.

// TASK 5 — FizzBuzz
// The classic interview exercise. Here's the rule:
//
//   Loop from 1 to 20.
//   For each number:
//     - If divisible by BOTH 3 and 5 → log "FizzBuzz"
//     - If divisible by 3 only        → log "Fizz"
//     - If divisible by 5 only        → log "Buzz"
//     - Otherwise                     → log the number itself
//
// Hint: "divisible by 3" means the remainder is 0 → i % 3 === 0
// Hint: check FizzBuzz FIRST (divisible by both) before checking
//       Fizz or Buzz individually. Why? Write your answer as a comment.

for (let i = 1; i < 21; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// TASK 6 — Loop + conditional + operator
// Declare a let called evenSum  with value 0.
// Declare a let called oddSum   with value 0.
//
// Write a for loop from 1 to 10.
// On each iteration:
//   IF i is even (i % 2 === 0) → add i to evenSum
//   ELSE                       → add i to oddSum
//
// After the loop log:
//   "Even sum: " + evenSum
//   "Odd sum: "  + oddSum
//   "Total: "    + (evenSum + oddSum)

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    evenSum += i; // 2 + 4 + 6 + 8 + 10 = 30
    console.log(i);
  } else {
    oddSum += i; // 1 + 3 + 5 + 7 + 9 = 25
    console.log(i);
  }
}

console.log("Even sum: " + evenSum);
console.log("Odd sum: " + oddSum);
console.log("Total:" + (evenSum + oddSum));

// ----------------------------------------------------------
// PART 3 — THE while LOOP
// ----------------------------------------------------------
// A while loop runs as long as a condition is true.
// Use it when you don't know how many iterations you need upfront.
//
//   let counter = 0;
//   while (counter < 5) {
//     // code to repeat
//     counter++;   // ⚠️ YOU must update the counter — or it loops forever!
//   }
//
// The for loop handles initialization, condition, and update in one line.
// The while loop leaves all three up to you.
// More flexible — but more responsibility.

// TASK 7
// Declare a let called countdown with the value 5.
//
// Write a while loop that runs as long as countdown > 0.
// On each iteration:
//   - Log: "🚀 " + countdown
//   - Subtract 1 from countdown using --
//
// After the loop, log: "Blastoff! 🔥"
// Expected output: 🚀 5  🚀 4  🚀 3  🚀 2  🚀 1  Blastoff! 🔥

let countdown = 5;

while (countdown > 0) {
  console.log(`🚀 ${countdown}`);
  countdown--;
}

console.log("Blastoff! 🔥");

// TASK 8 — while + conditional
// Declare a let called balance  with the value 100.
// Declare a const called withdrawal with the value 30.
//
// Write a while loop that runs as long as balance >= withdrawal.
// On each iteration:
//   - Subtract withdrawal from balance using -=
//   - Log: "Withdrew $" + withdrawal + " | Balance: $" + balance
//
// After the loop, log: "Insufficient funds. Remaining balance: $" + balance

let balance = 100;
const withdrawal = 30;

while (balance >= withdrawal) {
  balance -= withdrawal;
  console.log(`Withdrew $${withdrawal} | Balance: $${balance}`);
}
console.log(`Insufficient funds. Remaining balance: $${balance}`);

// ----------------------------------------------------------
// PART 4 — break AND continue
// ----------------------------------------------------------
// These keywords give you extra control inside a loop.
//
//   break    → EXIT the loop immediately, skip remaining iterations
//   continue → SKIP the rest of this iteration, jump to the next one
//
// Think of break as pulling the emergency stop.
// Think of continue as skipping a track on a playlist.

// TASK 9 — break
// Write a for loop from 1 to 10.
// On each iteration, log the current number.
// BUT: if the number equals 6, break out of the loop.
//
// Expected output: 1  2  3  4  5  6
// (6 is logged before the break — the log comes before the if check)
// Write a comment: what happened to 7, 8, 9, 10?

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 6) {
    break;
  }
}

// TASK 10 — continue (connect all 4 lessons)
// Declare a let called runningTotal with value 0.
// Declare a const called budget with value 50.
//
// Declare these price variables (from a shopping list):
//   const price1 = 12
//   const price2 = 8
//   const price3 = 25
//   const price4 = 6
//   const price5 = 18
//
// Store them in individual variables for now (we'll use arrays soon).
//
// Write a for loop from 1 to 5.
// Use an if / else if chain inside the loop to get the right price
// for each iteration (i === 1 → price1, i === 2 → price2, etc.)
// Store it in a let called currentPrice.
//
// IF adding currentPrice would exceed the budget:
//   log: "⚠️  Skipping item " + i + " ($" + currentPrice + ") — over budget"
//   use continue to skip to the next iteration
//
// ELSE:
//   add currentPrice to runningTotal
//   log: "✅ Added item " + i + " ($" + currentPrice + ") | Total: $" + runningTotal
//
// After the loop, log: "Final total: $" + runningTotal

// ============================================================
// 📝 do...while — FOOTNOTE
// ============================================================
// There is a third loop type called do...while.
// It runs the code block ONCE before checking the condition,
// guaranteeing at least one execution:
//
//   do {
//     // runs at least once
//   } while (condition);
//
// You'll recognize it if you see it in the wild.
