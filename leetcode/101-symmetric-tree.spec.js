const { TreeNode, isSymmetric } = require('./101-symmetric-tree');

describe('Symmetric Tree', () => {

  it('returns true when tree is symmetric', () => {
    const node1 = new TreeNode(1);
    const node2L = new TreeNode(2);
    const node2R = new TreeNode(2);
    const node3L = new TreeNode(3);
    const node3R = new TreeNode(3);
    const node4L = new TreeNode(4);
    const node4R = new TreeNode(4);
    node1.left = node2L;
    node1.right = node2R;
    node2L.left = node3L;
    node2L.right = node4L;
    node2R.left = node4R;
    node2R.right = node3R;
    expect(isSymmetric(node1)).toBe(true);
  });

  it('returns false when tree is not symmetric', () => {
    const node1 = new TreeNode(1);
    const node21 = new TreeNode(2);
    const node31 = new TreeNode(3);
    const node32 = new TreeNode(3);
    const node22 = new TreeNode(2);
    node1.left = node21;
    node1.right = node31;
    node21.left = node32;
    node31.left = node22;
    expect(isSymmetric(node1)).toBe(false);
  });
});