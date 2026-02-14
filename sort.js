/**
 * Dispatch packages to the correct stack.
 *
 * Rules:
 * - Bulky if volume >= 1,000,000 cm³ OR any dimension >= 150 cm
 * - Heavy if mass >= 20 kg
 *
 * Stacks:
 * - REJECTED: bulky AND heavy
 * - SPECIAL: bulky OR heavy
 * - STANDARD: neither
 */
function sort(width, height, length, mass) {
  const inputs = { width, height, length, mass };

  for (const [key, value] of Object.entries(inputs)) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError(`${key} must be a valid number`);
    }
    if (value < 0) {
      throw new RangeError(`${key} must be non-negative`);
    }
  }

  const volume = width * height * length;
  const bulky =
    volume >= 1_000_000 ||
    width >= 150 ||
    height >= 150 ||
    length >= 150;

  const heavy = mass >= 20;

  if (bulky && heavy) return "REJECTED";
  if (bulky || heavy) return "SPECIAL";
  return "STANDARD";
}

module.exports = sort;
