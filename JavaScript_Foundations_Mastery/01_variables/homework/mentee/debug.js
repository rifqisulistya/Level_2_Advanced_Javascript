// ============================================================
// 🐛  VARIABLES — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment before your fix.
// Run the file to confirm each fix works.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This throws an error. What's wrong and how do you fix it?

const storeName = "TechMart";
storeName = "MegaShop";
console.log(storeName);

// What's wrong ↓
// The variable storeName is declared as a const, which means it cannot be reassigned. To fix this, we should declare it as a let if we want to reassign it.

// Your fix ↓
let storeName = "TechMart";
storeName = "MegaShop";
console.log(storeName);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This runs but the output is wrong. Find the bug.

let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + Item2Price;
console.log("Total: $" + orderTotal);

// What's wrong ↓
// The variable item2Price is misspelled as Item2Price in the calculation.

// Your fix ↓
let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + item2Price;
console.log("Total: $" + orderTotal);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code runs without throwing an error,
// but something is still wrong with it.
// Find the issue and explain why it's a problem.

var productName = "Headphones";
var productPrice = 49.99;
console.log(productName + " — $" + productPrice);

// Hint: the code works, but what keyword should you be using instead?
// Why is the current keyword considered bad practice?
// var is obsolete and can lead to unexpected behavior due to its function-scoped nature. It's better to use let or const for block scoping and to avoid hoisting issues.

// What's wrong ↓
// The variables productName and productPrice are declared with var, which is function-scoped and can lead to unexpected behavior. It's better to use const for values that won't change or let for values that might change.

// Your fix ↓
const productName = "Headphones";
const productPrice = 49.99;
console.log(productName + " — $" + productPrice);
