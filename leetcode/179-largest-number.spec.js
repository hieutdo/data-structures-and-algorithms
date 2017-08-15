const largestNumber = require('./179-largest-number');

describe('Largest Number', () => {

  it('returns empty string when input array is empty', () => {
    expect(largestNumber([])).toBe('');
  });

  it('returns 0 when input array is [0,0]', () => {
    expect(largestNumber([0, 0])).toBe('0');
  });

  it('returns correct result when input array has one element', () => {
    expect(largestNumber([0])).toBe('0');
    expect(largestNumber([3])).toBe('3');
  });

  it('returns correct result when input array has multiple elements', () => {
    expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330');
    expect(largestNumber([32, 48, 10, 23, 15, 18, 5])).toBe('5483223181510');
  });

});