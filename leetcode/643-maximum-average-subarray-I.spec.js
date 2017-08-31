const findMaxAverage = require('./643-maximum-average-subarray-I');

describe('Find Max Average', () => {
  it('returns correct value when k = 1', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 1)).toBe(50);
  });

  it('returns correct value when k = 2', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 2)).toBe(53 / 2);
  });

  it('returns correct value when k = n - 1', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 5)).toBe(54 / 5);
  });

  it('returns correct value when k = n', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 6)).toBe(55 / 6);
  });
});
