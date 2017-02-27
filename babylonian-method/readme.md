# Babylonian Method for Finding Square Roots

### Background

Attractive fixed points play a starring role in this famous method for
calculating square roots.

The number you want to find the square root of is called the **radicand**.

It's square root is some number that is equal to the **radicand** divided by
that same number.

`squareRootFn(radicand) === someNumber === radicand / someNumber`

For example,

`squareRootFn(16) === 4 === 16 / 4`

[Read more about the Babylonian method and other square root algorithms here](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots)

### Finding the Square Root

Step 1:
- Guess a number less than half of your **radicand**

Step 2:
- If your guess is *smaller* than the actual answer, the **radicand** divided by
  your guess will be *larger* than the answer, and vice versa. The true answer
  will always be somewhere in between the two values: your guess and the
  result of the **radicand** divided by your guess.

Step 3:
- After your initial guess, take both values and find their average. Use this
  value as your new guess and keep going. You will converge towards the true
  square root at a fairly nice speed.

*Fun fact: The number of correct digits in your approximation will roughly
double after every iteration.*

### Getting Started

The file you will be editing is `babylonian.js`.

The `babylonian-test.js` file includes a test suite to run your code against.

Run `node babylonian-test.js` to run the test suite in full. As you write code
to pass tests, make sure you unskip succeeding tests by changing `test.skip` to
just `test`.
