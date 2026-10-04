// ============================================================
// 💾  localStorage — LIVE CLASS
// ============================================================
// Open index.html in your browser.
//
// CONNECTING THE DOTS:
// Everything we've built so far disappears on page refresh.
// Change the bio, add skills, enable dark mode — then refresh.
// Gone. Every time.
//
// localStorage lets you save data to the BROWSER so it
// survives refreshes, tab closures, even browser restarts.
// It's like a tiny database living right in the user's browser.
//
// Today we wire persistence into the Profile Page so the
// user's settings actually stick.
// ============================================================

// ============================================================
// DEFAULT PROFILE DATA
// ============================================================
const defaultProfile = {
  bio: "",
  skills: [],
  status: "active",
  darkMode: false,
};

// ----------------------------------------------------------
// PART 1 — THE localStorage API
// ----------------------------------------------------------
// localStorage is a key-value store built into every browser.
// It lives on window.localStorage (usually just localStorage).
//
// FOUR methods — that's all you need:
//
//   localStorage.setItem("key", "value")
//   → saves a value under a key
//   → both key AND value must be STRINGS
//
//   localStorage.getItem("key")
//   → retrieves the value for a key
//   → returns null if the key doesn't exist
//
//   localStorage.removeItem("key")
//   → deletes one specific key
//
//   localStorage.clear()
//   → deletes EVERYTHING in localStorage for this domain
//
// ⚠️  localStorage ONLY stores strings.
//     Numbers, booleans, arrays, objects all become strings.
//     To store an object or array:
//       JSON.stringify(value)  → converts to a JSON string
//       JSON.parse(string)     → converts back to the original
//
// Check your saved data at any time:
//   DevTools → Application tab → Local Storage → your domain

// TASK 1 — setItem and getItem with simple values
// Declare a function called testStorage.
// Inside:
//   a) Save a string: localStorage.setItem("userName", "Alex Rivera")
//   b) Save a number as string: localStorage.setItem("userAge", String(28))
//   c) Save a boolean as string: localStorage.setItem("isDark", String(false))
//
//   d) Read them back and log:
//      localStorage.getItem("userName")
//      localStorage.getItem("userAge")
//      localStorage.getItem("isDark")
//
//   e) Write a comment: what TYPE does getItem always return?
//
// Call testStorage() and check the console.
// Also open DevTools → Application → Local Storage to see the values.

// function testStorage() {
//   localStorage.setItem("userName", "Alex Rivera");
//   localStorage.setItem("userAge", String(28));
//   localStorage.setItem("isDark", String(false));

//   console.log(localStorage.getItem("userName"));
//   console.log(localStorage.getItem("userAge"));
//   console.log(localStorage.getItem("isDark"));
// }

// testStorage();

// TASK 2 — JSON.stringify and JSON.parse
// localStorage only stores strings. To save an object or array
// you must serialise it first with JSON.stringify.
//
// Declare a function called testObjectStorage.
// Inside:
//   a) Declare a const called skillsArray = ["JS", "CSS", "React"]
//   b) Try saving it DIRECTLY (without stringify):
//      localStorage.setItem("badSkills", skillsArray)
//      Read it back and log — what do you see? Write it as a comment.
//
//   c) Now save it CORRECTLY with JSON.stringify:
//      localStorage.setItem("goodSkills", JSON.stringify(skillsArray))
//      Read it back with getItem — log the raw string.
//      Then parse it: JSON.parse(localStorage.getItem("goodSkills"))
//      Log the parsed result — notice it's an array again.
//
//   d) Do the same with an object:
//      const user = { name: "Alex", age: 28 }
//      Save, read raw, parse, log each step.11
//
// Call testObjectStorage().

// function testObjectStorage() {
//   const skillsArray = ["JS", "CSS", "React"];
//   localStorage.setItem("badSkills", skillsArray);
//   console.log(localStorage.getItem("badSkills"));

//   localStorage.setItem("goodSkills", JSON.stringify(skillsArray));

//   const rawString = localStorage.getItem("goodSkills");
//   console.log(rawString);

//   const parse = JSON.parse(rawString);
//   console.log(parse);
//   console.log(parse[0]);
//   // console.log(JSON.parse(rawString[0]));

//   const user = {
//     name: "Alex",
//     age: 28,
//   };

//   localStorage.setItem("user", JSON.stringify(user));
//   const getUserBack = JSON.parse(localStorage.getItem("user"));
//   console.log(getUserBack);
//   console.log(getUserBack.age);
// }

// testObjectStorage();

// ----------------------------------------------------------
// PART 2 — SAVING PROFILE DATA
// ----------------------------------------------------------

