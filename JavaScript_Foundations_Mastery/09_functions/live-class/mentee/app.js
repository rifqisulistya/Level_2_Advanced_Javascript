// ============================================================
// 🟩  FUNCTIONS — LIVE CLASS
// ============================================================
// All your work happens here. Open DevTools (F12 → Console).
//
// CONNECTING THE DOTS:
// Every lesson so far taught you to describe data or process it
// step by step. But what happens when you need the same logic
// in 10 different places? You'd copy-paste it — and copy-pasted
// code is how bugs are born.
//
// Functions let you write logic ONCE, name it, and CALL it
// anywhere with any input you choose.
//
// Project: Utility Function Library
// ============================================================

// ----------------------------------------------------------
// PART 1 — FUNCTION DECLARATIONS
// ----------------------------------------------------------
// The most traditional way to write a function.
// Declared with the function keyword, then a name.
//
//   function functionName(parameters) {
//     // body
//     return value;
//   }
//
// KEY FEATURE — HOISTING:
// Function declarations are HOISTED. JavaScript moves them
// to the top of the file before any code runs.
// This means you can CALL a function declaration BEFORE
// it appears in your code.
//
//   greet("Alex");               // ✅ works — hoisted
//   function greet(name) { ... }

// TASK 1
// Declare a function called printDivider.
// No parameters. Logs: "=========================="
// Call it 3 times.
// Write a comment: what does "hoisted" mean

printDivider();

function printDivider() {
  console.log("==========================");
}

// printDivider();
// printDivider();
// Hoisted means calling it before running the logic.

// TASK 2
// Declare a function called greetUser.
// Parameter: name
// Logs: "👋 Hello, " + name + "! Welcome."

function greetUser(name) {
  console.log(`👋 Hello, ${name}! Welcome`);
}

//
// Call it with 3 different names.
// Write a comment: what is the difference between
// a PARAMETER and an ARGUMENT?

greetUser("Hulk");
greetUser("Peter");
greetUser("Sandra");

// ----------------------------------------------------------
// PART 2 — RETURN VALUES
// ----------------------------------------------------------
// A function can RETURN a value to the caller.
// Without return, a function gives back undefined.
// Once return runs, the function STOPS immediately.

// TASK 3
// Declare a function called calculateTax.
// Parameters: price, taxRate
// Returns: price * taxRate
//
// Store calculateTax(100, 0.08) in a const called tax.
// Log: "Tax: $" + tax
// Log: "Total: $" + (100 + calculateTax(100, 0.08))

function calculateTax(price, taxRate) {
  return price * taxRate;
}

const tax = calculateTax(100, 0.08);
console.log("Tax: $" + tax);
console.log("Total: $" + (100 + calculateTax(100, 0.08)));

// TASK 4
// Declare a function called formatName.
// Parameters: firstName, lastName
// Returns: lastName + ", " + firstName
//
// Call with your name. Log the result.
// Call with 2 other names directly inside console.log.

function formatName(firstName, lastName) {
  return lastName + ", " + firstName;
}

const myName = formatName("Tom", "Hanks");
console.log(myName);
console.log(formatName("Gabriel", "Pinto"));
console.log(formatName("Bruce", "Wayne"));
console.log(formatName("Clark", "Kent"));

// ----------------------------------------------------------
// PART 3 — THE FOUR WAYS TO DEFINE A FUNCTION
// ----------------------------------------------------------
// JavaScript has four ways to write a function.
// They all DO the same thing — package reusable logic.
// They differ in syntax, hoisting, and common use cases.
//
// ┌─────────────────────┬──────────────────────────────────┐
// │ Type                │ Syntax                           │
// ├─────────────────────┼──────────────────────────────────┤
// │ Declaration         │ function name(p) { return v; }   │
// │ Expression          │ const name = function(p) { ... } │
// │ Anonymous           │ function(p) { ... }  ← no name   │
// │ Arrow               │ const name = (p) => value        │
// └─────────────────────┴──────────────────────────────────┘

// ── 1. FUNCTION DECLARATION (you've already written these) ──
// - Has a name
// - Hoisted — can be called before it's defined
// - Best for: main named functions in your program

