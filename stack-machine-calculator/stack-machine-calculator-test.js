const process = require('./stack-machine-calculator.js')
const test = require('tape')

test('pushing values', assert => {
  assert.equal(process('13'), 13)
  assert.equal(process('13 10 9 7'), 7)

  assert.end()
})

test.skip('duplicating values', assert => {
  assert.equal(process('9 11 DUP'), 11)

  assert.end()
})

test.skip('popping values', assert => {
  assert.equal(process('1 3 POP'), 1)

  assert.end()
})

test.skip('adding two values', assert => {
  assert.equal(process('5 12 +'), 17)

  assert.end()
})

test.skip('subtracting two values', assert => {
  assert.equal(process('4 10 -'), 6)

  assert.end()
})

test.skip('complex example', assert => {
  assert.equal(process('13 DUP 4 POP 5 DUP + DUP + -'), 7)

  assert.end()
})
