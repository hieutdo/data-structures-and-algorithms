const { buildTreeFromArray } = require('./utils');
const TreeNode = require('./TreeNode');
const hasPathSum = require('./112-path-sum');

describe('Path Sum', () => {

  it('returns true when found an expected path', () => {
    const root = buildTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
    expect(hasPathSum(root, 22)).toBe(true);
  });

  it('returns false when sum is reached but the deepest node is not a leaf node', () => {
    const root = buildTreeFromArray([1,2,3,4,5]);
    expect(hasPathSum(root, 3)).toBe(false);
  });

  it('returns false when sum is not reached', () => {
    const root = buildTreeFromArray([1,2,3,4,5]);
    expect(hasPathSum(root, 100)).toBe(false);
  });

});