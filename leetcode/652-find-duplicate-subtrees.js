/*
https://leetcode.com/problems/find-duplicate-subtrees/

Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with same node values.

Example 1:
        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
The following are two duplicate subtrees:
      2
     /
    4
and
    4
Therefore, you need to return above trees' root in the form of a list.
 */

function traverseTree(root, cb) {
  if (root === null) return 'null';
  const key = `${root.val},${traverseTree(root.left, cb)},${traverseTree(root.right, cb)}`;
  return cb(key, root);
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  const res = [];
  const map = new Map();

  traverseTree(root, (key, node) => {
    const count = map.get(key);
    if (count === undefined) {
      map.set(key, 1);
    } else if (count === 1) {
      res.push(node);
      map.set(key, 2);
    }
    return key;
  });

  return res;
};

module.exports = findDuplicateSubtrees;
