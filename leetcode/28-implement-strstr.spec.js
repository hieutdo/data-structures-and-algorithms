const strStr = require('./28-implement-strstr');

describe('Implement strStr()', () => {

  it('returns 0 when needle is empty', () => {
    expect(strStr('a', '')).toBe(0);
  });

  it('returns -1 when haystack is empty', () => {
    expect(strStr('', 'a')).toBe(-1);
  });

  it('returns 0 when both needle and haystack are empty', () => {
    expect(strStr('', '')).toBe(0);
  });

  it(`returns -1 when needle's length is greater than haystack's length`, () => {
    expect(strStr('a', 'ab')).toBe(-1);
  });

  it('returns index of the first match of needle in haystack', () => {
    expect(strStr('abcabcabc', 'bca')).toBe(1);
  });

  it('returns -1 when needle is not part of haystack', () => {
    expect(strStr('abcd', 'e')).toBe(-1);
  });

});