# Object Diffing

### Background

Ever wonder how tools like `git` parse your source code and determine what
you've added and subtracted from the last commit?

Today we're going to build our own diffing tool to compare JavaScript objects
full of fruit data!

### Diffing an Object

Given JavaScript objects like this

```javascript
actual = {
  apples: 3,
  oranges: 4
}

expected = {
  apples: 3,
  grapes: 5
}
```

Create a function that returns an array containing the object diff like this

```javascript
diff(actual, expected)

// returns:
// [
//   ['-', 'grapes', 5],
//   ['+', 'oranges', 4]
// ]
```

### Getting Started

The file you will be editing is `challenge.js`.

The `challenge.js` file also includes a test suite to run your code against.

First run `npm i` to install the dependencies, then run `npm test` to run the
test suite in full.
