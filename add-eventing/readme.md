# Add Eventing

### Background

Event listeners are an important feature of asynchronous software.

They allow us to separate our JavaScript logic from the HTML markup, run
callbacks based on things like user interactions and page loading, make it
easier to control how events react to bubbling, and can be used even when we do
not control the HTML markup.

### Adding Custom Event Listeners

Make an `addEventing` mix-in that adds `.on()` and `.trigger()` methods to an
object.

Example:

```javascript
const obj = addEventing({ name: 'John', age: 35 })

obj.on('ageChange', function () {
  console.log('age changed')
})

obj.trigger('ageChange') // logs 'age changed'
```

Requirements:
- `addEventing` should return an object with `on` and `trigger` as additionally added properties
- it should be able to handle multiple callback functions for the same event name
- if `obj.trigger` is called with additional arguments it should pass those to the listeners
- note: we don't need to write a way to remove event listeners

### Getting Started

The file you will be editing is `add-eventing.js`.

The `add-eventing-test.js` file includes a test suite to run your code against.

Run `node add-eventing-test.js` to run the test suite in full. As you write code
to pass tests, make sure you unskip succeeding tests by changing `test.skip` to
just `test`.
