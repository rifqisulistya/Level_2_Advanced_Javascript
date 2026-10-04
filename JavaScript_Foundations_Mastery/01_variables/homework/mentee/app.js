// ============================================================
// 🏠  VARIABLES — HOMEWORK
// ============================================================
// Complete each task using only what you learned in class:
//   - const and let
//   - declaring, assigning, reassigning
//   - console.log()
//   - string + number combination with +
//
// No DOM. No HTML edits. Open DevTools to see your output.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Your personal profile
// ----------------------------------------------------------
// Declare the following using the correct keyword (const or let).
// Add a comment next to each one explaining WHY you chose that keyword.
//
//   fullName    → your full name as a string
//   age         → your age as a number
//   city        → the city you live in
//   isStudent   → true or false
//
// Log all four to the console.

const fullName = "John Doe"; // const because my name won't change
let age = 25; // let because my age will change over time
let city = "New York"; // let because I might move to a different city
let isStudent = true; // let because my student status can change

console.log(fullName);
console.log(age);
console.log(city);
console.log(isStudent);

// ----------------------------------------------------------
// TASK 2 — Update what can change
// ----------------------------------------------------------
// Reassign city to a different city.
// Reassign isStudent to the opposite value.
// Log both after reassigning.
//
// Then try to reassign fullName.
// Read the error, then comment that line out.

city = "Los Angeles"; // Reassigning city to a new value
isStudent = false; // Reassigning isStudent to the opposite value

console.log(city);
console.log(isStudent);

// fullName = "Jane Doe"; // This line will throw an error because fullName is a const and cannot be reassigned.

// ----------------------------------------------------------
// TASK 3 — Undefined in the wild
// ----------------------------------------------------------
// Declare a let called favoriteMovie — do NOT assign a value.
// Log it. Write what you see as a comment.
//
// Now assign it a movie title.
// Log it again.

let favouriteMovie; // Declared but not assigned, so it is undefined
console.log(favouriteMovie); // undefined

favouriteMovie = "Inception"; // Assigning a movie title
console.log(favouriteMovie); // Inception

// ----------------------------------------------------------
// TASK 4 — Build a product listing
// ----------------------------------------------------------
// You're building a small online store.
// Declare const variables for:
//
//   productName  → a made-up product name
//   productBrand → the brand name
//   productPrice → a price as a number
//   inStock      → true
//
// Log each variable on its own line.
// Then log: productName + " by " + productBrand + " — $" + productPrice

const productName = "SuperWidget"; // const because the product name won't change
const productBrand = "WidgetCo"; // const because the brand name won't change
const productPrice = 19.99; // const because the price is fixed for this product
let inStock = true; // let because stock status can change

console.log(productName);
console.log(productBrand);
console.log(productPrice);
console.log(inStock);

console.log(productName + " by " + productBrand + " — $" + productPrice);

// ----------------------------------------------------------
// TASK 5 — Stock status update
// ----------------------------------------------------------
// Reassign inStock to false.
// Log: "In stock: " + inStock
//
// Try to reassign productName.
// Read the error and comment the line out.
// Why did this fail but inStock worked?
// Write your answer as a comment.

inStock = false; // Reassigning inStock to false
console.log("In stock: " + inStock);

// productName = "MegaWidget"; // This line will throw an error because productName is a const and cannot be reassigned. inStock worked because it was declared with let, which allows reassignment.

// ----------------------------------------------------------
// TASK 6 — Fix the bad names
// ----------------------------------------------------------
// The variable names below are all invalid or poor practice.
// Rewrite each one correctly, declare it with any value, and log it.
//
//   2ndPlayer     → fix it
//   my score      → fix it
//   X             → rename to something descriptive, then declare it
//   GaMeLeVeL     → fix the casing

let secondPlayer = "Alice"; // Fixed variable name
let myScore = 100; // Fixed variable name
let playerX = "Bob"; // Renamed to something descriptive
let gameLevel = 5; // Fixed casing

console.log(secondPlayer);
console.log(myScore);
console.log(playerX);
console.log(gameLevel);

// ----------------------------------------------------------
// TASK 7 — Two-step declaration
// ----------------------------------------------------------
// Declare a let called highScore — do NOT assign a value.
// Log it.
//
// Assign highScore the value 500.
// Log it.
//
// Reassign highScore to 750.
// Log it.
//
// You should see three console lines: undefined → 500 → 750

let highScore; // Declared but not assigned, so it is undefined
console.log(highScore); // undefined

highScore = 500; // Assigning a value
console.log(highScore); // 500

highScore = 750; // Reassigning to a new value
console.log(highScore); // 750

// ----------------------------------------------------------
// TASK 8 — Connect the variables
// ----------------------------------------------------------
// Declare these consts:
//   appName    → "TaskMaster"
//   version    → 3
//   authorName → your name
//
// Log: appName + " v" + version + " — built by " + authorName
// Expected format: "TaskMaster v3 — built by [your name]"

const appName = "TaskMaster"; // const because the app name won't change
const version = 3; // const because the version number is fixed for this release
const authorName = "John Doe"; // const because the author's name won't change

console.log(appName + " v" + version + " - built by " + authorName);

// ----------------------------------------------------------
// ⭐ STRETCH GOAL
// ----------------------------------------------------------
// Declare a const called startYear with the value 2020.
// Declare a const called currentYear with the value 2025.
// Declare a let called yearsRunning = currentYear - startYear.
//
// Log: appName + " has been running for " + yearsRunning + " years."
//
// Then reassign currentYear... wait, can you? Why not?
// Write the answer as a comment.
// What keyword would you need if currentYear could change?

const startYear = 2020; // const because the start year won't change
const currentYear = 2025; // const because the current year is fixed for this example
let yearsRunning = currentYear - startYear; // let because yearsRunning can change if currentYear changes

console.log(appName + " has been running for " + yearsRunning + " years.");

// currentYear = 2026; // This line will throw an error because currentYear is a const and cannot be reassigned. If currentYear could change, we would need to declare it with let instead of const.    