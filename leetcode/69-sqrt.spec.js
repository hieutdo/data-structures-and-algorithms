const mySqrt = require('./69-sqrt');

describe('Sqrt(x)', () => {

  it('returns 0 when x is 0', () => {
    expect(mySqrt(0)).toBe(0);
  });

  it('returns 3 when x is 9', () => {
    expect(mySqrt(9)).toBe(3);
  });

  it('returns 4 when x is 16', () => {
    expect(mySqrt(16)).toBe(4);
  });

  it('returns 5 when x is 30', () => {
    expect(mySqrt(30)).toBe(5);
  });

  it('returns 6 when x is 40', () => {
    expect(mySqrt(40)).toBe(6);
  });

});