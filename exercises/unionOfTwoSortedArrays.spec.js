const unionOfTwoSortedArrays = require('./unionOfTwoSortedArrays');

describe('Union of Two Sorted Arrays', () => {
  it('returns correct union if arr1.length > arr2.length', () => {
    const arr1 = [1, 3, 4, 5, 6, 7];
    const arr2 = [2, 3, 5, 8];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = unionOfTwoSortedArrays(arr1, arr2);
    expect(actual).toEqual(expected);
  });
  it('returns correct union if arr1.length < arr2.length', () => {
    const arr1 = [1, 3, 8];
    const arr2 = [2, 4, 5, 6, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = unionOfTwoSortedArrays(arr1, arr2);
    expect(actual).toEqual(expected);
  });
});
