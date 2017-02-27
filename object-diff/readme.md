# Object Diffing

### Background

Ever wonder how tools like `git` parse your source code and determine what
you've added and subtracted from the last commit?

Today we're going to build our own diffing tool to compare JavaScript objects
full of fruit data!

### Diffing an Object

Given JavaScript objects like this

```javascript
newCode = {
  apples: 3,
  oranges: 4
}

oldCode = {
  apples: 3,
  grapes: 5
}
```

Create a function that returns an array containing the object diff like this

```javascript
diff(newCode, oldCode)

// returns:
// [
//   ['-', 'grapes', 5],
//   ['+', 'oranges', 4]
// ]
```

### Getting Started

The file you will be editing is `object-diff.js`.

The `object-diff-test.js` file includes a test suite to run your code against.

Run `node object-diff-test.js` to run the test suite in full. As you write code
to pass tests, make sure you unskip succeeding tests by changing `test.skip` to
just `test`.
