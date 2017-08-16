const intersect = require('./350-intersection-of-two-arrays-ii');

describe('Intersection of Two Arrays II', () => {

  it('returns empty array when one of two array is empty', () => {
    expect(intersect([], [1, 2, 3])).toEqual([]);
    expect(intersect([1, 2, 3], [])).toEqual([]);
  });

  it('returns correct result', () => {
    const A = [3, 2, 3, 1, 4, 5, 4, 6];
    const B = [3, 4, 3, 3, 5, 5, 7, 6, 6];
    const expected = [3, 3, 4, 5, 6];
    expect(intersect(A, B).sort()).toEqual(expected);
  });
});