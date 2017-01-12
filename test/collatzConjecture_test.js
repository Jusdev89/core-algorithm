import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', () => {
  it('The Collatz sequence for any positive integer n is defined as follows:', () => {
    expect(collatzConjecture(1)).to.deep.equal([1])
    expect(collatzConjecture(7)).to.deep.equal(
      [
        7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1
      ]
    )
  })
})
