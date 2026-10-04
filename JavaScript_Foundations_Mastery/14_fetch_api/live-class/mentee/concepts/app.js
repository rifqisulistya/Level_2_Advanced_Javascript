// ============================================================
// 📚  CODE CONCEPTS  | (fetch)
// ============================================================
// ⭐ THIS IS THE LIVE-CLASS PROJECT — we build it together.
//
// One search, TWO APIs:
//   Wikipedia → explains the concept in plain language
//   GitHub    → shows real repositories using it
// ONE learning list — you can save the CONCEPT itself, or any
// GitHub repo you find interesting. Both land in the same list.
//
// CONNECTING THE DOTS:
//   Lesson 8  → .some / .filter to guard and clean the saved list
//   Lesson 10 → component functions build every card
//   Lesson 11 → form submit + delegation for the learning list
//   Lesson 12 → the learning list lives in localStorage
//   Lesson 13 → two APIs, two DIFFERENT response shapes
//   Lesson 14 → fetch + .then + response.ok + .catch
// ============================================================

// ============================================================
// THE ENDPOINTS
// ============================================================
// WIKIPEDIA summary (404 if no article exists):
//   https://en.wikipedia.org/api/rest_v1/page/summary/CONCEPT
//   → { title, extract, content_urls: { desktop: { page } } }
//
// GITHUB repo search (⚠️ different shape from the user repos
// endpoint you may have seen — search wraps results in items):
//   https://api.github.com/search/repositories?q=CONCEPT&per_page=5
//   → { total_count, items: [ { full_name, html_url,
//       stargazers_count, description } ] }
//
// ⚠️ GitHub search allows ~10 requests/minute unauthenticated.
//    Search thoughtfully — and NEVER put a token in frontend JS.

// TASK 1 — the component functions
// Declare a function called createConceptCard.
// Parameter: data (the Wikipedia response)
// Returns: a <div>.
//
// Inside:
//   1. const summary = data.extract || "No summary available."
//      const url = data.content_urls.desktop.page
//   2. div, className "concept-card", innerHTML:
//      `
//        <h3>${data.title}</h3>
//        <p class="extract">${summary}</p>
//        <a href="${url}" target="_blank">Read the full article →</a>
//        <div class="save-row">
//          <button type="button" class="btn-save">🎯 Save to learning list</button>
//        </div>
//      `
//   3. Wire the button (closure over `data` and `url`):
//      div.querySelector(".btn-save").addEventListener("click", function () {
//        saveToLearningList(data.title, url);
//      });
//   4. return the div
//
// Then declare a function called createRepoCard.
// Parameter: repo (one item from the GitHub results)
// Returns: a <div>.
//
// ⚠️ This card ALSO gets a save button — same function, same
//    learning list, different source. That's the whole point
//    of this project's design: saveToLearningList doesn't know
//    or care whether a title came from Wikipedia or GitHub.
//
// Inside:
//   1. const description = repo.description || "No description"
//   2. Stars, formatted: repo.stargazers_count.toLocaleString()
//   3. div, className "repo-card", innerHTML:
//      `
//        <div class="repo-top">
//          <a href="${repo.html_url}" target="_blank">${repo.full_name}</a>
//          <span class="stars">★ ${repo.stargazers_count.toLocaleString()}</span>
//        </div>
//        <p class="desc">${description}</p>
//        <button type="button" class="btn-save">🎯 Save to learning list</button>
//      `
//   4. Wire the button (closure over `repo`):
//      div.querySelector(".btn-save").addEventListener("click", function () {
//        saveToLearningList(repo.full_name, repo.html_url);
//      });
//   5. return the div

function createConceptCard(data) {
  // your code here
}

function createRepoCard(repo) {
  // your code here
}

// TASK 2 — searchConcept (Wikipedia first)
// Declare a function called searchConcept.
// No parameters.
//
// Inside:
//   1. Read #concept-input, .trim(); IF empty → return
//   2. #concept-status → "Looking it up..." / "status loading"
//   3. Clear #concept-card and #repo-cards
//   4. fetch `https://en.wikipedia.org/api/rest_v1/page/summary/${concept}`
//      First .then:
//        IF response.status === 404 → throw new Error(`No Wikipedia article for "${concept}" — check the spelling?`)
//        IF !response.ok            → throw new Error(`Request failed: ${response.status}`)
//        ELSE return response.json()
//      Second .then (data):
//        - status → `✓ Found "${data.title}"` / "status success"
//        - appendChild createConceptCard(data) into #concept-card
//        - fetchRepos(concept)   ← the SECOND API starts here
//      .catch → status `❌ ${error.message}` / "status error"
//
// Wire the form: handleConceptSubmit(event) → preventDefault +
// searchConcept(), on #concept-form's submit.

