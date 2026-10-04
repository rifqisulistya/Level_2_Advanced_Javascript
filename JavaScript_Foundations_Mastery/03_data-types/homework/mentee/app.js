// ============================================================
// 🏠  DATA TYPES — HOMEWORK
// ============================================================
// Mini Project: Data Validator
//
// Build the validation functions a real sign-up form would use.
// Use template literals throughout — no string concatenation.
// All output goes to the console.
// ============================================================

console.log("=== DATA VALIDATOR — HOMEWORK ===\n");

// ============================================================
// TEST DATA — run your functions against these
// ============================================================
const testInputs = {
  validUsername: "alexdev",
  shortUsername: "al",
  longUsername: "this_username_is_way_too_long_for_our_system",
  spacesUsername: "alex dev",
  validEmail: "alex@devstudio.com",
  noAtEmail: "alexdevstudio.com",
  noDomainEmail: "alex@",
  validAge: "28",
  youngAge: "12",
  textAge: "twenty",
  negativeAge: "-5",
  validPassword: "SecurePass1!",
  shortPassword: "abc1!",
  noUpperPassword: "securepass1!",
  noNumberPassword: "SecurePass!!",
  noSpecialPassword: "SecurePass1",
};

// ----------------------------------------------------------
// TASK 1 — isValidUsername
// ----------------------------------------------------------
// Declare a function called isValidUsername.
// Parameter: username (string)
//
// A valid username:
//   - Is a string (typeof check)
//   - Is between 3 and 20 characters (.length)
//   - Contains no spaces (!username.includes(" "))
//
// Returns an object: { valid: true/false, message: "..." }
//
// Use template literals for all messages.
// Messages:
//   if not a string: "Username must be a string"
//   if too short:    `Username must be at least 3 characters (got ${length})`
//   if too long:     `Username must be 20 characters or fewer (got ${length})`
//   if has spaces:   "Username cannot contain spaces"
//   if valid:        `"${username}" is a valid username`
//
// Test with all four username test inputs. Log each result.

function isValidUsername(random) {
  if (typeof random !== "string") {
    return { valid: false, message: "Username should be a string" };
  }
  if (random.length < 3) {
    return {
      valid: false,
      message: `Username must be at least 3 characters long (got ${random.length})`,
    };
  }
  if (random.length > 20) {
    return {
      valid: false,
      message: `Username must be at least 20 characters or fewer (got ${random.length})`,
    };
  }
  if (random.includes(" ")) {
    return { valid: false, message: "Username cannot have spaces" };
  }
  return { valid: true, message: `${random} is a valid username` };
}

console.log("--- Task 1: Username Validation ---");
console.log(isValidUsername(testInputs.validUsername));
console.log(isValidUsername(testInputs.shortUsername));
console.log(isValidUsername(testInputs.longUsername));
console.log(isValidUsername(testInputs.spacesUsername));

// ----------------------------------------------------------
// TASK 2 — isValidEmail
// ----------------------------------------------------------
// Declare a function called isValidEmail.
// Parameter: email (string)
//
// A valid email:
//   - Contains "@"
//   - Has at least one character before "@"
//   - Has at least one "." after "@"
//   - Does not start or end with whitespace (use .trim())
//
// Clean the email first: email.trim().toLowerCase()
// Store in cleanEmail and use that for all checks.
//
// Returns: { valid: true/false, cleanEmail, message }
// (include cleanEmail in the returned object — it's useful to callers)
//
// Use .includes(), .split("@"), .indexOf(".") for checks.
//
// Test with validEmail, noAtEmail, noDomainEmail.

function isValidEmail(email) {
  if (typeof email !== "string") {
    return {
      valid: false,
      cleanEmail: "",
      message: "Email should be a string",
    };
  }
  const cleanEmail = email.trim().toLowerCase();

  if (!cleanEmail.includes("@")) {
    return { valid: false, cleanEmail, message: "Email must have a '@' " };
  }

  const [localPart, domain] = cleanEmail.split("@");

  if (!localPart || localPart.length === 0) {
    return {
      valid: false,
      cleanEmail,
      meassage: "Email must include characters before the '@' symbol",
    };
  }

  if (!domain || !domain.includes(".")) {
    return { valid: false, cleanEmail, message: "Email must include a '.' " };
  }

  return { valid: true, cleanEmail, message: `${cleanEmail} is a valid email` };
}
console.log("\n--- Task 2: Email Validation ---");
console.log(isValidEmail(testInputs.validEmail));
console.log(isValidEmail(testInputs.noAtEmail));
console.log(isValidEmail(testInputs.noDomainEmail));
// your code here

// ----------------------------------------------------------
// TASK 3 — isValidAge
// ----------------------------------------------------------
// Declare a function called isValidAge.
// Parameter: ageInput (the raw string from a form field)
//
// Steps:
//   1. Convert to number: const age = Number(ageInput)
//   2. If isNaN(age): return { valid: false, message: `"${ageInput}" is not a valid number` }
//   3. If age < 13:   return { valid: false, message: `Age must be at least 13 (got ${age})` }
//   4. If age > 120:  return { valid: false, message: `Age must be 120 or below (got ${age})` }
//   5. Return: { valid: true, age, message: `Valid age: ${age}` }
//      (include the converted number in the object)
//
// Test with validAge ("28"), youngAge ("12"), textAge ("twenty"), negativeAge ("-5").
//
// Write a comment: why use Number() instead of parseInt() here?

