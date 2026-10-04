// ============================================================
// 🟩  OPERATORS — LIVE CLASS
// ============================================================
// All your work happens here. Open DevTools (F12 → Console).
//
// CONNECTING THE DOTS: Every task starts with variables.
// Operators only become useful when they work WITH data —
// and data lives in variables.
// ============================================================

// ----------------------------------------------------------
// PART 1 — ARITHMETIC OPERATORS
// ----------------------------------------------------------
// These are the math operators. They work exactly like
// a calculator, but instead of raw numbers we use variables.
//
//   +   addition
//   -   subtraction
//   *   multiplication
//   /   division
//   %   modulus (remainder after division)

// TASK 1
// Declare a const called itemPrice with the value 120.
// Declare a const called taxRate  with the value 0.08  (8%)
// Declare a const called taxAmount = itemPrice * taxRate
// Declare a const called totalPrice = itemPrice + taxAmount
//

const itemPrice = 120;
const taxRate = 0.08;
const taxAmount = itemPrice * taxRate;
const totalPrice = itemPrice + taxAmount;

// Log each variable.
// Then log: "Item: $" + itemPrice + " | Tax: $" + taxAmount + " | Total: $" + totalPrice

console.log(itemPrice);
console.log(taxRate);
console.log(taxAmount);
console.log(totalPrice);

console.log(
  "Item: $" + itemPrice + " | Tax: $" + taxAmount + " | Total: $" + totalPrice,
);

// TASK 2
// Declare a let called playerScore with the value 200.
// Declare a const called bonusPoints with the value 50.
// Declare a const called penalty with the value 30.
//
// Declare a let called finalScore = playerScore + bonusPoints - penalty
// Log: "Final score: " + finalScore

let playerScore = 200;
const bonusPoints = 50;
const penalty = 30;
let finalScore = playerScore + bonusPoints - penalty;

console.log("Final score: " + finalScore);

// TASK 3
// Declare a const called totalMinutes with the value 137. (length of a movie)
// Use division to find the hours  → const hours   = totalMinutes / 60
// Use modulus to find leftover minutes → const minutesLeft = totalMinutes % 60
//
// Log: "Movie length: " + hours + " hours and " + minutesLeft + " minutes"

const totalMinutes = 317;
let hours = totalMinutes / 60;
let minutesLeft = totalMinutes % 60;
console.log("Movie length: " + hours + "hours and " + minutesLeft + " minutes");

// ⚠️ Notice: hours will be a decimal. We'll learn to fix that in Data Types.
//            For now just log it as-is.

// TASK 4
// Declare a const called cartItems with the value 3.
// Declare a const called priceEach with the value 24.99.
// Calculate the subtotal (cartItems * priceEach) and store in a const.
// Calculate a 10% discount on the subtotal and store in a const.
// Calculate the final amount (subtotal - discount) and store in a const.
//
// Log each step:
// "Subtotal: $" + subtotal
// "Discount: $" + discount
// "You pay: $" + finalAmount

const carItems = 3;
const priceEach = 24.99;
const subTotal = carItems * priceEach;
const discount = subTotal * 0.1;
const finalAmount = subTotal - discount;

console.log("Subtotal: $" + subTotal);
console.log("Discount: $" + discount);
console.log("You pay: $" + finalAmount);

// ----------------------------------------------------------
// PART 2 — ASSIGNMENT OPERATORS
// ----------------------------------------------------------
// These are shortcuts for updating a variable's own value.
// Instead of writing: score = score + 10
// You can write:      score += 10
//
//   +=   add and reassign
//   -=   subtract and reassign
//   *=   multiply and reassign
//   /=   divide and reassign

// TASK 5
// Declare a let called score with the value 0.
// Log: "Start: " + score
//

let score = 0;
console.log("Start: " + score);

// Use += to add 100. Log: "After bonus: " + score
// Use += to add 50.  Log: "After bonus: " + score
// Use -= to subtract 30. Log: "After penalty: " + score
//
// What is the final score? Write it as a comment.

