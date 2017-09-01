const findMaxAverage = require('./644-maximum-average-subarray-ii');

describe('Maximum Average Subarray II', () => {
  it('returns correct value when k = 1', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 1)).toBeCloseTo(50, 0.00001);
  });

  it('returns correct value when k = 2', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 2)).toBeCloseTo(
      26.5,
      0.00001
    );
  });

  it('returns correct value when k = 3', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 3)).toBeCloseTo(
      15.66666,
      0.00001
    );
  });
});
