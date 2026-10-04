// ============================================================
// 🎧  PODCAST QUEUE  |  (fetch)
// ============================================================
// Same skeleton, fourth skin: search → results → save → track.
// This time the "state" per saved item is richer — a status
// AND a personal note — which makes update-in-place (not just
// add/remove) the new skill.
//
// CONNECTING THE DOTS:
//   Lesson 8  → .find to locate one item in the saved queue
//   Lesson 10 → component functions build every card
//   Lesson 11 → per-element listeners + one delegated listener
//   Lesson 12 → the queue lives in localStorage
//   Lesson 14 → fetch + .then + .catch
// ============================================================

// ============================================================
// THE ENDPOINT
// ============================================================
//   https://itunes.apple.com/search?term=TERM&media=podcast&limit=8
//   → { resultCount, results: [ { collectionId, collectionName,
//       artistName, artworkUrl100 } ] }
//
// ⚠️ collectionId is the unique id for each show — that's what
//    you'll save, not the whole object (keep saved data small
//    and re-fetchable).

// TASK 1 — createShowCard (component function)
// Declare a function called createShowCard.
// Parameter: show (one item from results)
// Returns: a <div>.
//
// ⚠️ There's no 30-second audio-preview field for podcast SHOWS
//    in this API (that field only exists for individual songs).
//    show.collectionViewUrl is the honest substitute — a real
//    link to the show's page on Apple Podcasts, where it can
//    actually be heard.
//
// Inside:
//   1. div, className "show-card", innerHTML:
//      `
//        <img src="${show.artworkUrl100}" alt="${show.collectionName}" />
//        <h3>${show.collectionName}</h3>
//        <p class="artist">${show.artistName}</p>
//        <button type="button" class="btn-queue">+ Add to queue</button>
//        <a class="listen-link" href="${show.collectionViewUrl}" target="_blank">🎧 Listen on Apple Podcasts</a>
//      `
//   2. Wire the button (closure over `show`):
//      div.querySelector(".btn-queue").addEventListener("click", function () {
//        addToQueue(show);
//      });
//   3. return the div

function createShowCard(show) {
  // your code here
}

// TASK 2 — searchShows (the fetch)
// Declare a function called searchShows.
// No parameters.
//
// Inside:
//   1. Read #search-input, .trim(); IF empty → return
//   2. #search-status → "Searching..." / "status loading"
//   3. Clear #results-grid
//   4. fetch `https://itunes.apple.com/search?term=${term}&media=podcast&limit=8`
//      First .then: IF !response.ok → throw new Error("Search failed")
//                   ELSE return response.json()
//      Second .then (data):
//        IF data.resultCount === 0:
//          status → `❌ No podcasts found for "${term}"` / "status error"
//          return
//        status → `✓ Found ${data.resultCount} shows` / "status success"
//        forEach show → appendChild(createShowCard(show)) into #results-grid
//      .catch → status `❌ ${error.message}` / "status error"
//
// Wire the form: handleSearchSubmit → preventDefault + searchShows()

function searchShows() {
  // your code here
}

function handleSearchSubmit(event) {
  // your code here
}

// wire up the search form here

// ============================================================
// THE QUEUE (localStorage — richer state this time)
// ============================================================
// Each saved item looks like:
//   { id, title, artist, artwork, status: "queued", note: "" }

// TASK 3 — getQueue / saveQueue
// Declare getQueue:
//   const saved = localStorage.getItem("podcastQueue")
//   return saved ? JSON.parse(saved) : []      ← the null check!
//
// Declare saveQueue. Parameter: queue
//   localStorage.setItem("podcastQueue", JSON.stringify(queue))

function getQueue() {
  // your code here
}

function saveQueue(queue) {
  // your code here
}

// TASK 4 — addToQueue (the duplicate guard)
// Declare a function called addToQueue.
// Parameter: show
//
// Inside:
//   1. const queue = getQueue()
//   2. Duplicate guard — use .some (Lesson 8):
//      IF queue.some((item) => item.id === show.collectionId) → return
//   3. queue.push({
//        id: show.collectionId,
//        title: show.collectionName,
//        artist: show.artistName,
//        artwork: show.artworkUrl100,
//        url: show.collectionViewUrl,
//        status: "queued",
//        note: "",
//      })
//   4. saveQueue(queue)
//   5. renderQueue()

