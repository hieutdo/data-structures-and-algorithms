const isPerfectSquare = require('./367-valid-perfect-square');

describe('Perfect Square', () => {

  it('returns true when input is 9', () => {
    expect(isPerfectSquare(9)).toBe(true);
  });

  it('returns true when input is 16', () => {
    expect(isPerfectSquare(16)).toBe(true);
  });

  it('returns true when input is 25', () => {
    expect(isPerfectSquare(25)).toBe(true);
  });

  it('returns false when input is 5', () => {
    expect(isPerfectSquare(5)).toBe(false);
  });

  it('returns false when input is 17', () => {
    expect(isPerfectSquare(17)).toBe(false);
  });

  it('returns false when input is 24', () => {
    expect(isPerfectSquare(24)).toBe(false);
  });

});