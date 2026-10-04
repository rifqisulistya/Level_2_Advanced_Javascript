// ============================================================
// 🟦  ARRAY METHODS — LIVE CLASS
// ============================================================
// All your work happens here. Open DevTools (F12 → Console).
//
// CONNECTING THE DOTS:
// For the last four lessons you've been writing loops manually.
// Every time you wanted to go through an array you wrote:
//
//   for (let i = 0; i < array.length; i++) {
//     // do something with array[i]
//   }
//
// Array methods are built-in shortcuts that do the same thing —
// but cleaner, more readable, and less error-prone.
// No more off-by-one errors. No more i < vs i <=.
//
// You're not learning anything new conceptually —
// you're learning a better syntax for what you already know.
//
// Project: Movie Library
// ============================================================

// ============================================================
// THE DATA — read this carefully before starting
// ============================================================
const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    year: 2010,
    watched: true,
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    year: 2008,
    watched: true,
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    year: 2014,
    watched: false,
  },
  {
    id: 4,
    title: "Parasite",
    genre: "Thriller",
    rating: 8.5,
    year: 2019,
    watched: true,
  },
  {
    id: 5,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    rating: 8.1,
    year: 2014,
    watched: false,
  },
  {
    id: 6,
    title: "Mad Max: Fury Road",
    genre: "Action",
    rating: 8.1,
    year: 2015,
    watched: true,
  },
  {
    id: 7,
    title: "Spirited Away",
    genre: "Animation",
    rating: 8.6,
    year: 2001,
    watched: false,
  },
];

// ----------------------------------------------------------
// PART 1 — forEach (replaces the basic for loop)
// ----------------------------------------------------------
// forEach runs a function once for each element.
// It does NOT return anything — it's purely for side effects
// like logging or updating something outside the array.
//
// BEFORE (manual for loop — you've written this many times):
//   for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
//   }
//
// AFTER (forEach — same result, cleaner code):
//   movies.forEach(function(movie) {
//     console.log(movie.title);
//   });
//
// The function inside forEach runs once per element.
// The parameter (movie) represents the current element —
// name it whatever makes sense for your data.
//
// You'll also see this written with arrow function syntax:
//   movies.forEach((movie) => { console.log(movie.title); });
// We'll cover arrow functions fully in the Functions lesson.
// For now, use the function keyword — both work identically.

// TASK 1
// Use forEach to log every movie title and its rating.
// Format: "⭐ " + movie.rating + " — " + movie.title

// TASK 2 — forEach + conditional (connect Lessons 4 & 8)
// Use forEach to loop through movies.
// IF movie.watched is true  → log: "✅ Watched:   " + movie.title
// IF movie.watched is false → log: "⏳ Unwatched: " + movie.title

movies.forEach(function (movie) {
  console.log(`⭐  ${movie.rating} - ${movie.title}`);
});

movies.forEach(function (movie) {
  console.log(`${movie.title} ${movie.year}`);
});

// movies.forEach(function (movie) {
//   console.log(`${movie.genre} - ${movie.id}`);
// })

// console.log(
//   movies.forEach(function (movie) {
//     return (movie.id, movie.genre);
//   }),
// );

movies.forEach((movie) => console.log(`${movie.id} - ${movie.genre}`));

// movies.forEach(function (movie) {
//   if (movie.watched) {
//     console.log(` ✅ Watched ${movie.title}`);
//   } else {
//     console.log(`⏳ Unwatched ${movie.title}`);
//   }
// });
movies.forEach((movie) =>
  movie.watched
    ? console.log(`✅ Watched ${movie.title}`)
    : console.log(`⏳ Unwatched ${movie.title}`),
);

// ----------------------------------------------------------
// PART 2 — map (transform every element)
// ----------------------------------------------------------
// map creates a NEW array by transforming each element.
// The original array is NOT changed.
// The new array is the same length — one output per input.
//
// Think of it like a factory conveyor belt:
// every item goes in, gets transformed, comes out the other side.
//
//   const titles = movies.map(function(movie) {
//     return movie.title;
//   });
//   // titles → ["Inception", "The Dark Knight", ...]
//
// ⚠️  You MUST return something inside map.
//     If you forget return, the new array fills with undefined.

const movieCards1 = movies.map(function (movie) {
  return `${movie.title} (${movie.year})-${movie.rating};`;
});
console.log(movieCards1);

// TASK 3
// Use map to create a new array called titles
// containing just the title of each movie (a string array).
// Log titles.

const titles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});

console.log(titles);

// TASK 4 — map to build display strings
// Use map to create a new array called movieCards.
// Each element should be a formatted string:
//   movie.title + " (" + movie.year + ") — ⭐" + movie.rating
//
// Log movieCards.
// Then use forEach on movieCards to log each one on its own line.

const movieCards2 = movies.map(function (movie) {
  return `${movie.title} (${movie.year}) - ⭐${movie.rating}`;
});

console.log(movieCards2);

movieCards2.forEach((movie) => console.log(movie));

// TASK 5 — map with calculation (connect Lessons 2 & 8)
// The streaming service wants to display ratings out of 10
// but also show a percentage score (rating / 10 * 100).
//
// Use map to create a new array called ratingCards.
// Each element should be an OBJECT:
//   { title: movie.title, percent: movie.rating / 10 * 100 }
//
// Log ratingCards.

const ratingCards = movies.map(function (movie) {
  return {
    title: movie.title,
    percent: ((movie.rating / 10) * 100).toFixed(2) + "%",
  };
});

console.log(ratingCards);

