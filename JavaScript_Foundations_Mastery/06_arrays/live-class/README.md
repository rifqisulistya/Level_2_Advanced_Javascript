# 📋 Arrays — Live Class

---

## 🧠 WHAT Is an Array?

An **array** is an ordered list stored in a single variable. Instead of creating one variable for every piece of data, you create one variable that holds as many values as you need.

Think of it like a numbered shelf at a library. Each book (element) sits in a specific slot (index). You find any book by knowing its slot number.

```js
// Before arrays — one variable per value
const song1 = "Blinding Lights";
const song2 = "As It Was";
const song3 = "Levitating";

// After arrays — one variable, many values
const playlist = ["Blinding Lights", "As It Was", "Levitating"];
```

---

## ❓ WHY Do Arrays Exist?

Remember the Loops homework — `item1Price`, `item2Price`, all the way to `item6Price`? Six separate variables for six related values. What if you had 100 items? 1000?

Arrays solve this. One variable holds every value. One loop processes all of them. The code stays the same size no matter how many items there are.

That's the fundamental shift arrays introduce: your code stops caring about _how many_ values there are.

---

## 🔍 HOW They Work

### Declaring an Array

```js
const playlist = ["Song A", "Song B", "Song C", "Song D"];
```

Square brackets `[]` hold the elements, separated by commas.

---

### ⚠️ Indexes Start at 0 — Always

This is the single most important thing to memorise about arrays.

```
Index:     0         1         2         3
Value:  "Song A"  "Song B"  "Song C"  "Song D"
```

```js
playlist[0]; // "Song A"  — first element
playlist[1]; // "Song B"  — second element
playlist[3]; // "Song D"  — fourth element
playlist[4]; // undefined — doesn't exist!
```

The last valid index is always `array.length - 1`.

---

### array.length

`.length` gives you the total number of elements — always one more than the last index.

```js
playlist.length; // 4
playlist[playlist.length - 1]; // "Song D" — last element, always
```

---

### Updating Elements

```js
playlist[1] = "New Song"; // replaces "Song B"
```

⚠️ **`const` arrays can have their elements updated.** `const` only prevents you from reassigning the variable to a completely different array. Changing individual elements is always allowed.

```js
const playlist = ["Song A", "Song B"];
playlist = ["Song C"]; // ❌ TypeError — can't reassign const
playlist[0] = "Song C"; // ✅ allowed — updating an element
```

---

### Looping Through an Array

```js
for (let i = 0; i < playlist.length; i++) {
  console.log(playlist[i]);
}
```

Three rules:

- Start at `i = 0` (first index)
- Condition: `i < array.length` — NOT `<=` (that would reach one index past the end)
- Access each element with `array[i]`

---

### push, pop, shift, unshift

| Method           | What it does                   | Where                            |
| ---------------- | ------------------------------ | -------------------------------- |
| `push(value)`    | Adds to the **end**            | `playlist.push("New Song")`      |
| `pop()`          | Removes from the **end**       | `const last = playlist.pop()`    |
| `unshift(value)` | Adds to the **beginning**      | `playlist.unshift("Intro")`      |
| `shift()`        | Removes from the **beginning** | `const first = playlist.shift()` |

`pop()` and `shift()` both **return** the removed element — you can store it in a variable.

---

## 🌍 Real-World Usage

Arrays are the backbone of virtually every data-driven feature:

- **Social feed:** an array of post objects, looped through to render each one
- **Shopping cart:** an array of prices, looped through to calculate the total
- **Autocomplete:** an array of suggestions, filtered as you type
- **Leaderboard:** an array of scores, sorted highest to lowest
- **Playlist:** literally an array — this is how Spotify stores your queue

---

## ⚠️ Common Mistakes

1. **Using `array.length` as an index**

   ```js
   const arr = ["a", "b", "c"]; // length = 3, last index = 2
   arr[3]; // ❌ undefined — index 3 doesn't exist
   arr[arr.length - 1]; // ✅ "c" — always the last element
   ```

2. **Starting the loop at 1 instead of 0**

   ```js
   for (let i = 1; ...) { }  // ❌ misses the first element
   for (let i = 0; ...) { }  // ✅
   ```

3. **Using `<=` instead of `<` in the loop condition**

   ```js
   for (let i = 0; i <= arr.length; i++) {} // ❌ last iteration: arr[3] = undefined
   for (let i = 0; i < arr.length; i++) {} // ✅
   ```

4. **Trying to reassign a `const` array**

   ```js
   const scores = [90, 85];
   scores = [90, 100]; // ❌ TypeError
   scores[1] = 100; // ✅ update the element instead
   ```

5. **Seeding a min/max variable at 0**
   ```js
   let lowest = 0; // ❌ every real score is > 0, so lowest never updates
   let lowest = scores[0]; // ✅ start with the first real value
   ```

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Declare an array and access elements by index
- [ ] Explain why indexes start at 0
- [ ] Use `array.length` and `array[array.length - 1]`
- [ ] Update an element using bracket notation
- [ ] Loop through an array with a `for` loop using `i < array.length`
- [ ] Use `push`, `pop`, `shift`, and `unshift` correctly
- [ ] Combine arrays, loops, and conditionals in one program
