const smallestFactorization = require('./625-minimum-factorization');

describe('Smallest Factorization', () => {

  it('returns a correct result', () => {
    expect(smallestFactorization(18)).toBe(29);
    expect(smallestFactorization(48)).toBe(68);
    expect(smallestFactorization(3024)).toBe(6789);
  });

  it('returns the input when it is < 2', () => {
    expect(smallestFactorization(0)).toBe(0);
    expect(smallestFactorization(1)).toBe(1);
  });

  it('returns 0 when result is not fit in 32-bit signed integer', () => {
    expect(smallestFactorization(18000000)).toBe(0);
  });

});