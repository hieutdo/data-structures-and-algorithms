const removeDuplicates = require('./26-remove-duplicates-from-sorted-array');

describe('Remove Duplicates from Sorted Array', () => {
  it('returns nums when nums.length < 2', () => {
    const nums = [];
    removeDuplicates(nums);
    expect(nums).toEqual([]);
  });

  it('returns correct result', () => {
    const nums = [1, 2, 2, 3, 3, 3];
    removeDuplicates(nums);
    expect(nums[0]).toBe(1);
    expect(nums[1]).toBe(2);
    expect(nums[2]).toBe(3);
  });
});
