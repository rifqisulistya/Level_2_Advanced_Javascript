// ============================================================
// 🐛  DOM MANIPULATION — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// Each snippet has a bug. Read carefully, fix it, and explain
// what was wrong as a comment.
//
// To test these: temporarily replace your app.js script tag
// with <script src="debug.js"></script> in index.html.
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should select the page title element and update it,
// but the element is always null. What's wrong?

function renderTitle() {
  const titleEl = document.getElementById("page-title");
  titleEl.textContent = "My Profile";
}

renderTitle();

// What's wrong ↓

// Your fix ↓

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to display a username on the page.
// The username comes from user input (a variable here).
// The code works but has a serious security problem.
// What should be used instead, and why?

function renderUsername() {
  const username = "<strong>Alex</strong>";
  const nameEl = document.querySelector("#user-name");
  nameEl.textContent = username;
}

renderUsername();

// What's the security risk ↓

// Your fix ↓

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function tries to create a skill tag and add it to
// the list, but it throws a TypeError. What's wrong?
// There are TWO issues.

function addSkill() {
  const skillsList = document.querySelector("#skills-list");
  const li = document.createElement("li");
  li.textContent = "JavaScript";
  skillsList.appendChild(li);
}

addSkill();

// Bug 1 ↓

// Bug 2 ↓

// Your fix ↓
