const isAnagram = require('./242-valid-anagram');

describe('Valid Anagram', () => {

  it('returns false when s & t do not have same length', () => {
    const s = 'one';
    const t = 'three';
    expect(isAnagram(s, t)).toBe(false);
  });

  it('returns false when t is not an anagram of s', () => {
    const s = 'card';
    const t = 'rarr';
    expect(isAnagram(s, t)).toBe(false);
  });

  it('returns true when t is an anagram of s', () => {
    const s = 'anagram';
    const t = 'nagaram';
    expect(isAnagram(s, t)).toBe(true);
  });

});