// ── 2. FUNCTION EXPRESSION ──
// A function stored in a variable.
// It's still a named variable — but the function itself
// is assigned as a value, not declared standalone.
//
//   const double = function(n) {
//     return n * 2;
//   };
//
//   double(5);  // 10
//
// NOT hoisted — you cannot call it before this line.
// Best for: functions you assign, pass around, or export.

// ── 3. ANONYMOUS FUNCTION ──
// A function with NO name — used as a value directly.
// You've been writing these since Lesson 8 without knowing it!
//
//   [1,2,3].forEach(function(num) {   // ← anonymous function
//     console.log(num);
//   });
//
// The function has no name of its own.
// It only exists as the argument being passed in.
// Best for: one-time callbacks passed to array methods.

// ── 4. ARROW FUNCTION ──
// The modern shorthand — always stored in a variable.
// No function keyword. Uses => instead.
//
//   const double = (n) => n * 2;          // one-liner
//   const double = (n) => { return n*2; } // with braces (needs return)
//
// NOT hoisted.
// Best for: short transformations, array method callbacks.
// KEY NOTE: If body is ONE expression → skip braces, skip return (implicit).
//           If body has MULTIPLE lines → add braces, add return.

// TASK 5 — Write the SAME function four different ways
// The function: takes a number n, returns n * n (squared)
//
// Write it as:
//   a) A function DECLARATION called squareDeclaration
//   b) A function EXPRESSION stored in const squareExpression
//   c) Pass an anonymous function directly to an array's map:
//      const squares = [2, 3, 4].map(function(n) { return n * n; });
//   d) An ARROW function stored in const squareArrow
//      Use the one-liner syntax (no braces, no return)
//
// Call and log a), b), d) each with the value 5.
// Log the result of c).
// Write a comment under each explaining when you'd use that style.

function squareDeclaration(n) {
  return n * n;
}

console.log(squareDeclaration(11));

const squareExpression = function (n) {
  return n * n;
};

console.log(squareExpression(5));

const squares = [2, 3, 4].map(function (n) {
  return n * n;
});

console.log(squares);

const squareArrow = (n) => n * n;

console.log(squareArrow(5));

// TASK 6 — Spot the anonymous functions
// Look at this code. Write a comment identifying which functions
// are anonymous and which are named:
//
const results = [10, 25, 8, 42, 3]
  .filter(function (n) {
    return n > 10;
  })
  .map((n) => n * 2);

console.log(results);
//
// Answer: how many functions are in this code?
// Which ones are anonymous? Which are arrow? Which are named?

// ----------------------------------------------------------
// PART 4 — DEFAULT PARAMETERS
// ----------------------------------------------------------
// Give a parameter a fallback value for when it's omitted.
//
//   function createTag(username, role = "member") {
//     return "[" + role.toUpperCase() + "] " + username;
//   }
//   createTag("alex")          → "[MEMBER] alex"
//   createTag("alex", "admin") → "[ADMIN] alex"

// TASK 7
// Declare a function called createUserTag.
// Parameters: username, role = "member"
// Returns: "[" + role.toUpperCase() + "] " + username
//
// Call with ("alexdev", "admin")  → [ADMIN] alexdev
// Call with ("newuser")           → [MEMBER] newuser
// Call with ("modteam", "mod")    → [MOD] modteam

function createUserTag(username, role = "member") {
  console.log("[" + role.toUpperCase() + "] " + username);
}

createUserTag("alex", "admin");

// console.log(createUserTag("alexdev", "admin"));
// console.log(createUserTag("newuser"));
// console.log(createUserTag("modteam", "mod"));

// ----------------------------------------------------------
// PART 5 — TERNARY OPERATOR
// ----------------------------------------------------------
// A one-line if/else — perfect inside return statements.
//
//   condition ? valueIfTrue : valueIfFalse
//
// Instead of:
//   if (age >= 18) { return "Adult"; } else { return "Minor"; }
//
// Write:
//   return age >= 18 ? "Adult" : "Minor";
//
// ✅ Use when: exactly two outcomes, each a simple value.
// ❌ Avoid when: logic is complex or has more than two branches.

