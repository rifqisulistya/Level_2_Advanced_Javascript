// ============================================================
// 🏠  APIs — HOMEWORK
// ============================================================
// API Exploration and JSON Navigation Exercises
//
// For this homework you will:
//   1. Open real API URLs in the browser
//   2. Copy responses and work with them as JS strings
//   3. Parse, navigate, and analyse the JSON data
//   4. Build URL utilities
//
// Open DevTools (F12 → Console) to see all output.
// Use the reference links on the page to explore the APIs.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Explore JSONPlaceholder users
// ----------------------------------------------------------
// Open this URL in your browser:
//   https://jsonplaceholder.typicode.com/users
//
// You will see an array of 10 user objects.
// Each user has: id, name, username, email, address, phone, website, company
//
// Copy the ENTIRE response (all 10 users) and paste it as a
// string assigned to the variable below.
//
// const usersJson = `[paste here]`;
//
// Then:
// a) Parse it: const users = JSON.parse(usersJson)
// b) Log how many users there are
// c) Log the name of the first user
// d) Log the email of the last user (use .length - 1)
// e) Log the city of the third user (address.city)
// f) Log the company name of user with id === 7

// Paste the JSON response here:
const usersJson = `[]`; // ← replace [] with the real response

// Your code:

// ----------------------------------------------------------
// TASK 2 — Navigate nested data
// ----------------------------------------------------------
// Using the users array from Task 1:
//
// a) Use map to create an array of just the user names.
//    Log: "All users: " + names
//
// b) Use filter to find users whose email ends in ".biz"
//    (Hint: email.endsWith(".biz"))
//    Log how many there are and their names.
//
// c) Use find to get the user with username === "Samantha"
//    Log their full address:
//    user.address.street + ", " + user.address.city
//
// d) Use forEach to log each user's name and company:
//    "Name: [name] | Company: [company.name]"

// ----------------------------------------------------------
// TASK 3 — Query parameters in practice
// ----------------------------------------------------------
// Open these URLs one at a time and answer the questions as comments.
//
// URL A: https://jsonplaceholder.typicode.com/posts?userId=3
// How many posts does user 3 have?
// Answer:
//
// URL B: https://jsonplaceholder.typicode.com/todos?userId=1&completed=true
// How many completed todos does user 1 have?
// Answer:
//
// URL C: https://jsonplaceholder.typicode.com/todos?userId=1&completed=false
// How many incomplete todos does user 1 have?
// Answer:
//
// URL D: https://jsonplaceholder.typicode.com/posts?_page=3&_limit=4
// What is the id of the first post on page 3?
// (Count: page 3 at limit 4 = posts starting at index 8, id 9)
// Answer:
//
// Write a comment explaining what you'd change in URL D to get page 5:
// Answer:

// ----------------------------------------------------------
// TASK 4 — Build URLs with query params
// ----------------------------------------------------------
// Declare a function called buildApiUrl.
// Parameters: baseUrl (string), params (object)
//
// Inside:
//   - If params is empty (Object.keys(params).length === 0)
//     return baseUrl unchanged
//   - Otherwise build the query string and return baseUrl + queryString
//
// Use your buildQueryString logic from the live class.

function buildApiUrl(baseUrl, params) {
  // your code here
}

// Test it:
console.log(
  buildApiUrl("https://jsonplaceholder.typicode.com/posts", { userId: 1 }),
);
// "https://jsonplaceholder.typicode.com/posts?userId=1"

console.log(
  buildApiUrl("https://jsonplaceholder.typicode.com/posts", {
    userId: 2,
    _limit: 5,
  }),
);
// "https://jsonplaceholder.typicode.com/posts?userId=2&_limit=5"

console.log(buildApiUrl("https://jsonplaceholder.typicode.com/posts", {}));
// "https://jsonplaceholder.typicode.com/posts"  ← no ? when no params

// ----------------------------------------------------------
// TASK 5 — Work with the Open-Meteo weather API
// ----------------------------------------------------------
// Open this URL in your browser:
//   https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true
//
// This is a REAL weather API — no API key needed.
// You will see the current weather for New York City.
//
// Copy the response and paste it below.

const weatherJson = `{}`; // ← replace {} with the real response

