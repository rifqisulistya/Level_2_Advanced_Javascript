// ============================================================
// 🎨  PALETTE BUILDER  |  (axios)
// ============================================================
// The SAME project as the fetch version — rebuild generatePalette
// with axios + async/await. createSwatchCard is IDENTICAL —
// copy it over unchanged. contrast-helper.js is already loaded
// for you, same as the fetch version.
// ============================================================

// TASK 1 — createSwatchCard — copy unchanged from fetch.
// (color.hex.value, the getContrastInfo() call, both rows.)

function createSwatchCard(color) {
  // your code here (same as fetch version)
}

// TASK 2 — generatePalette, rebuilt with async/await
// Declare an ASYNC function called generatePalette.
// No parameters.
//
// Inside a try block:
//   1. Read #hex-input, .trim(); fall back to #color-picker's
//      value if empty
//   2. const cleanHex = hex.replace("#", "")
//   3. status → "Generating palette..." / "status loading"
//   4. Clear #swatch-grid
//   5. const response = await axios.get(
//        `https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=analogic&count=5`)
//   6. status → `✓ Generated ${response.data.colors.length} colors`
//      / "status success"
//      forEach → appendChild(createSwatchCard(color)) into #swatch-grid
//
// Catch:
//   error.response → "❌ Couldn't generate a palette from that color"
//   ELSE           → `❌ Network error: ${error.message}`
//   className "status error"

async function generatePalette() {
  // your code here
}

function handlePaletteSubmit(event) {
  // your code here (same as fetch version)
}

// wire up the form listener here
// (optional: wire the color-picker sync here too — unchanged)

// ============================================================
// START THE PAGE
// ============================================================
generatePalette();
