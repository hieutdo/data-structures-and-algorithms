const intersectionOfTwoSortedArrays = require('./intersectionOfTwoSortedArrays');

describe('Intersection of two sorted arrays', () => {
  it('returns correct result when arr1.length > arr2.length', () => {
    const arr1 = [1, 3, 5, 7, 9, 11];
    const arr2 = [3, 6, 7, 8];
    const expected = [3, 7];
    const actual = intersectionOfTwoSortedArrays(arr1, arr2);
    expect(actual).toEqual(expected);
  });
  it('returns correct result when arr1.length < arr2.length', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 5, 7, 8, 9, 11];
    const expected = [5, 7];
    const actual = intersectionOfTwoSortedArrays(arr1, arr2);
    expect(actual).toEqual(expected);
  });
});