// ----------------------------------------------------------
// PART 3 — filter (keep only matching elements)
// ----------------------------------------------------------
// filter creates a NEW array containing only the elements
// where your function returns true.
// Elements where it returns false are excluded.
//
// Think of it like a bouncer: only the elements that pass
// the test get into the new array.
//
//   const sciFi = movies.filter(function(movie) {
//     return movie.genre === "Sci-Fi";
//   });
//   // sciFi → only the Sci-Fi movies
//
// ⚠️  You MUST return a condition (true/false) inside filter.
//     Forgetting return means every element passes — filter returns a copy of the whole array.

// TASK 6
// Use filter to create a new array called highRated
// containing only movies with a rating >= 8.6.
// Log: "High rated movies: " + highRated.length
// Then forEach through highRated to log each title and rating.

const highRated = movies.filter(function (movie) {
  return movie.rating >= 8.6;
});

console.log(`High rated movies: ${highRated.length}`);

highRated.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.rating}`);
});

// TASK 7 — filter + map chained (connect Lessons 5, 6, 8)
// First use filter to get only unwatched movies.
// Then use map on the result to extract just the titles.
// Store the final result in a const called watchlist.
//
// Log: "Your watchlist (" + watchlist.length + " movies):"
// Then forEach through watchlist to log each title.
//
// This is method chaining — the output of filter feeds directly into map.
// You can write it on one line:
//   const watchlist = movies.filter(...).map(...);

const watchlist = movies
  .filter(function (movie) {
    return !movie.watched;
  })
  .map(function (movie) {
    return movie.title;
  });

console.log(`Your watchlist ${watchlist.length}`);

watchlist.forEach(function (title) {
  console.log(title);
});

// ----------------------------------------------------------
// PART 4 — find, some, every
// ----------------------------------------------------------
// These three methods ask questions about the array.
//
// find    → returns the FIRST element that passes the test
//           returns undefined if nothing matches
//
// some    → returns TRUE if AT LEAST ONE element passes
//           returns false if none pass
//
// every   → returns TRUE only if ALL elements pass
//           returns false if even one fails

// TASK 8 — find
// Use find to get the movie with id === 4.
// Store it in a const called foundMovie.
// Log: foundMovie.title + " — " + foundMovie.genre
//
// Then use find to search for a movie with id === 99.
// Log what you get. Write a comment: what does find return when nothing matches?

const foundMovie = movies.find(function (movie) {
  return movie.id === 4;
});

console.log(`${foundMovie.title} - ${foundMovie.genre}`);

const notFoundMovie = movies.find(function (movie) {
  return movie.id === 99;
});

console.log(notFoundMovie);

// TASK 9 — some and every
// Use some to check: is there at least one Action movie?
// Log: "Has Action movie: " + result
//
// Use some to check: is there at least one movie rated above 9.0?
// Log: "Has 9.0+ rating: " + result

const action = movies.some(function (movie) {
  return movie.genre === "Action";
});

console.log(action);

const rating = movies.some(function (movie) {
  return movie.rating > 9.0;
});

console.log(rating);
//
// Use every to check: are ALL movies rated above 8.0?
// Log: "All above 8.0: " + result
//
// Use every to check: have ALL movies been watched?
// Log: "All watched: " + result
// Write a comment predicting each result BEFORE you run it.

const ratedAbove = movies.every(function (movie) {
  return movie.rating > 8.0;
});

console.log(ratedAbove);

const beenWatched = movies.every(function (movie) {
  return movie.watched === true;
});

console.log(`All watched: ${beenWatched}`);
// false due to not all being true

// ----------------------------------------------------------
// PART 5 — reduce (accumulate to a single value)
// ----------------------------------------------------------
// reduce processes every element and builds up ONE result.
// That result can be a number, a string, an object, an array — anything.
//
// It takes two parameters: an accumulator and the current element.
// The accumulator carries the running result from one iteration to the next.
//
//   const total = numbers.reduce(function(acc, current) {
//     return acc + current;
//   }, 0);
//   //        ↑ starting value for acc
//
// Think of acc like the running total variable you declared
// outside the loop in the Loops and Arrays lessons.
// reduce just handles that for you automatically.

// TASK 10 — reduce + connect the dots (all 7 lessons)
// Use reduce to calculate the total of all movie ratings.
// Start the accumulator at 0.
// Store the result in a const called totalRating.
//
// Then calculate the average rating:
//   const averageRating = totalRating / movies.length
//
// Log: "Total rating: "   + totalRating
// Log: "Average rating: " + averageRating
//
// Then use filter to get movies rated above the average.
// Use map to get just their titles.
// Log: "Above average movies: " + aboveAverageTitles

const totalRating = movies.reduce(function (acc, movie) {
  return acc + movie.rating;
}, 0);

const averageRating = totalRating / movies.length;

console.log(`Total Rating ${totalRating}`);
console.log(`Average Rating ${averageRating.toFixed(2)}`);

const aboveAverage = movies
  .filter(function (movie) {
    return movie.rating > averageRating;
  })
  .map(function (movie) {
    return movie.title;
  });

console.log(`Above average movies: ${aboveAverage}`);

// ============================================================
// 📝 .sort() — FOOTNOTE
// ============================================================
// Arrays have a .sort() method for sorting elements.
// It works but has a famous gotcha:
//
//   [10, 9, 2, 1, 100].sort()
//   // → [1, 10, 100, 2, 9]  ❌ sorts as STRINGS by default!
//
// To sort numbers correctly you need a compare function:
//   [10, 9, 2, 1, 100].sort((a, b) => a - b)
//   // → [1, 2, 9, 10, 100] ✅
//
// You'll recognise it when you see it. For this course
// we don't need .sort() before we get to real projects,
// so we won't go deeper here.
// ============================================================
