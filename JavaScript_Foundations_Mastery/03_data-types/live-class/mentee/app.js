// ============================================================
// 📦  DATA TYPES — LIVE CLASS
// ============================================================
// Open index.html in your browser.
// All output goes to the console (F12 → Console).
//
// CONNECTING THE DOTS:
// You've been using data since Lesson 1 — storing names,
// ages, scores, status labels. This lesson names what those
// values actually ARE and gives you precision tools to work
// with them.
//
// The big upgrade today: TEMPLATE LITERALS.
// Every "Hello " + name + "!" you've written will become
// `Hello ${name}!` — shorter, cleaner, more readable.
// You'll use template literals for the rest of the curriculum.
//
// Project: User Profile Formatter
// ============================================================

console.log("=== DATA TYPES — LIVE CLASS ===\n");

// ============================================================
// THE DATA
// ============================================================
const user = {
  firstName: "alex",
  lastName: "RIVERA",
  email: "  Alex.Rivera@Email.COM  ",
  age: "28", // ← stored as string (from a form input)
  bio: "  Passionate developer. Loves clean code.  ",
  isPremium: true,
  score: null, // ← not yet set
  lastLogin: undefined, // ← never logged in
};

const userTwo = {
  firstName: "John",
  lastName: "RIVERA",
  email: "  Alex.Rivera@Email.COM  ",
  ageTwo: "28", // ← stored as string (from a form input)
  bioTwo: "  Passionate developer. Loves clean code.  ",
  isPremiumTwo: true,
  scoreTwo: null, // ← not yet set
  lastLoginTwo: undefined, // ← never logged in
};

// ============================================================
// PART 1 — THE PRIMITIVE TYPES
// ============================================================
// JavaScript has 5 types you'll use daily:
//
// string    — text in quotes: "hello", 'world', `template`
// number    — any numeric value: 42, 3.14, -7, Infinity, NaN
// boolean   — true or false only
// undefined — a variable declared but never assigned a value
// null      — intentionally assigned "no value"
//
// Use typeof to check what type something is:
//   typeof "hello"  → "string"
//   typeof 42       → "number"
//   typeof true     → "boolean"
//   typeof undefined→ "undefined"
//   typeof null     → "object"  ← historic JS bug, not "null"

// TASK 1 — Using typeof
// Log the typeof each property in the user object above.
// For each one, write a comment: is the type what you expected?
// Pay special attention to user.age and user.score.

console.log(typeof user.firstName); // string
console.log(typeof user.lastName); // string
console.log(typeof user.email); // string
console.log(typeof user.age); // string
console.log(typeof user.bio); // string
console.log(typeof user.isPremium); // boolean
console.log(typeof user.score); // object
console.log(typeof user.lastLogin); // undefined

//
// Then answer these as comments:
// Q1: Why is user.age a string even though 28 is a number?
// Q2: Why does typeof null return "object"?
// Q3: What is the difference between null and undefined?

console.log("--- Task 1: typeof ---");
// your code here

// ============================================================
// PART 2 — TEMPLATE LITERALS
// ============================================================
// Template literals use backticks (`) instead of quotes.
// They let you embed expressions directly with ${}.
//
// BEFORE (string concatenation):
//   "Hello, " + firstName + " " + lastName + "!"
//
// AFTER (template literal):
//   `Hello, ${firstName} ${lastName}!`
//
// Inside ${} you can put ANY JavaScript expression:
//   `${2 + 2}`           → "4"
//   `${user.age > 18 ? "Adult" : "Minor"}`
//   `$${(price * 1.08).toFixed(2)}`   → "$43.19"
//
// Multiline — no \n needed:
//   `Line one
//    Line two`

// TASK 2 — Your first template literals
// Rewrite each of the following using template literals.

const { firstName, lastName, email, isPremium, age } = user;

// console.log(userTwo.firstNameTwo);
//
// a) "Name: " + user.firstName + " " + user.lastName
//    → `Name: ${...}`
//    Log it.

