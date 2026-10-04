// ============================================================
// 🎨  PALETTE BUILDER  | fetch)
// ============================================================
// Same skeleton as the other projects: read input → fetch →
// check → render cards. Here the cards are color swatches, and
// each one is checked with a PROVIDED helper function.
//
// contrast-helper.js is already loaded — you have ONE function:
//   getContrastInfo(hex) → {
//     onWhite: { ratio, passesAA, passesAAA },
//     onBlack: { ratio, passesAA, passesAAA }
//   }
// Trust its contract. You don't need to know HOW it works to
// USE it correctly — reading a function signature and its
// return shape is the actual skill here.
//
// CONNECTING THE DOTS:
//   Lesson 10 → component functions build every swatch
//   Lesson 13 → reading a nested JSON array of color objects
//   Lesson 14 → fetch + .then + .catch
// ============================================================

// ============================================================
// THE ENDPOINT
// ============================================================
//   https://www.thecolorapi.com/scheme?hex=4f46e5&mode=analogic&count=5
//   (no # in the query — strip it before building the URL)
//   → { colors: [ { hex: { value: "#4F46E5" }, name: { value: "..." } }, ... ] }
//
// ⚠️ Every color's hex is nested TWO levels deep:
//    color.hex.value — not color.hex

// TASK 1 — createSwatchCard (component function)
// Declare a function called createSwatchCard.
// Parameter: color (one item from the colors array)
// Returns: a <div>.
//
// Inside:
//   1. const hex = color.hex.value      ← two levels deep!
//      const name = color.name.value || "Unnamed"
//   2. Call the PROVIDED helper:
//      const contrast = getContrastInfo(hex)
//   3. Build the two contrast rows. For each background
//      (White, Black), decide pass/fail from contrast.onWhite.passesAA
//      and contrast.onBlack.passesAA:
//      const whiteRow = contrast.onWhite.passesAA
//        ? `<div class="contrast-row pass"><span>on white</span><span class="swatch-preview">✓ ${contrast.onWhite.ratio}</span></div>`
//        : `<div class="contrast-row fail"><span>on white</span><span class="swatch-preview">✗ ${contrast.onWhite.ratio}</span></div>`
//      (Build blackRow the same way with contrast.onBlack.)
//   4. div, className "swatch-card", innerHTML:
//      `
//        <div class="block" style="background:${hex}"></div>
//        <div class="info">
//          <p class="hex">${hex}</p>
//          <p class="name">${name}</p>
//          ${whiteRow}
//          ${blackRow}
//        </div>
//      `
//   5. return the div

function createSwatchCard(color) {
  // your code here
}

// TASK 2 — generatePalette (the fetch)
// Declare a function called generatePalette.
// No parameters.
//
// Inside:
//   1. Read #hex-input, .trim(); IF empty, fall back to
//      #color-picker's value instead (a color input is always
//      valid, so this can never be truly empty)
//   2. Strip the "#" before building the URL:
//      const cleanHex = hex.replace("#", "")
//   3. #palette-status → "Generating palette..." / "status loading"
//   4. Clear #swatch-grid
//   5. fetch `https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=analogic&count=5`
//      First .then: IF !response.ok → throw new Error("Couldn't generate a palette from that color")
//                   ELSE return response.json()
//      Second .then (data):
//        status → `✓ Generated ${data.colors.length} colors` / "status success"
//        forEach color → appendChild(createSwatchCard(color)) into #swatch-grid
//      .catch → status `❌ ${error.message}` / "status error"
//
// Wire the form:
//   handlePaletteSubmit(event) → preventDefault + generatePalette()
//   on #palette-form's submit.
//
// Bonus UX (not required, but nice): sync the two inputs — when
// the color picker changes, copy its value into the text input.
//   document.getElementById("color-picker").addEventListener("input", function (event) {
//     document.getElementById("hex-input").value = event.target.value;
//   });

function generatePalette() {
  // your code here
}

function handlePaletteSubmit(event) {
  // your code here
}

// wire up the form listener here
// (optional: wire the color-picker sync here too)

// ============================================================
// START THE PAGE
// ============================================================
// Generate a default palette immediately so the page isn't
// empty on load.
generatePalette();

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — the AAA badge
// ----------------------------------------------------------
// WCAG has a STRICTER standard too: AAA (ratio >= 7), already
// computed for you in contrast.onWhite.passesAAA and
// contrast.onBlack.passesAAA. Add a small badge to any swatch
// that passes AAA: "⭐ AAA" — this color isn't just legal, it's
// excellent for text at any size.

// ============================================================
// 📝 WHAT THIS PROJECT DRILLED
// ============================================================
// - A doubly-nested response shape (color.hex.value) — reading
//   JSON structure keeps mattering no matter which API you use.
// - Using a function you didn't write: read its NAME, its
//   PARAMETER, its RETURN SHAPE — that contract is all you need.
// ============================================================