// TASK 3 — saveProfile
// Declare a function called saveProfile.
// No parameters — reads current values from the DOM.
//
// Inside:
//   1. Build a profileData object:
//      {
//        bio:      document.getElementById("bio-input").value,
//        skills:   getCurrentSkills(),  ← you'll write this next
//        status:   document.getElementById("status-select").value,
//        darkMode: document.body.classList.contains("dark")
//      }
//   2. Save it: localStorage.setItem("profileData", JSON.stringify(profileData))
//   3. Update the storage status label:
//      Select #storage-status
//      Set textContent: "✅ Saved at " + new Date().toLocaleTimeString()
//      Replace its classes: remove all, add "saved"
//   4. Log: "Profile saved to localStorage"
//
// Declare a helper function called getCurrentSkills.
// No parameters.
// Selects all <li> elements inside #skills-list.
// Returns an array of their textContent values.
// Hint: use querySelectorAll + Array.from() + .map()
//   Array.from(document.querySelectorAll("#skills-list li"))
//     .map(li => li.textContent)

function getCurrentSkills() {
  return Array.from(document.querySelectorAll("#skills-list li")).map((li) => {
    return li.textContent;
  });
}

function saveProfile() {
  const profileData = {
    bio: document.getElementById("bio-input").value,
    skills: getCurrentSkills(),
    status: document.getElementById("status-select").value,
    darkMode: document.body.classList.contains("dark"),
  };

  localStorage.setItem("profileData", JSON.stringify(profileData));
  const status = document.getElementById("storage-status");
  status.textContent = `✅ Saved at ${new Date().toLocaleTimeString()}`;

  status.className = "saved";
  console.log("Profile saved to localStorage");
}

// Wire up the Save button:
document.getElementById("save-btn").addEventListener("click", saveProfile);

// ----------------------------------------------------------
// PART 3 — LOADING SAVED DATA
// ----------------------------------------------------------

// TASK 4 — loadProfile
// Declare a function called loadProfile.
// No parameters.
//
// Inside:
//   1. Try to get saved data:
//      const saved = localStorage.getItem("profileData")
//
//   2. IF saved is null → there's nothing to load yet.
//      Call renderWithDefaults() and return early.
//      (You'll write renderWithDefaults below)
//
//   3. ELSE → parse the data:
//      const profileData = JSON.parse(saved)
//
//   4. Restore the bio:
//      document.getElementById("bio-input").value = profileData.bio
//
//   5. Restore the skills:
//      Clear #skills-list (innerHTML = "")
//      Loop through profileData.skills → call addSkillToPage(skill) for each
//
//   6. Restore the status:
//      Set #status-select value to profileData.status
//      Call renderStatusBadge(profileData.status)
//
//   7. Restore dark mode:
//      IF profileData.darkMode → document.body.classList.add("dark")
//                                update #theme-btn text to "☀️ Light Mode"
//
//   8. Update storage status:
//      Set #storage-status textContent: "✅ Profile loaded from storage"
//      Add class "saved"
//
// Declare a function called renderWithDefaults.
// No parameters.
// Uses defaultProfile to render the page from scratch:
//   - Set bio-input value to defaultProfile.bio
//   - Loop through defaultProfile.skills → call addSkillToPage for each
//   - Call renderStatusBadge(defaultProfile.status)

function renderWithDefaults() {
  document.getElementById("bio-input").value = defaultProfile.bio;

  document.getElementById("skills-list").innerHTML = "";
  defaultProfile.skills.forEach((skill) => {
    addSkillToPage(skill);
  });

  updateSkillCount();

  document.getElementById("status-select").value = defaultProfile.status;
  renderStatusBadge(defaultProfile.status);
}

function loadProfile() {
  const saved = localStorage.getItem("profileData");

  if (!saved) {
    renderWithDefaults();
    return;
  }

  const profileData = JSON.parse(saved);
  document.getElementById("bio-input").value = profileData.bio;
  const charlength = profileData.bio.length;
  document.getElementById("char-count").textContent = charlength + " / 200";
  document.getElementById("skills-list").innerHTML = "";
  profileData.skills.forEach((skill) => addSkillToPage(skill));

  document.getElementById("status-select").value = profileData.status;
  renderStatusBadge(profileData.status);

  if (profileData.darkMode) {
    document.body.classList.add("dark");
    document.getElementById("theme-btn").textContent = "☀️ Light Mode";
  }

  const storageStatus = document.getElementById("storage-status");
  storageStatus.textContent = "✅ Profile loaded from storage";
  storageStatus.className = "saved";
}

// ----------------------------------------------------------
// PART 4 — CLEAR DATA
// ----------------------------------------------------------

// TASK 5 — clearProfile
// Declare a function called clearProfile.
// Inside:
//   1. Remove the profile key: localStorage.removeItem("profileData")
//   2. Reset the page to defaults: call renderWithDefaults()
//   3. Update status label: "🗑️ Data cleared" with class "cleared"
//   4. Log: "localStorage cleared"
//
// Wire up the Clear button:
//   document.getElementById("clear-btn")
//     .addEventListener("click", clearProfile)

function clearProfile() {
  localStorage.removeItem("profileData");
  renderWithDefaults();
  const status = document.getElementById("storage-status");
  status.textContent = "🗑️ Data cleared";
  status.className = "cleared";
  document.getElementById("char-count").textContent = "0 / 200";
  console.log("localStorage cleared");
}