console.log(`Name: ${userTwo.firstName} ${userTwo.lastName}`);
//
// b) "Age: " + user.age + " years old"
//    Log it using a template literal.

console.log(`Age: ${age} years old`);
//
// c) Use a ternary INSIDE a template literal:
//    `Status: ${user.isPremium ? "⭐ Premium" : "Free"}`
//    Log it.
//

console.log(`Status: ${isPremium ? "⭐ Premium" : "Free"}`);

// d) Write a multiline template literal for a profile card:
//    `=== User Profile ===
//    Name: ${firstName} ${lastName}
//    Email: ${email}
//    Premium: ${isPremium}`
//    (Destructure from user first, then use the variables)
//    Log the whole card.

console.log(
  `Name: ${firstName} ${lastName}, Email: ${email}, Premium: ${isPremium}`,
);

const profileCard = `=== User Profile ===
Name: ${firstName} ${lastName}
 Email: ${email}
 Premium: ${isPremium}`;
console.log(profileCard);

//
// Write a comment: what are two advantages of template literals
// over string concatenation?

console.log("\n--- Task 2: Template Literals ---");
// your code here

// ============================================================
// PART 3 — STRING METHODS
// ============================================================
// Strings come with built-in methods for common operations.
// These are the ones you'll use most often:
//
// .length              → number of characters
// .toUpperCase()       → "hello" → "HELLO"
// .toLowerCase()       → "HELLO" → "hello"
// .trim()              → "  hi  " → "hi"  (removes whitespace)
// .includes("x")       → true/false — does string contain "x"?
// .startsWith("x")     → true/false
// .endsWith("x")       → true/false
// .slice(start, end)   → extract a portion
// .split(",")          → split into an array
// .replace("a","b")    → replace first match (regex for all)

// TASK 3 — Cleaning and formatting user data
// The user.email is "  Alex.Rivera@Email.COM  " (messy from a form).
//
// a) Use .trim() to remove the whitespace.
//    Store in const trimmedEmail.
//    Log it.
//
// b) Use .toLowerCase() to normalise the email.
//    Store in const cleanEmail.
//    Log it.
//
// c) Use .includes("@") to check if it looks like an email.
//    Log: `Valid email format: ${result}`
//
// d) Use .split("@") to get the username and domain separately.
//    const [emailUser, emailDomain] = cleanEmail.split("@");
//    Log both.
//
// e) Use .slice() to get just the domain extension:
//    emailDomain.slice(emailDomain.lastIndexOf("."))
//    Log: `Domain extension: ${ext}`

const trimmedEmail = user.email.trim();
const cleanEmail = trimmedEmail.toLowerCase();

console.log(trimmedEmail);
console.log(cleanEmail);

console.log(`valid Email format: ${cleanEmail.includes("@")}`);

const [emailUser, emailDomain] = cleanEmail.split("@");
console.log(emailUser);
console.log(emailDomain);

const ext = emailDomain.slice(emailDomain.lastIndexOf("."));
console.log(`Domain extension: ${ext}`);

console.log("\n--- Task 3: String Methods ---");
// your code here

// TASK 4 — Formatting names
// The user has firstName = "alex" and lastName = "RIVERA" (inconsistent case).
//
// a) Write a function called formatName.
//    Parameters: firstName, lastName
//    Returns a properly capitalised full name:
//    First letter uppercase, rest lowercase for each part.
//    Use .charAt(0).toUpperCase() + .slice(1).toLowerCase()
//    Use a template literal to combine: `${formattedFirst} ${formattedLast}`
//    Call it with user.firstName and user.lastName. Log the result.

function formatName(firstName, lastName) {
  const formattedFirst =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const formattedLast =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  return `${formattedFirst} ${formattedLast}`;
}

console.log(formatName(user.firstName, user.lastName));

//
// b) Use .slice() to get the user's initials:
//    const initials = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
//    Log the initials.

const initials = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
console.log(initials.slice(0));

// const initial = `${user.firstName.slice(0, 1).toLocaleUpperCase()} ${user.lastName.slice(0, 1).toLocaleUpperCase()}`;
// console.log(initials)