// TASK 8
// Write these as arrow functions using the ternary operator:
//
// a) canAccess — parameter: age
//    returns: age >= 18 ? "✅ Access granted" : "❌ Access denied"
//
// b) getStatusLabel — parameter: isActive
//    returns: isActive ? "🟢 Online" : "🔴 Offline"
//
// c) getDiscountLabel — parameter: isPremium
//    returns: isPremium ? "10% off" : "No discount"
//
// Call each with at least 2 different values and log the results.

let canAccess = (age) => (age >= 18 ? "✅ Access granted" : "❌ Access denied");

let getStatusLabel = (isActive) => (isActive ? "🟢 Online" : "🔴 Offline");

let getDiscountLabel = (isPremium) => (isPremium ? "10% off" : "No discount");

console.log(canAccess(20));
console.log(canAccess(10));

console.log(getStatusLabel(true));
console.log(getStatusLabel(false));

console.log(getDiscountLabel(true));
console.log(getDiscountLabel(false));

// ----------------------------------------------------------
// PART 6 — FUNCTIONS + ARRAY METHODS (connect Lessons 8 & 9)
// ----------------------------------------------------------
// Arrow functions are the natural fit for array method callbacks.
// You can also pass named functions directly — without calling them.

// TASK 9
// Declare a const called numbers = [1,2,3,4,5,6,7,8,9,10]
//
// a) Use map with an arrow function → squares (n => n * n)
// b) Use filter with an arrow function → evens (n % 2 === 0)
// c) Use reduce with an arrow function → total (sum, start at 0)
//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares2 = numbers.map((n) => n * n);
const evens = numbers.filter((n) => n % 2 === 0);
const total = numbers.reduce((acc, n) => acc + n, 0);

// THEN:
// Declare a function expression called isAboveFive:
//   const isAboveFive = function(n) { return n > 5; };
//
// Pass isAboveFive directly to filter WITHOUT calling it:
//   const aboveFive = numbers.filter(isAboveFive);
//   ← notice: no () on isAboveFive — we're passing the function itself
//
// Log squares, evens, total, aboveFive.
// Write a comment: what's the difference between
// passing isAboveFive vs passing isAboveFive()?

const isAboveFive = function (n) {
  return n > 5;
};
const aboveFive = numbers.filter(isAboveFive);

console.log(squares2);
console.log(evens);
console.log(total);
console.log(aboveFive);
// ----------------------------------------------------------
// PART 7 — CONNECT THE DOTS (all 9 lessons)
// ----------------------------------------------------------

// TASK 10
// Build a function called gradeReport using a FUNCTION DECLARATION.
// Parameters: studentName (string), scores (array of numbers)
//
// Inside:
//   1. Use reduce (arrow function) to get the total
//   2. Calculate average = total / scores.length
//   3. Use if/else chain to assign a letter grade:
//      >= 90 → "A", >= 80 → "B", >= 70 → "C", >= 60 → "D", else → "F"
//   4. Return an object:
//      { name, average, grade, passed: average >= 60 }
//
// Call gradeReport with 3 different students and score arrays.
// Store each result. Then forEach through all results and log:
//   result.name + " | Avg: " + result.average
//   + " | Grade: " + result.grade
//   + " | " + (result.passed ? "✅ Passed" : "❌ Failed")
//    ↑ use a ternary here for the passed label

function gradeReport(studentName, scores) {
  const total = scores.reduce((acc, score) => acc + score, 0);
  const average = total / scores.length;
  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  return {
    name: studentName,
    average,
    grade,
    passed: average >= 60,
  };
}

const reportCard1 = gradeReport("Benny Hanks", [99, 77, 91, 86, 60]);
const reportCard2 = gradeReport("Gabriel Pinto", [66, 98, 87, 90, 79]);
const reportCard3 = gradeReport("Arnot Hugyecz", [89, 92, 76, 79, 88]);

[reportCard1, reportCard2, reportCard3].forEach((report) => {
  console.log(
    report.name +
      " Avg:" +
      report.average +
      " Grade:" +
      report.grade +
      (report.passed ? " Passed" : "Failed"),
  );
});
