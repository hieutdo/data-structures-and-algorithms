const shortestDistance = require('./243-shortest-word-distance');

describe('Shortest Word Distance', () => {

  it('returns correct result when only two words given', () => {
    const words = ['a', 'b'];
    const word1 = 'a';
    const word2 = 'b';
    expect(shortestDistance(words, word1, word2)).toBe(1);
  });

  it('returns correct result when word1 and word2 in the middle', () => {
    const words = ['a', 'b', 'c', 'd', 'e', 'f'];
    const word1 = 'b';
    const word2 = 'e';
    expect(shortestDistance(words, word1, word2)).toBe(3);
  });

  it('returns correct result when the list contains duplicate words', () => {
    const words = ['a', 'b', 'c', 'd', 'a', 'c', 'd'];
    const word1 = 'a';
    const word2 = 'd';
    expect(shortestDistance(words, word1, word2)).toBe(1);
  });

});