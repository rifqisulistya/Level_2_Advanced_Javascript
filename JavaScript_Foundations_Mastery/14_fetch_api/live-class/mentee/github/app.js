// ============================================================
// 🐙  GITHUB PORTFOLIO CHECKER  | (fetch)
// ============================================================
// Open index.html — the page is styled like GitHub on purpose.
// Your fetch calls fill it with real data.
//
// CONNECTING THE DOTS:
//   Lesson 3  → || fallbacks (null bios!), the six falsy values
//   Lesson 8  → .filter to count portfolio problems
//   Lesson 10 → component functions build the cards
//   Lesson 11 → form submit + preventDefault
//   Lesson 13 → status codes: 404 vs 403 mean DIFFERENT things
//   Lesson 14 → fetch + .then + .catch
//
// 🔒 SECURITY RULE: never put a personal access token (or any
//    key) in frontend JS — anyone can read it in DevTools.
//    This whole project runs WITHOUT one.
//    GitHub allows 60 unauthenticated requests/hour per IP —
//    classroom wifi counts as ONE IP. If you hit a 403, that's
//    why. Wait a bit.
// ============================================================

// Provided: GitHub's language colors for the repo-list dots.
// (This is data, not logic — real GitHub uses these exact hexes.)
const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C#": "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
};

// ============================================================
// THE ENDPOINTS
// ============================================================
//   Profile: https://api.github.com/users/USERNAME
//     → an OBJECT: { login, name, bio, avatar_url, followers,
//                    following, public_repos, ... }
//     ⚠️ name and bio can be null — real users skip them!
//
//   Repos:   https://api.github.com/users/USERNAME/repos?sort=updated&per_page=10
//     → an ARRAY: [ { name, language, description, homepage,
//                     updated_at, ... }, ... ]
//     ⚠️ language, description, homepage can be null too.
//
// Failure styles:
//   Unknown username → HTTP 404
//   Rate limit hit   → HTTP 403

// TASK 1 — createProfileCard (component function)
// Declare a function called createProfileCard.
// Parameter: user
// Returns: a <div> — does NOT touch the page.
//
// Inside:
//   1. Fallbacks first (data before DOM):
//      const displayName = user.name || user.login
//      const bio = user.bio || "No bio yet — portfolios need one!"
//   2. div, className "profile-card" — wait, the container
//      #profile-card already has that class. Use a plain div.
//      innerHTML:
//      `
//        <img src="${user.avatar_url}" alt="${displayName}" />
//        <h3>${displayName}</h3>
//        <p class="login">${user.login}</p>
//        <p class="bio">${bio}</p>
//        <p class="stats">
//          <span class="counter">${user.followers}</span> followers ·
//          <span class="counter">${user.following}</span> following ·
//          <span class="counter">${user.public_repos}</span> repos
//        </p>
//      `
//   3. return the div

function createProfileCard(user) {
  const displayName = user.name || user.login;
  const bio = user.bio || "No bio yet - portfolios need one!";

  const profileCard = document.createElement("div");

  profileCard.innerHTML = `
        <img src="${user.avatar_url}" alt="${displayName}" />
        <h3>${displayName}</h3>
        <p class="login">${user.login}</p>
        <p class="bio">${bio}</p>
        <p class="stats">
          <span class="counter">${user.followers}</span> followers ·
          <span class="counter">${user.following}</span> following ·
          <span class="counter">${user.public_repos}</span> repos
        </p>`;

  return profileCard;
}

// TASK 2 — createRepoRow (component function)
// Declare a function called createRepoRow.
// Parameter: repo
// Returns: an <li>.
//
// Inside — resolve everything BEFORE building HTML:
//   1. const language = repo.language || "Unknown"
//   2. The language dot color — bracket notation with a variable
//      key, plus a fallback for languages not in our map:
//      const dotColor = LANG_COLORS[language] || "#a3a3a3"
//   3. The updated date (Date, like the localStorage lesson):
//      const updated = new Date(repo.updated_at).toLocaleDateString()
//   4. const description = repo.description || "No description"
//   5. Warning badges (empty string if all good):
//      let badges = ""
//      IF !repo.description → badges += `<span class="warn-badge">no description</span>`
//      IF !repo.homepage    → badges += `<span class="warn-badge">no live link</span>`
//      (⚠️ homepage can be null OR "" — !repo.homepage catches
//       BOTH. Lesson 3's six falsy values, paying rent.)
//   6. li, className "repo-row", innerHTML:
//      `
//        <div class="repo-top">
//          <span class="repo-name">${repo.name}</span>
//          ${badges}
//        </div>
//        <p class="desc">${description}</p>
//        <div class="meta">
//          <span>
//            <span class="lang-dot" style="background:${dotColor}"></span>${language}
//          </span>
//          <span>Updated ${updated}</span>
//        </div>
//      `
//   7. return the li

