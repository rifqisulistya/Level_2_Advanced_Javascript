// ============================================================
// 🐙  GITHUB PORTFOLIO CHECKER  | (axios)
// ============================================================
// The SAME project as the fetch version — rebuild the request
// functions with axios + async/await, then compare the two
// app.js files side by side. The comparison IS the lesson.
//
// KEY DIFFERENCES — watch for them:
//   1. response.data is already parsed (no .json())
//   2. axios REJECTS on 404/403 — they land in catch; read
//      error.response.status to tell them apart
//   3. async/await + try/catch replaces .then/.catch
//
// The component functions are IDENTICAL to your fetch versions.
// Copy them over and focus on the request functions.
//
// 🔒 Same rule: no tokens in frontend JS, ever.
// ============================================================

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

// TASK 1 — createProfileCard
// Copy your working version from the fetch project — unchanged.

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
// TASK 2 — createRepoRow
// Copy your working version — unchanged.
// (LANG_COLORS dot, updated_at date, the two warn badges.)

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

// TASK 3 — renderReport
// Copy your working version — unchanged.
// (Two .filter counts, three checks, the checks-box verdict.)

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

// TASK 4 — the fetches, rebuilt with async/await
// Declare an ASYNC function called fetchRepos.
// Parameter: username
//
// Inside a try block:
//   1. const response = await axios.get(
//        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
//   2. response.data is the repos array:
//      renderReport(response.data)
//      clear #repo-list, forEach → appendChild(createRepoRow(repo))
// Catch: #github-status → "❌ Couldn't load repos" / "status error"
//
// Then declare an ASYNC function called checkProfile.
// No parameters.
//
// Inside a try block:
//   1. Read #username-input, .trim(); IF empty → return
//   2. Status → "Checking profile..." / "status loading"
//   3. Clear #profile-card, #portfolio-report, #repo-list
//   4. const response = await axios.get(`https://api.github.com/users/${username}`)
//      ⚠️ No status checks, no throws — a 404 or 403 REJECTS
//         and jumps straight to catch.
//   5. Status → `✓ Found ${response.data.login}` / "status success"
//   6. appendChild createProfileCard(response.data) into #profile-card
//   7. await fetchRepos(username)
//
// In the catch — the status codes live on error.response now:
//   error.response && error.response.status === 404 →
//     `❌ No GitHub user called "${username}"`
//   error.response && error.response.status === 403 →
//     "❌ Rate limit hit (60/hour per IP) — wait a bit"
//   error.response →
//     `❌ Request failed: ${error.response.status}`
//   ELSE →
//     `❌ Network error: ${error.message}`
//   className "status error"
//
// When it works: where did your three fetch-version throw
// statements go? Write the answer as a comment.

async function fetchRepos(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
    );

    renderReport(response.data);

    const listElement = document.getElementById("repo-list");
    listElement.innerHTML = "";
    response.data.forEach((repo) => {
      listElement.appendChild(createRepoRow(repo));
    });
  } catch (error) {
    const statusElement = document.getElementById("github-status");
    statusElement.textContent = "❌ Couldn't load repos";
    statusElement.className = "status error";
  }
}

async function checkProfile() {
  const username = document.getElementById("username-input").value.trim();
  const statusElement = document.getElementById("github-status");

  if (username === "") {
    return;
  }

  try {
    statusElement.textContent = "Checking profile...";
    statusElement.className = "status loading";

    document.getElementById("profile-card").innerHTML = "";
    document.getElementById("portfolio-report").innerHTML = "";
    document.getElementById("repo-list").innerHTML = "";

    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );

    statusElement.textContent = `✓ Found ${response.data.login}`;
    statusElement.className = " status success";
    document
      .getElementById("profile-card")
      .appendChild(createProfileCard(response.data));

    await fetchRepos(username);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      `❌ No Github user called "${username}"`;
    } else if (error.response && error.response.status === 403) {
      ("❌ Rate limit hit (68/hour per IP) - wait a bit");
    } else if (error.response) {
      `❌ Request failed: ${error.response.status}`;
    }
    `❌ Network error: ${error.message}`;
    statusElement.className = "status error";
  }
}

// TASK 5 — wire up the form (same as fetch — unchanged)

function handleGithubSubmit(event) {
  event.preventDefault();
  checkProfile();
}

document
  .getElementById("github-form")
  .addEventListener("submit", handleGithubSubmit);

// wire up the form listener here

// ⭐ STRETCH — the language breakdown, unchanged from fetch.
// Rendering never noticed the network swap. Count the layers
// that didn't change: components, report, wiring, stretch.
