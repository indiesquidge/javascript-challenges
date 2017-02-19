/******************/
/**** App Code ****/
/******************/

const diff = (newCode, oldCode) => {
  return []
}

/******************/
/**** Libraries ***/
/******************/

const chai = require('chai')
const sinonChai = require('sinon-chai')
const Mocha = require('mocha')
const mocha = new Mocha({ui: 'bdd'})

// Hack to get mocha running in Coderpad
mocha.suite.emit('pre-require', this, 'solution', mocha)

chai.use(sinonChai)
var expect = chai.expect

/******************/
/****** Tests *****/
/******************/

describe('HashDiff', function () {
  let newCode, oldCode

  context('shallow JSON', function () {
    it('calculates the correct diff', function () {
      newCode = {
        apples: 3,
        oranges: 4
      }

      oldCode = {
        apples: 3,
        grapes: 5
      }

      expect(diff(newCode, oldCode)).to.deep.include.members([
        ['-', 'grapes', 5],
        ['+', 'oranges', 4]
      ])
      expect(diff(newCode, oldCode)).to.have.lengthOf(2)
    })
  })

  context('nested JSON', function () {
    it('calculates the correct diff', function () {
      newCode = {
        apples: 3,
        oranges: {
          navel: 5
        }
      }

      oldCode = {
        apples: 3,
        oranges: {
          valencia: 4
        }
      }

      expect(diff(newCode, oldCode)).to.deep.include.members([
        ['-', 'oranges.valencia', 4],
        ['+', 'oranges.navel', 5]
      ])
      expect(diff(newCode, oldCode)).to.have.lengthOf(2)
    })
  })

  context('doubly nested JSON', function () {
    it('calculates the correct diff', function () {
      newCode = {
        apples: 3,
        oranges: {
          bergamot: 3,
          navel: {
            peaches: 1,
            apples: 3
          }
        }
      }

      oldCode = {
        apples: 3,
        oranges: {
          bergamot: 3,
          valencia: {
            pears: 2,
            oranges: 4
          }
        }
      }

      expect(diff(newCode, oldCode)).to.deep.include.members([
        ['+', 'oranges.navel.peaches', 1],
        ['+', 'oranges.navel.apples', 3],
        ['-', 'oranges.valencia.pears', 2],
        ['-', 'oranges.valencia.oranges', 4]
      ])
      expect(diff(newCode, oldCode)).to.have.lengthOf(4)
    })
  })

  context('comparing nested object to value', function () {
    it('calculates the correct diff', function () {
      newCode = {
        apples: 3,
        oranges: 5
      }

      oldCode = {
        apples: 3,
        oranges: {
          bergamot: 3,
          valencia: {
            pears: 2,
            oranges: 4
          }
        }
      }

      expect(diff(newCode, oldCode)).to.deep.include.members([
        ['-', 'oranges.valencia.pears', 2],
        ['-', 'oranges.valencia.oranges', 4],
        ['-', 'oranges.bergamot', 3],
        ['+', 'oranges', 5]
      ])
      expect(diff(newCode, oldCode)).to.have.lengthOf(4)
    })
  })
})

mocha.run(function () {})