function createRepoRow(repo) {
  const language = repo.language || "Unknown";
  const dotColor = LANG_COLORS[language] || "#a3a3a3";
  const updated = new Date(repo.updated_at).toLocaleDateString();
  const description = repo.description || "No description";

  let badges = "";
  if (!repo.description) {
    badges += `<span class="warn-badge">no description</span>`;
  }
  if (!repo.homepage) {
    badges += `<span class="warn-badge">no live link</span>`;
  }

  const li = document.createElement("li");
  li.className = "repo-row";
  li.innerHTML = `
        <div class="repo-top">
          <span class="repo-name">${repo.name}</span>
          ${badges}
        </div>
        <p class="desc">${description}</p>
        <div class="meta">
          <span>
            <span class="lang-dot" style="background:${dotColor}"></span>${language}
          </span>
          <span>Updated ${updated}</span>
       </div>
      `;

  return li;
}

// TASK 3 — renderReport (the "checks" box)
// Declare a function called renderReport.
// Parameter: repos (the array)
//
// Inside — data first, DOM second:
//   1. Count problems with .filter (Lesson 8 — no for loops):
//      const missingDesc = repos.filter((repo) => !repo.description).length
//      const missingLink = repos.filter((repo) => !repo.homepage).length
//   2. Three checks:
//      const hasEnoughRepos = repos.length >= 3
//      const allDescribed   = missingDesc === 0
//      const allDeployed    = missingLink === 0
//   3. const isReady = hasEnoughRepos && allDescribed && allDeployed
//   4. #portfolio-report innerHTML — styled like GitHub's checks box:
//      `
//        <div class="report">
//          <h3>Portfolio checks</h3>
//          <p class="check-item ${hasEnoughRepos ? "pass" : "fail"}">
//            ${hasEnoughRepos ? "✓" : "✗"} At least 3 public repos (${repos.length})
//          </p>
//          <p class="check-item ${allDescribed ? "pass" : "fail"}">
//            ${allDescribed ? "✓" : "✗"} Every repo has a description (${missingDesc} missing)
//          </p>
//          <p class="check-item ${allDeployed ? "pass" : "fail"}">
//            ${allDeployed ? "✓" : "✗"} Every repo has a live link (${missingLink} missing)
//          </p>
//          <p class="verdict ${isReady ? "ready" : "not-ready"}">
//            ${isReady ? "✓ All checks passed — portfolio-ready!" : "● Some checks failed — fix the ✗ items and re-run"}
//          </p>
//        </div>
//      `

function renderReport(repos) {
  const missingDesc = repos.filter((repo) => !repo.description).length;
  const missingLink = repos.filter((repo) => !repo.homepage).length;

  const hasEnoughRepos = repos.length >= 3;
  const allDescribed = missingDesc === 0;
  const allDeployed = missingLink === 0;

  const isReady = hasEnoughRepos && allDescribed && allDeployed;

  const portfolioReport = document.getElementById("portfolio-report");
  portfolioReport.innerHTML = `
  <div class="report">
         <h3>Portfolio checks</h3>
         <p class="check-item ${hasEnoughRepos ? "pass" : "fail"}">
           ${hasEnoughRepos ? "✓" : "✗"} At least 3 public repos (${repos.length})
          </p>
          <p class="check-item ${allDescribed ? "pass" : "fail"}">
            ${allDescribed ? "✓" : "✗"} Every repo has a description (${missingDesc} missing)
          </p>
          <p class="check-item ${allDeployed ? "pass" : "fail"}">
            ${allDeployed ? "✓" : "✗"} Every repo has a live link (${missingLink} missing)
          </p>
          <p class="verdict ${isReady ? "ready" : "not-ready"}">
            ${isReady ? "✓ All checks passed — portfolio-ready!" : "● Some checks failed — fix the ✗ items and re-run"}
         </p>
        </div>
  `;
}

