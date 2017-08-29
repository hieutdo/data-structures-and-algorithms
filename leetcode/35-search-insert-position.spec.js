const searchInsert = require('./35-search-insert-position');

describe('Search Insert Position', () => {

  it('returns 2 when nums = [1,3,5,6] and target = 5', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  it('returns 1 when nums = [1,3,5,6] and target = 2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  it('returns 4 when nums = [1,3,5,6] and target = 7', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  it('returns 0 when nums = [1,3,5,6] and target = 0', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

});