//
// c) Use .length to check if a username is valid (3-20 chars):
//    const username = "alexdev";
//    Log: `"${username}" length: ${username.length} — valid: ${result}`

const username = "alexdev";
const isValid = username.length >= 3 && username.length <= 20;

console.log(`${username} Length: ${username.length} - valid: ${isValid}`);

console.log("\n--- Task 4: Formatting Names ---");
// your code here

// ============================================================
// PART 4 — TYPE COERCION AND CONVERSION
// ============================================================
// JavaScript sometimes converts types automatically — this is
// called TYPE COERCION. It's helpful sometimes and dangerous
// often.
//
// STRING + NUMBER:
//   "5" + 3      → "53"    ← + triggers string concatenation
//   "5" - 3      → 2       ← - forces numeric conversion
//   "5" * 3      → 15      ← same
//
// EXPLICIT CONVERSION (always prefer this):
//   Number("42")         → 42
//   Number("42px")       → NaN  ← can't fully convert
//   parseInt("42px")     → 42   ← stops at the non-numeric part
//   parseFloat("3.14em") → 3.14
//   String(42)           → "42"
//   Boolean(0)           → false
//   Boolean("hello")     → true

// TASK 5 — Type coercion surprises
// Run each of these and log the result AND the typeof result:
//
// a) "10" + 5     → what do you get? Why?
// b) "10" - 5     → what do you get? Why?
// c) "10" * 2     → what do you get?
// d) true + 1     → what do you get? (true coerces to 1)
// e) false + "!"  → what do you get?

console.log("10" + 5, typeof ("10" + 5));
console.log("10" - 5, typeof ("10" - 5));
console.log("10" * 2, typeof ("10" * 2));
console.log(true + 1, typeof (true + 1));
console.log(false + "!", typeof (false + "!"));
//
// For each: log the value AND use typeof to check the result type.
// Write a comment explaining WHY each one works the way it does.

console.log("\n--- Task 5: Coercion Surprises ---");
// your code here

// TASK 6 — Explicit type conversion
// user.age is stored as the string "28" (as it would come from a form).
//
// a) Convert it to a number: const ageNum = Number(user.age)
//    Log ageNum and typeof ageNum.
//
// b) Calculate: const birthYear = 2025 - ageNum
//    Log: `Born approximately: ${birthYear}`
//
// c) What happens if you try to convert a non-numeric string?
//    const bad = Number("twenty-eight")
//    Log bad — what do you get?
//    Use isNaN(bad) to check: log `Is NaN: ${isNaN(bad)}`
//
// d) Use parseInt to safely extract a number from a mixed string:
//    const messy = "42px solid #333";
//    const px = parseInt(messy);
//    Log px — what do you get?
//
// e) Convert user.isPremium to a string:
//    const premiumStr = String(user.isPremium)
//    Log premiumStr and typeof premiumStr.

console.log("\n--- Task 6: Explicit Conversion ---");
// your code here

// ============================================================
// PART 5 — NULL, UNDEFINED, AND TRUTHINESS
// ============================================================
// null      = "I intentionally set this to nothing"
// undefined = "this was never assigned"
//
// Both are falsy. Both are "empty". But they mean different things.
// A function that returns nothing returns undefined.
// A database that has no value for a field often returns null.
//
// THE SIX FALSY VALUES (memorise these):
//   false, 0, "", null, undefined, NaN
//
// Everything else is TRUTHY — including "0", "false", [], {}

// TASK 7 — null, undefined, and truthiness
//
// a) Log user.score and user.lastLogin.
//    Write a comment: what's the difference between them?
//
// b) Check each with an if statement:
//    if (user.score)     { log "score is truthy" } else { log "score is falsy" }
//    if (user.lastLogin) { log "lastLogin is truthy" } else { log "lastLogin is falsy" }
//
// c) These SIX values are ALL falsy. Log each with Boolean() to confirm:
//    false, 0, "", null, undefined, NaN
//    Log: `Boolean(false) = ${Boolean(false)}`  etc.
//
// d) These look like they SHOULD be falsy but aren't — they're truthy:
//    "0", "false", [], {}
//    Log each with Boolean() to confirm.
//    Write a comment: why is "0" truthy but 0 is falsy?

