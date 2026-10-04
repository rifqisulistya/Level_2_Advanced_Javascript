// ============================================================
// 🐛  LOOPS — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// Each snippet has a bug. Read carefully, fix it, and explain
// what was wrong as a comment.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This loop should count from 1 to 5 but it stops at 4.
// What's wrong?

for (let i = 1; i < 5; i++) {
  console.log(i);
}

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop is supposed to count down from 3 to 1,
// but the browser tab freezes when you run it.
// What's wrong? (Don't run it — read it carefully first.)

let i = 3;
while (i > 0) {
  console.log(i);
}

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log all numbers from 1 to 5,
// then log "Done!" after the loop finishes.
// But it exits after logging 1 and never logs the rest.
// Find the bug — the break is in the wrong place.

for (let i = 1; i <= 5; i++) {
  break;
  console.log(i);
}
console.log("Done!");

// What's wrong ↓

// Your fix ↓