// Then:
// a) Parse it: const weather = JSON.parse(weatherJson)
// b) Log the current temperature
//    (Hint: weather.current_weather.temperature)
// c) Log the wind speed
// d) Log the weathercode
//    (Note: weathercode is a number. 0 = clear sky, 1-3 = cloudy,
//     45-48 = foggy, 51-67 = rain, 71-77 = snow, 80-99 = storms)
// e) Write a function called describeWeather that takes a weathercode
//    and returns a human-readable description using if/else:
//      0        → "☀️ Clear sky"
//      1, 2, 3  → "⛅ Partly cloudy"
//      45, 48   → "🌫️ Foggy"
//      (below 80 and above 3) → "🌧️ Rain or drizzle"
//      80 and above → "⛈️ Stormy"
//    Log describeWeather(weather.current_weather.weathercode)

// Your code:

// ----------------------------------------------------------
// TASK 6 — Compare two cities
// ----------------------------------------------------------
// Open BOTH weather URLs from the reference panel on the page:
//   NYC:    latitude=40.71&longitude=-74.01
//   London: latitude=51.51&longitude=-0.13
//
// Paste each response below.

const nycWeatherJson = `{}`; // ← NYC response
const londonWeatherJson = `{}`; // ← London response

// Then:
// a) Parse both
// b) Compare temperatures:
//    "NYC: [temp]°C | London: [temp]°C"
// c) Log which city is warmer:
//    "The warmer city is: [city name]"
//    Use a ternary: nycTemp > londonTemp ? "New York" : "London"

// ----------------------------------------------------------
// TASK 7 — Status code scenario matching
// ----------------------------------------------------------
// For each scenario below, write the most likely status code
// AND a brief explanation. Write your answers as comments.
//
// Scenario 1: You request /users/9999 but no user has that id.
// Code + reason:
//
// Scenario 2: You try to delete a post but you're not logged in.
// Code + reason:
//
// Scenario 3: You create a new post successfully.
// Code + reason:
//
// Scenario 4: You send a POST request with a required field missing.
// Code + reason:
//
// Scenario 5: You request /posts and get back a list of 100 posts.
// Code + reason:
//
// Scenario 6: The API database server crashes while processing your request.
// Code + reason:

// ----------------------------------------------------------
// TASK 8 — Connect the dots: analyse user posts
// ----------------------------------------------------------
// This task combines everything:
// variables, functions, array methods, objects, and API data.
//
// Below is a mock response from /users/1 and /posts?userId=1
// (We use mocked data here so the task doesn't depend on
// copy-pasting — but the structure matches the real API exactly.)

const userMock = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  company: { name: "Romaguera-Crona" },
};

const postsMock = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident",
    body: "quia et suscipit...",
  },
  { userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore..." },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem",
    body: "et iusto sed...",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe...",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam...",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam laborum",
    body: "ut aspernatur...",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat...",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam...",
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora",
    body: "consectetur animi...",
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita...",
  },
];

// Declare a function called analyseUser.
// Parameters: user (object), posts (array)
//
// Inside:
//   1. Log a profile header:
//      "=== " + user.name + " (@" + user.username + ") ==="
//
//   2. Log their location:
//      "📍 " + user.address.city
//
//   3. Log their company:
//      "🏢 " + user.company.name
//
//   4. Log their post count:
//      "📝 Posts: " + posts.length
//
//   5. Find the post with the shortest title (fewest characters)
//      and log: "Shortest title: " + shortestPost.title
//
//   6. Log all post titles using forEach:
//      "  • " + post.title
//
// Call analyseUser(userMock, postsMock)

function analyseUser(user, posts) {
  // your code here
}

analyseUser(userMock, postsMock);

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — URL parser
// ----------------------------------------------------------
// Declare a function called parseUrl.
// Parameter: url (string)
//
// Returns an object with:
//   {
//     base:   the part before the ?  (e.g. "https://api.example.com/posts")
//     params: an object of key-value pairs from the query string
//             (e.g. { userId: "1", _limit: "5" })
//   }
//
// Hints:
//   - url.includes("?") → check if there are params
//   - url.split("?") → splits into [base, queryString]
//   - queryString.split("&") → gives ["userId=1", "_limit=5"]
//   - Each pair.split("=") → gives ["userId", "1"]
//   - Build the params object using forEach
//
// Test it:
// parseUrl("https://jsonplaceholder.typicode.com/posts?userId=1&_limit=5")
// → { base: "https://jsonplaceholder.typicode.com/posts", params: { userId: "1", _limit: "5" } }
//
// parseUrl("https://jsonplaceholder.typicode.com/users")
// → { base: "https://jsonplaceholder.typicode.com/users", params: {} }

function parseUrl(url) {
  // your code here
}

console.log(
  parseUrl("https://jsonplaceholder.typicode.com/posts?userId=1&_limit=5"),
);
console.log(parseUrl("https://jsonplaceholder.typicode.com/users"));
