// ============================================================
// 🐛  DASHBOARD  |  DEBUG TASKS  (fetch)
// ============================================================
// Three bugs, drawn from three different dashboard projects.
// Fix each and explain what was wrong as a comment.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy  (from 🐙 GitHub Portfolio Checker)
// ----------------------------------------------------------
// Should log a user's repo count. Instead: a TypeError about
// reading properties of undefined. What's wrong?

fetch("https://api.github.com/users/torvalds")
  .then((response) => {
    response.json();
  })
  .then((user) => {
    console.log(`${user.login} has ${user.public_repos} public repos`);
  });

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium  (from 📚 Code Concepts)
// ----------------------------------------------------------
// Should log the names of GitHub repos matching "closures".
// Instead: a TypeError. The endpoint works fine in the browser
// — the JSON is definitely there. What's wrong with how it's
// being read?
// Hint: this is GitHub's SEARCH endpoint, not the user-repos
// endpoint from Debug 1. Same company — same shape?

fetch("https://api.github.com/search/repositories?q=closures&per_page=5")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((repo) => {
      console.log(repo.full_name);
    });
  });

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard  (from 🎨 Palette Builder)
// ----------------------------------------------------------
// Should log each swatch's hex code and whether it's readable
// as text on a white background. Instead it crashes, and once
// you fix THAT, every swatch says "readable" — even ones that
// obviously aren't (try a pale yellow).
// There are TWO bugs. Find both.
// Hint 1: how deep is the hex value nested in each color object?
// Hint 2: getContrastInfo(hex) returns an object — which EXACT
//         property tells you pass/fail? Read the helper's
//         return shape again, don't guess the name.

fetch("https://www.thecolorapi.com/scheme?hex=f5e642&mode=analogic&count=5")
  .then((response) => response.json())
  .then((data) => {
    data.colors.forEach((color) => {
      const contrast = getContrastInfo(color.hex);
      const readable = contrast.onWhite ? "readable" : "NOT readable";
      console.log(`${color.hex} — ${readable} on white`);
    });
  });

// Bug 1 ↓

// Bug 2 ↓

// Your fix ↓
