// ============================================================
// 🔬  WCAG CONTRAST HELPER  —  PROVIDED, DO NOT EDIT
// ============================================================
// This file gives you ONE function: getContrastInfo(hex).
// The relative-luminance math behind WCAG contrast ratios is
// real accessibility law — precise, not something to derive
// from scratch in a beginner course. Using a helper you didn't
// write, correctly, is a real professional skill: you read the
// function's NAME, PARAMETER, and RETURN VALUE, and you trust
// the contract.
//
// getContrastInfo(hex) takes a hex string like "#4f46e5" and
// returns:
//   {
//     onWhite: { ratio: 3.9, passesAA: false, passesAAA: false },
//     onBlack: { ratio: 5.4, passesAA: true,  passesAAA: false }
//   }
// "passesAA" means the color is readable as NORMAL TEXT on that
// background per WCAG 2.1 (ratio >= 4.5).
// ============================================================

function getContrastInfo(hex) {
  function toRgb(h) {
    const clean = h.replace("#", "");
    return {
      r: parseInt(clean.substring(0, 2), 16),
      g: parseInt(clean.substring(2, 4), 16),
      b: parseInt(clean.substring(4, 6), 16),
    };
  }

  function relativeLuminance({ r, g, b }) {
    const [rs, gs, bs] = [r, g, b].map((c) => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  function contrastRatio(lum1, lum2) {
    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  const colorLum = relativeLuminance(toRgb(hex));
  const whiteLum = 1;
  const blackLum = 0;

  const ratioOnWhite = Math.round(contrastRatio(colorLum, whiteLum) * 100) / 100;
  const ratioOnBlack = Math.round(contrastRatio(colorLum, blackLum) * 100) / 100;

  return {
    onWhite: {
      ratio: ratioOnWhite,
      passesAA: ratioOnWhite >= 4.5,
      passesAAA: ratioOnWhite >= 7,
    },
    onBlack: {
      ratio: ratioOnBlack,
      passesAA: ratioOnBlack >= 4.5,
      passesAAA: ratioOnBlack >= 7,
    },
  };
}
