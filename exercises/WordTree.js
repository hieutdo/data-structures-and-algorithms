function Node(data) {
  this.data = data;
  this.children = {};
}

function WordTree() {
  this.root = new Node('');
}

WordTree.prototype.traverseChildren = function(node, cb) {
  if (!node) {
    return;
  }
  const children = Object.values(node.children);
  for (let i = 0; i < children.length; i++) {
    cb(children[i]);
    this.traverseChildren(children[i], cb);
  }
};

WordTree.prototype.search = function(word, node = this.root) {
  const result = [];

  if (!word || !node) {
    return result;
  }

  const letter = word.charAt(0);
  let child = node.children[letter];

  if (!child) {
    child = new Node(letter);
    node.children[letter] = child;
  }

  const remainder = word.substring(1);

  if (!remainder) {
    this.traverseChildren(child, n => {
      result.push(n.data);
    });
    return result;
  }

  return this.search(remainder, child);
};

const trie = new WordTree();
console.log(trie.search('abcde'));
console.log(trie.search('abc'));
console.log(trie.search('abcxyz'));
console.log(trie.search('ab'));
console.log(trie.search('abc'));
