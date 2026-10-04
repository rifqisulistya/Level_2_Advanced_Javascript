// ============================================================
// 🐛  APIs — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This parses a user API response and tries to log the city.
// It logs undefined. What's wrong?

const userJson = '{"id":1,"name":"Leanne Graham","address":{"street":"Kulas Light","city":"Gwenborough","zipcode":"92998-3874"}}';
const user = JSON.parse(userJson);

console.log(user.city); // undefined

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This builds a query string but produces the wrong result.
// It outputs "?&userId=1&_limit=5" with a leading & after ?.
// What's wrong?

function buildQuery(params) {
  let query = "?";
  Object.keys(params).forEach(function(key) {
    query += "&" + key + "=" + params[key];
  });
  return query;
}

console.log(buildQuery({ userId: 1, _limit: 5 }));
// Actual:   "?&userId=1&_limit=5"
// Expected: "?userId=1&_limit=5"

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function is supposed to load user data from a mock
// API response and display a summary. It has TWO bugs —
// one causes incorrect output, one causes a crash.

const apiData = JSON.parse('{"status":200,"users":[{"id":1,"name":"Alex","role":"admin"},{"id":2,"name":"Sam","role":"member"}]}');

function displayUsers(data) {
  console.log("Total users: " + data.length);  // Bug 1

  data.users.forEach(function(user) {
    console.log(user.name + " — " + user.Role); // Bug 2
  });
}

displayUsers(apiData);

// Bug 1 ↓

// Bug 2 ↓

// Your fix ↓
