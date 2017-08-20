/*
https://leetcode.com/problems/symmetric-tree/

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// const isSymmetric = function (root) {
//   if (root === null) return true;
//   const queue = [root, root];
//   while (queue.length > 0) {
//     const node1 = queue.pop();
//     const node2 = queue.pop();
//     if (node1 === null && node2 === null) continue;
//     if (node1 === null || node2 === null) return false;
//     if (node1.val !== node2.val) return false;
//     queue.push(node1.left);
//     queue.push(node2.right);
//     queue.push(node1.right);
//     queue.push(node2.left);
//   }
//   return true;
// };

const isSymmetric = function (root) {
  const check = function (nodeA, nodeB) {
    if (nodeA === null && nodeB === null) return true;
    if (nodeA === null || nodeB === null) return false;
    return nodeA.val === nodeB.val && check(nodeA.left, nodeB.right) && check(nodeA.right, nodeB.left);
  }
  return check(root, root);
}

// const node1 = new TreeNode(1);
// const node2L = new TreeNode(2);
// const node2R = new TreeNode(2);
// const node3L = new TreeNode(3);
// const node3R = new TreeNode(3);
// const node4L = new TreeNode(4);
// const node4R = new TreeNode(4);
// node1.left = node2L;
// node1.right = node2R;
// node2L.left = node3L;
// node2L.right = node4L;
// node2R.left = node4R;
// node2R.right = node3R;
// console.log(isSymmetric(node1));

module.exports = { TreeNode, isSymmetric };
