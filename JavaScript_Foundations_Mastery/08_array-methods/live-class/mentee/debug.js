// ============================================================
// 🐛  ARRAY METHODS — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// Each snippet has a bug. Read carefully, fix it, and explain
// what was wrong as a comment.
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// The developer wants to create a new array of uppercase titles.
// But the original titles array never changes, and doubled is
// full of undefined. What went wrong?

const titles = ["inception", "interstellar", "parasite"];

const uppercased = titles.map(function (title) {
  title.toUpperCase();
});

console.log("Original:", titles);
console.log("Uppercased:", uppercased);

// What's wrong ↓

// Your fix ↓

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should filter out movies with ratings below 8.5
// but it returns ALL movies instead of just the high-rated ones.

const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "The Dark Knight", rating: 9.0 },
  { title: "Morbius", rating: 5.2 },
  { title: "Parasite", rating: 8.5 },
];

const highRated = movies.filter(function (movie) {
  movie.rating >= 8.5;
});

console.log(highRated);

// What's wrong ↓

// Your fix ↓

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This should calculate the total of all prices (expected: 187.97)
// but it produces a strange result. Why?

const prices = [49.99, 89.99, 29.99, 18.0];

const total = prices.reduce(function (acc, price) {
  return acc + price;
}, 0);

console.log("Total: $" + total);

// What's wrong ↓
// Hint: run it and look at the actual output carefully.
// What is the first value of acc?

// Your fix ↓
