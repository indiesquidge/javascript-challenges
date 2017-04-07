const test = require('tape')
const parensAreBalanced = require('./balanced-parens')

test('it matches braces when only one pair of one type exists', assert => {
  assert.equal(parensAreBalanced('()'), true)
  assert.equal(parensAreBalanced('[]'), true)
  assert.equal(parensAreBalanced('('), false)
  assert.equal(parensAreBalanced(']'), false)

  assert.end()
})

test.skip('it matches braces when multiple pairs of one type exist', assert => {
  assert.equal(parensAreBalanced('((()))'), true)
  assert.equal(parensAreBalanced('((())'), false)

  assert.end()
})

test.skip('it matches braces when multiple pairs of multiple types exist', assert => {
  assert.equal(parensAreBalanced('{([])}'), true)
  assert.equal(parensAreBalanced('{([]}'), false)

  assert.end()
})

test.skip('it works correctly when no braces exist', assert => {
  assert.equal(parensAreBalanced(''), true)
  assert.equal(parensAreBalanced('hello world'), true)

  assert.end()
})

test.skip('it matches braces when braces and other characters exist', assert => {
  assert.equal(parensAreBalanced('function () { console.log(["cat", "dog"]) }'), true)
  assert.equal(parensAreBalanced('function ( { console.log(["cat", "dog"]) }'), false)

  assert.end()
})
