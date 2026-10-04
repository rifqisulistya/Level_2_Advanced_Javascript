// ============================================================
// 🟪  CONDITIONALS — LIVE CLASS
// ============================================================
// All your work happens here. Open DevTools (F12 → Console).
//
// CONNECTING THE DOTS:
//   Lesson 1 → declare variables to hold your data
//   Lesson 2 → use operators to work with that data
//   Lesson 3 → use conditionals to make decisions based on it
//
// Project: Access Control Checker
// A system that checks age, membership, and passwords
// before granting access to different areas of an app.
// ============================================================

// ----------------------------------------------------------
// PART 1 — if / else
// ----------------------------------------------------------
// Syntax:
//
//   if (condition) {
//     // runs if condition is true
//   } else {
//     // runs if condition is false
//   }
//
// The condition must evaluate to true or false.
// You already know how to write conditions — they're the
// comparison operators from Lesson 2.

// TASK 1
// Declare a const called userAge with the value 20.
// Declare a const called minAge  with the value 18.
//
// Write an if/else:
//   IF userAge >= minAge → log "✅ Access granted. Welcome!"
//   ELSE                 → log "❌ Access denied. Must be 18 or older."

const userAge = 15;
const minAge = 18;

if (userAge >= minAge) {
  console.log("✅ Access granted. Welcome!");
} else {
  console.log("❌ Access denied. Must be 18 or older");
}

//
// Then change userAge to 15 and run it again.
// What changes in the output?

// TASK 2
// Declare a let called isLoggedIn with the value false.
//
// Write an if/else:
//   IF isLoggedIn is true  → log "👋 Welcome back!"
//   ELSE                   → log "🔒 Please log in to continue."

let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please login to continue..");
}

isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please login to continue..");
}

//
// Then reassign isLoggedIn to true and run the check again.
// Log the result after both checks so you can see both outputs.

// ----------------------------------------------------------
// PART 2 — else if (multiple branches)
// ----------------------------------------------------------
// When you have more than two possible outcomes,
// chain else if between your if and else.
//
//   if (condition1) {
//     // first option
//   } else if (condition2) {
//     // second option
//   } else if (condition3) {
//     // third option
//   } else {
//     // fallback — none of the above matched
//   }
//
// ⚠️ JS checks each condition TOP TO BOTTOM and stops
//    at the FIRST one that is true. The rest are skipped.

// TASK 3
// Declare a let called membershipLevel with the value "gold".
//
// Write an if / else if / else:
//   IF membershipLevel === "platinum" → log "💎 Platinum lounge: all areas unlocked."
//   ELSE IF membershipLevel === "gold" → log "🥇 Gold access: most areas unlocked."
//   ELSE IF membershipLevel === "silver" → log "🥈 Silver access: basic areas unlocked."
//   ELSE → log "🚫 No membership found. Please register."
//
// Test it by changing membershipLevel to "silver", then "bronze", then "platinum".

let membershipLevel = "platinum";

if (membershipLevel === "platinum") {
  console.log("💎 Platinum lounge: all areas unlocked.");
} else if (membershipLevel === "gold") {
  console.log("🥇 Gold access: most areas unlocked.");
} else if (membershipLevel === "silver") {
  console.log(" 🥈Silver access: basic areas unlocked.");
} else {
  console.log("🚫 No membership found. Please register.");
}

// TASK 4
// Declare a let called connectionSpeed with the value 85. (Mbps)
//
// Write an if / else if / else that logs a quality rating:
//   connectionSpeed >= 100  → "🚀 Excellent connection"
//   connectionSpeed >= 50   → "✅ Good connection"
//   connectionSpeed >= 20   → "⚠️  Fair connection"
//   anything below          → "🐢 Poor connection — check your network"
//
// ⚠️ Order matters here. Think about why the conditions
//    must go from highest to lowest. Write your answer as a comment.

let connectionSpeed = 19;

if (connectionSpeed >= 100) {
  console.log("Excellent Connection!");
} else if (connectionSpeed >= 50) {
  console.log("Good connection!");
} else if (connectionSpeed >= 20) {
  console.log("Fair connection!");
} else {
  console.log("Poor connection - check your network");
}

// ----------------------------------------------------------
// PART 3 — Logical Operators  (&& || !)
// ----------------------------------------------------------
// Sometimes one condition isn't enough. Logical operators
// let you combine or reverse conditions.
//
//   &&   AND — both sides must be true
//   ||   OR  — at least one side must be true
//   !    NOT — flips true to false, false to true
//
// Think of && as "this AND that must both be true."
// Think of || as "either this OR that is enough."
// Think of !  as "the opposite of this."

// TASK 5  — AND (&&)
// Declare a const called hasTicket  with the value true.
// Declare a const called hasID      with the value true.
//
// Write an if/else:
//   IF hasTicket && hasID → log "🎟️  Entry approved — enjoy the event!"
//   ELSE                  → log "🚫 Entry denied — ticket and ID both required.

const hasTicket = true;
const hasID = false;

if (hasTicket && hasID) {
  console.log("🎟️ Entry approved - enjoy the event!");
} else {
  console.log("🚫 Entry denied - ticket and ID both required.");
}

//
// Then change hasID to false and run again.
// Then change hasTicket to false and run again.
// Write a comment: how many combinations result in denial?

