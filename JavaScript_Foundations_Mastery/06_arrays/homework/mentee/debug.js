// ============================================================
// 🐛  ARRAYS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the middle element ("C") of the array.
// Instead it logs undefined. What's wrong?

const letters = ["A", "B", "C", "D", "E"];
const middleIndex = letters.length / 2;
console.log(letters[middleIndex]);

// What's wrong ↓
// letters.length / 2 returns a float (2.5) which is not a valid index for the array, resulting in undefined being logged.
// Your fix ↓
// const middleIndex = Math.floor(letters.length / 2);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should build a total of all prices.
// It logs NaN instead of a number. What's wrong?

const prices = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i <= prices.length; i++) {
  total += prices[i];
}

console.log("Total: $" + total);

// What's wrong ↓
// The loop condition uses <= which causes it to access an index (prices[4]) that is out of bounds, resulting in undefined being added to total, which leads to NaN.
// Your fix ↓
// Change the loop condition to < so that it only iterates over valid indices of the array.

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to find the highest score in the array
// and log the winner's name. It always logs the wrong winner.
// There are TWO bugs. Find both.

const names  = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

let topIndex  = 1;
let topScore  = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);

// Bug 1 ↓
// The initial value of topIndex is set to 1, which assumes that the second student (Bob) is the top scorer. This is incorrect because we should start with the first student (index 0) as the initial top scorer.
// Bug 2 ↓
// The initial value of topScore is set to 0, which assumes that no student has a score of 0 or below. This is incorrect because we should initialize it with the first student's score.
// Your fix ↓
// let topIndex = 0;
// let topScore = scores[0];
