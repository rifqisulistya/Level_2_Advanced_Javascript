// ============================================================
// 🟥  OBJECTS — LIVE CLASS
// ============================================================
// All your work happens here. Open DevTools (F12 → Console).
//
// CONNECTING THE DOTS — remember the Arrays homework?
// You had two parallel arrays: studentNames and studentScores.
// You had to keep them in sync manually — push to both,
// shift from both, always remember which index matched which.
//
// Here's that same data as objects instead:
//
//   // Before — parallel arrays (fragile)
//   const studentNames  = ["Maya", "Liam"];
//   const studentScores = [74, 58];
//
//   // After — array of objects (clean, safe, readable)
//   const students = [
//     { name: "Maya", score: 74 },
//     { name: "Liam", score: 58 }
//   ];
//
// The name and score LIVE TOGETHER. They can never get out of sync.
// That's what objects do.
//
// Project: Contact Book
// ============================================================

// ----------------------------------------------------------
// PART 1 — WHAT IS AN OBJECT?
// ----------------------------------------------------------
// An object groups related data under one variable using
// KEY: VALUE pairs.
//
//   const contact = {
//     name: "Alex",
//     age: 28,
//     email: "alex@email.com"
//   };
//
// Each key is like a label on a drawer.
// The value is what's inside that drawer.
// You access a value by naming its key.
//
// TWO ways to access a property:
//
//   contact.name          ← dot notation    (most common)
//   contact["name"]       ← bracket notation (use when key is dynamic)

// TASK 1
// Declare a const called contact1.
// Give it these properties:
//   name     → your full name       (string)
//   age      → your age             (number)
//   email    → a fake email         (string)
//   city     → your city            (string)
//   isActive → true                 (boolean)
//
// Log the entire object.
// Log contact1.name using dot notation.
// Log contact1["email"] using bracket notation.
// Log: "Is " + contact1.name + " active? " + contact1.isActive

const contact1 = {
  name: "Peter Parker",
  age: 25,
  email: "notspiderman@gmail.com",
  city: "NYC",
  isActive: true,
};

console.log(contact1);
console.log(contact1.name);
console.log(contact1["email"]);
console.log(`Is ${contact1.name} active? ${contact1.isActive}`);

// TASK 2
// Declare a const called contact2 with the same properties
// but different values (a different made-up person).
//
// Log a formatted summary using dot notation:
//   "📇 " + contact2.name + " | " + contact2.city + " | " + contact2.email

const contact2 = {
  name: "Frank",
  age: "30",
  email: "therealspiderman@gmail.com",
  city: "Paris",
  isActive: false,
};

console.log(`📇 ${contact2.name} | ${contact2.city} | ${contact2.email}`);

// ----------------------------------------------------------
// PART 2 — ADDING, UPDATING, AND DELETING PROPERTIES
// ----------------------------------------------------------
// You can change an object's properties after declaring it —
// even if the object is a const (same rule as arrays).
//
//   contact1.phone = "555-1234";    // ADD a new property
//   contact1.city  = "Miami";       // UPDATE an existing property
//   delete contact1.isActive;       // REMOVE a property entirely

// TASK 3
// Using contact1:
//   - Add a new property: phone → a fake phone number (string)
//   - Update the city to a different city
//   - Delete the isActive property
//
// Log the full object after each change to see it update.

console.log("Before", contact1);

contact1.phone = "123-4567";
console.log("After adding phone", contact1);

contact1.city = "Miami";
console.log("After city update", contact1);

delete contact1.isActive;
console.log("After deleting isActive", contact1);

// TASK 4
// Declare a const called product with these properties:
//   name     → "Wireless Headphones"
//   price    → 49.99
//   inStock  → true
//   quantity → 30
//
// Then:
//   - A sale drops the price by 10. Use -= on product.price.
//   - 5 units sold. Use -= on product.quantity.
//   - Add a new property: brand → "SoundWave"
//
// Log: product.name + " | $" + product.price + " | Stock: " + product.quantity

const product = {
  name: "Wireless Headphones",
  price: 49.99,
  inStock: true,
  quanity: 30,
};

product.price -= 10;
product.quanity -= 5;
product.brand = "Soundwave";

console.log(`${product.name} | ${product.price} | Stock: ${product.quanity}`);

// ----------------------------------------------------------
// PART 3 — LOOPING THROUGH AN OBJECT WITH for...in
// ----------------------------------------------------------
// Arrays use indexes (0, 1, 2...) so a for loop works perfectly.
// Objects use NAMED KEYS ("name", "age", "email"...) so we need
// a different loop: for...in
//
//   for (let key in contact1) {
//     console.log(key + ": " + contact1[key]);
//   }
//
// key is a variable that holds the current property name as a string.
// contact1[key] uses bracket notation — because key is a variable,
// not a literal string. This is why bracket notation exists.
//
// ⚠️ contact1.key would look for a property literally named "key" — wrong!
//    contact1[key] uses the VALUE of the key variable — correct.

// TASK 5
// Use a for...in loop to log every property of contact1.
// Format each line as:
//   key + ": " + contact1[key]
//

for (let key in (contact1, contact2)) {
  console.log(`Key: ${contact1[key]}`);
  console.log(`Key: ${contact2[key]}`);
}

// Write a comment: why do we use contact1[key] and not contact1.key?

