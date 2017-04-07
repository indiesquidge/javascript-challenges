# Balanced Parentheses

### Background

When writing code, it's often nice to have an editor integration that will
auto-generate a closing bracket for each open bracket you type. For instance, if
you type `{`, your editor may actually print `{}` to the screen, with your
cursor set between the two braces.

This is useful, but sometimes we accidentally delete a parenthesis or bracket or
brace, and we want our editor to lint our code for such errors when they occur.

### Balancing Parentheses

Today we're going to create a function that, given any string containing any
arbitrary set of parentheses, brackets, or braces, can tell us if our
parentheses are balanced (that is, there is a proper closing parenthesis for
every opened parenthesis).

```javascript
parensAreBalanced('([])') // true
parensAreBalanced('([)') // false
```

Careful though: not only do we need to make sure we have a balanced number of
parentheses, but that they are also in the correct order. If we have `({`, we
want to make sure we see a closing `}` before a closing `)`.

### Getting Started

The file you will be editing is `balanced-parens.js`.

The `balanced-parens-test.js` file includes a test suite to run your code
against.

Run `node balanced-parens-test.js` to run the test suite in full. As you write
code to pass tests, make sure you unskip succeeding tests by changing `test.skip`
to just `test`.
