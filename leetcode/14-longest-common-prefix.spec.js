const longestCommonPrefix = require('./14-longest-common-prefix');

describe('Longest Common Prefix', () => {

  it('can find the LCP when it is the first string in the input array', () => {
    const strs = ['ab', 'abc', 'abcd'];
    const LCP = longestCommonPrefix(strs);
    expect(LCP).toBe('ab');
  });

  it('can find the LCP when it is the middle of the input array', () => {
    const strs = ['abc', 'ab', 'abcd'];
    const LCP = longestCommonPrefix(strs);
    expect(LCP).toBe('ab');
  });

  it('can find the LCP when it is the last of the input array', () => {
    const strs = ['abcd', 'abc', 'ab'];
    const LCP = longestCommonPrefix(strs);
    expect(LCP).toBe('ab');
  });

  it('returns empty string when no LCP found', () => {
    const strs = ['c', 'ab', 'ac'];
    const LCP = longestCommonPrefix(strs);
    expect(LCP).toBe('');
  });

  it('returns empty string when input array is empty', () => {
    const strs = [];
    const LCP = longestCommonPrefix(strs);
    expect(LCP).toBe('');
  });

});