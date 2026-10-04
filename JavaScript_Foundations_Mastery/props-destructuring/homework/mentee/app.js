// ============================================================
// 🧩  PROPS + DESTRUCTURING  |  HOMEWORK
// ============================================================
// Same idea as class, extended: MORE members, ONE new pattern
// (prop threading), and two quick extra destructuring reps.
// ============================================================

const team = [
  { name: "Alex Rivera", role: "Senior Engineer", dept: "Engineering", email: "alex@devstudio.com",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Building clean, fast interfaces one component at a time." },
  { name: "Sofia Patel",  role: "Lead Designer",   dept: "Design",      email: "sofia@devstudio.com",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Designing systems that feel invisible until you need them." },
  { name: "Carlos Ruiz",  role: "Product Manager", dept: "Product",     email: "carlos@devstudio.com",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Turning fuzzy ideas into shipped, working products." },
];


// TASK 1 — MemberCard (same destructured pattern from class)
// Rebuild MemberCard exactly like you did in class:
// Parameter: a destructured object matching
//   { member: { name, role, dept, email, photo, bio }, onContact }
//
// Build and return a <div class="member-card"> containing:
//   1. <img class="member-photo"> — src: photo, alt: name
//   2. <h3> — textContent: name
//   3. <p class="member-role"> — textContent: role + " · " + dept
//   4. <p class="member-bio"> — textContent: bio
//   5. <button> — textContent: "📧 Contact"
//      On click: call onContact(email)

function MemberCard(/* your destructured parameter here */) {
  // your code here
}


// TASK 2 — TeamList (prop threading)
// Declare a function called TeamList.
// Parameter: props (object) — expected shape: { members, onContact }
//
// Inside:
//   1. Create a container <div>
//   2. Loop through props.members with forEach
//   3. For each member, call MemberCard with:
//      { member: member, onContact: props.onContact }
//      ⚠️ Notice: TeamList never CALLS onContact itself — it just
//      passes it straight through to each MemberCard. This is
//      "prop threading."
//   4. Append each card to the container
//   5. Return the container
//
// Declare a function called handleContact.
// Parameter: email
// Inside: console.log("Contacting: " + email)
//
// Mount it:
//   document.getElementById("app").appendChild(
//     TeamList({ members: team, onContact: handleContact })
//   );

function TeamList(props) {
  // your code here
}

function handleContact(email) {
  // your code here
}

// mount it here


// TASK 3 — two more destructuring reps
//
// a) Rest — pull name out of team[0], collect everything else
//    into a variable called restOfFirstMember:
//      const { name: firstMemberName, ...restOfFirstMember } = team[0];
//    Log firstMemberName and restOfFirstMember.
//
// b) Default value — this member is missing a department:
//      const partialMember = { name: "Maya Chen", role: "Intern" };
//    Destructure dept from it with a default of "Unassigned":
//      const { dept = "Unassigned" } = partialMember;
//    Log dept.

const partialMember = { name: "Maya Chen", role: "Intern" };

// your code here


// ============================================================
// 📝 WHAT THIS HOMEWORK DRILLED
// ============================================================
// - The SAME component (MemberCard) worked without any changes
//   once it was destructured — reusability is the payoff.
// - Prop threading: TeamList passes onContact down without ever
//   calling it — the same "notify, don't decide" rule, one
//   level removed.
// - Rest and defaults are the two destructuring tricks class
//   didn't have time for — now you've seen all the core ones.
