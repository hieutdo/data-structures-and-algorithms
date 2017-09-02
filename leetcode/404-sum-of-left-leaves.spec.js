const sumOfLeftLeaves = require('./404-sum-of-left-leaves');
const { buildTreeFromArray } = require('./utils');

describe('Sum of Left Leaves', () => {
  it('returns 0 when tree is null', () => {
    const root = null;
    expect(sumOfLeftLeaves(root)).toBe(0);
  });

  it('returns 0 when tree has only root node', () => {
    const root = buildTreeFromArray([1]);
    expect(sumOfLeftLeaves(root)).toBe(0);
  });

  it('returns 0 when tree has no left leaves', () => {
    const root = buildTreeFromArray([1, 1, 1, null, 1, null, 1]);
    expect(sumOfLeftLeaves(root)).toBe(0);
  });

  it('returns root.left.val when tree has only one left node', () => {
    const root = buildTreeFromArray([3, 2]);
    expect(sumOfLeftLeaves(root)).toBe(2);
  });

  it('returns correct result', () => {
    const root = buildTreeFromArray([
      3,
      4,
      5,
      -7,
      -6,
      null,
      null,
      -7,
      null,
      -5,
      null,
      null,
      null,
      -4
    ]);
    expect(sumOfLeftLeaves(root)).toBe(-11);
  });
});
