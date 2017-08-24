const TreeNode = require('./TreeNode');

function buildTreeFromArray(arr) {
  const root = new TreeNode(arr[0]);
  const treeArr = [root];
  for (let i = 1; i < arr.length; i++) {
    const node = arr[i] === null ? null : new TreeNode(arr[i]);
    let nextParentIndex = Math.floor((i - 1) / 2);
    let parentIndex = 0;
    while (nextParentIndex > 0) {
      if (treeArr[parentIndex + 1] !== null) {
        nextParentIndex--;
      }
      parentIndex++;
    }
    const parent = treeArr[parentIndex];
    if (i % 2 === 0) {
      parent.right = node;
    } else {
      parent.left = node;
    }
    treeArr.push(node);
  }
  return root;
}

function removeNullFromLast(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (Array.isArray(arr[i])) {
      removeNullFromLast(arr[i]);
    } else if (arr[i] === null) {
      arr.splice(i, 1);
    } else {
      break;
    }
  }
  return arr;
}

function printTreeToArray(root) {
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node !== null) {
      res.push(node.val);
      if (node.left === null && node.right === null) continue;
      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push(node);
    }
  }
  return removeNullFromLast(res);
}

module.exports = { buildTreeFromArray, printTreeToArray };
