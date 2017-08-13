const maxSubArray = require('./53-maximum-subarray');

describe('Maximum Subarray', () => {

  it('returns correct result', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

});