# 🌐 APIs — Live Class

---

## 🧠 WHAT Is an API?

**API** stands for **Application Programming Interface**. It's a set of rules that lets one program talk to another.

The best analogy is a restaurant:

- **You** (your app) are the customer
- **The menu** (the API documentation) lists what you can order
- **The waiter** (the API) takes your request to the kitchen
- **The kitchen** (the server) prepares the response
- **The food** (JSON data) is what comes back

You never see inside the kitchen. You don't need to know how the data is stored or processed. You just make a request from the menu and receive what you asked for.

---

## ❓ WHY Do APIs Exist?

APIs let applications share data without sharing their internal code or database. They're the reason:

- A weather app can show real forecasts (calls a weather API)
- A login button says "Sign in with Google" (calls Google's auth API)
- Spotify shows your listening history on a third-party app (calls Spotify's API)
- Your bank app shows your balance (calls your bank's API)

Every modern app is built on top of multiple APIs.

---

## 🔍 HOW They Work — The HTTP Request/Response Cycle

When you call an API, you make an **HTTP request**. The server sends back an **HTTP response**.

```
Client (your app)                    Server (the API)
─────────────────                    ────────────────
  REQUEST  ──────────────────────→
    Method: GET
    URL: /posts/1
                          ←──────── RESPONSE
                                    Status: 200 OK
                                    Body: { "id": 1, "title": "..." }
```

---

### HTTP Methods

Every request uses a method that tells the server what you want to do:

**GET** — read data (no side effects, safe to repeat)
**POST** — create new data
**PUT** — update/replace existing data
**DELETE** — remove data

These map to **CRUD**: Create, Read, Update, Delete — the four operations every data system supports.

---

### HTTP Status Codes

The server's response always includes a status code:

**2xx — Success**

- `200 OK` — request succeeded
- `201 Created` — new resource was created

**4xx — Client Error (your fault)**

- `400 Bad Request` — your data was malformed or missing fields
- `401 Unauthorized` — you're not logged in / no valid token
- `403 Forbidden` — you're logged in but don't have permission
- `404 Not Found` — the resource doesn't exist at that URL

**5xx — Server Error (their fault)**

- `500 Internal Server Error` — a bug on the server side

Memory trick: **4xx = your fault, 5xx = their fault.**

---

### Query Parameters

Query parameters customise a GET request without changing the endpoint. They go at the end of the URL after a `?`, separated by `&`.

```
Base URL:    /posts
With params: /posts?userId=1&_limit=5&_page=2
              ↑ starts     ↑ next   ↑ another
              with ?       param    param
```

Common uses:

**Filtering** — `?userId=1` → only posts by user 1
**Pagination** — `?_page=2&_limit=10` → second page, 10 results
**Searching** — `?q=javascript` → results matching "javascript"
**Configuration** — `?units=metric&current_weather=true`

The server reads these separately from the path — they don't change which endpoint you're calling, just how it responds.

**Path parameters vs query parameters:**

- `/posts/1` → path param: identifies a specific resource (post with id 1)
- `/posts?userId=1` → query param: filters a collection (posts belonging to user 1)

---

### JSON

API responses are sent as **JSON** — a text format that looks like a JavaScript object but is actually a string.

```js
// JSON string (what the API sends)
'{"name":"Alex","age":28,"tags":["js","css"]}'

// JavaScript object (what you work with)
{ name: "Alex", age: 28, tags: ["js", "css"] }
```

**Always parse before using:**

```js
const data = JSON.parse(apiResponse); // convert string → object
data.name; // "Alex"
data.tags[0]; // "js"
```

**Spotting the type from the first character:**

- `{` → object response
- `[` → array response (a list of items)

---

### REST APIs

Most APIs you'll work with are **REST APIs** — they follow a convention where URLs represent resources and HTTP methods represent actions:

```
GET    /posts      → get all posts
GET    /posts/1    → get post with id 1
POST   /posts      → create a new post
PUT    /posts/1    → update post with id 1
DELETE /posts/1    → delete post with id 1
```

---

## ⚠️ Common Mistakes

1. **Accessing properties on a string instead of a parsed object**

   ```js
   const data = response; // ❌ still a string
   data.title; // undefined
   const data = JSON.parse(response); // ✅
   ```

2. **Treating an array response as an object**

   ```js
   // Response starts with [ — it's an array
   data.title; // ❌ arrays don't have .title
   data[0].title; // ✅ access an element first
   ```

3. **Case sensitivity on property names**

   ```js
   data.Title; // ❌ JSON has "title" not "Title"
   data.title; // ✅
   ```

4. **Wrong query parameter name**
   ```js
   /posts?user=1    // ❌ probably wrong — check the docs
   /posts?userId=1  // ✅ exact key the API expects
   ```

---

## 🌍 Real-World Usage

- **JSONPlaceholder** — free fake REST API for practice: `jsonplaceholder.typicode.com`
- **Open-Meteo** — free weather API, no key required: `https://open-meteo.com`
- **REST Countries** — country data API: `restcountries.com`

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Explain what an API is using the restaurant analogy
- [ ] Name the four HTTP methods and what each does
- [ ] Identify a status code and explain what it means
- [ ] Read a URL and identify the base, path, and query parameters
- [ ] Build a query string from a params object
- [ ] Parse a JSON string into a JavaScript object
- [ ] Navigate nested JSON using dot notation and array indexes
- [ ] Read basic API documentation and identify the correct URL
