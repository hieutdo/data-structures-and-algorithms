const { sortedArrayToBST } = require('./108-convert-sorted-array-to-binary-search-tree');

describe('Convert sorted array to binary search tree', () => {

  it('returns correct result when list has one element', () => {
    const array = [1];
    const tree = sortedArrayToBST(array);
    expect(tree.val).toBe(1);
    expect(tree.left).toBeNull();
    expect(tree.right).toBeNull();
  });

  it('returns correct result when list has two elements', () => {
    const array = [1, 2];
    const tree = sortedArrayToBST(array);
    expect(tree.val).toBe(2);
    expect(tree.left.val).toBe(1);
    expect(tree.right).toBeNull();
  });

  it('returns correct result when list has more than 2 elements', () => {
    const array = [1, 2, 3, 4, 5];
    const tree = sortedArrayToBST(array);
    expect(tree.val).toBe(3);
    expect(tree.left.val).toBe(2);
    expect(tree.left.left.val).toBe(1);
    expect(tree.right.val).toBe(5);
    expect(tree.right.left.val).toBe(4);
  });

});