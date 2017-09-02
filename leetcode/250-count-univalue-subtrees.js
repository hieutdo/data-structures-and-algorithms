/*
https://leetcode.com/problems/count-univalue-subtrees/

Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

For example:
Given binary tree,
              5
             / \
            1   5
           / \   \
          5   5   5
return 4.
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
function countUnivalSubtrees(root) {
  let count = 0;
  if (root === null) {
    return count;
  }
  function traverse(node) {
    if (node.left === null && node.right === null) {
      count++;
      return true;
    }
    let left = false;
    let right = false;
    if (
      node.left === null ||
      (traverse(node.left) && node.left.val === node.val)
    ) {
      left = true;
    }
    if (
      node.right === null ||
      (traverse(node.right) && node.right.val === node.val)
    ) {
      right = true;
    }
    if (left && right) {
      count++;
      return true;
    }
    return false;
  }
  traverse(root);
  return count;
}

module.exports = countUnivalSubtrees;
