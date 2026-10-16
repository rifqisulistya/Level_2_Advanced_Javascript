// ============================================================
// 🏠  ARRAYS — HOMEWORK
// ============================================================
// Mini Project: Student Gradebook
//
// Store a class of student scores in arrays,
// loop through them to calculate stats, and use
// conditionals to assign grades and flag failures.
//
// CONNECTING THE DOTS — all six lessons:
//   Lesson 1 → variables for names, scores, thresholds
//   Lesson 2 → operators to accumulate totals
//   Lesson 3 → data types (strings, numbers, type checking)
//   Lesson 4 → conditionals to assign grades and check passing
//   Lesson 5 → loops to process every student automatically
//   Lesson 6 → arrays to store all the data cleanly
//
// All output goes to the console. No HTML edits needed.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Set up the gradebook
// ----------------------------------------------------------
// Declare the following with the correct keyword.
// Add a comment on each line justifying const vs let.
//
//   className      → "JavaScript Fundamentals"   (string)
//   passingScore   → 60                          (number)
//   studentNames   → array of 6 student names    (strings)
//   studentScores  → [74, 58, 92, 65, 81, 47]    (numbers)
//
// Log: "📚 " + className
// Log: "Students enrolled: " + studentNames.length

const className = "JavaScript Fundamentals"; // const because the class name won't change
const passingScore = 60; // const because the passing score is a fixed threshold
const studentNames = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank"]; // const because the array reference won't change, even if we modify its contents
const studentScores = [74, 58, 92, 65, 81, 47]; // const because the array reference won't change, even if we modify its contents

console.log("📚 " + className);
console.log("Students enrolled: " + studentNames.length);

// ----------------------------------------------------------
// TASK 2 — Access and display by index
// ----------------------------------------------------------
// Without using a loop, log:
//   "First student:  " + studentNames[0] + " — " + studentScores[0]
//   "Last student:   " + studentNames[studentNames.length - 1]
//            + " — " + studentScores[studentScores.length - 1]
//
// Then log the score of the THIRD student (index 2).

console.log("First student:  " + studentNames[0] + " — " + studentScores[0]);
console.log("Last student:   " + studentNames[studentNames.length - 1] + " — " + studentScores[studentScores.length - 1]);
console.log("Third student score: " + studentScores[2]);

// ----------------------------------------------------------
// TASK 3 — Update a score
// ----------------------------------------------------------
// The fourth student (index 3) completed extra work.
// Update their score in studentScores from 65 to 72.
//
// Log: "Updated score for " + studentNames[3] + ": " + studentScores[3]
// Log the full studentScores array to confirm the change.

studentScores[3] = 72;
console.log("Updated score for " + studentNames[3] + ": " + studentScores[3]);
console.log("Updated student scores: " + studentScores);

// ----------------------------------------------------------
// TASK 4 — Loop and display the full class
// ----------------------------------------------------------
// Write a for loop from 0 to studentNames.length.
// On each iteration log:
//   (i + 1) + ". " + studentNames[i] + " → " + studentScores[i]
//
// Expected format:
//   1. [name] → [score]
//   2. [name] → [score]
//   ...

const totalStudents = studentNames.length;
for (let i = 0; i < totalStudents; i++) {
    console.log((i + 1) + ". " + studentNames[i] + " → " + studentScores[i]);
}

// ----------------------------------------------------------
// TASK 5 — Calculate class stats
// ----------------------------------------------------------
// Declare these accumulator variables OUTSIDE the loop:
//   let totalScore   = 0
//   let highScore    = 0
//   let lowScore     = studentScores[0]   ← seed with first value
//   let passCount    = 0
//   let failCount    = 0
//
// Write a for loop through studentScores. On each iteration:
//   - Add the score to totalScore
//   - IF score > highScore → update highScore
//   - IF score < lowScore  → update lowScore
//   - IF score >= passingScore → increment passCount
//   - ELSE → increment failCount
//
// After the loop:
//   Declare a const called classAverage = totalScore / studentScores.length
//
//   Log: "📊 Class Stats:"
//   Log: "Average score: " + classAverage
//   Log: "Highest score: " + highScore
//   Log: "Lowest score:  " + lowScore
//   Log: "Passed: " + passCount + " | Failed: " + failCount

