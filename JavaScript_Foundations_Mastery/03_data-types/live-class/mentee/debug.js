// ============================================================
// 🐛  DATA TYPES — LIVE CLASS  |  DEBUG TASKS
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate the total price including tax.
// Instead it returns a string like "19.990.08" instead of 20.15.
// What's wrong?

const price = "19.99"; // came from a form input
const taxRate = 0.08;

const priceNum = parseFloat(price);
const tax = priceNum * taxRate;
const total = priceNum + tax;
console.log(`Total: $${total.toFixed(2)}`); // wrong!

// What's wrong ↓

// Your fix ↓

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This checks if a user's score is missing.
// It should log "No score yet" for both null and undefined
// but doesn't always work correctly. What's wrong?

function checkScore(score) {
  if (score == null) {
    console.log("No score yet");
  } else {
    console.log(`Score: ${score}`);
  }
}

checkScore(null); // ✅ logs "No score yet"
checkScore(undefined); // ❌ logs "Score: undefined" — wrong
checkScore(0); // should log "Score: 0"

// What's wrong ↓

// Your fix — make it handle both null and undefined
//            while still correctly showing score of 0 ↓

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function converts a user's age input to a number
// and calculates their birth year. It has TWO bugs.
// One produces NaN silently. One produces the wrong year.

function getBirthYear(ageInput) {
  const age = parseFloat(ageInput);

  if (isNaN(age)) {
    return "Invalid age input";
  }

  const birthYear = 2025 - age;
  const cleanBirthYear = birthYear.toFixed(0);
  return `Born: ${cleanBirthYear}`;
}

console.log(getBirthYear("28")); // correct
console.log(getBirthYear("twenty")); // ❌ Bug 1: NaN — no guard
console.log(getBirthYear("28 years")); // ❌ Bug 2: parseInt("28 years") = ?
console.log(getBirthYear("28.5888 years"));
// — is this actually wrong?

// Bug 1 ↓

// Bug 2 — is "28 years" actually a bug or does it work correctly?
// Explain what parseInt does with "28 years" ↓

// Your fix for Bug 1 ↓
