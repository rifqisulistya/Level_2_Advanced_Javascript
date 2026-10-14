// ============================================================
// 🐛  DATA TYPES — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the user's full name in title case.
// Instead it logs "undefined Rivera". What's wrong?

const user = { firstName: "alex", lastName: "Rivera" };

const { firstname, lastName } = user;
const fullName = `${firstname} ${lastName}`;
console.log(fullName); // "undefined Rivera"

// What's wrong ↓
// -> Case sensitivity issue: the property is `firstName`, not `firstname`.

// Your fix ↓
// ->
// const { firstName, lastName } = user;
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This validation function should reject empty usernames.
// But it accepts an empty string and even a string of spaces.
// What's wrong?

function validateUsername(username) {
  if (!username) {
    return "Username is required";
  }
  return `Valid: ${username}`;
}

console.log(validateUsername(""));       // ✅ catches empty string
console.log(validateUsername("   "));    // ❌ should be invalid — logs "Valid:    "
console.log(validateUsername("alexdev")); // ✅ valid

// What's wrong ↓
// Truthiness of strings: spaces

// Your fix ↓

// function validateUsername(username) {
//   // Check if username is falsy or becomes empty after removing whitespace
//   if (!username || username.trim() === "") {
//     return "Username is required";
//   }
//   return `Valid: ${username}`;
// }

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This form validator runs correctly on valid data but has
// TWO bugs that appear with edge-case inputs.

function validateAge(ageStr) {
  const age = parseInt(ageStr);
  return age >= 13 && age <= 120;
}

function validateForm(data) {
  const usernameOk = data.username.length > 3;
  const emailOk    = data.email.includes("@");
  const ageOk      = validateAge(data.age);

  if (usernameOk && emailOk && ageOk) {
    return `Welcome, ${data.username}!`;
  }
  return "Form invalid";
}

// These work:
console.log(validateForm({ username: "alexdev", email: "a@b.com", age: "28" }));

// These don't:
console.log(validateForm({ username: "alexdev", email: "a@b.com", age: "abc" }));
// Bug 1: validateAge("abc") — what does parseInt return? Is it >= 13?

console.log(validateForm({ username: "al",      email: "a@b.com", age: "28" }));
// Bug 2: username "al" has length 2. Is 2 > 3?


// Bug 1 ↓
// What parseInt("abc") returns: It returns NaN (Not-a-Number).
// Is it >= 13? No, any comparison involving NaN (like NaN >= 13) evaluates to false.
// The underlying flaw: parseInt is also dangerously lenient—for example, parseInt("15abc") successfully returns 15, letting invalid trailing characters slip past validation. It lacks a check for Number.isNaN().

// Bug 2 ↓
// Is 2 > 3? No, 2 > 3 is false.
// The underlying flaw: The code uses a strict greater-than operator (> 3), which means a 3-character username like "bob" would also fail validation (3 > 3 is false). If the minimum requirement is 3 characters, it needs to use >= 3.

// Your fix ↓
// function validateAge(ageStr) {
//   // Number() rejects strings with trailing letters (returns NaN), unlike parseInt
//   const age = Number(ageStr);
//   return !Number.isNaN(age) && age >= 13 && age <= 120;
// }

// function validateForm(data) {
//   // Changed > 3 to >= 3 so 3-character usernames are allowed
//   const usernameOk = data.username && data.username.length >= 3;
//   const emailOk    = data.email && data.email.includes("@");
//   const ageOk      = validateAge(data.age);

//   if (usernameOk && emailOk && ageOk) {
//     return `Welcome, ${data.username}!`;
//   }
//   return "Form invalid";
// }

// // Now these handle edge cases correctly:
// console.log(validateForm({ username: "alexdev", email: "a@b.com", age: "abc" })); // "Form invalid"
// console.log(validateForm({ username: "bob",     email: "a@b.com", age: "28" }));  // "Welcome, bob!"