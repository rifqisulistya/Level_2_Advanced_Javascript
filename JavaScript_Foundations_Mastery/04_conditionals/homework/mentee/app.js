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

// ----------------------------------------------------------
// TASK 3 — Calculate the percentage (operators)
// ----------------------------------------------------------
// Declare a const called percentage = (earnedScore / maxScore) * 100
//
// Log: studentName + " scored " + percentage + "%"

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

// ----------------------------------------------------------
// TASK 5 — Pass or fail (if/else + operators)
// ----------------------------------------------------------
// Write an if/else using earnedScore and passingScore:
//   IF earnedScore >= passingScore → log studentName + " — PASSED ✅"
//   ELSE                          → log studentName + " — FAILED ❌"

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
