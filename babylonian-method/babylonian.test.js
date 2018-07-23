const squareRoot = require("./babylonian");

test("it calculates an integer square root", () => {
  expect(squareRoot(16)).toBe(4);
});

test.skip("it calculates a decimal square root", () => {
  expect(squareRoot(423432.342423)).toBe(650.7167912563806);
});

test.skip("it produces synonymous results with JS native Math.sqrt fn", () => {
  const radicand = 423432.342423;

  expect(squareRoot(radicand)).toBe(Math.sqrt(radicand));
});

test.skip("it calculates infinite fraction square roots", () => {
  expect(squareRoot(10)).toBe(3.1622776601683795);
});

test.skip("it returns NaN if NaN, a negative value, or non-number is passed as the radicand", () => {
  expect(squareRoot(NaN)).toBe(NaN);
  expect(squareRoot(-10)).toBe(NaN);
  expect(squareRoot("some string")).toBe(NaN);
});
