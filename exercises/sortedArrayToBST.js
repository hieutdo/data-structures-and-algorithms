const TreeNode = require('../leetcode/TreeNode');

function sortedArrayToBST(array, start = 0, end = array.length - 1) {
  if (start > end) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  const node = new TreeNode(array[mid]);
  node.left = sortedArrayToBST(array, start, mid - 1);
  node.right = sortedArrayToBST(array, mid + 1, end);
  return node;
}

console.log(sortedArrayToBST([1, 2, 3, 4, 5]));
