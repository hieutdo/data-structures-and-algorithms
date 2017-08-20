const { TreeNode, invertTree } = require('./226-invert-binary-tree');

describe('Invert Binary Tree', () => {

  it('returns correct result', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node6 = new TreeNode(6);
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node3.left = node6;
    invertTree(node1);
    expect(node1.left).toBe(node3);
    expect(node1.right).toBe(node2);
    expect(node3.right).toBe(node6);
    expect(node2.left).toBe(node5);
    expect(node2.right).toBe(node4);
  });

});