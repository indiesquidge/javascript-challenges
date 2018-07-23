const addEventing = require("./add-eventing");

test("it should call the callback on the trigger event", () => {
  const obj = addEventing({ foo: "bar" });
  const eventHandler = jest.fn();

  obj.on("event", eventHandler);
  obj.trigger("event");

  expect(eventHandler).toHaveBeenCalledTimes(1);
});

test.skip("it should be able to handle multiple callback functions for the same event name", () => {
  const obj = addEventing({ foo: "bar" });
  const eventHandler = jest.fn();
  const otherHandler = jest.fn();

  obj.on("event", eventHandler);
  obj.on("event", otherHandler);

  obj.trigger("event");

  expect(eventHandler).toHaveBeenCalledTimes(1);
  expect(otherHandler).toHaveBeenCalledTimes(1);
});

test.skip("if it is called arguments it should pass them to the listeners", () => {
  const obj = addEventing({ foo: "bar" });
  const eventHandler = jest.fn();
  const firstArg = "hello";
  const secondArg = 42;

  obj.on("event", eventHandler);
  obj.trigger("event", firstArg, secondArg);

  expect(eventHandler).toHaveBeenCalledTimes(1);
  expect(eventHandler).toHaveBeenCalledWith(firstArg, secondArg);
});

test.skip("it should not trigger events that were not set to listen", () => {
  const obj = addEventing({ foo: "bar" });
  const eventHandler = jest.fn();
  const otherHandler = jest.fn();

  obj.on("event", eventHandler);
  obj.on("somethingElse", otherHandler);
  obj.trigger("somethingElse");

  expect(eventHandler).not.toHaveBeenCalled();
  expect(otherHandler).toHaveBeenCalledTimes(1);
});

test.skip("it should not error if the user attempts to trigger a non-existent event", () => {
  const obj = addEventing({ foo: "bar" });

  expect(() => obj.trigger("event")).not.toThrow();
});

test.skip("handlers should have a way to unsubscribe from event listening", () => {
  const obj = addEventing({ foo: "bar" });
  const eventHandler = jest.fn();
  const unsubscribe = obj.on("event", eventHandler);

  obj.trigger("event");

  expect(eventHandler).toHaveBeenCalledTimes(1);

  unsubscribe();
  obj.trigger("event");

  expect(eventHandler).toHaveBeenCalledTimes(1);
});