document.getElementById("clear-btn").addEventListener("click", clearProfile);

// ----------------------------------------------------------
// PART 5 — SKILLS AND STATUS HELPERS
// ----------------------------------------------------------
// These helpers are carried forward from Event Listeners.
// They're needed by loadProfile and renderWithDefaults.

// TASK 6
// Declare a function called addSkillToPage.
// Parameter: skillName
// Creates a <li>, sets textContent, adds click-to-remove,
// appends to #skills-list, updates skill count.
// (Same as Event Listeners lesson — copy your logic here)

function addSkillToPage(skillName) {
  const skillList = document.getElementById("skills-list");
  const li = document.createElement("li");
  li.textContent = skillName;

  li.addEventListener("click", function () {
    li.remove();
    updateSkillCount();
    saveProfile();
  });

  skillList.appendChild(li);
  updateSkillCount();
}

// Declare a function called updateSkillCount.
// Updates #skill-count with the current number of skills.

function updateSkillCount() {
  const skillList = document.getElementById("skills-list");
  document.getElementById("skill-count").textContent =
    skillList.children.length;
}

// Declare a function called renderStatusBadge.
// Parameter: status
// Sets the #status-badge text and class based on status value.
// (Same as Event Listeners lesson)

//  badgeEl.classList.remove("active", "away", "offline");

function renderStatusBadge(status) {
  const statusBadge = document.getElementById("status-badge");
  statusBadge.classList.remove("active", "away", "offline");

  // if (status === "active") {
  //   badgeEl.textContent = "🟢 Active";
  //   badgeEl.classList.add("active");
  // } else if (status === "away") {
  //   badgeEl.textContent = "🟡 Away";
  //   badgeEl.classList.add("away");
  // } else {
  //   badgeEl.textContent = "🔴 Offline";
  //   badgeEl.classList.add("offline");
  // }

  if (status === "active") {
    statusBadge.textContent = "Active";
    statusBadge.classList.add("active");
  } else if (status === "away") {
    statusBadge.textContent = "Away";
    statusBadge.classList.add("away");
  } else {
    statusBadge.textContent = "Offline";
    statusBadge.classList.add("offline");
  }
}

// ----------------------------------------------------------
// PART 6 — EXISTING EVENT LISTENERS
// ----------------------------------------------------------
// Wire up the remaining interactions
// (carried from Event Listeners lesson).

// TASK 7 — wire up theme toggle, skill form, and status change
// a) Dark mode toggle:
//    document.getElementById("theme-btn")
//      .addEventListener("click", handleThemeToggle)
//    Declare handleThemeToggle: toggles "dark" on body,
//    updates button text.
//
// b) Add skill form:
//    document.getElementById("add-skill-form")
//      .addEventListener("submit", handleSkillSubmit)
//    Declare handleSkillSubmit: preventDefault, reads input,
//    calls addSkillToPage, clears input.
//
// c) Status change:
//    document.getElementById("status-select")
//      .addEventListener("change", handleStatusChange)
//    Declare handleStatusChange: reads event.target.value,
//    calls renderStatusBadge.

function handleThemeToggle() {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  document.getElementById("theme-btn").textContent = dark
    ? "☀️ Light Mode"
    : "🌙  Dark Mode";
  saveProfile();
}

function handleSkillSubmit(event) {
  event.preventDefault();
  const inputEl = document.getElementById("skill-input");
  const inputName = inputEl.value.trim();

  if (inputName) addSkillToPage(inputName);
  saveProfile();
  inputEl.value = "";
}

function handleStatusChange(event) {
  renderStatusBadge(event.target.value);
  saveProfile();
}

document
  .getElementById("theme-btn")
  .addEventListener("click", handleThemeToggle);
document
  .getElementById("add-skill-form")
  .addEventListener("submit", handleSkillSubmit);
document
  .getElementById("status-select")
  .addEventListener("change", handleStatusChange);

// ----------------------------------------------------------
// PART 7 — AUTO-SAVE ON CHANGES
// ----------------------------------------------------------

// TASK 8 — auto-save
// Instead of requiring the user to click Save, auto-save
// whenever the bio or skills change.
//
// a) Add an "input" listener to #bio-input:
//    On every keystroke → call saveProfile()
//    Also update the char count:
//      const len = event.target.value.length
//      document.getElementById("char-count").textContent = len + " / 200"
//
// b) The skills list already calls saveProfile via addSkillToPage
//    and the click-to-remove. Make sure saveProfile is called there.
//
// Write a comment: what are the trade-offs of auto-saving
// vs a manual Save button?

document
  .getElementById("bio-input")

  .addEventListener("input", function (event) {
    const length = event.target.value.length;
    document.getElementById("char-count").textContent = length + " / 200";
    saveProfile();
  });

// ============================================================
// START THE PAGE
// ============================================================
// Call loadProfile() to restore saved data (or render defaults).
loadProfile();
