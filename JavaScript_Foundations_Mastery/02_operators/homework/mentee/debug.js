// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount % tipPercent;
console.log("Tip: $" + tipAmount);

// What's wrong ↓
// The operator used is the modulus operator (%) which gives the remainder of a division. To calculate the tip, we should use multiplication instead.

// Your fix ↓
const tipAmountCorrected = billAmount * (tipPercent / 100);
console.log("Tip (corrected): $" + tipAmountCorrected.toFixed(2)); // Using toFixed(2) to format the tip amount to 2 decimal places

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

// const countdown = 10;
// countdown -= 1;
// countdown -= 1;
// countdown -= 1;
// console.log("Countdown: " + countdown);

// What's wrong ↓
// The variable `countdown` is declared as a `const`, which means its value cannot be changed after it's initialized. To allow the countdown to decrement, it should be declared as a `let` instead of a `const`.

// Your fix ↓
let countdownCorrected = 10; // Changed from const to let
countdownCorrected -= 1;
countdownCorrected -= 1;
countdownCorrected -= 1;
console.log("Countdown (corrected): " + countdownCorrected);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));

// Logic bug ↓
// The comparison is case-sensitive, so "gamer99" and "Gamer99" are not equal. To fix this, we should convert both usernames to the same case (either lower or upper) before comparing them.

// Style issue 1 ↓
// Using `var` is outdated and can lead to unexpected behavior due to its function scope. It's better to use `let` or `const` for variable declarations.
// Style issue 2 ↓
// The variable declarations are not using the modern `let` or `const` keywords, which provide better scoping rules.

// Your fix ↓
const username1Corrected = "gamer99";
const username2Corrected = "Gamer99";
console.log("Names match: " + (username1Corrected.toLowerCase() === username2Corrected.toLowerCase()));
