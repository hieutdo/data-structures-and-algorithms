/*
https://leetcode.com/problems/balanced-binary-tree/

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function height(node) {
  if (node === null) return 0;
  const leftHeight = height(node.left);
  if (leftHeight === -1) return -1;
  const rightHeight = height(node.right);
  if (rightHeight === -1) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
  if (root === null) return true;
  return height(root) !== -1;
};

module.exports = { TreeNode, isBalanced };
