const { TreeNode, sortedArrayToBST } = require('./108-convert-sorted-array-to-binary-search-tree');

describe('Convert sorted array to binary search tree', () => {

  it('returns correct result', () => {
    const input = [1, 2, 3, 4, 5];
    const output = sortedArrayToBST(input);
    console.log(output)
    expect(output.val).toBe(3);
    expect(output.left.val).toBe(2);
    expect(output.left.left.val).toBe(1);
    expect(output.right.val).toBe(5);
    expect(output.right.left.val).toBe(4);
  });
});