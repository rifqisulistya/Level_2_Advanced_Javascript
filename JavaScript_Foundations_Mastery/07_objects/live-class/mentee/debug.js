// ============================================================
// 🐛  OBJECTS — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// Each snippet has a bug. Read carefully, fix it, and explain
// what was wrong as a comment.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the user's email but logs undefined instead.

const user = {
  name: "Jordan",
  age: 29,
  email: "jordan@email.com"
};

console.log(user.Email);

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to access a property using a variable
// as the key. It throws a ReferenceError. What's wrong?

const product = {
  name: "Keyboard",
  price: 79.99,
  inStock: true
};

const key = "price";
console.log(product.key);

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This is supposed to loop through the person object and
// log each key-value pair. Instead it throws a TypeError.
// What's the structural problem?

const person = {
  name: "Taylor",
  age: 31,
  city: "Denver"
};

for (let value of person) {
  console.log(value);
}

// What's wrong ↓

// Your fix ↓
