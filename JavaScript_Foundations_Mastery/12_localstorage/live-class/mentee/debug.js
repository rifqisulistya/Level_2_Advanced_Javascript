// ============================================================
// 🐛  localStorage — LIVE CLASS  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This saves a user object and reads it back.
// The log shows "[object Object]" instead of the actual data.
// What's wrong?

const user = { name: "Alex", age: 28, role: "admin" };
localStorage.setItem("user", user);

const retrieved = localStorage.getItem("user");
console.log(retrieved);
console.log(retrieved.name); // undefined

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This reads a saved skills array from localStorage.
// It crashes with: TypeError: skills.forEach is not a function
// The data was saved correctly. What's wrong with the reading?

// (Assume this was saved previously):
localStorage.setItem("skills", JSON.stringify(["JavaScript", "CSS", "React"]));

const skills = localStorage.getItem("skills");

skills.forEach(function(skill) {
  console.log(skill);
});

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function loads profile data on page start.
// It crashes on first load (before anything is saved).
// Then works fine on subsequent loads. Why?
// There are TWO issues — a crash AND a logic problem.

function loadData() {
  const raw         = localStorage.getItem("profile");
  const profileData = JSON.parse(raw);

  document.getElementById("bio-input").value = profileData.bio;

  profileData.skills.forEach(function(skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    document.getElementById("skills-list").appendChild(li);
  });
}

loadData();

// Bug 1 (crash) ↓

// Bug 2 (logic problem) ↓

// Your fix ↓
