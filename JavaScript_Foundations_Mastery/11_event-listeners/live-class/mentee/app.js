// ============================================================
// 🟩  EVENT LISTENERS — LIVE CLASS
// ============================================================
// Open index.html in your browser.
//
// CONNECTING THE DOTS:
// DOM Manipulation (Lesson 10) taught you to CHANGE the page.
// Event Listeners give USERS the power to trigger those changes.
// Every button click, every keystroke, every form submission
// is an event. You decide what happens when it fires.
//
// The Profile Page from last lesson is already built.
// Today we wire it up so it actually responds to users.
// ============================================================

// ============================================================
// THE INITIAL SKILLS — rendered on page load
// ============================================================
const initialSkills = ["JavaScript", "React", "Node.js", "CSS", "Git", "SQL"];

// ----------------------------------------------------------
// PART 1 — HOW addEventListener WORKS
// ----------------------------------------------------------
// You attach a listener to a DOM element.
// When the specified event fires, your callback runs.
//
//   element.addEventListener("eventType", callbackFunction);
//
// Common event types:
//   "click"    → user clicks the element
//   "input"    → user types in an input or textarea
//   "change"   → user changes a select or checkbox
//   "submit"   → user submits a form
//   "keydown"  → user presses a key (anywhere on the page)
//
// The callback receives an EVENT OBJECT automatically.
// It contains info about what happened:
//   event.target       → the element that triggered the event
//   event.target.value → the current value of an input/select
//   event.key          → the key that was pressed (for keydown)
//
// ⚠️  ALWAYS pass the function REFERENCE — not a call:
//   element.addEventListener("click", handleClick)   ✅ correct
//   element.addEventListener("click", handleClick()) ❌ calls it immediately

// TASK 1 — click event (dark mode toggle)
// Declare a function called handleThemeToggle.
// Inside:
//   - Toggle the "dark" class on document.body
//   - Check if dark mode is now ON: document.body.classList.contains("dark")
//   - IF dark mode is ON:
//       set #theme-btn textContent to "☀️ Light Mode"
//   - ELSE:
//       set #theme-btn textContent to "🌙 Dark Mode"
//
// After declaring the function, wire it up:
//   document.getElementById("theme-btn")
//     .addEventListener("click", handleThemeToggle);
//
// Write a comment: why do we pass handleThemeToggle and not handleThemeToggle()?

function handleThemeToggle() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  const themeBtn = document.getElementById("theme-btn");
  themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

document
  .getElementById("theme-btn")
  .addEventListener("click", handleThemeToggle);

// wire up the event listener here

// TASK 2 — change event (status selector)
// Declare a function called handleStatusChange.
// Parameter: event
//
// Inside:
//   - Get the new status from event.target.value
//   - Select #status-badge
//   - Remove all status classes first:
//       badgeEl.classList.remove("active", "away", "offline")
//   - Then use if/else to set the right label and add the right class:
//       "active"  → textContent "🟢 Active"  + classList.add("active")
//       "away"    → textContent "🟡 Away"    + classList.add("away")
//       "offline" → textContent "🔴 Offline" + classList.add("offline")
//
// Wire it up:
//   document.getElementById("status-select")
//     .addEventListener("change", handleStatusChange);

function handleStatusChange(event) {
  const status = event.target.value;
  const badgeEl = document.getElementById("status-badge");
  badgeEl.classList.remove("active", "away", "offline");

  if (status === "active") {
    badgeEl.textContent = "🟢 Active";
    badgeEl.classList.add("active");
  } else if (status === "away") {
    badgeEl.textContent = "🟡 Away";
    badgeEl.classList.add("away");
  } else {
    badgeEl.textContent = "🔴 Offline";
    badgeEl.classList.add("offline");
  }
}

document
  .getElementById("status-select")
  .addEventListener("change", handleStatusChange);

// wire up the event listener here

