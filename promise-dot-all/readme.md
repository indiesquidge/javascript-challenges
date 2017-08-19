# Recreate `Promise.all`

Recreate the native [`Promise.all`][mdn] JavaScript function.


### Background

Promises are a cornerstone of writing asynchronous JavaScript. Similar to
callbacks, they allow us to easily defer slow code for execution at a later time
so as to not block other code on the stack. Unlike callbacks, promises are able
to be chained together, making them more readable and less nested than
successive callbacks.

`Promise.all` is used when you want to wait for a collection of promises to all
resolve before doing anything with their return values. In its simplest form,
`Promise.all` takes in an array of promises and returns a single promise. The
returned promise resolves when all of the promises in the array argument have
resolved.


### Using `Promise.all`

```javascript
const p1 = Promise.resolve('first')
const p2 = Promise.resolve('second')

Promise.all([p1, p2]).then(values =>
  console.log(values) // ['first', 'second']
)
```


### Getting Started

The file you will be editing is `promise-dot-all.js`.

The `promise-dot-all-test.js` file includes a test suite to run your code against.

Run `node promise-dot-all-test.js` to run the test suite in full. As you write
code to pass tests, make sure you unskip succeeding tests by changing
`test.skip` to just `test`.

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