// TASK 4 — the fetches (profile first, THEN repos)
// Declare a function called fetchRepos.
// Parameter: username
//
// Inside:
//   1. fetch `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
//   2. First .then: IF !response.ok → throw new Error("Couldn't load repos")
//                   ELSE return response.json()
//   3. Second .then (repos array):
//      - renderReport(repos)
//      - clear #repo-list, forEach → appendChild(createRepoRow(repo))
//   4. .catch → #github-status: `❌ ${error.message}` / "status error"
//
// Then declare a function called checkProfile.
// No parameters.
//
// Inside:
//   1. Read #username-input, .trim(); IF empty → return
//   2. #github-status → "Checking profile..." / "status loading"
//   3. Clear #profile-card, #portfolio-report, #repo-list
//   4. fetch `https://api.github.com/users/${username}`
//      First .then — THREE cases, in order (Lesson 13):
//        response.status === 404 → throw new Error(`No GitHub user called "${username}"`)
//        response.status === 403 → throw new Error("Rate limit hit (60/hour per IP) — wait a bit")
//        !response.ok            → throw new Error(`Request failed: ${response.status}`)
//        ELSE return response.json()
//      Second .then (user):
//        - status → `✓ Found ${user.login}` / "status success"
//        - appendChild createProfileCard(user) into #profile-card
//        - fetchRepos(username)   ← second request, only now
//      .catch → status: `❌ ${error.message}` / "status error"
//
// Why sequential? If the user doesn't exist, the repos request
// would be wasted — and at 60/hour, waste is expensive.
//
// Test: your own username · "torvalds" · "no-such-user-xyz-123"

function fetchRepos(username) {
  fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not load any repos");
      }
      return response.json();
    })

    .then((repos) => {
      renderReport(repos);

      const reportRepo = document.getElementById("repo-list");
      reportRepo.innerHTML = "";
      repos.forEach((repo) => {
        reportRepo.appendChild(createRepoRow(repo));
      });
    })

    .catch((error) => {
      const getStatus = document.getElementById("github-status");
      getStatus.textContent = `❌ ${error.message}`;
      getStatus.className = "status error";
    });
}

function checkProfile() {
  const username = document.getElementById("username-input").value.trim();
  const statusEl = document.getElementById("github-status");

  if (username === "") {
    return;
  }

  statusEl.textContent = "Checking Profile..";
  statusEl.className = "status error";

  document.getElementById("profile-card").innerHTML = "";
  document.getElementById("portfolio-report").innerHTML = "";
  document.getElementById("repo-list").innerHTML = "";

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (response.status === 404) {
        throw new Error(`No GitHub user called "${username}"`);
      }
      if (response.status === 403) {
        throw new Error("Rate limit hit (60/hour per IP) -wait a bit");
      }

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((user) => {
      statusEl.textContent = `✓ Found ${user.login}`;
      statusEl.className = "status success";
      document
        .getElementById("profile-card")
        .appendChild(createProfileCard(user));
      fetchRepos(username);
    })

    .catch((error) => {
      statusEl.textContent = `❌ ${error.message}`;
      statusEl.className = "status loading";
    });
}

// TASK 5 — wire up the form
// handleGithubSubmit(event) → preventDefault + checkProfile()
// Wire it to #github-form's submit event.

function handleGithubSubmit(event) {
  event.preventDefault();
  checkProfile();
}

document
  .getElementById("github-form")
  .addEventListener("submit", handleGithubSubmit);

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — the language breakdown
// ----------------------------------------------------------
// Under the report, show which languages appear across the
// repos and how many times, e.g. "JavaScript ×6 · CSS ×2".
// Hint: repos.map((repo) => repo.language).filter(Boolean)
// gives you the non-null languages. Count them with a forEach
// into an object: counts[lang] = (counts[lang] || 0) + 1
// — bracket notation with a variable key, again.

function renderLanguageBreakdown(repos) {
  const counts = {};
  repos
    .map((repo) => repo.language)
    .filter(Boolean)
    .forEach((lang) => {
      counts[lang] = counts[lang] || 0 + 1;
    });

  const parts = [];
  for (const lang in counts) {
    parts.push(`${lang} ${counts[lang]}`);
  }

  const paragraph = document.createElement("p");
  paragraph.className = "status";
  paragraph.textContent = parts.join(" . ");
  document.getElementById("portfolio-report").appendChild(paragraph);
}

// ============================================================
// 📝 WHAT THIS PROJECT DRILLED
// ============================================================
// - 404 and 403 are both "loud" failures — but they mean
//   DIFFERENT things and deserve different messages.
// - GitHub's null fields (name, bio, description, homepage)
//   are the gentle version of the missing-data problem.
//   The Food Explorer project turns that dial to maximum.
// ============================================================
