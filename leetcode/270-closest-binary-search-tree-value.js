/*
https://leetcode.com/problems/closest-binary-search-tree-value/

Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:
Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
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
 * @param {number} target
 * @return {number}
 */
function closestValue(root, target) {
  let closest = root.val;
  let node = root;
  while (node) {
    if (Math.abs(target - node.val) < Math.abs(target - closest)) {
      closest = node.val;
    }
    node = target < node.val ? node.left : node.right;
  }
  return closest;
}

module.exports = closestValue;
