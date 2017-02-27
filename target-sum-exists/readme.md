# Target Sum Exists

### Background

### Determining if a Target Sum Exists

We want to build an algorithm that takes a list of numbers and a target value,
and can well us whether or not it's possible that two numbers in the list sum up
to the requested target.

```javascript
targetSumExistsInTwoNumbers([10, 20], 30) // true
targetSumExistsInTwoNumbers([10, 20], 35) // false
```

Keep in mind that a number from the list may be used twice

```javascript
targetSumExistsInTwoNumbers([10, 20], 40) // true
```

### Getting Started

The file you will be editing is `target-sum-exists.js`.

The `target-sum-exists-test.js` file includes a test suite to run your code
against.

Run `node target-sum-exists-test.js` to run the test suite in full. As you write code
to pass tests, make sure you unskip succeeding tests by changing `test.skip` to
just `test`.

### Second Challenge

You'll notice that the `target-sum-exists.js` file exports two different
modules: `targetSumExistsInTwoNumbers` and `targetSumExistsInThreeNumbers`. So
far, we've only bee testing the former function.

Once you have `targetSumExistsInTwoNumbers` passing the first few tests, see if
you can make use of it to complete `targetSumExistsInThreeNumbers`.

Check your answer by removing the `skip` on the final test block.
