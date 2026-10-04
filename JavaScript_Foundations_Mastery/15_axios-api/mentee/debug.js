// ============================================================
// 🐛  DASHBOARD  |  DEBUG TASKS  (axios)
// ============================================================
// Three bugs, drawn from three different dashboard projects.
// Fix each and explain what was wrong as a comment.
// (axios must be loaded — run these from a project page.)
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy  (from 🐙 GitHub Portfolio Checker)
// ----------------------------------------------------------
// Should log a user's follower count. Instead: a TypeError,
// INSTANTLY — before the request could possibly finish.
// That timing is a clue.

async function showFollowers() {
  const response = axios.get("https://api.github.com/users/torvalds");
  console.log(`Followers: ${response.data.followers}`);
}

showFollowers();

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium  (from 🎧 Podcast Queue)
// ----------------------------------------------------------
// Should toggle a saved queue item's status when its id matches.
// It compiles fine, runs with no errors — and NEVER toggles
// anything. The item is definitely in the array. Why does the
// comparison never match?
// Hint: log typeof id and typeof item.id right before the
// comparison — are they the same type?

async function toggleStatus(clickedId) {
  // clickedId comes from event.target.dataset.id, e.g. "1487491703"
  const saved = localStorage.getItem("podcastQueue");
  const queue = saved ? JSON.parse(saved) : [];

  queue.forEach((item) => {
    if (item.id === clickedId) {
      item.status = item.status === "queued" ? "completed" : "queued";
    }
  });

  localStorage.setItem("podcastQueue", JSON.stringify(queue));
}

toggleStatus("1487491703");

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard  (from 🐙 GitHub Portfolio Checker)
// ----------------------------------------------------------
// Should show "user not found" for made-up usernames and
// "something else went wrong" for real network failures.
// Instead, EVERY failure — bad username, no wifi — shows
// "something else went wrong". There are TWO bugs. Find both.
// Hint 1: where does axios actually put the status code on
//         a rejected request?
// Hint 2: what happens when you read .status of something that
//         doesn't exist, inside an `if` condition — a crash, or
//         a quiet "false" that skips to the next branch?

async function lookupUser(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log(`Found: ${response.data.login}`);
  } catch (error) {
    if (error.status === 404) {
      console.log(`No user found for "${username}"`);
    } else {
      console.log("Something else went wrong");
    }
  }
}

lookupUser("this-is-not-a-real-username-xyz");

// Bug 1 ↓

// Bug 2 ↓

// Your fix ↓
