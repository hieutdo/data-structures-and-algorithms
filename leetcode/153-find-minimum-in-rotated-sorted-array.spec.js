const findMin = require('./153-find-minimum-in-rotated-sorted-array');

describe('Find Minimum in Rotated Sorted Array', () => {

  it('returns 0 when nums = [4, 5, 6, 7, 0, 1, 2]', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });

  it('returns 0 when nums = [4, 5, 6, 1, 2]', () => {
    expect(findMin([4, 5, 6, 1, 2])).toBe(1);
  });

});