let totalScore = 0;
let highScore = 0;
let lowScore = studentScores[0];
let passCount = 0;
let failCount = 0;

console.log(`lowScore initial value: ${lowScore}`); // Debugging line to check the initial lowScore

for (let i = 0; i < studentScores.length; i++) {
    const score = studentScores[i];
    totalScore += score;

    if (score > highScore) {
        highScore = score;
    }

    if (score < lowScore) {
        lowScore = score;
    }

    if (score >= passingScore) {
        passCount++;
    } else {
        failCount++;
    }
}
const classAverage = totalScore / studentScores.length;
console.log("📊 Class Stats:");
console.log("Average score: " + classAverage);
console.log("Highest score: " + highScore);
console.log("Lowest score:  " + lowScore);
console.log("Passed: " + passCount + " | Failed: " + failCount);

// ----------------------------------------------------------
// TASK 6 — Assign letter grades
// ----------------------------------------------------------
// Write a for loop through studentScores.
// On each iteration, use an if / else if / else chain
// to determine the letter grade:
//
//   score >= 90  → "A"
//   score >= 80  → "B"
//   score >= 70  → "C"
//   score >= 60  → "D"
//   below 60     → "F"
//
// Log: studentNames[i] + ": " + studentScores[i] + " — Grade " + grade

for (let i = 0; i < studentScores.length; i++) {
    const score = studentScores[i];
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log(studentNames[i] + ": " + score + " — Grade " + grade);
}

// ----------------------------------------------------------
// TASK 7 — Add and remove students
// ----------------------------------------------------------
// A new student joined the class with a score of 88.
// Use push() to add their name to studentNames.
// Use push() to add 88 to studentScores.
//
// Log: "New student added: " + studentNames[studentNames.length - 1]
// Log: "Class size now: " + studentNames.length
//
// Then the first student transferred out.
// Use shift() on both arrays to remove the first student.
//
// Store the removed name in a variable and log:
//   "Student removed: " + removedName
// Log: "Class size now: " + studentNames.length

studentNames.push("Grace");
studentScores.push(88);

console.log("New student added: " + studentNames[studentNames.length - 1]);
console.log("Class size now: " + studentNames.length);

// ----------------------------------------------------------
// TASK 8 — Connect the dots: find the top student
// ----------------------------------------------------------
// Declare a let called topStudentIndex = 0
//
// Write a for loop through studentScores.
// On each iteration:
//   IF studentScores[i] > studentScores[topStudentIndex]:
//     update topStudentIndex to i
//
// After the loop:
//   Log: "🏆 Top student: " + studentNames[topStudentIndex]
//          + " with " + studentScores[topStudentIndex] + " points"

let topStudentIndex = 0;
for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] > studentScores[topStudentIndex]) {
        topStudentIndex = i;
    }
}
console.log("🏆 Top student: " + studentNames[topStudentIndex] + " with " + studentScores[topStudentIndex] + " points");

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Curved grades
// ----------------------------------------------------------
// The teacher decides to add a 5-point curve to every score.
// Declare a const called curvePoints = 5.
//
// Declare a new let called curvedScores = []  (empty array)
//
// Write a for loop through studentScores.
// On each iteration:
//   - Calculate curvedScore = studentScores[i] + curvePoints
//   - If curvedScore > 100, cap it at 100
//   - Use push() to add curvedScore to curvedScores
//
// After the loop:
//   Log: "Original scores: " + studentScores
//   Log: "Curved scores:   " + curvedScores
//
// Then write a second loop through curvedScores
// to count how many students are now passing (>= passingScore)
// that weren't before. Log the result.
//
// Hint: compare studentScores[i] < passingScore &&
//              curvedScores[i] >= passingScore

const curePoints = 5;
let curvedScores = [];

for (let i = 0; i < studentScores.length; i++) {
    let curvedScore = studentScores[i] + curePoints;
    if (curvedScore > 100) {
        curvedScore = 100;
    }
    curvedScores.push(curvedScore);
}

console.log("Original scores: " + studentScores);
console.log("Curved scores:   " + curvedScores);