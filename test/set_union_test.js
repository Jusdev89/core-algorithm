import { expect } from 'chai'
import setUnion from '../src/set_union'

describe('setUnion()', () => {
  it('Return the union of two sets:', () => {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]

    expect(setUnion(a, b)).to.deep.equal([1, 2, 3, 4, 6, 8])
  })
  it('Return the union of two sets:', () => {
    const a = [1, 2, 3, 7]
    const b = [2, 4, 6, 8, 7]

    expect(setUnion(a, b)).to.deep.equal([1, 2, 3, 7])
  })
  it('Return the union of two sets:', () => {
    const a = [1, 4, 3, 5]
    const b = [2, 4, 6, 8]

    expect(setUnion(a, b)).to.deep.equal([1, 4, 6, 8])
  })

})
