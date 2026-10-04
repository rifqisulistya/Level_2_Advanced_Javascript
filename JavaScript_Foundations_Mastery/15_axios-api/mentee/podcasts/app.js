// ============================================================
// 🎧  PODCAST QUEUE  |  (axios)
// ============================================================
// The SAME project as the fetch version — rebuild searchShows
// with async/await. Every localStorage function, both
// component functions, and both delegated listeners are
// IDENTICAL — copy them over unchanged.
// ============================================================

// TASK 1 — createShowCard — copy unchanged from fetch.
// (Includes the listen-link using show.collectionViewUrl —
//  there's no 30-second preview field for podcast SHOWS in
//  this API, only for songs, so the honest substitute is a
//  real link to the show's Apple Podcasts page.)

function createShowCard(show) {
  // your code here (same as fetch version)
}

// TASK 2 — searchShows, rebuilt with async/await
// Declare an ASYNC function called searchShows.
// No parameters.
//
// Inside a try block:
//   1. Read #search-input, .trim(); IF empty → return
//   2. status → "Searching..." / "status loading"
//   3. Clear #results-grid
//   4. const response = await axios.get(
//        `https://itunes.apple.com/search?term=${term}&media=podcast&limit=8`)
//   5. IF response.data.resultCount === 0:
//        status → `❌ No podcasts found for "${term}"` / "status error"
//        return
//      (Zero results is a SUCCESS — a message, not a catch.)
//   6. status → `✓ Found ${response.data.resultCount} shows`
//      / "status success"
//      forEach → appendChild(createShowCard(show)) into #results-grid
//
// Catch:
//   error.response → "❌ Search failed"
//   ELSE           → `❌ Network error: ${error.message}`
//   className "status error"

async function searchShows() {
  // your code here
}

function handleSearchSubmit(event) {
  // your code here (same as fetch version)
}

// wire up the search form here

// TASKS 3–7 — the ENTIRE queue system — copy unchanged from
// fetch: getQueue, saveQueue, addToQueue, createQueueItem,
// renderQueue, handleQueueClick, handleQueueInput, and both
// delegated listeners. Nothing about localStorage, dataset, or
// event delegation cares which network library found the shows.

function getQueue() {
  // your code here (same as fetch version)
}

function saveQueue(queue) {
  // your code here (same as fetch version)
}

function addToQueue(show) {
  // your code here (same as fetch version)
}

function removeFromQueue(id) {
  // your code here (same as fetch version)
}

function createQueueItem(item) {
  // your code here (same as fetch version)
}

function renderQueue() {
  // your code here (same as fetch version)
}

function handleQueueClick(event) {
  // your code here (same as fetch version)
}

function handleQueueInput(event) {
  // your code here (same as fetch version)
}

// wire up both queue listeners here

// ============================================================
// START THE PAGE
// ============================================================
renderQueue();