// ----------------------------------------------------------
// PART 2 — INPUT EVENTS + event.target.value
// ----------------------------------------------------------

// TASK 3 — input event (live character count)
// Declare a function called handleBioInput.
// Parameter: event
//
// Inside:
//   - Get the current value: event.target.value
//   - Calculate length = value.length
//   - Select #char-count
//   - Set its textContent to: length + " / 200"
//   - Then update the class for visual warning:
//       classList.remove("warning", "limit")  ← clear first
//       IF length >= 200 → classList.add("limit")
//       ELSE IF length >= 160 → classList.add("warning")
//
// Wire it up:
//   document.getElementById("bio-input")
//     .addEventListener("input", handleBioInput);
//
// Also: call handleBioInput manually with a fake event to set
// the initial count. Or just set the count directly on page load.

function handleBioInput(event) {
  const charValue = event.target.value.length;
  selectCharCount = document.getElementById("char-count");
  selectCharCount.textContent = `${charValue} / 200`;

  selectCharCount.classList.remove("warning", "limit");

  if (charValue >= 200) {
    selectCharCount.classList.add("limit");
  } else if (charValue >= 160) {
    selectCharCount.classList.add("warning");
  }
}

// wire up the event listener here

document.getElementById("bio-input").addEventListener("input", handleBioInput);

// ----------------------------------------------------------
// PART 3 — FORM SUBMIT + event.preventDefault()
// ----------------------------------------------------------
// When a form submits, the browser's default behavior is to
// RELOAD THE PAGE (or navigate to the action URL).
// event.preventDefault() stops that default behavior —
// letting you handle the submission with JavaScript instead.
//
// Always call preventDefault() on form submit events.

// TASK 4 — submit event (add a skill)
// First declare a helper function called addSkillToPage.
// Parameter: skillName (string)
//
// Inside:
//   - Create a new <li> element
//   - Set its textContent to skillName
//   - Add a click listener to the <li> so clicking it removes it:
//       li.addEventListener("click", function() { li.remove(); updateSkillCount(); })
//   - Append the <li> to #skills-list
//   - Call updateSkillCount() (you'll write this next)
//
// Then declare a function called updateSkillCount.
// Inside:
//   - Select #skills-list
//   - Count its children: skillsList.children.length
//   - Set #skill-count textContent to that number
//
// Then declare a function called handleSkillSubmit.
// Parameter: event
//
// Inside:
//   - Call event.preventDefault()
//   - Get the value from #skill-input (trim whitespace: .trim())
//   - IF the value is not empty:
//       call addSkillToPage(skillName)
//       clear the input: set #skill-input value to ""
//
// Wire it up:
//   document.getElementById("add-skill-form")
//     .addEventListener("submit", handleSkillSubmit);

function updatedSkillCount() {
  const skillList = document.getElementById("skills-list");
  document.getElementById("skill-count").textContent =
    skillList.children.length;
}

function addSkillToPage(skillName) {
  const skillsList = document.getElementById("skills-list");
  const li = document.createElement("li");
  li.textContent = skillName;

  li.addEventListener("click", function () {
    li.remove();
    updatedSkillCount();
  });

  skillsList.appendChild(li);
  updatedSkillCount();
}

function handleSkillSubmit(event) {
  event.preventDefault();
  const skillInput = document.getElementById("skill-input");
  const elTrim = skillInput.value.trim();

  if (elTrim) {
    addSkillToPage(elTrim);
    skillInput.value = "";
  }
}

document
  .getElementById("add-skill-form")
  .addEventListener("submit", handleSkillSubmit);

// wire up the event listener here

// ----------------------------------------------------------
// PART 4 — KEYBOARD EVENTS
// ----------------------------------------------------------
// keydown fires when any key is pressed on the page.
// Attach it to document (the whole page), not a specific element.
//
//   document.addEventListener("keydown", handleKeyDown);
//
// event.key → the key name: "a", "Enter", "Escape", "ArrowUp", etc.