function addToQueue(show) {
  // your code here
}

// TASK 4b — removeFromQueue
// Declare a function called removeFromQueue.
// Parameter: id
//
// Inside:
//   1. const queue = getQueue().filter((item) => item.id !== id)
//   2. saveQueue(queue)
//   3. renderQueue()

function removeFromQueue(id) {
  // your code here
}

// TASK 5 — createQueueItem (component function)
// Declare a function called createQueueItem.
// Parameter: item (one saved queue entry)
// Returns: an <li>.
//
// Inside:
//   1. li, className "queue-item", innerHTML:
//      `
//        <div class="q-top">
//          <h3>${item.title}</h3>
//          <div class="item-actions">
//            <button type="button" class="status-tag ${item.status}"
//                    data-id="${item.id}">${item.status}</button>
//            <button type="button" class="btn-remove"
//                    data-id="${item.id}">✕ Remove</button>
//          </div>
//        </div>
//        <a class="listen-link" href="${item.url}" target="_blank">🎧 Listen</a>
//        <textarea placeholder="Why did you save this?"
//                   data-id="${item.id}">${item.note}</textarea>
//      `
//   2. return the li
//
// (Notice: NO click listener on either button, NO input listener
//  on the textarea, here. All THREE are handled by ONE delegated
//  listener on the whole list — Task 7.)

function createQueueItem(item) {
  // your code here
}

// TASK 6 — renderQueue
// Declare a function called renderQueue.
// No parameters.
// Inside:
//   1. const queue = getQueue()
//   2. Select #queue-list, clear it
//   3. forEach item → appendChild(createQueueItem(item))

function renderQueue() {
  // your code here
}

// TASK 7 — the delegated listeners (status toggle, remove, notes)
// Declare handleQueueClick. Parameter: event
//   IF event.target.classList.contains("status-tag"):
//     1. const id = Number(event.target.dataset.id)
//        (dataset values are always STRINGS — Number() converts
//         back, or the === below silently never matches)
//     2. const queue = getQueue()
//     3. forEach item → IF item.id === id:
//        item.status = item.status === "queued" ? "completed" : "queued"
//     4. saveQueue(queue); renderQueue()
//   ELSE IF event.target.classList.contains("btn-remove"):
//     removeFromQueue(Number(event.target.dataset.id))
//
// Declare handleQueueInput. Parameter: event
//   (fires on ANY typing in ANY textarea — delegation again,
//    this time for the "input" event instead of "click")
//   IF event.target.tagName === "TEXTAREA":
//     1. const id = Number(event.target.dataset.id)
//     2. const queue = getQueue()
//     3. Use .find (Lesson 8) to get ONE item, then update it:
//        const item = queue.find((entry) => entry.id === id)
//        IF item → item.note = event.target.value
//     4. saveQueue(queue)
//        ⚠️ do NOT call renderQueue() here — that would rebuild
//        the textarea mid-keystroke and kick the user's cursor
//        to the end. Save silently; only re-render on structural
//        changes (add / status toggle).
//
// Wire BOTH to the same parent:
//   const queueList = document.getElementById("queue-list")
//   queueList.addEventListener("click", handleQueueClick)
//   queueList.addEventListener("input", handleQueueInput)

function handleQueueClick(event) {
  // your code here
}

function handleQueueInput(event) {
  // your code here
}

// wire up both listeners here

// ============================================================
// START THE PAGE
// ============================================================
renderQueue();

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — group by status
// ----------------------------------------------------------
// Split the queue into two visual groups using .filter:
//   const queued = queue.filter((item) => item.status === "queued")
//   const completed = queue.filter((item) => item.status === "completed")
// Render two headed sections instead of one flat list.

// ============================================================
// 📝 WHAT THIS PROJECT DRILLED
// ============================================================
// - Richer saved state (status AND note per item) means
//   updating ONE field of ONE object in an array — .find, not
//   .filter or .map, because you want the one item, mutated.
// - TWO delegated listeners on the same parent, for TWO
//   different event types (click vs input) — each ignoring
//   events meant for the other.
// - Knowing when NOT to re-render (mid-keystroke) is as
//   important as knowing when to.
// ============================================================
