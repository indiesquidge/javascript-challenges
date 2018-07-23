const parensAreBalanced = require("./balanced-parens");

test("it matches braces when only one pair of one type exists", () => {
  expect(parensAreBalanced("()")).toBe(true);
  expect(parensAreBalanced("[]")).toBe(true);
  expect(parensAreBalanced("(")).toBe(false);
  expect(parensAreBalanced("]")).toBe(false);
});

test.skip("it matches braces when multiple pairs of one type exist", () => {
  expect(parensAreBalanced("((()))")).toBe(true);
  expect(parensAreBalanced("((())")).toBe(false);
});

test.skip("it matches braces when multiple pairs of multiple types exist", () => {
  expect(parensAreBalanced("{([])}")).toBe(true);
  expect(parensAreBalanced("{([]}")).toBe(false);
});

test.skip("it works correctly when no braces exist", () => {
  expect(parensAreBalanced("")).toBe(true);
  expect(parensAreBalanced("hello world")).toBe(true);
});

test.skip("it matches braces when braces and other characters exist", () => {
  expect(parensAreBalanced('function () { console.log(["cat", "dog"]) }')).toBe(
    true
  );
  expect(parensAreBalanced('function ( { console.log(["cat", "dog"]) }')).toBe(
    false
  );
});
