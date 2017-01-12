import {expect} from 'chai'
import setSymmetricDifference from '../src/set_symmetric_difference'

describe('setSymmetricDifference()', () => {
  it('Return the symmetric difference of two sets.', () => {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]

    expect(setSymmetricDifference(a, b)).to.deep.equal([1, 3, 6, 8])
  })

  it('Return the symmetric difference of two sets.', () => {
    const a = [1, 2, 3, 4, 9, 7]
    const b = [7, 2, 4, 6, 8, 10]

    expect(setSymmetricDifference(a, b)).to.deep.equal([1, 3, 9, 6, 8, 10])
  })

})
