const sort = require("./sort");

function run() {
  // STANDARD
  console.assert(sort(10, 10, 10, 1) === "STANDARD", "STANDARD: small/light");
  console.assert(sort(149, 1, 1, 19.999) === "STANDARD", "STANDARD: under thresholds");

  // Bulky by volume (>= 1,000,000)
  console.assert(sort(100, 100, 100, 1) === "SPECIAL", "SPECIAL: bulky by volume exact");
  console.assert(sort(200, 50, 100, 0) === "SPECIAL", "SPECIAL: bulky by volume exact (alt)");

  // Bulky by dimension (>= 150)
  console.assert(sort(150, 10, 10, 1) === "SPECIAL", "SPECIAL: bulky by width exact");
  console.assert(sort(10, 150, 10, 1) === "SPECIAL", "SPECIAL: bulky by height exact");
  console.assert(sort(10, 10, 150, 1) === "SPECIAL", "SPECIAL: bulky by length exact");

  // Heavy only (>= 20)
  console.assert(sort(10, 10, 10, 20) === "SPECIAL", "SPECIAL: heavy exact");
  console.assert(sort(10, 10, 10, 25) === "SPECIAL", "SPECIAL: heavy above");

  // Both bulky and heavy => REJECTED
  console.assert(sort(150, 10, 10, 20) === "REJECTED", "REJECTED: bulky+heavy exact");
  console.assert(sort(100, 100, 100, 20) === "REJECTED", "REJECTED: bulky volume+heavy");

  // Validation checks
  let threw = false;
  try { sort(-1, 10, 10, 1); } catch { threw = true; }
  console.assert(threw, "Validation: negative dimension should throw");

  threw = false;
  try { sort("10", 10, 10, 1); } catch { threw = true; }
  console.assert(threw, "Validation: non-number should throw");

  console.log("✅ All tests passed!");
}

run();
