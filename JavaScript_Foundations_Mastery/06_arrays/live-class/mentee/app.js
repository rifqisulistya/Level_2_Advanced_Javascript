// ============================================================
// 🟦  ARRAYS — LIVE CLASS
// ============================================================
// All your work happens here. Open DevTools (F12 → Console).
//
// CONNECTING THE DOTS — remember the Loops homework?
// You had item1Price, item2Price, item3Price... all the way to 6.
// One variable per value. Clunky to write, hard to loop through.
// Arrays fix that. One variable. Any number of values.
//
// Project: Playlist Manager
// ============================================================

// ----------------------------------------------------------
// PART 1 — WHAT IS AN ARRAY?
// ----------------------------------------------------------
// An array is an ordered list stored in a single variable.
// Each item in the list is called an ELEMENT.
// Each element has a position called an INDEX.
//
// ⚠️  INDEXES START AT 0 — NOT 1. Always.k
//
//   const playlist = ["Song A", "Song B", "Song C"];
//                         0          1          2
//
// Think of it like a numbered shelf at a library.
// The first shelf is shelf 0. The second is shelf 1. And so on.
// It feels wrong at first — but it becomes automatic fast.

// TASK 1
// Declare a const called playlist.
// Assign it an array of 5 song titles (strings of your choice).
//
// Log the entire array.
// Log the FIRST song  (index 0).
// Log the THIRD song  (index 2).
// Log the LAST song   (index 4).
//
// Write a comment next to each log showing which index you used.

const playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];

console.log(playlist);
console.log(playlist[0]);
console.log(playlist[2]);
console.log(playlist[4]);

// TASK 2
// Declare a const called playlist length using playlist.length
// Log: "Songs in playlist: " + playlistLength
//
// Then log the last element using .length dynamically:
//   playlist[playlist.length - 1]
//
// Write a comment: why is the last index always length - 1?

const playlistLength = playlist.length;
console.log("songs in playlist: " + playlistLength);

console.log(playlist[playlist.length - 1]);

// ----------------------------------------------------------
// PART 2 — ACCESSING AND UPDATING ELEMENTS
// ----------------------------------------------------------
// You access an element with:   array[index]
// You update an element with:   array[index] = newValue
//
// ⚠️  Even though playlist is a const, you CAN update its elements.
//     const prevents you from reassigning the whole array to something new.
//     It does NOT prevent you from changing what's inside it.
//
//   const playlist = ["Song A"];
//   playlist = ["Song B"];        // ❌ TypeError — can't reassign const
//   playlist[0] = "Song B";       // ✅ allowed — updating an element

// TASK 3
// Using your playlist from Task 1:
//   - Update the second song (index 1) to a new title.
//   - Update the fourth song (index 3) to a new title.
//
// Log the full playlist after both updates to confirm the changes.

playlist[1] = "chickennuggets";
playlist[3] = "Gumbo";

console.log(playlist);

// TASK 4
// Declare a const called prices with these values:
//   [12, 35, 15, 8, 42, 28]
//
// ← That's the exact shopping cart data from the Loops homework —
//   but now stored cleanly in ONE variable instead of six!
//
// Log: "First price: $"  + prices[0]
// Log: "Last price: $"   + prices[prices.length - 1]
// Log: "Third price: $"  + prices[2]
//
// Then update prices[1] from 35 to 30.
// Log the full prices array to confirm.

const prices = [12, 35, 15, 8, 42, 28];

console.log(`First price: $${prices[0]}`);
console.log(`Last price: $${prices[prices.length - 1]}`);
console.log(`Third price: $${prices[2]}`);

prices[1] = 30;
console.log(prices);

// ----------------------------------------------------------
// PART 3 — LOOPING THROUGH AN ARRAY
// ----------------------------------------------------------
// The real power of arrays: combine them with a for loop.
// Instead of accessing each element by hand, let the loop do it.
//
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
//
// Key details:
//   - Start at i = 0  (first index)
//   - Condition: i < array.length  (NOT <=  — why?)
//   - Access each element with array[i]

// TASK 5
// Loop through your playlist array.
// On each iteration log:
//   "Track " + (i + 1) + ": " + playlist[i]
//
// ⚠️  Why (i + 1) instead of i?
//     Because indexes start at 0 but track numbers start at 1.
//     Write this as a comment.
//
// Expected format:
//   Track 1: [song title]
//   Track 2: [song title]
//   ...

