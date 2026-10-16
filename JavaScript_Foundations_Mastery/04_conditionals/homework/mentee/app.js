// ============================================================
// 🏠  CONDITIONALS — HOMEWORK
// ============================================================
// Mini Project: Grade Calculator
//
// You will calculate a student's score using operators,
// then determine their grade and status using conditionals.
//
// This homework connects all four lessons so far:
//   Lesson 1 → variables to store student data
//   Lesson 2 → operators to calculate the score
//   Lesson 3 → data types (template literals, type conversion)
//   Lesson 4 → conditionals to determine the grade
//
// All output goes to the console. No HTML edits needed.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Set up the student
// ----------------------------------------------------------
// Declare the following variables with the correct keyword.
// Write a comment on each line explaining your const/let choice.
//
//   studentName    → your name              (string)
//   maxScore       → 100                    (number)
//   passingScore   → 60                     (number)
//   earnedScore    → 73                     (number)
//   isExtraCredit  → false                  (boolean)
//
// Log: "Student: " + studentName

const studentName = "Your Name"; // Use const because the student's name won't change
const maxScore = 100; // Use const because the maximum score is a fixed value
const passingScore = 60; // Use const because the passing score is a fixed value
let earnedScore = 73; // Use let because the earned score may change if extra credit is applied
const isExtraCredit = false; // Use const because the extra credit status is a fixed value

console.log("Student: " + studentName);

// ----------------------------------------------------------
// TASK 2 — Apply extra credit (operators)
// ----------------------------------------------------------
// Declare a const called extraCreditPoints with the value 5.
//
// Write an if/else:
//   IF isExtraCredit → add extraCreditPoints to earnedScore using +=
//                      log: "Extra credit applied! New score: " + earnedScore
//   ELSE             → log: "No extra credit."
//
// Then log the final earnedScore.

const extraCreditPoints = 5;

if (isExtraCredit) {
    earnedScore += extraCreditPoints;
    console.log("Extra credit applied! New score: " + earnedScore);
} else {
    console.log("No extra credit.");
}

console.log("Final earned score: " + earnedScore);

// ----------------------------------------------------------
// TASK 3 — Calculate the percentage (operators)
// ----------------------------------------------------------
// Declare a const called percentage = (earnedScore / maxScore) * 100
//
// Log: studentName + " scored " + percentage + "%"

const percentage = (earnedScore / maxScore) * 100;
console.log(studentName + " scored " + percentage + "%");

// ----------------------------------------------------------
// TASK 4 — Assign a letter grade (else if chain)
// ----------------------------------------------------------
// Using percentage, write an if / else if / else:
//
//   percentage >= 90  → log "Grade: A 🌟"
//   percentage >= 80  → log "Grade: B ✅"
//   percentage >= 70  → log "Grade: C 📘"
//   percentage >= 60  → log "Grade: D ⚠️"
//   anything below    → log "Grade: F ❌"
//
// ⚠️ Think carefully about the order. Why must 90 come before 80?

if (percentage >= 90) {
    console.log("Grade: A 🌟");
} else if (percentage >= 80) {
    console.log("Grade: B ✅");
} else if (percentage >= 70) {
    console.log("Grade: C 📘");
} else if (percentage >= 60) {
    console.log("Grade: D ⚠️");
} else {
    console.log("Grade: F ❌");
}

// ----------------------------------------------------------
// TASK 5 — Pass or fail (if/else + operators)
// ----------------------------------------------------------
// Write an if/else using earnedScore and passingScore:
//   IF earnedScore >= passingScore → log studentName + " — PASSED ✅"
//   ELSE                          → log studentName + " — FAILED ❌"

if (earnedScore >= passingScore) {
    console.log(studentName + " — PASSED ✅");
} else {
    console.log(studentName + " — FAILED ❌");
}

