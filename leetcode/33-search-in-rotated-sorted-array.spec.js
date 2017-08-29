const search = require('./33-search-in-rotated-sorted-array');

describe('Search in Rotated Sorted Array', () => {

  it('returns 1 when nums = [4, 5, 6, 7, 0, 1, 2] and target = 5', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1);
  });

  it('returns 1 when nums = [3, 4, 5, 6, 7, 0, 1, 2] and target = 5', () => {
    expect(search([3, 4, 5, 6, 7, 0, 1, 2], 7)).toBe(4);
  });

  it('returns 7 when nums = [3, 4, 5, 6, 7, 0, 1, 2] and target = 2', () => {
    expect(search([3, 4, 5, 6, 7, 0, 1, 2], 2)).toBe(7);
  });

  it('returns -1 when nums = [3, 4, 5, 6, 7, 0, 1, 2] and target = 8', () => {
    expect(search([3, 4, 5, 6, 7, 0, 1, 2], 8)).toBe(-1);
  });

  it('returns 0 when nums = [1, 3, 5] and target = 1', () => {
    expect(search([1, 3, 5], 1)).toBe(0);
  });

  it('returns 1 when nums = [3, 1] and target = 1', () => {
    expect(search([3, 1], 1)).toBe(1);
  });

  it('returns 0 when nums = [3, 1] and target = 3', () => {
    expect(search([3, 1], 3)).toBe(0);
  });

  it('returns 0 when nums = [1, 3] and target = 1', () => {
    expect(search([1, 3], 1)).toBe(0);
  });

  it('returns -1 when nums = [3, 1] and target = 2', () => {
    expect(search([3, 1], 2)).toBe(-1);
  });

  it('returns 1 when nums = [1, 3] and target = 3', () => {
    expect(search([1, 3], 3)).toBe(1);
  });

  it('returns 2 when nums = [3, 5, 1] and target = 1', () => {
    expect(search([3, 5, 1], 1)).toBe(2);
  });


});