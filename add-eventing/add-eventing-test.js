const test = require('tape')
const sinon = require('sinon')
const addEventing = require('./add-eventing')

test('it should call the callback on the trigger event', assert => {
  const obj = addEventing({ name: 'Kelsey', age: 30 })
  const ageChangeEvent = sinon.spy()

  obj.on('ageChange', ageChangeEvent)
  obj.trigger('ageChange')

  assert.ok(ageChangeEvent.called, 'ageChangeEvent should have been called')

  assert.end()
})

test.skip('it should be able to handle multiple callback functions for the same event name', assert => {
  const obj = addEventing({ name: 'Kelsey', age: 30 })
  const ageChangeEvent = sinon.spy()
  const otherChangeEvent = sinon.spy()

  obj.on('ageChange', ageChangeEvent)
  obj.on('ageChange', otherChangeEvent)

  obj.trigger('ageChange')

  assert.ok(ageChangeEvent.called, 'ageChangeEvent should have been called')
  assert.ok(otherChangeEvent.called, 'otherChangeEvent should have been called')

  assert.end()
})

test.skip('if it is called with an additional argument it should pass it to the listeners', assert => {
  const obj = addEventing({ name: 'Kelsey', age: 30 })
  const ageChangeEvent = sinon.spy()
  const newAge = 31
  const message = `ageChangeEvent should have been called with ${newAge}`

  obj.on('ageChange', ageChangeEvent)
  obj.trigger('ageChange', newAge)

  assert.ok(ageChangeEvent.calledWith(newAge), message)

  assert.end()
})

test.skip('if it is called with an multiple arguments it should pass them to the listeners', assert => {
  const obj = addEventing({ name: 'Kelsey', age: 30 })
  const ageChangeEvent = sinon.spy()
  const newName = 'Alice'
  const newAge = 31
  const message = `ageChangeEvent should have been called with ${newName} and ${newAge}`

  obj.on('ageChange', ageChangeEvent)
  obj.trigger('ageChange', newName, newAge)

  assert.ok(ageChangeEvent.calledWith(newName, newAge), message)

  assert.end()
})

test.skip('it should not trigger events that were not set to listen', assert => {
  const obj = addEventing({ name: 'Kelsey', age: 30 })
  const notCalledEvent = sinon.spy()

  obj.on('somethingElse', notCalledEvent)
  obj.trigger('ageChange')

  assert.notOk(notCalledEvent.called, 'notCalledEvent should not have been called')

  assert.end()
})