console.log("\n--- Task 7: Falsy/Truthy ---");
// your code here

// ============================================================
// PART 6 — == vs ===
// ============================================================
// == (loose equality)  → converts types before comparing
// === (strict equality)→ NO conversion — type AND value must match
//
//   1  == "1"     → true   ← JS converts "1" to 1 first
//   1  === "1"    → false  ← different types
//   0  == false   → true   ← both coerce to 0
//   0  === false  → false  ← different types
//   null == undefined  → true   ← special case
//   null === undefined → false  ← different types
//
// RULE: Always use === in your code.
// == is a source of subtle bugs. === is explicit and safe.

// TASK 8 — == vs ===
// Log the result of each comparison AND explain it with a comment:
//
// a) 1 == "1"       vs    1 === "1"
// b) 0 == false     vs    0 === false
// c) "" == false    vs    "" === false
// d) null == undefined   vs   null === undefined
// e) null == 0      vs   null === 0
//
// For each pair: why does == give a different answer than ===?
//
// Write a final comment: in what ONE situation might you
// intentionally use == instead of ===?
// (Hint: checking for both null and undefined at once)

console.log("\n--- Task 8: == vs === ---");
// your code here

// ============================================================
// PART 7 — PUTTING IT TOGETHER: PROFILE FORMATTER
// ============================================================

// TASK 9 — formatProfile function
// Declare a function called formatProfile.
// Parameter: user (object with firstName, lastName, email,
//            age, bio, isPremium, score, lastLogin)
//
// Inside, use template literals, string methods, and type
// conversion to build and return this formatted string:
//
//   === [INITIALS] — [Full Name] ===
//   Email:    [clean lowercase email]
//   Age:      [numeric age] years old
//   Status:   ⭐ Premium  OR  Free
//   Bio:      [trimmed bio]
//   Score:    [score if not null, "Not yet set" if null]
//   Activity: [lastLogin if not undefined, "No logins yet" if undefined]
//
// Use:
//   - Template literals for all string building
//   - .trim(), .toLowerCase() for email cleaning
//   - Number() for age conversion
//   - Ternary or || for null/undefined fallbacks
//
// Call formatProfile(user) and log the result.

console.log("\n--- Task 9: formatProfile ---");
// your code here

// ============================================================
// PART 8 — CONNECT THE DOTS
// ============================================================

// TASK 10 — Rewrite with template literals
// Below are three patterns from previous lessons using
// string concatenation. Rewrite each using template literals.
//
// a) From Variables lesson:
//    "Hello, " + firstName + "! You have " + messageCount + " messages."
//    Rewrite and log using variables: firstName = "Alex", messageCount = 5
//
// b) From Conditionals lesson:
//    "Access " + (age >= 18 ? "granted" : "denied") + " for " + username
//    Rewrite and log: age = 20, username = "alexdev"
//
// c) From Loops lesson — building a string in a loop:
//    let result = "";
//    for (let i = 1; i <= 3; i++) {
//      result += "Item " + i + ": product\n";
//    }
//    Rewrite using template literals inside the loop.
//    Use products = ["Headphones", "Keyboard", "Hub"]
//    Build: "Item 1: Headphones\nItem 2: Keyboard\nItem 3: Hub"
//
// Write a comment: which version is easier to read?

console.log("\n--- Task 10: Rewriting with Template Literals ---");
// your code here

// ============================================================
// 📝 FOOTNOTES
// ============================================================
// BIGINT: for integers larger than Number.MAX_SAFE_INTEGER
//   const big = 9007199254740991n;  ← trailing n makes it BigInt
//   Use case: cryptography, database ids, financial calculations
//
// SYMBOL: a guaranteed-unique identifier
//   const id = Symbol("description");
//   Use case: object property keys that won't collide
//   Rare in everyday code — you'll see it in advanced patterns
//
// BOTH are primitives but you won't need them for everyday work.
// ============================================================
