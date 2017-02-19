const squareRoot = require('./babylonian')
const test = require('tape')

test('it calculates an integer square root', assert => {
  const radicand = 16
  const actual = squareRoot(radicand)
  const expected = 4
  assert.equal(actual, expected, 'should get 4 as the square root of 16')

  assert.end()
})

test.skip('it calculates a decimal square root', assert => {
  const radicand = 423432.342423
  const actual = squareRoot(radicand)
  const expected = 650.7167912563806

  assert.equal(actual, expected, 'should ')

  assert.end()
})

test.skip('it produces synonymous results with JS native Math.sqrt fn', assert => {
  const radicand = 423432.342423
  const actual = squareRoot(radicand)
  const expected = Math.sqrt(radicand)

  assert.equal(actual, expected, 'should be the same result as Math.sqrt')

  assert.end()
})

test.skip('it returns NaN if a negative value is passed as the radicand', assert => {
  const negativeRadicand = -10
  const actual = squareRoot(negativeRadicand)
  assert.ok(isNaN(actual), 'should return NaN for negative radicand')

  assert.end()
})

test.skip('it throws an error if a non-number is passed as the radicand', assert => {
  const stringRadicand = 'some string'
  const actual = () => squareRoot(stringRadicand)
  assert.ok(isNaN(actual), 'should return NaN for non-number radicand')

  assert.end()
})