// TASK 5 — keydown event
// Declare a function called handleKeyDown.
// Parameter: event
//
// Inside:
//   - Select #key-output
//   - Set its textContent to: "Key: " + event.key
//   - IF event.key === "d" → call handleThemeToggle()
//     (keyboard shortcut for dark mode)
//   - IF event.key === "Escape" → clear the #skill-input value
//
// Wire it up to document.

function handleKeyDown(event) {
  document.getElementById("key-output").textContent = `Key: ${event.key}`;

  if (event.key === "d") {
    handleThemeToggle();
  }

  if (event.key === "Escape") {
    document.getElementById("skill-Input").value = "";
  }
}

// wire up to document here
document.addEventListener("keydown", handleKeyDown);
// ----------------------------------------------------------
// PART 5 — EVENT DELEGATION
// ----------------------------------------------------------
// Instead of adding a listener to EVERY child element,
// add ONE listener to the PARENT and check which child was clicked.
//
// This is more efficient and works for dynamically added elements
// (elements added after the page loads won't have listeners
//  if you tried to add listeners to them before they existed).
//
//   parent.addEventListener("click", function(event) {
//     if (event.target.tagName === "LI") {
//       // an <li> inside parent was clicked
//     }
//   });
//
// event.target → the actual element that was clicked
// event.currentTarget → the element the listener is attached to (the parent)

// TASK 6 — event delegation on skills list
// Instead of adding individual click listeners to each skill <li>
// (which Task 4 does as a learning exercise), here we'll add
// ONE listener to the parent #skills-list.
//
// Declare a function called handleSkillClick.
// Parameter: event
//
// Inside:
//   IF event.target.tagName === "LI":
//     - Remove event.target from the DOM
//     - Call updateSkillCount()
//
// Wire it up:
//   document.getElementById("skills-list")
//     .addEventListener("click", handleSkillClick);
//
// Write a comment: what is the difference between
// event.target and event.currentTarget here?

function handleSkillClick(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
    updatedSkillCount();
  }
}

document
  .getElementById("skills-list")
  .addEventListener("click", handleSkillClick);

// wire up the event listener here

// ----------------------------------------------------------
// PART 6 — CONNECT THE DOTS: PAGE INITIALISATION
// ----------------------------------------------------------

// TASK 7 — removeEventListener
// Declare a function called handleOneTimeClick.
// Parameter: event
// Inside: log "Button clicked once! Removing listener now."
//         Then remove itself:
//           document.getElementById("theme-btn")
//             .removeEventListener("click", handleOneTimeClick);
//
// Add this listener TEMPORARILY so you can see removeEventListener work.
// After you confirm it works, comment it out so the theme button
// works normally again.

function handleOneTimeClick() {
  console.log("Button clicked once! Removing listener now.");
  document
    .getElementById("theme-btn")
    .removeEventListener("click", handleThemeToggle);
}

document
  .getElementById("theme-btn")
  .addEventListener("click", handleOneTimeClick);

// TASK 8 — wire it all up in an init function
// Declare a function called init.
// No parameters.
//
// Inside:
//   1. Render the initial skills by calling addSkillToPage
//      for each skill in initialSkills (use forEach)
//   2. Set the initial bio character count manually:
//      const bioEl = document.getElementById("bio-input");
//      handleBioInput({ target: bioEl });
//      (we pass a fake event object with just target set)
//
// Call init() at the bottom.
// All addEventListener calls should already be wired up
// ABOVE init() — they run as the script loads.

function init() {
  initialSkills.forEach((skill) => addSkillToPage(skill));

  const bioEl = document.getElementById("bio-input");
  handleBioInput({ target: bioEl });
}

init();
// ============================================================
// WIRE UP ALL LISTENERS (above init)
// ============================================================
// Make sure all your addEventListener calls are here —
// above the init() call at the very bottom.

// ============================================================
// START THE PAGE
// ============================================================
