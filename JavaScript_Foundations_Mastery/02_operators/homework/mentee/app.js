// ============================================================
// 🏠  OPERATORS — HOMEWORK
// ============================================================
// Mini Project: Score Tracker
//
// You are building the logic for a simple game score tracker.
// Use variables + operators — everything from Lessons 1 and 2.
// All output goes to the console. No HTML edits needed.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Set up the game
// ----------------------------------------------------------
// Declare the following variables using the correct keyword.
// Add a comment on each line explaining why you chose const or let.
//
//   gameName       → "Space Blaster"  (string)
//   playerName     → your name        (string)
//   playerScore    → 0                (number)
//   highScore      → 850              (number)
//   pointsPerKill  → 25               (number)
//   livesRemaining → 3                (number)
//
// Log: gameName + " — Player: " + playerName

const gameName = "Space Blaster"; // const because the game name won't change
const playerName = "Your Name"; // const because the player's name won't change during the game
let playerScore = 0; // let because the player's score will change as they play
const highScore = 850; // const because the high score is a fixed value for comparison
const pointsPerKill = 25; // const because the points per kill won't change
let livesRemaining = 3; // let because the number of lives will decrease as the player takes damage

console.log(gameName + " — Player: " + playerName);

// ----------------------------------------------------------
// TASK 2 — Earn points
// ----------------------------------------------------------
// The player destroys 6 enemies in a row.
// Use *= or a calculation to find totalEarned (6 * pointsPerKill).
// Then use += to add totalEarned to playerScore.
//
// Log: "Earned: " + totalEarned + " points"
// Log: "Score: " + playerScore

let totalEarned = 6 * pointsPerKill; // Calculate total points earned from 6 kills
playerScore += totalEarned; // Add the earned points to the player's score

console.log("Earned: " + totalEarned + " points");
console.log("Score: " + playerScore);

// ----------------------------------------------------------
// TASK 3 — Take damage
// ----------------------------------------------------------
// The player gets hit twice and loses a life each time.
// Use -= to subtract 1 from livesRemaining twice.
//
// Log: "Lives remaining: " + livesRemaining
// Then log the result of: livesRemaining > 0
// Write a comment: what does true/false mean in this context?

const damageTaken = 2; // The player takes damage twice
livesRemaining -= damageTaken; // Subtract the number of lives lost from livesRemaining

console.log("Lives remaining: " + livesRemaining);
console.log(livesRemaining > 0); // true means the player still has lives left, false means the player has no lives left

// ----------------------------------------------------------
// TASK 4 — Level bonus
// ----------------------------------------------------------
// The player completes a level and earns a 50% score bonus.
// Declare a const called levelBonus = playerScore * 0.5
// Add levelBonus to playerScore using +=.
//
// Log: "Bonus: " + levelBonus
// Log: "Score after bonus: " + playerScore

const levelBonus = playerScore * 0.5; // Calculate the bonus as 50% of the current score
playerScore += levelBonus; // Add the bonus to the player's score

console.log("Bonus: " + levelBonus);
console.log("Score after bonus: " + playerScore);

// ----------------------------------------------------------
// TASK 5 — Check the high score
// ----------------------------------------------------------
// Log the result of each comparison. Write your prediction
// as a comment BEFORE running the code.
//
//   playerScore > highScore       → prediction:
//   playerScore === highScore     → prediction:
//   playerScore >= highScore      → prediction:

console.log(playerScore > highScore); // prediction: true if playerScore is greater than highScore, false otherwise
console.log(playerScore === highScore); // prediction: true if playerScore is equal to highScore, false otherwise
console.log(playerScore >= highScore); // prediction: true if playerScore is greater than or equal to highScore, false otherwise

// ----------------------------------------------------------
// TASK 6 — Update the high score
// ----------------------------------------------------------
// If playerScore is greater than highScore, the high score
// should be updated. We haven't learned if/else yet — so
// just check the comparison result and do it manually:
//
// Log: playerScore > highScore   (is it true or false right now?)
// Then reassign highScore to playerScore.
// Log: "New high score: " + highScore

console.log(playerScore > highScore); // Check if the player's score is greater than the high score
// highScore = playerScore; // Update the high score to the player's score
console.log("New high score: " + highScore); // Log the new high score

// ----------------------------------------------------------
// TASK 7 — Time remaining (modulus practice)
// ----------------------------------------------------------
// The game has 245 seconds on the clock.
// Declare a const called totalSeconds = 245
// Use / to get minutes (totalSeconds / 60) → store in a const
// Use % to get leftover seconds (totalSeconds % 60) → store in a const
//
// Log: "Time left: " + minutes + " min " + secondsLeft + " sec"
// ⚠️ minutes will be a decimal — that's expected. We'll fix it in Data Types.

const totalSeconds = 245; // Total time in seconds
const minutes = totalSeconds / 60; // Calculate total minutes (will be a decimal)
const secondsLeft = totalSeconds % 60; // Calculate leftover seconds using modulus

console.log("Time left: " + minutes + " min " + secondsLeft + " sec");  

// ----------------------------------------------------------
// TASK 8 — Connect the dots summary
// ----------------------------------------------------------
// Declare a const called startScore = 0
// Declare a const called endScore   = playerScore (your current playerScore)
// Declare a const called improvement = endScore - startScore
//
// Log: playerName + " improved by " + improvement + " points this session."
//
// Then log whether the player beat the original highScore (850):
// endScore > 850

const startScore = 0; // Starting score at the beginning of the session
const endScore = playerScore; // Current score at the end of the session
const improvement = endScore - startScore; // Calculate the improvement in score

console.log(playerName + " improved by " + improvement + " points this session.");
console.log(endScore > 850); // Check if the player beat the original high score of 850

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Accuracy Rating
// ----------------------------------------------------------
// Declare these variables:
//   const shotsFired = 40
//   const shotsHit   = 31
//
// Calculate:
//   const accuracyDecimal = shotsHit / shotsFired
//   const accuracyPercent = accuracyDecimal * 100
//
// Log: playerName + " accuracy: " + accuracyPercent + "%"
//
// Then log whether accuracy is above 75%:
//   accuracyPercent >= 75
//
// Bonus question (write as a comment):
// accuracyPercent will have many decimal places. What do you think
// we could use to round it to 2 decimal places? (Hint: coming in Data Types)

const shotsFired = 40; // Total number of shots fired
const shotsHit = 31; // Total number of shots that hit the target

const accuracyDecimal = shotsHit / shotsFired; // Calculate accuracy as a decimal
const accuracyPercent = accuracyDecimal * 100; // Convert accuracy to a percentage

console.log(playerName + " accuracy: " + accuracyPercent.toFixed(2) + "%");
console.log(accuracyPercent >= 75); // Check if accuracy is above 75%

// Bonus question answer: We could use the toFixed(2) method to round the accuracyPercent to 2 decimal places.