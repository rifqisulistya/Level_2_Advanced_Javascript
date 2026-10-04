// ============================================================
// 🧩  PROPS + DESTRUCTURING  |  LIVE CLASS
// ============================================================
// ONE component, built twice: once the plain way, once
// destructured — because destructuring a parameter IS what a
// real framework's component props look like. Same idea, two
// names.
//
// Everything mounts to #app. Open DevTools Console too — some
// output is logged, not just rendered.
// ============================================================

const member = {
  name: "Alex Rivera",
  role: "Senior Engineer",
  dept: "Engineering",
  email: "alex@devstudio.com",
  photo: "https://randomuser.me/api/portraits/men/32.jpg",
  bio: "Building clean, fast interfaces one component at a time.",
  address: { city: "Austin", country: "USA" },
};

// ============================================================
// PASS 1 — PROPS, THE PLAIN WAY
// ============================================================

// TASK 1 — MemberCard (data prop only)
// Declare a function called MemberCard.
// Parameter: props (object) — expected shape: { member }
//
// Build and return a <div class="member-card"> containing:
//   1. <img class="member-photo"> — src: props.member.photo
//      alt: props.member.name
//   2. <h3> — textContent: props.member.name
//   3. <p class="member-role"> — textContent:
//      props.member.role + " · " + props.member.dept
//   4. <p class="member-bio"> — textContent: props.member.bio
//
// Mount it:
//   document.getElementById("app").appendChild(
//     MemberCard({ member: member })
//   );

function MemberCard(props) {
  const card = document.createElement("div");
  card.classList.add("member-card");

  const photo = document.createElement("img");
  photo.classList.add("member-photo");
  photo.src = props.member.photo;
  photo.alt = props.member.name;

  const name = document.createElement("h3");
  name.textContent = props.member.name;

  const role = document.createElement("p");
  role.classList.add("member-role");
  role.textContent = props.member.role + " · " + props.member.dept;

  const bio = document.createElement("p");
  bio.classList.add("member-bio");
  bio.textContent = props.memeber.bio;

  card.append(photo, name, role, bio);

  // card.appendChild(name);

  // card.appendChild(role);

  // card.appendChild(bio);

  return card;
}

document.getElementById("app").appendChild(MemberCard({ member: member }));

// props = {
//   member:{
//   name: "Alex Rivera",
//   email: "alex@test.com",
//   photo: "alex.png",
//   role: "Senior Engineer",
//   dept: "Engineering",
//   bio: "Building clean, fast interfaces one component at a time",
// }

// }

// mount it here

// TASK 2 — add a callback prop
// Extend the SAME MemberCard function above (don't write a new
// one) to also add a button:
//   5. <button> — textContent: "📧 Contact"
//      On click: call props.onContact(props.member.email)
//      ⚠️ The button does NOT decide what "Contact" means — it
//      just calls the callback it was given. The caller decides.
//
// Declare a function called handleContact.
// Parameter: email
// Inside: console.log("Contacting: " + email)
//
// Update your mount call to also pass onContact:
//   document.getElementById("app").innerHTML = ""; // clear the old card
//   document.getElementById("app").appendChild(
//     MemberCard({ member: member, onContact: handleContact })
//   );

function MemberCard(props) {
  const card = document.createElement("div");
  card.classList.add("member-card");

  const photo = document.createElement("img");
  photo.classList.add("member-photo");
  photo.src = props.member.photo;
  photo.alt = props.member.name;

  const name = document.createElement("h3");
  name.textContent = props.member.name;

  const role = document.createElement("p");
  role.classList.add("member-role");
  role.textContent = props.member.role + " · " + props.member.dept;

  const bio = document.createElement("p");
  bio.classList.add("member-bio");
  bio.textContent = props.memeber.bio;

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "📧 Contact";
  contactBtn.addEventListener("click", function () {
    props.onContact(props.member.email);
  });

  card.append(photo, name, role, bio, contactBtn);

  return card;
}

function handleContact(email) {
  console.log("Contacting: " + email);
}

// update the mount call here
document.getElementById("app").innerHTML = "";

document
  .getElementById("app")
  .appendChild(MemberCard({ member: member, onContact: handleContact }));
// ============================================================
// PASS 2 — THE SAME THING, DESTRUCTURED
// ============================================================

// TASK 3 — refactor MemberCard's signature
// Rewrite MemberCard from Tasks 1-2 using a DESTRUCTURED
// parameter instead of props.x access:
//
//   function MemberCard({ member: { name, role, dept, email, photo, bio }, onContact }) {
//     ...same body as before, but every props.member.x becomes
//     the bare variable (name, role, dept, email, photo, bio),
//     and props.onContact becomes just onContact
//   }
//
// The body logic doesn't change — only how you REACH each value.
// The mount call from Task 2 doesn't need to change at all.
//
// Write a comment: did the CALL SITE (the mount line) need to
// change when you destructured the parameter? Why or why not?

function MemberCard({
  member: { name, role, dept, email, photo, bio },
  onContact,
}) {
  const card = document.createElement("div");
  card.classList.add("member-card");

  const photoEl = document.createElement("img");
  photoEl.classList.add("member-photo");
  photoEl.src = photo;
  photoEl.alt = name;

  const nameEl = document.createElement("h3");
  nameEl.textContent = name;

  const roleEl = document.createElement("p");
  roleEl.classList.add("member-role");
  roleEl.textContent = role + " · " + dept;

  const bioEl = document.createElement("p");
  bioEl.classList.add("member-bio");
  bioEl.textContent = bio;

  const contactBtnEl = document.createElement("button");
  contactBtnEl.textContent = "📧 Contact";
  contactBtnEl.addEventListener("click", function () {
    onContact(email);
  });

  card.append(photoEl, nameEl, roleEl, bioEl, contactBtnEl);

  return card;
}

function handleContact(email) {
  console.log("Contacting: " + email);
}

// update the mount call here
document.getElementById("app").innerHTML = "";

document
  .getElementById("app")
  .appendChild(MemberCard({ member: member, onContact: handleContact }));

// rewrite MemberCard here

// TASK 4 — nested destructuring, outside of props
// Declare a function called formatLocation.
// Parameter: a destructured object matching { address: { city, country } }
//
// Returns: city + ", " + country
//
// Test it:
//   console.log(formatLocation(member)); // "Austin, USA"
//
// This is the SAME { a: { b } } pattern from Task 3 — just on
// an ordinary function instead of a component.

function formatLocation({ address: { city, country } }) {
  return city + ", " + country;
}

console.log(formatLocation(member));

// ============================================================
// PASS 3 — ONE MORE TRICK, QUICK CLOSE
// ============================================================

// TASK 5 — array destructuring (just a taste — the full lesson
// on this comes in its own class later)
// Swap the values of two variables WITHOUT a temp variable,
// using array destructuring:
//
//   let first = "Alex";
//   let last = "Rivera";
//   [first, last] = [last, first];
//   console.log(first, last); // "Rivera" "Alex"

let first = "Alex";
let last = "Rivera";
[first, last] = [last, first];
console.log(first, last);

// ============================================================
// 📝 RECAP
// ============================================================
// Props: data + behavior passed INTO a function from outside.
//        A component reads props, calls callbacks, decides nothing.
// Destructuring: a shorthand for pulling values out of an object
//        or array — including right inside a function's own
//        parameter list. That's what real component props look
//        like in React, Vue, and everywhere else.
