/*
https://leetcode.com/problems/count-complete-tree-nodes/

Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
  if (root === null) {
    return 0;
  }
  let leftHeight = 0;
  let rightHeight = 0;
  let left = root;
  let right = root;
  while (left) {
    leftHeight++;
    left = left.left;
  }
  while (right) {
    rightHeight++;
    right = right.right;
  }
  if (leftHeight === rightHeight) {
    return 2 ** leftHeight - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
}

module.exports = countNodes;