// ----------------------------------------------------------
// TASK 6 — Attendance check (logical operators)
// ----------------------------------------------------------
// Declare:
//   const attendancePercent = 72   (out of 100)
//   const minAttendance     = 75
//
// A student needs BOTH a passing score AND enough attendance
// to receive their final grade.
//
// Write an if/else using &&:
//   IF earnedScore >= passingScore && attendancePercent >= minAttendance:
//     log "✅ Eligible for final grade."
//   ELSE:
//     log "🚫 Not eligible. Score: " + earnedScore + " | Attendance: " + attendancePercent + "%"

const attendancePercent = 72;
const minAttendance = 75;

if (earnedScore >= passingScore && attendancePercent >= minAttendance) {
    console.log("✅ Eligible for final grade.");
} else {
    console.log("🚫 Not eligible. Score: " + earnedScore + " | Attendance: " + attendancePercent + "%");
}

// ----------------------------------------------------------
// TASK 7 — Honor roll check (logical operators + !)
// ----------------------------------------------------------
// Declare:
//   const honorRollThreshold = 90
//   const hasDisciplinaryNote = false
//
// A student makes the honor roll if their percentage is >= 90
// AND they have NO disciplinary note.
//
// Write an if/else using && and !:
//   IF percentage >= honorRollThreshold && !hasDisciplinaryNote:
//     log studentName + " has made the Honor Roll! 🏆"
//   ELSE:
//     log studentName + " did not qualify for Honor Roll."

const honorRollThreshold = 90;
const hasDisciplinaryNote = false;

if (percentage >= honorRollThreshold && !hasDisciplinaryNote) {
    console.log(studentName + " has made the Honor Roll! 🏆");
} else {
    console.log(studentName + " did not qualify for Honor Roll.");
}

// ----------------------------------------------------------
// TASK 8 — Connect the dots summary
// ----------------------------------------------------------
// Declare:
//   const pointsNeededToPass = passingScore - earnedScore
//
// Write a final if/else:
//   IF earnedScore >= passingScore:
//     log studentName + " passed with " + earnedScore + " points."
//   ELSE:
//     log studentName + " needs " + Math.abs(pointsNeededToPass) + " more points to pass."
//
// 💡 Math.abs() removes the negative sign from a number.
//    e.g. Math.abs(-7) → 7

const pointsNeededToPass = passingScore - earnedScore;

if (earnedScore >= passingScore) {
    console.log(studentName + " passed with " + earnedScore + " points.");
} else {
    console.log(studentName + " needs " + Math.abs(pointsNeededToPass) + " more points to pass.");
}

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Subject breakdown
// ----------------------------------------------------------
// Declare scores for three subjects:
//   let mathScore    = 88
//   let scienceScore = 74
//   let englishScore = 91
//
// Use operators to calculate:
//   const totalPoints  = mathScore + scienceScore + englishScore
//   const subjectCount = 3
//   const average      = totalPoints / subjectCount
//
// Log: "Average score: " + average
//
// Write an if / else if / else using average to assign
// an overall letter grade (same thresholds as Task 4).
//
// Then write ONE more condition using ||:
//   IF any single subject score is below 60:
//     log "⚠️  Warning: at least one subject needs attention."
//   ELSE:
//     log "✅ All subjects are passing."
//
// Hint for the || condition:
//   mathScore < 60 || scienceScore < 60 || englishScore < 60

let mathScore = 88;
let scienceScore = 74;
let englishScore = 91;

const totalPoints = mathScore + scienceScore + englishScore;
const subjectCount = 3;
const average = totalPoints / subjectCount;

console.log("Average score: " + average);

if (average >= 90) {
    console.log("Overall Grade: A 🌟");
} else if (average >= 80) {
    console.log("Overall Grade: B ✅");
} else if (average >= 70) {
    console.log("Overall Grade: C 📘");
} else if (average >= 60) {
    console.log("Overall Grade: D ⚠️");
} else {
    console.log("Overall Grade: F ❌");
}

if (mathScore < 60 || scienceScore < 60 || englishScore < 60) {
    console.log("⚠️  Warning: at least one subject needs attention.");
} else {
    console.log("✅ All subjects are passing.");
}