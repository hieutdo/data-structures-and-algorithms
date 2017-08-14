const countBits = require('./338-counting-bits');

describe('Counting Bits', () => {

  it('returns [0] when input is 0', () => {
    const input = 0;
    const expected = [0];
    expect(countBits(input)).toEqual(expected);
  });

  it('returns [0,1] when input is 1', () => {
    const input = 1;
    const expected = [0, 1];
    expect(countBits(input)).toEqual(expected);
  });

  it('returns correct result when input > 1', () => {
    const input = 7;
    const expected = [0, 1, 1, 2, 1, 2, 2, 3];
    expect(countBits(input)).toEqual(expected);
  });
});