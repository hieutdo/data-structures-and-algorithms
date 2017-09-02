const wiggleSort = require('./280-wiggle-sort');

describe('Wiggle Sort', () => {
  it('returns correct result', () => {
    const nums = [3, 5, 2, 1, 6, 4];
    wiggleSort(nums);
    expect(nums).toEqual([3, 5, 1, 6, 2, 4]);
  });
});
