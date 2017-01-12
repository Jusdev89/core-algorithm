import {expect} from 'chai'
import subPattern from '../src/pattern_match'

describe.only('subPattern()', () => {
  it('find the matching patterns in a given string', () => {
    expect(subPattern('abcabc')).to.eql('abc')
    expect(subPattern('ababab')).to.eql('ab')
    expect(subPattern('ccccc')).to.eql('c')
    expect(subPattern('yayaya')).to.eql('ya')
    expect(subPattern('blahyaya')).to.eql('blahyaya')
  })
})
