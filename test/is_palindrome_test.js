import { expect } from 'chai'
import isPalindrome from '../src/is_palindrome'

describe('isPalindrome()', () => {
  it('Determine if a string is a palindrome. Return true or false', () => {
    expect(isPalindrome('bob')).to.deep.equal(true)
    expect(isPalindrome('mom')).to.deep.equal(true)
    expect(isPalindrome('dad')).to.deep.equal(true)
    expect(isPalindrome('tommy')).to.deep.equal(false)
    expect(isPalindrome('haro')).to.deep.equal(false)
    expect(isPalindrome('hiphop')).to.deep.equal(false)
    expect(isPalindrome('jazz')).to.deep.equal(false)
  })
})
