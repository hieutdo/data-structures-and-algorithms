/*
https://leetcode.com/problems/path-sum-ii/

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
  const res = [];
  const dfs = (node, sum, arr) => {
    if (node === null) return;
    arr.push(node.val);
    const remain = sum - node.val;
    if (remain === 0 && node.left === null && node.right === null) {
      res.push(arr.slice());
      arr.pop();
    } else {
      dfs(node.left, remain, arr);
      dfs(node.right, remain, arr);
      arr.pop();
    }
  };
  dfs(root, sum, []);
  return res;
};

module.exports = pathSum;
