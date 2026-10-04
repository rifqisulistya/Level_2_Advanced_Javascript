// ============================================================
// 🐛  PROPS + DESTRUCTURING  |  DEBUG
// ============================================================
// Same member object from class — zero new context to load.
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


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Props
// ----------------------------------------------------------
// This button should notify the caller via a callback, but
// instead it decides its own behavior. What's wrong, and why
// does that make MemberCard less reusable?

function MemberCard(props) {
  const card = document.createElement("div");
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", function () {
    console.log("Contacting: " + member.email); // hardcoded
  });
  card.appendChild(contactBtn);
  return card;
}

MemberCard({
  member: member,
  onContact: function (email) { console.log("Contacting:", email); },
});

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🔴 DEBUG 2 — Destructuring
// ----------------------------------------------------------
// This should log the member's city. It logs undefined instead.

const { city } = member;
console.log(city);

// What's wrong ↓

// Your fix ↓
