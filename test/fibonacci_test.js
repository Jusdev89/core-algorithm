import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('factorial()', () => {
  it('Return an array of Fibonacci numbers to the nth position.', () => {
    expect(fibonacci(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    expect(fibonacci(3)).to.deep.equal([0, 1, 1])
    expect(fibonacci(6)).to.deep.equal([0, 1, 1, 2, 3, 5])
    expect(fibonacci(8)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13])
    expect(fibonacci(0)).to.deep.equal([])
    expect(fibonacci(1)).to.deep.equal([0])
    expect(fibonacci(2)).to.deep.equal([0, 1])
  })
})