for (let i = 0; i < playlist.length; i++) {
  console.log(`Track ${i + 1}: ${playlist[i]}`);
}

// TASK 6 — Loop + operator (connect Lessons 2, 4, 5)
// Using the prices array from Task 4:
// Declare a let called total with value 0.
//
// Loop through prices and add each value to total using +=.
// After the loop, log: "Cart total: $" + total
//
// This is the Loops homework Task 3 — but now in 4 lines
// instead of 20. That's what arrays do.

let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log(`Cart total: $${total}`);

// ----------------------------------------------------------
// PART 4 — ARRAY METHODS: push, pop, shift, unshift
// ----------------------------------------------------------
// These four methods add or remove elements from an array.
//
//   push(value)    → adds to the END        (like adding to a queue)
//   pop()          → removes from the END   (like taking the last item)
//   unshift(value) → adds to the BEGINNING  (like cutting to the front)
//   shift()        → removes from the BEGINNING (like serving first in line)
//
// push and unshift take a value as an argument.
// pop and shift take no argument — they just remove.
// All four MODIFY the original array directly.

// TASK 7 — push and pop
// Start with your playlist array.
// Log it first so you can see the before state.
//
// Use push() to add a new song to the end.
// Log the playlist after push.
// Log: "Length after push: " + playlist.length
//
// Use pop() to remove the last song.
// Log the playlist after pop.
// Log: "Length after pop: " + playlist.length

console.log(playlist);

playlist.push("Red Beans");
console.log(`After Push: ${playlist}`);

console.log(`Length after push: ${playlist.length}`);

const songremoved = playlist.pop();
console.log(playlist);

console.log(`Length after pop: ${playlist.length}`);
console.log(`pop() output: ${songremoved}`);

//
// Write a comment: what does pop() return?
// Hint: store the result of pop() in a variable and log it.

// TASK 8 — shift and unshift
// Log your current playlist first.
//
// Use unshift() to add a new song to the BEGINNING.
// Log the playlist after unshift.
//
// Use shift() to remove the first song.
// Log the song that was removed. (store the result in a variable)
// Log the playlist after shift.
//
// Write a comment: what is the difference between
// shift/unshift and push/pop?

console.log(playlist);

playlist.unshift("Jingle Bell");
console.log(playlist);

const removedFirst = playlist.shift();
console.log(`Removed song: ${removedFirst}`);
console.log(playlist);

// ----------------------------------------------------------
// PART 5 — CONNECT THE DOTS
// ----------------------------------------------------------

// TASK 9 — Loop + conditional + array (Lessons 3, 4, 5)
// Declare a const called temperatures:
//   [22, 35, 18, 41, 29, 15, 37]    (°C)
//
// Declare a const called heatThreshold with value 35.
// Declare a let called hotDays with value 0.
//
// Loop through temperatures.
// On each iteration:
//   IF the temperature is >= heatThreshold:
//     - increment hotDays
//     - log: "🌡️  Day " + (i + 1) + ": " + temperatures[i] + "°C — HOT"
//   ELSE:
//     - log: "✅ Day " + (i + 1) + ": " + temperatures[i] + "°C — Normal"
//
// After the loop:
//   log: "Hot days this week: " + hotDays + " / " + temperatures.length

// TASK 10 — Full connect the dots (all 5 lessons)
// Declare a const called scores:
//   [88, 72, 95, 61, 84, 79, 90]
//
// Declare a let called total        = 0
// Declare a let called highScore    = 0
// Declare a let called lowScore     = scores[0]   ← start with the first element
// Declare a const called passing    = 70
// Declare a let called failCount    = 0
//
// Loop through scores. On each iteration:
//   - Add the current score to total
//   - IF score > highScore → update highScore
//   - IF score < lowScore  → update lowScore
//   - IF score < passing   → increment failCount
//
// After the loop:
//   Declare a const called average = total / scores.length
//   Log: "Scores:     " + scores
//   Log: "Average:    " + average
//   Log: "Highest:    " + highScore
//   Log: "Lowest:     " + lowScore
//   Log: "Failed:     " + failCount + " student(s)"

// ============================================================
// 📝 for...of — FOOTNOTE
// ============================================================
// There is a cleaner way to loop through an array when you
// don't need the index — the for...of loop:
//
//   for (let song of playlist) {
//     console.log(song);
//   }
//
// It gives you each element directly without i.
// We'll use it properly in the Array Methods lesson.
// For now, stick with the for loop so you stay comfortable
// with indexes — you'll need them often.
// ============================================================
