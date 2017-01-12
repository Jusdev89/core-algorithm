import {expect} from 'chai'
import mergeSort from '../src/merge_sort'

describe('mergeSort()', () => {
  it.only('Sort an array of numbers using the merge sort algorithm.', () => {
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9, 0]))
      .to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  // it('Sort an array of numbers using the merge sort algorithm.', () => {
  //   expect(mergeSort([23,45,56,1,1,23,8,9]))
  //     .to.deep.equal([1,1,8,9,23,23,45,56])
  // })
})