// TASK 6 — for...in + conditional (connect Lessons 3 & 6)
// Declare a const called userProfile:
//   username    → "devmaster99"
//   email       → "dev@example.com"
//   age         → 25
//   isPremium   → true
//   postsCount  → 142
//
// Write a for...in loop.
// On each iteration:
//   IF the value is a boolean → log: key + ": " + value + " (boolean)"
//   ELSE IF the value is a number → log: key + ": " + value + " (number)"
//   ELSE → log: key + ": " + value + " (string)"
//
// Hint: use typeof to check the type → typeof value === "boolean"

const userProfile = {
  username: "devmaster99",
  email: "dev@example.com",
  age: 25,
  isPremium: true,
  postsCount: 142,
};

for (let key in userProfile) {
  const value = userProfile[key];
  if (typeof value === "boolean") {
    console.log(`key: ${value} (boolean)`);
  } else if (typeof value === "number") {
    console.log(`key: ${value} (number)`);
  } else {
    console.log(`key: ${value} (string)`);
  }
}

// ----------------------------------------------------------
// PART 4 — NESTED OBJECTS
// ----------------------------------------------------------
// An object can contain another object as a value.
// This is called nesting — and it maps perfectly to real data.
//
//   const contact = {
//     name: "Alex",
//     address: {          ← nested object
//       street: "123 Main St",
//       city: "Austin",
//       zip: "78701"
//     }
//   };
//
// Access nested properties by chaining dot notation:
//   contact.address.city     → "Austin"
//   contact.address.zip      → "78701"

// TASK 7
// Declare a const called contact3 with these properties:
//   name     → any name
//   email    → any email
//   address  → a nested object with:
//                street  → any street
//                city    → any city
//                country → any country

const contact3 = {
  name: "Cantinflas",
  email: "cantinflas@gmail.com",
  city: "LA",
  address: {
    street: "main st",
    city: "LA",
    country: "USA",
  },
};

console.log(
  `${contact3.name} lives at ${contact3.address.street}, ${contact3.address.city}, ${contact3.address.country}`,
);

//
// Log:
//   contact3.name + " lives at " + contact3.address.street
//   + ", " + contact3.address.city
//   + ", " + contact3.address.country

// ----------------------------------------------------------
// PART 5 — ARRAYS OF OBJECTS (connect Lessons 5 & 6)
// ----------------------------------------------------------
// The most common data pattern in real JavaScript:
// an ARRAY where each element IS an object.
//
// This is exactly how API responses look.
// This is exactly how database records arrive.
// Get comfortable with this pattern — you'll use it every day.
//
//   const contacts = [
//     { name: "Alex", email: "alex@email.com" },
//     { name: "Sam",  email: "sam@email.com"  },
//     { name: "Zoe",  email: "zoe@email.com"  }
//   ];
//
//   contacts[0]        → { name: "Alex", email: "alex@email.com" }
//   contacts[0].name   → "Alex"
//   contacts[1].email  → "sam@email.com"

// TASK 8
// Declare a const called contacts — an array containing
// contact1, contact2, and contact3 (from previous tasks).
//
// Log: "Total contacts: " + contacts.length
// Log the name of the second contact: contacts[1].name
// Log the email of the last contact using .length - 1

const contacts = [contact1, contact2, contact3];

console.log(`Total contacts: ${contacts.length}`);
console.log(contacts[1].name);
console.log(contacts[contacts.length - 1].email);

// TASK 9 — Loop through array of objects (connect Lessons 4, 5, 6)
// Using the contacts array:
// Write a for loop through all contacts.
// On each iteration log a formatted contact card:
//   "--- Contact " + (i + 1) + " ---"
//   "Name:  " + contacts[i].name
//   "Email: " + contacts[i].email
//   "City:  " + contacts[i].city

// delete contact3.address;
// contact3.city = "LA";

for (let i = 0; i < contacts.length; i++) {
  console.log("Name: ", contacts[i].name);
  console.log("Email: ", contacts[i].email);
  console.log(
    "City: ",
    contacts[i].city ? contacts[i].city : contacts[i].address.city,
  );

  //   if (contacts[i].city) {
  //     console.log("City: ", contacts[i].city);
  //   } else {
  //     console.log("City: ", contacts[i].address.city);
  //   }

  //   console.log(
  //     `--- Contact ${i + 1} ---
  //         Name: ${contacts[i].name}
  //         Email: ${contacts[i].email}
  //         City: ${contacts[i].city}`,
  //   );
}

// TASK 10 — Full connect the dots (all 6 lessons)
// Declare a const called employees — an array of 4 objects.
// Each employee object should have:
//   name       → string
//   department → "Engineering", "Design", "Marketing", or "Sales"
//   salary     → a number between 40000 and 120000
//   isFullTime → true or false
//
// Then:
// Declare a let called totalSalary = 0
// Declare a let called fullTimeCount = 0
// Declare a let called partTimeCount = 0
//
// Write a for loop through employees.
// On each iteration:
//   - Add salary to totalSalary
//   - IF isFullTime → increment fullTimeCount
//   - ELSE → increment partTimeCount
//   - Log: employees[i].name + " (" + employees[i].department + ")"
//           + " — $" + employees[i].salary
//           + (employees[i].isFullTime ? " [Full-time]" : " [Part-time]")
//
// After the loop:
//   Log: "Total salary budget: $" + totalSalary
//   Log: "Full-time: " + fullTimeCount + " | Part-time: " + partTimeCount