// TASK 6  — OR (||)
// Declare a const called hasCash  with the value false.
// Declare a const called hasCard  with the value true.
//
// Write an if/else:
//   IF hasCash || hasCard → log "💳 Payment accepted."
//   ELSE                  → log "❌ No payment method available."
//
// Then change hasCard to false and run again.

const hasCash = false;
const hasCard = true;

if (hasCash || hasCard) {
  console.log("💳 Payment accespted.");
} else {
  console.log("❌ No payment method available.");
}

// TASK 7  — NOT (!)
// Declare a let called isMaintenanceMode with the value false.
//
// Write an if/else:
//   IF !isMaintenanceMode → log "✅ System online — all services running."
//   ELSE                  → log "🔧 System under maintenance. Try again later."
//
// Then reassign isMaintenanceMode to true and run again.
// Write a comment: what does ! do to the value before checking it?

let isMaintenanceMode = true;

if (!isMaintenanceMode) {
  console.log(" ✅  System online - all services running.");
} else {
  console.log(" 🔧 System under maintenance. Try again later.");
}

// ----------------------------------------------------------
// PART 4 — Truthy and Falsy (light introduction)
// ----------------------------------------------------------
// In JavaScript, every value has a "truthiness."
// You don't need a === true to check if something is truthy —
// JavaScript evaluates the value itself.
//
// FALSY values (behave like false in a condition):
//   false, 0, "", null, undefined, NaN
//
// TRUTHY values (behave like true in a condition):
//   Everything else — any non-zero number, any non-empty string, etc.

// TASK 8
// Declare a let called username with the value "".  (empty string)
//
// Write an if/else:
//   IF username → log "Hello, " + username + "!"
//   ELSE        → log "⚠️  No username provided."
//
// Then reassign username to "Alex" and run again.
// Write a comment: why does an empty string trigger the else branch?

let username = "";

if (username) {
  console.log("Hello, " + username + "!");
} else {
  console.log("⚠️ No username provided.");
}

username = "spiderman";

if (username) {
  console.log("Hello, " + username + "!");
} else {
  console.log("⚠️ No username provided.");
}

// ----------------------------------------------------------
// PART 5 — CONNECT THE DOTS
// ----------------------------------------------------------
// These tasks combine variables, operators, AND conditionals
// the way real programs use them together.

// TASK 9
// Declare these variables:
//   const enteredPassword = "hello123"
//   const correctPassword = "hello123"
//   let   loginAttempts   = 0
//   const maxAttempts     = 3
//
// Use += to increment loginAttempts by 1. (simulating one attempt)
//
// Write a nested condition:
//   IF loginAttempts > maxAttempts:
//     log "🔒 Account locked. Too many attempts."
//   ELSE IF enteredPassword === correctPassword:
//     log "✅ Login successful!"
//   ELSE:
//     log "❌ Wrong password. Attempts: " + loginAttempts + " / " + maxAttempts
//
const enteredPassword = "wrongpass";
const correctPassword = "hello123";
let loginAttempts = 0;
const maxAttempts = 3;

loginAttempts += 1;

if (loginAttempts > maxAttempts) {
  console.log("🔒 Account locked. Too many attempts.");
} else if (enteredPassword === correctPassword) {
  console.log("✅ Login successful!");
} else {
  console.log(`wrong password. Attempts: ${loginAttempts} / ${maxAttempts}`);
}

// Test by changing enteredPassword to "wrongpass" and loginAttempts to 4.

// TASK 10
// Declare these variables:
//   let   temperature = 38     (°C)
//   const feverThreshold = 37.5
//   const hypothermiaThreshold = 35
//   const isDoctor = false
//
// Write an if / else if / else that logs a medical status:
//   IF temperature >= feverThreshold && !isDoctor:
//     log "🌡️  Fever detected. Please consult a doctor."
//   ELSE IF temperature >= feverThreshold && isDoctor:
//     log "🌡️  Patient has a fever. Administer treatment."
//   ELSE IF temperature < hypothermiaThreshold:
//     log "🥶 Hypothermia risk. Seek immediate care."
//   ELSE:
//     log "✅ Temperature normal."
//
// Test by changing isDoctor to true, then temperature to 34.

let temperature = 20;
const feverThreshold = 37.5;
const hypothermiaThreshold = 35;
const isDoctor = false;

if (temperature >= feverThreshold && !isDoctor) {
  console.log("🌡️ Fever detected. Please consult a doctor.");
} else if (temperature >= feverThreshold && isDoctor) {
  console.log("🌡️ Patient has a fever. Administer treatment.");
} else if (temperature < hypothermiaThreshold) {
  console.log("🥶 Hypothermia risk. Seek immediate care.");
} else {
  console.log("✅ Temperature normal.");
}

// ============================================================
// 📝 SWITCH STATEMENT — FOOTNOTE
// ============================================================
// JavaScript also has a "switch" statement for when you need
// to check one variable against many exact values:
//
//   switch (day) {
//     case "Monday":
//       console.log("Start of the week");
//       break;
//     case "Friday":
//       console.log("Almost the weekend!");
//       break;
//     default:
//       console.log("Regular day");
//   }
//
// You'll recognize it if you see it in the wild.
// For everything we build in this course, if/else if/else
// handles all our needs — so we won't go deeper into switch.
// ============================================================
