/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function insert(value) {
  const root = this;
  let node = root;

  while (node !== null) {
    if (value <= node.value) {
      if (node.left === null) {
        node.left = new BinarySearchTree(value);
        break;
      } else {
        node = node.left;
      }
    } else if (node.right === null) {
      node.right = new BinarySearchTree(value);
      break;
    } else {
      node = node.right;
    }
  }

  return root;
};
// Time complexity:

BinarySearchTree.prototype.contains = function contains(value) {
  const root = this;
  let node = root;

  while (node !== null) {
    if (value === node.value) {
      return true;
    }
    if (value <= node.value) {
      node = node.left;
    } else {
      node = node.right;
    }
  }

  return false;
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
  const stack = [];
  let node = this;

  while (node !== null) {
    stack.push(node);
    node = node.left;
  }

  while (stack.length > 0) {
    node = stack.pop();
    fn(node);
    if (node.right !== null) {
      node = node.right;
      while (node !== null) {
        stack.push(node);
        node = node.left;
      }
    }
  }
  // function traverse(node) {
  //   if (node === null) {
  //     return;
  //   }
  //   traverse(node.left);
  //   fn(node);
  //   traverse(node.right);
  // }
  // traverse(this);
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
  const stack = [];
  stack.push(this);
  while (stack.length > 0) {
    const node = stack.pop();
    fn(node);
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  // function traverse(node) {
  //   if (node === null) {
  //     return;
  //   }
  //   fn(node);
  //   traverse(node.left);
  //   traverse(node.right);
  // }
  // traverse(this);
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
  const stack = [this];
  let prev = null;
  while (stack.length > 0) {
    const curr = stack[stack.length - 1];
    if (prev === null || prev.left === curr || prev.right === curr) {
      if (curr.left !== null) {
        stack.push(curr.left);
      } else if (curr.right !== null) {
        stack.push(curr.right);
      } else {
        stack.pop();
        fn(curr);
      }
    } else if (curr.left === prev) {
      if (curr.right !== null) {
        stack.push(curr.right);
      } else {
        stack.pop();
        fn(curr);
      }
    } else {
      stack.pop();
      fn(curr);
    }
    prev = curr;
  }

  // function traverse(node) {
  //   if (node === null) {
  //     return;
  //   }
  //   traverse(node.left);
  //   traverse(node.right);
  //   fn(node);
  // }
  // traverse(this);
};
// Time complexity:

BinarySearchTree.prototype.traverseBreadthFirst = function(fn) {
  const queue = [];
  queue.push(this);
  while (queue.length > 0) {
    const node = queue.shift();
    fn(node);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
};

BinarySearchTree.prototype.checkIfFull = function() {
  // implement me...
};
// Time complexity:

BinarySearchTree.prototype.checkIfBalanced = function() {
  // implement me...
};
// Time complexity:

const bst = new BinarySearchTree(7);
bst.insert(5);
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(8);
bst.insert(10);

const inOrder = [];
const preOrder = [];
const postOrder = [];
const bfs = [];

bst.traverseDepthFirst_inOrder(node => inOrder.push(node.value));
bst.traverseDepthFirst_preOrder(node => preOrder.push(node.value));
bst.traverseDepthFirst_postOrder(node => postOrder.push(node.value));
bst.traverseBreadthFirst(node => bfs.push(node.value));

console.log(inOrder);
console.log(preOrder);
console.log(postOrder);
console.log(bfs);