function isValidAge(ageInput) {
  // your code here
}

console.log("\n--- Task 3: Age Validation ---");
// your code here

// ----------------------------------------------------------
// TASK 4 — isValidPassword
// ----------------------------------------------------------
// Declare a function called isValidPassword.
// Parameter: password (string)
//
// A valid password must:
//   - Be at least 8 characters long
//   - Contain at least one uppercase letter
//   - Contain at least one number
//   - Contain at least one special character (!@#$%^&*?_-)
//
// For the character checks, use these helpers:
//   const hasUpper   = password !== password.toLowerCase();
//   const hasNumber  = /[0-9]/.test(password);          ← regex — just use it
//   const hasSpecial = /[!@#$%^&*?_\-]/.test(password); ← regex — just use it
//
// Collect all failures into an array:
//   const errors = [];
//   if (password.length < 8)  errors.push("at least 8 characters");
//   if (!hasUpper)            errors.push("one uppercase letter");
//   etc.
//
// If errors.length > 0:
//   return { valid: false, message: `Password needs: ${errors.join(", ")}` }
// Else:
//   return { valid: true, message: "Password meets all requirements" }
//
// Test with all five password test inputs.

function isValidPassword(password) {
  // your code here
}

console.log("\n--- Task 4: Password Validation ---");
// your code here

// ----------------------------------------------------------
// TASK 5 — formatValidationResult
// ----------------------------------------------------------
// Declare a function called formatValidationResult.
// Parameters: fieldName (string), result (the object returned by your validators)
//
// Returns a formatted string using a template literal:
//   `${result.valid ? "✅" : "❌"} ${fieldName}: ${result.message}`
//
// Use this to display every validation result more cleanly.
// Rerun your tests from Tasks 1-4 through this formatter.

function formatValidationResult(fieldName, result) {
  // your code here
}

console.log("\n--- Task 5: Formatted Results ---");
// Rerun at least 3 tests from each validator through formatValidationResult

// ----------------------------------------------------------
// TASK 6 — validateSignUpForm
// ----------------------------------------------------------
// Declare a function called validateSignUpForm.
// Parameter: formData (object with username, email, age, password)
//
// Inside:
//   1. Run all four validators on the matching fields
//   2. Collect all results into a results object:
//      { username: result, email: result, age: result, password: result }
//   3. Determine if the whole form is valid:
//      const formValid = Object.values(results).every(r => r.valid)
//   4. Return:
//      { valid: formValid, results }
//
// Test with a valid form submission:
//   validateSignUpForm({
//     username: "alexdev",
//     email:    "alex@devstudio.com",
//     age:      "28",
//     password: "SecurePass1!"
//   })
//
// And an invalid one:
//   validateSignUpForm({
//     username: "al",
//     email:    "not-an-email",
//     age:      "twelve",
//     password: "abc"
//   })
//
// For each, log whether the form is valid and then
// log each field result through formatValidationResult.

function validateSignUpForm(formData) {
  // your code here
}

console.log("\n--- Task 6: Full Form Validation ---");
// your code here

// ----------------------------------------------------------
// TASK 7 — cleanFormData
// ----------------------------------------------------------
// Before validating, real apps clean their input data.
// Declare a function called cleanFormData.
// Parameter: rawFormData (object with username, email, age, password)
//
// Returns a new object with cleaned values:
//   username: rawFormData.username.trim().toLowerCase()
//   email:    rawFormData.email.trim().toLowerCase()
//   age:      rawFormData.age.trim()
//   password: rawFormData.password  ← passwords NOT lowercased (case-sensitive)
//
// Use a template literal to log what was cleaned:
//   `Cleaned ${fieldName}: "${original}" → "${cleaned}"`
//
// Test with messy data:
//   cleanFormData({
//     username: "  AlexDev  ",
//     email:    "  ALEX@DEVSTUDIO.COM  ",
//     age:      "  28  ",
//     password: "SecurePass1!"
//   })

function cleanFormData(rawFormData) {
  // your code here
}

console.log("\n--- Task 7: Cleaning Form Data ---");
// your code here

// ----------------------------------------------------------
// TASK 8 — Connect the dots: full pipeline
// ----------------------------------------------------------
// Chain cleanFormData and validateSignUpForm together.
//
// a) Start with the messy form data from Task 7.
// b) Clean it: const cleaned = cleanFormData(rawData)
// c) Validate it: const validation = validateSignUpForm(cleaned)
// d) Log the final result using formatValidationResult for each field.
//
// Write a comment: why clean before validating?
// (Hint: would " ALEX@DEVSTUDIO.COM " pass the email validator?)

console.log("\n--- Task 8: Full Pipeline ---");
// your code here

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — formatSummary
// ----------------------------------------------------------
// Declare a function called formatSummary.
// Parameter: validationResult (object from validateSignUpForm)
//
// Returns a multiline template literal summary:
//
//   === Sign-Up Validation Report ===
//   Overall: ✅ Ready to submit  OR  ❌ Form has errors
//
//   username  ✅ "alexdev" is a valid username
//   email     ✅ "alex@devstudio.com" is valid
//   age       ✅ Valid age: 28
//   password  ✅ Password meets all requirements
//
// Each field on its own line. Use Object.entries() to iterate:
//   Object.entries(validationResult.results).forEach(([field, result]) => { ... })
//
// Write a comment: what does Object.entries() return?

function formatSummary(validationResult) {
  // your code here
}

console.log("\n--- Stretch: formatSummary ---");
// your code here
