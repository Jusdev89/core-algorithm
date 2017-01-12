import {expect} from 'chai'
import setIntersection from '../src/set_intersect'

describe('setIntersection()', () => {
  it('Return the intersection of two sets.', () => {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setIntersection(a, b)).to.deep.equal([2, 4])
  })
  it('Return the intersection of two sets.', () => {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8, 3]
    expect(setIntersection(a, b)).to.deep.equal([2, 3, 4])
  })

})
