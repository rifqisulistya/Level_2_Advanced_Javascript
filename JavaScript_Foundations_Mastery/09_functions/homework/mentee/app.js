// ============================================================
// 🏠  FUNCTIONS — HOMEWORK
// ============================================================
// Mini Project: User Account Manager
//
// Every task specifies WHICH function style to use.
// By the end you will have written all four styles
// in a realistic context.
//
// Function style guide:
//   DECLARATION  → function name(params) { }
//   EXPRESSION   → const name = function(params) { }
//   ANONYMOUS    → function(params) { }   (passed directly as callback)
//   ARROW        → const name = (params) => value
//
// All output goes to the console. No HTML edits needed.
// ============================================================

// ============================================================
// THE DATA — do not modify
// ============================================================
const users = [
  {
    id: 1,
    username: "alexdev",
    email: "alex@email.com",
    age: 28,
    isPremium: true,
    loginCount: 142,
  },
  {
    id: 2,
    username: "samcodes",
    email: "sam@email.com",
    age: 16,
    isPremium: false,
    loginCount: 37,
  },
  {
    id: 3,
    username: "zoedesign",
    email: "zoe@email.com",
    age: 34,
    isPremium: true,
    loginCount: 289,
  },
  {
    id: 4,
    username: "liamdev",
    email: "",
    age: 25,
    isPremium: false,
    loginCount: 8,
  },
  {
    id: 5,
    username: "mia99",
    email: "mia@email.com",
    age: 19,
    isPremium: true,
    loginCount: 56,
  },
  {
    id: 6,
    username: "carlosui",
    email: "carlos@email.com",
    age: 22,
    isPremium: false,
    loginCount: 0,
  },
];

// ----------------------------------------------------------
// TASK 1 — createUser  [FUNCTION DECLARATION]
// ----------------------------------------------------------
// Write as a FUNCTION DECLARATION (function keyword, named).
//
// Parameters: username, email, age, isPremium = false
// Returns a new user object:
//   { id: Date.now(), username, email, age, isPremium, loginCount: 0 }
//
// Call it twice with different data. Log both results.
// Write a comment: why is isPremium = false a good default here?

// ----------------------------------------------------------
// TASK 2 — isValidUser  [FUNCTION EXPRESSION]
// ----------------------------------------------------------
// Write as a FUNCTION EXPRESSION (stored in a const).
//
// Parameter: user (object)
// Returns true only if ALL of these pass:
//   user.username.length > 0
//   user.email.length > 0
//   user.age >= 13
//
// Use && to combine all three in a single return statement.
//
// Use forEach with an ANONYMOUS function callback to test
// every user in the users array:
//   users.forEach(function(user) {
//     console.log(user.username + " valid: " + isValidUser(user));
//   });
//
// Write a comment: why is isValidUser a function EXPRESSION
// instead of a DECLARATION here?

// ----------------------------------------------------------
// TASK 3 — formatUserDisplay  [ARROW FUNCTION + TERNARY]
// ----------------------------------------------------------
// Write as an ARROW FUNCTION stored in a const.
// Use a one-liner (implicit return — no braces, no return keyword).
//
// Parameter: user
// Returns:
//   user.username + " | " + user.email
//   + " | " + (user.isPremium ? "⭐ Premium" : "Free")
//   + " | Age: " + user.age
//
// Pass formatUserDisplay directly (no () !) to forEach to log
// every user's display string:
//   users.forEach(formatUserDisplay — but this would only receive
//   the user, so wrap it:
//   users.forEach(user => console.log(formatUserDisplay(user)));
//
// Write a comment: why is an arrow function a good fit here?

// ----------------------------------------------------------
// TASK 4 — getUserById  [FUNCTION DECLARATION + TERNARY]
// ----------------------------------------------------------
// Write as a FUNCTION DECLARATION.
//
// Parameters: userList (array), id (number)
// Uses find (with an arrow callback) to locate the matching user.
// Returns the found user OR null using a ternary:
//   return found ? found : null;
//
// Test with id 3 (should find Zoe) and id 99 (should return null).
// Log both results.

// ----------------------------------------------------------
// TASK 5 — filterByAge  [FUNCTION EXPRESSION + DEFAULT PARAM]
// ----------------------------------------------------------
// Write as a FUNCTION EXPRESSION stored in a const.
//
// Parameters: userList, minAge, maxAge = 100
// Returns: userList filtered to users where
//   user.age >= minAge && user.age <= maxAge
// Use an ARROW FUNCTION as the filter callback.
//
// Test three calls:
//   filterByAge(users, 18)       → adults only
//   filterByAge(users, 18, 25)   → young adults
//   filterByAge(users, 13, 17)   → teens
//
// For each result, log the count and usernames using map.

// ----------------------------------------------------------
// TASK 6 — getAccountStats  [FUNCTION DECLARATION]
// ----------------------------------------------------------
// Write as a FUNCTION DECLARATION.
//
// Parameter: userList
//
// Use reduce with an ARROW callback to get totalLogins.
// Use filter with isValidUser passed DIRECTLY (no anonymous wrapper):
//   userList.filter(isValidUser)   ← pass the function, don't call it
//
// Returns:
//   {
//     totalUsers:   userList.length,
//     totalLogins:  totalLogins,
//     premiumCount: number of premium users,
//     validCount:   number of valid users,
//     avgLogins:    totalLogins / userList.length
//   }
//
// Call it with the users array. Log the result.
// Write a comment: what does passing isValidUser (without ())
// to filter do differently than passing isValidUser()?

// ----------------------------------------------------------
// TASK 7 — promoteUser  [ARROW FUNCTION]
// ----------------------------------------------------------
// Write as an ARROW FUNCTION stored in a const.
// One-liner is fine here.
//
// Parameter: user
// Sets user.isPremium = true.
// Returns the updated user.
//
// Find the user with id 2 (Sam). Log before. Promote. Log after.
//
// Write a comment: why does mutating user.isPremium inside an
// arrow function affect the original object?
// (Hint: objects vs primitives — pass by reference vs value)

// ----------------------------------------------------------
// TASK 8 — processAccounts  [FUNCTION DECLARATION composing all styles]
// ----------------------------------------------------------
// Write as a FUNCTION DECLARATION.
// Inside it, call: isValidUser, filterByAge, formatUserDisplay,
// getAccountStats — all functions you already wrote.
//
// Parameter: userList
//
// Steps:
//   1. Filter invalid users using isValidUser → validUsers
//   2. Filter validUsers to adults (>= 18) using filterByAge → adultUsers
//   3. Map adultUsers → display strings using formatUserDisplay → displayList
//      Use an ANONYMOUS function for the map callback:
//        adultUsers.map(function(user) { return formatUserDisplay(user); })
//   4. Get stats from the full userList → stats
//   5. Return { displayList, stats, skipped: userList.length - validUsers.length }
//
// Call processAccounts(users). Log the result.
// forEach through result.displayList logging each line.

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — searchUsers  [FUNCTION EXPRESSION]
// ----------------------------------------------------------
// Write as a FUNCTION EXPRESSION.
//
// Parameters: userList, query (string), field = "username"
// Returns users where user[field] contains query.
// Use filter with an arrow callback: u => u[field].includes(query)
//
// Test:
//   searchUsers(users, "dev")              → alexdev, liamdev
//   searchUsers(users, "email.com","email")→ all with email addresses
//   searchUsers(users, "a")               → all with "a" in username
//
// Write a comment: why must you use u[field] instead of u.field?
