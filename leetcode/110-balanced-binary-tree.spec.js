const { TreeNode, isBalanced } = require('./110-balanced-binary-tree');

describe('Balanced Binary Tree', () => {

  it('returns true when the binary tree is balanced', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    expect(isBalanced(node1)).toBe(true);
  });

  it('returns false when the binary tree is NOT balanced', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node6 = new TreeNode(6);
    const node7 = new TreeNode(7);
    node1.left = node2;
    node2.left = node3;
    node3.left = node4;
    node1.right = node5;
    node5.right = node6;
    node6.right = node7;
    expect(isBalanced(node1)).toBe(false);
  });

});