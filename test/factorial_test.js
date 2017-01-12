import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', () => {
  it('Return the factorial of a number.', () => {
    expect(factorial(5)).to.deep.equal(120)
    expect(factorial(3)).to.deep.equal(6)
    expect(factorial(6)).to.deep.equal(720)
    expect(factorial(8)).to.deep.equal(40320)
  })
})