function searchConcept() {
  // your code here
}

function handleConceptSubmit(event) {
  // your code here
}

// wire up the form listener here

// TASK 3 — fetchRepos (GitHub — note the DIFFERENT shape!)
// Declare a function called fetchRepos.
// Parameter: concept
//
// Inside:
//   1. fetch `https://api.github.com/search/repositories?q=${concept}&per_page=5`
//   2. First .then: IF !response.ok → throw new Error("Couldn't load repos")
//                   ELSE return response.json()
//   3. Second .then (data):
//      ⚠️ Search responses are a WRAPPER: the repos live at
//         data.items — NOT at the top level like the user-repos
//         endpoint. Same API, different endpoint, different
//         shape. Always check.
//      - Select #repo-cards
//      - forEach over data.items → appendChild(createRepoCard(repo))
//   4. .catch → #concept-status shows the error / "status error"

function fetchRepos(concept) {
  // your code here
}

// ============================================================
// TASK 4 — THE LEARNING LIST (title + link + done state + remove)
// ============================================================
// A saved item looks like: { title, url, done: false }.
// It doesn't matter whether the title came from a Wikipedia
// concept or a GitHub repo — the shape is identical either way.
//
// Declare getLearningList:
//   const saved = localStorage.getItem("learningList")
//   return saved ? JSON.parse(saved) : []     ← the null check!
//
// Declare saveLearningList. Parameter: list
//   localStorage.setItem("learningList", JSON.stringify(list))
//
// Declare saveToLearningList. Parameters: title, url
//   1. const list = getLearningList()
//   2. Duplicate guard: IF list.some((item) => item.title === title) → return
//   3. list.push({ title: title, url: url, done: false })
//   4. saveLearningList(list)
//   5. renderLearningList()
//
// Declare removeFromLearningList. Parameter: title
//   1. const list = getLearningList().filter((item) => item.title !== title)
//   2. saveLearningList(list)
//   3. renderLearningList()
//
// Declare toggleDone. Parameter: title
//   1. const list = getLearningList()
//   2. forEach item → IF item.title === title, flip it:
//      item.done = !item.done
//   3. saveLearningList(list)
//   4. renderLearningList()
//
// Declare renderLearningList. No parameters.
//   1. const list = getLearningList()
//   2. Select #learning-list, clear it
//   3. forEach item → build an <li>:
//      li.className = "learn-item"
//      li.innerHTML = `
//        <span class="title"><a href="${item.url}" target="_blank">${item.title}</a></span>
//        <div class="item-actions">
//          <button type="button" class="btn-done ${item.done ? "done" : ""}"
//                  data-title="${item.title}">
//            ${item.done ? "✓ Done" : "Mark done"}
//          </button>
//          <button type="button" class="btn-remove" data-title="${item.title}">✕ Remove</button>
//        </div>
//      `
//      appendChild
//
// Declare handleLearningClick. Parameter: event  (DELEGATION —
// one listener on #learning-list, branching on WHICH button.
// Covers items added by EITHER save button, since both write
// into the same list):
//   IF event.target.classList.contains("btn-done"):
//     toggleDone(event.target.dataset.title)
//   ELSE IF event.target.classList.contains("btn-remove"):
//     removeFromLearningList(event.target.dataset.title)
//
// Wire it:
//   document.getElementById("learning-list")
//     .addEventListener("click", handleLearningClick)

function getLearningList() {
  // your code here
}

function saveLearningList(list) {
  // your code here
}

function saveToLearningList(title, url) {
  // your code here
}

function removeFromLearningList(title) {
  // your code here
}

function toggleDone(title) {
  // your code here
}

function renderLearningList() {
  // your code here
}

function handleLearningClick(event) {
  // your code here
}

// wire up the learning list listener here

// ============================================================
// START THE PAGE
// ============================================================
renderLearningList();

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — the progress counter
// ----------------------------------------------------------
// Above the learning list, show: "2 of 5 understood".
// getLearningList().filter((item) => item.done).length
// gives you the numerator. Re-run it inside renderLearningList
// so it always stays in sync.

// ============================================================
// 📝 WHAT THIS PROJECT DRILLED
// ============================================================
// - TWO APIs on one page, chained: Wikipedia confirms the
//   concept exists, THEN GitHub finds code for it.
// - THREE shapes in one project: Wikipedia's flat object,
//   GitHub search's { items } wrapper, and your own saved list
//   in localStorage. Reading shapes IS the job.
// - ONE save function, called from TWO different cards — the
//   data shape you design matters more than which UI element
//   triggered it.
// ============================================================
