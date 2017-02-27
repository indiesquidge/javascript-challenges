const {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
} = require('./target-sum-exists')

const test = require('tape')

test('it returns true if the target sum exists', assert => {
  assert.true(targetSumExistsInTwoNumbers([10, 20], 30), 'true: the sum exists')

  assert.end()
})

test.skip('it returns false if the target sum does not exist', assert => {
  assert.false(targetSumExistsInTwoNumbers([10, 20], 35), 'false: the sum does not exist')

  assert.end()
})

test.skip('is is okay to use a number from the list more than once', assert => {
  assert.true(targetSumExistsInTwoNumbers([10, 20], 40), 'true: the sum exists')

  assert.end()
})

test.skip('it can handle negative numbers in the list', assert => {
  assert.true(targetSumExistsInTwoNumbers([-9, 10], 1))
  assert.false(targetSumExistsInTwoNumbers([10, -8], 1))

  assert.end()
})

test.skip('it can handle more complex arrays', assert => {
  assert.true(targetSumExistsInTwoNumbers([10, 2, 4, -9, 6], 1))
  assert.false(targetSumExistsInTwoNumbers([2, 4, -9, 6], 1))

  assert.end()
})

test.skip('it can determine if the sum exists with three numbers', assert => {
  assert.true(targetSumExistsInThreeNumbers([2, 4, 10, 5, -9], 3))
  assert.false(targetSumExistsInThreeNumbers([2, 4, 10, 5, -9], 170))

  assert.end()
})
