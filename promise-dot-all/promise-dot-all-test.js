const test = require('tape')
const all = require('./promise-dot-all')

test('should return a promise', t => {
  t.ok(typeof all([]).then === 'function', 'expected a promise return value')
  t.end()
})

test.skip('returned promise should resolve to array of resolved promises', async t => {
  const p1 = Promise.resolve('first')
  const p2 = new Promise(resolve => setTimeout(resolve, 100, 'second'))

  const expected = ['first', 'second']
  const actual = await all([p1, p2])

  t.deepEqual(actual, expected)

  t.end()
})

test.skip('returned promise should reject if any elements are rejected', async t => {
  const p1 = Promise.resolve('first')
  const failure = Promise.reject(new Error('BOOM!'))

  try {
    await all([p1, failure])
  } catch (err) {
    t.equal(err.message, 'BOOM!')
  }

  t.end()
})

test.skip('should preserve array argument order on fulfillment', async t => {
  const p1 = new Promise(resolve => setTimeout(resolve, 300, 'first'))
  const p2 = new Promise(resolve => setTimeout(resolve, 800, 'second'))
  const p3 = new Promise(resolve => setTimeout(resolve, 100, 'third'))

  const expected = ['first', 'second', 'third']
  const actual = await all([p1, p2, p3])

  t.deepEqual(actual, expected)

  t.end()
})

test.skip('should be immediately resolved if iterable is empty', async t => {
  const expected = []
  const actual = await all([])

  t.deepEqual(actual, expected)

  t.end()
})

test.skip('should work with non-promise values in array argument', async t => {
  const p1 = new Promise(resolve => setTimeout(resolve, 100, 'foo'))
  const p2 = 1337

  const expected = ['foo', 1337]
  const actual = await all([p1, p2])

  t.deepEqual(actual, expected)

  t.end()
})
