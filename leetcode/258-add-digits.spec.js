const addDigits = require('./258-add-digits');

describe('Add digits', () => {

  it('returns correct result when input number has only one digit', () => {
    for (let i = 0; i < 10; i++) {
      expect(addDigits(i)).toBe(i);
    }
  });

  it('returns correct result when input has two digits', () => {
    expect(addDigits(38)).toBe(2);
    expect(addDigits(45)).toBe(9);
    expect(addDigits(78)).toBe(6);
  });

  it('returns correct result when input has three digits', () => {
    expect(addDigits(386)).toBe(8);
    expect(addDigits(450)).toBe(9);
    expect(addDigits(127)).toBe(1);
  });
});