const test = require('tape')
const mostRecurrent = require('./most-recurrent')

test('it finds the highest recurring number of a sorted list', assert => {
  const list = [1, 2, 3, 4, 3]
  const actual = mostRecurrent(list)
  const expected = 3

  assert.equal(actual, expected, 'should return 3')

  assert.end()
})

test('it breaks a tie by returning the first found number', assert => {
  const list = [1, 2, 3, 4, 3, 1]
  const actual = mostRecurrent(list)
  const expected = 1

  assert.equal(actual, expected, 'should return 1 since 1 appears before 3')

  assert.end()
})
