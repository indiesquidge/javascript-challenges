const test = require('tape')
const diff = require('./object-diff')

test('it calculates the diff of shallow object properties', assert => {
  const newCode = {
    apples: 3,
    oranges: 4
  }
  const oldCode = {
    apples: 3,
    grapes: 5
  }

  const objectDiff = [
    ['-', 'grapes', 5],
    ['+', 'oranges', 4]
  ]

  assert.deepEqual(diff(newCode, oldCode), objectDiff)
  assert.equal(diff(newCode, oldCode).length, 2)

  assert.end()
})

test.skip('it calculates the diff of nested object properties', assert => {
  const newCode = {
    apples: 3,
    oranges: {
      navel: 5
    }
  }

  const oldCode = {
    apples: 3,
    oranges: {
      valencia: 4
    }
  }

  const objectDiff = [
    ['-', 'oranges.valencia', 4],
    ['+', 'oranges.navel', 5]
  ]

  assert.deepEqual(diff(newCode, oldCode), objectDiff)
  assert.equal(diff(newCode, oldCode).length, 2)

  assert.end()
})

test.skip('it calculates the diff of doubly nested object properties', assert => {
  const newCode = {
    apples: 3,
    oranges: {
      bergamot: 3,
      navel: {
        peaches: 1,
        apples: 3
      }
    }
  }

  const oldCode = {
    apples: 3,
    oranges: {
      bergamot: 3,
      valencia: {
        pears: 2,
        oranges: 4
      }
    }
  }

  const objectDiff = [
    [ '-', 'oranges.valencia.pears', 2 ],
    [ '-', 'oranges.valencia.oranges', 4 ],
    [ '+', 'oranges.navel.peaches', 1 ],
    [ '+', 'oranges.navel.apples', 3 ]
  ]

  assert.deepEqual(diff(newCode, oldCode), objectDiff)
  assert.equal(diff(newCode, oldCode).length, 4)

  assert.end()
})

test.skip('it calculates the diff of diference sized objects', assert => {
  const newCode = {
    apples: 3,
    oranges: 5
  }

  const oldCode = {
    apples: 3,
    oranges: {
      bergamot: 3,
      valencia: {
        pears: 2,
        oranges: 4
      }
    }
  }

  const objectDiff = [
    ['-', 'oranges.bergamot', 3],
    ['-', 'oranges.valencia.pears', 2],
    ['-', 'oranges.valencia.oranges', 4],
    ['+', 'oranges', 5]
  ]

  assert.deepEqual(diff(newCode, oldCode), objectDiff)
  assert.equal(diff(newCode, oldCode).length, 4)

  assert.end()
})
