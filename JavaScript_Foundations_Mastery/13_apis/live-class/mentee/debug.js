// ============================================================
// 🐛  APIs — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// These bugs all involve reading JSON API responses incorrectly.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This parses an API response and tries to log the post title.
// It logs undefined instead. What's wrong?

const responseStr = '{"userId":1,"id":1,"title":"Hello World","body":"Post body here"}';
const post = JSON.parse(responseStr);

console.log(post.Title); // undefined

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This receives an API response that is an ARRAY of posts.
// The developer tries to access .title on it directly.
// It logs undefined. What's wrong?

const postsResponse = JSON.parse('[{"id":1,"title":"First Post"},{"id":2,"title":"Second Post"}]');

console.log(postsResponse.title); // undefined
console.log(postsResponse.length); // 2 — it IS an array

// What's wrong ↓

// Your fix — log the title of the first post correctly ↓


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function receives a raw JSON string from an API.
// It tries to access properties on it directly.
// It logs undefined for everything. There are TWO bugs.

function processApiResponse(rawJson) {
  console.log(rawJson.status);             // undefined
  console.log(rawJson.data.user.name);     // TypeError or undefined
  console.log(rawJson.data.posts.length);  // TypeError or undefined
}

const apiResponse = `{"status":200,"data":{"user":{"id":1,"name":"Alex"},"posts":[{"id":1},{"id":2}]}}`;

processApiResponse(apiResponse);

// Bug 1 ↓

// Bug 2 ↓

// Your fix ↓
