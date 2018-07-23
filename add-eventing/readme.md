# Add Eventing

## Background

Event listeners are an important feature of asynchronous software.

They allow us to separate our JavaScript logic from the HTML markup, run
callbacks based on things like user interactions and page loading, make it
easier to control how events react to bubbling, and can be used even when we do
not control the HTML markup.

## Adding Custom Event Listeners

Make an `addEventing` mix-in that adds `.on()` and `.trigger()` methods to an
object.

Example:

```javascript
const person = { name: "Jane", age: 35 };
const personWithEvents = addEventing(person);

personWithEvents.on("speak", function(...words) {
  console.log("speak:", ...words);
});

personWithEvents.trigger("speak", "hello world"); // logs 'speak: hello world'
```

Requirements:

* `addEventing` should return an object with `on` and `trigger` as additionally added properties
* it should be able to handle multiple callback functions for the same event name
* if `obj.trigger` is called with additional arguments it should pass those to the listeners

### Bonus - Add an unsub

Event listeners on the DOM are expensive, and can affect page performance if not
managed properly, especially on older browsers. Even in our simple example here,
it's still a good idea to clean up after ourselves.

Add the ability for handlers to be unsubscribed from the event they are
listening to.

```javascript
const person = { name: "Jane", age: 35 };
const personWithEvents = addEventing(person);

const listener = function(...words) {
  console.log("speak:", ...words);
};
const unsubscribe = personWithEvents.on("speak", listener);

personWithEvents.trigger("speak", "hello world"); // logs 'speak: hello world'

unsubscribe();

personWithEvents.trigger("speak", "hello again?"); // logs nothing
```

## Getting Started

The file you will be editing is `add-eventing.js`.

The `add-eventing.test.js` file includes a test suite to run your code against.

Run `npm test` and filter by "add-eventing" to run the test suite specific to
this challenge. As you write code to pass tests, make sure you unskip succeeding
tests by changing `test.skip` to just `test`.
