import {expect} from 'chai'
import quickSort from '../src/quick_sort'

describe('quickSort()', () => {
  it('should return a sorted array', () => {
    const unOrdered = [5,3,9,6,1,0,4,10,2,7,8]

    expect(quickSort(unOrdered)).to.deep.equal([0,1,2,3,4,5,6,7,8,9,10])
  })
})
