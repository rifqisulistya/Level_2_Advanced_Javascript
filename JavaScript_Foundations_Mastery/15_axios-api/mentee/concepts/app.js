// ============================================================
// 📚  CODE CONCEPTS  |  (axios)
// ============================================================
// The SAME project as the fetch version — rebuild the request
// functions with axios + async/await, then compare.
//
// KEY DIFFERENCES — watch for them:
//   1. response.data is already parsed (no .json())
//   2. axios REJECTS on 404/error statuses — they land in catch
//   3. async/await + try/catch replaces .then/.catch
//
// The component functions (both save buttons wired to the SAME
// saveToLearningList) AND the entire learning-list system are
// IDENTICAL to your fetch version — copy them over and focus on
// searchConcept + fetchRepos.
// ============================================================

// TASK 1 — component functions — copy unchanged from fetch.
// (Both cards' save buttons call saveToLearningList — same
//  function, same list, different source.)

function createQuestionCard(question) {
  // your code here (same as fetch version)
}

function createRepoCard(repo) {
  // your code here (same as fetch version)
}

// TASK 2 — searchConcept, rebuilt with async/await
// Declare an ASYNC function called searchConcept.
// No parameters.
//
// Inside a try block:
//   1. Read #concept-input, .trim(); IF empty → return
//   2. status → "Searching Stack Overflow..." / "status loading"
//   3. Clear #so-results and #repo-cards
//   4. const response = await axios.get(
//        `https://api.stackexchange.com/2.3/search?order=desc&sort=votes&intitle=${concept}&site=stackoverflow&pagesize=5`)
//   5. ⚠️ Stack Overflow does NOT reject on zero matches — a 200
//      with an empty items array is a genuine SUCCESS. Handle it
//      inside try, as a status message, not in catch:
//      IF response.data.items.length === 0:
//        status → `No Stack Overflow questions titled "${concept}" — checking GitHub anyway`
//        className "status" (no error/success class)
//      ELSE:
//        status → `✓ Found ${response.data.items.length} questions` / "status success"
//        forEach question → appendChild(createQuestionCard(question)) into #so-results
//   6. await fetchRepos(concept) — fires EITHER WAY, right after
//      the Stack Overflow response settles
//
// Catch (real failures only — this API doesn't 404 on a bad
// search term, so there's no special "not found" branch here
// like the old Wikipedia version had):
//   error.response → `❌ Request failed: ${error.response.status}`
//   ELSE → `❌ Network error: ${error.message}`
//   className "status error"

async function searchConcept() {
  // your code here
}

function handleConceptSubmit(event) {
  // your code here (same as fetch version)
}

// wire up the form listener here

// TASK 3 — fetchRepos, rebuilt with async/await
// Declare an ASYNC function called fetchRepos.
// Parameter: concept
//
// Inside a try block:
//   1. const response = await axios.get(
//        `https://api.github.com/search/repositories?q=${concept}&per_page=5`)
//   2. ⚠️ Still a WRAPPER shape — response.data.items, not
//      response.data directly.
//   3. Clear #repo-cards, forEach → appendChild(createRepoCard(repo))
// Catch: #concept-status shows the error / "status error"

async function fetchRepos(concept) {
  // your code here
}

// TASK 4 — the learning list — copy ALL functions + the
// listener wiring unchanged from your fetch version.
// localStorage doesn't know which network library found the data.

function getLearningList() {
  // your code here (same as fetch version)
}

function saveLearningList(list) {
  // your code here (same as fetch version)
}

function saveToLearningList(title, url) {
  // your code here (same as fetch version)
}

function removeFromLearningList(title) {
  // your code here (same as fetch version)
}

function toggleDone(title) {
  // your code here (same as fetch version)
}

function renderLearningList() {
  // your code here (same as fetch version)
}

function handleLearningClick(event) {
  // your code here (same as fetch version)
}

// wire up the learning list listener here

// ============================================================
// START THE PAGE
// ============================================================
renderLearningList();

// ============================================================
// 📝 SIDE-BY-SIDE REFLECTION
// ============================================================
// Two chained requests changed. The entire learning-list
// system — six functions and a delegated listener — did not.
// Count how many functions in this file are byte-for-byte
// identical to the fetch version. That count IS the argument
// for separating your data layer from your UI layer.
// ============================================================
