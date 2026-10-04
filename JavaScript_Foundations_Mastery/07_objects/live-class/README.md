# 🗂️ Objects — Live Class

---

## 🧠 WHAT Is an Object?

An **object** groups related data together under one variable using **key: value pairs**.

Think of it like a labeled form. A job application has named fields — "Name", "Age", "Email". You fill in each field with its value. An object is that same idea in code.

```js
const contact = {
  name: "Alex Rivera",
  age: 28,
  email: "alex@email.com",
  city: "Austin",
};
```

Each **key** is the label. Each **value** is the data. Together they're called a **property**.

---

## ❓ WHY Do Objects Exist?

Remember the Arrays homework? Two parallel arrays — `studentNames` and `studentScores` — that had to stay in sync manually. Push to both. Shift from both. Always remember which index matched which.

```js
// Fragile — two arrays that can drift out of sync
const studentNames = ["Maya", "Liam", "Sofia"];
const studentScores = [74, 58, 92];
```

Objects solve this permanently. Related data lives **together**:

```js
// Solid — name and score travel as one unit
const students = [
  { name: "Maya", score: 74 },
  { name: "Liam", score: 58 },
  { name: "Sofia", score: 92 },
];
```

Maya's name and score can never get out of sync — they're the same object.

---

## 🔍 HOW They Work

### Declaring an Object

```js
const product = {
  name: "Headphones",
  price: 49.99,
  inStock: true,
  quantity: 30,
};
```

const songInfo = {
artistName: "Tom",
songName: "Star",
genre: "Alternative"
}

for (const key in songInfo){
console.log(key, songInfo[key])
}

aristName Tom
songName Star
genre Alternative

Curly braces `{}` hold the properties. Each property is `key: value`, separated by commas.

---

### Accessing Properties — Two Ways

```js
// Dot notation — most common, cleanest
product.name; // "Headphones"
product.price; // 49.99

// Bracket notation — use when the key is dynamic (stored in a variable)
product["name"]; // "Headphones"

const key = "price";
product[key]; // 49.99 ✅
product.key; // undefined ❌ — looks for property literally named "key"
```

---

### Adding, Updating, Deleting

```js
product.brand = "SoundWave"; // ADD a new property
product.price -= 10; // UPDATE an existing property
delete product.inStock; // REMOVE a property entirely
```

⚠️ Even though `product` is `const`, you can still mutate its properties. Same rule as arrays — `const` protects the binding, not the contents.

---

### Looping with `for...in`

```js
for (let key in product) {
  console.log(key + ": " + product[key]);
}
```

`for...in` gives you each **key** as a string. Use bracket notation `product[key]` to get the value — dot notation `product.key` would look for a property literally named "key".

**Memory trick:**

- `for...in` → **in** an object (keys)
- `for...of` → **of** an array (values)

---

### Nested Objects

```js
const contact = {
  name: "Alex",
  address: {
    city: "Austin",
    country: "USA",
  },
};

contact.address.city; // "Austin"
```

Chain dot notation to drill into nested objects.

---

### Arrays of Objects

The most common pattern in real JavaScript — an array where every element is an object:

```js
const contacts = [
  { name: "Alex", email: "alex@email.com" },
  { name: "Sam", email: "sam@email.com" },
];

contacts[0]; // { name: "Alex", email: "alex@email.com" }
contacts[0].name; // "Alex"
contacts[1].email; // "sam@email.com"
```

Loop through it exactly like a regular array — just add dot notation to access properties:

```js
for (let i = 0; i < contacts.length; i++) {
  console.log(contacts[i].name);
}
```

---

## 🌍 Real-World Usage

Objects are the universal data format of the web:

- **API responses** return arrays of objects — every fetch you'll ever make returns this structure
- **User profiles** — `{ name, email, avatar, isPremium }`
- **Shopping carts** — `{ productId, name, price, quantity }`
- **Database records** — every row in a database maps to an object in code

---

## ⚠️ Common Mistakes

1. **Wrong case on property name**

   ```js
   user.Email; // ❌ undefined — property is "email", not "Email"
   user.email; // ✅
   ```

2. **Dot notation with a variable key**

   ```js
   const key = "name";
   user.key; // ❌ undefined — looks for property "key"
   user[key]; // ✅ reads the variable → looks for property "name"
   ```

3. **`for...of` on a plain object**

   ```js
   for (let val of person) {
   } // ❌ TypeError — objects aren't iterable
   for (let key in person) {
   } // ✅ for...in for objects
   ```

4. **Trying to reassign a `const` object**

   ```js
   const user = { name: "Alex" };
   user = { name: "Sam" }; // ❌ TypeError
   user.name = "Sam"; // ✅ update the property instead
   ```

5. **Forgetting the comma between properties**
   ```js
   const obj = {
     name: "Alex"   // ❌ missing comma
     age: 28
   };
   // SyntaxError: Unexpected identifier
   ```

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Declare an object with multiple properties
- [ ] Access properties using dot and bracket notation
- [ ] Explain when to use bracket notation over dot notation
- [ ] Add, update, and delete properties on an existing object
- [ ] Loop through an object with `for...in`
- [ ] Create and access nested objects
- [ ] Work with arrays of objects
- [ ] Explain why objects solve the parallel array problem
