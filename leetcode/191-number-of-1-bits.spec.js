const hammingWeight = require('./191-number-of-1-bits');

describe('Number of 1 bits', () => {

  it('returns correct number of 1 bits of an integer', () => {
    expect(hammingWeight(11)).toBe(3);
  });

});