score += 100;
console.log("After bonus: " + score);

score += 50;
console.log("After bonus: " + score);

score -= 30;
console.log("After penalty: " + score);

// TASK 6
// Declare a let called distance with the value 100.  (km)
// Declare a const called speedMultiplier with the value 1.5.
//
// Use *= to multiply distance by speedMultiplier.
// Log: "New distance: " + distance + " km"
//
// Now use /= to divide distance by 2.
// Log: "Halved: " + distance + " km"

let distance = 100;
const speedMultiplier = 1.5;
distance *= speedMultiplier;

console.log("New distance: " + distance + " km");

distance /= 2;
console.log("Halved: " + distance + " km");

// ----------------------------------------------------------
// PART 3 — COMPARISON OPERATORS
// ----------------------------------------------------------
// These compare two values and always return true or false.
// We're not writing if/else yet — just logging the result
// so you can see what each comparison produces.
//
//   ===   strictly equal (same value AND same type)
//   !==   strictly not equal
//   >     greater than
//   <     less than
//   >=    greater than or equal to
//   <=    less than or equal to
//
// ⚠️  Always use === not ==
//     == does "loose" comparison and can give surprising results.
//     === checks value AND type. Always use ===.

// TASK 7
// Declare a const called passingScore with the value 60.
// Declare a let   called studentScore with the value 72.

const passingScore = 60;
let studentScore = 72;
console.log(studentScore > passingScore);
console.log(studentScore === passingScore);
console.log(studentScore >= passingScore);
console.log(studentScore < 100);
//
// Log the result of each comparison (do not write if/else — just log):
// studentScore > passingScore
// studentScore === passingScore
// studentScore >= passingScore
// studentScore < 100
//
// Write a comment next to each log predicting true or false BEFORE you run it.

// TASK 8
// Declare a const called expectedPassword with the value "open123".
// Declare a let   called enteredPassword  with the value "Open123".
//
// Log: expectedPassword === enteredPassword
// Is it true or false? Why? Write your answer as a comment.
//
// Now reassign enteredPassword to "open123".
// Log the comparison again. What changed?

const expectedPassword = "open123";
let enteredPassword = "Open123";

console.log(expectedPassword === enteredPassword);

enteredPassword = "open123";
console.log(expectedPassword === enteredPassword);

// ----------------------------------------------------------
// PART 4 — CONNECT THE DOTS
// ----------------------------------------------------------
// These tasks combine variables from Lesson 1 with the
// operators you just learned. This is how real code works.

// TASK 9
// You are tracking a savings goal.
//
// Declare a let called savings   with the value 0.
// Declare a const called goal    with the value 1000.
// Declare a const called weekly  with the value 125.
//
// Simulate 4 weeks of saving using += four times.
// After each +=, log: "Week [n]: $" + savings
//
// Then log whether the goal has been reached:
// savings >= goal
// (just log the true/false result — no if/else yet)

let savings = 0;
const goal = 1000;
const weekly = 125;

savings += weekly;
console.log("Week 1: $" + savings);

savings += weekly;
console.log("Week 2: $" + savings);

savings += weekly;
console.log("Week 3: $" + savings);

savings += weekly;
console.log("Week 4: $" + savings);

console.log(savings >= goal);

// TASK 10
// Declare these variables about a product:
//   const productName  = "Laptop"
//   let   stockCount   = 30
//   const minStock     = 5
//   const reorderQty   = 50
//
// Simulate selling 27 units: stockCount -= 27
// Log: "Stock remaining: " + stockCount
//
// Log the result of: stockCount <= minStock
// (This would trigger a reorder in a real app — true means reorder needed)
//
// Now add the reorder quantity: stockCount += reorderQty
// Log: "Stock after reorder: " + stockCount

const productName = "Laptop";
let stockCount = 30;
const minStock = 5;
const reorderQty = 50;
stockCount -= 27;

console.log("Stock remaining: " + stockCount);
console.log(stockCount <= minStock);
stockCount += reorderQty;

console.log("Stock after reorder: " + stockCount);
