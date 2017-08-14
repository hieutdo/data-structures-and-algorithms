/*
https://leetcode.com/problems/implement-trie-prefix-tree/

Implement a trie with insert, search, and startsWith methods.

Note:
You may assume that all inputs are consist of lowercase letters a-z.
 */

/**
 * Initialize your data structure here.
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }

  containsKey(char) {
    return this.children[char] !== undefined;
  }

  put(char, node) {
    this.children[char] = node;
  }

  get (char) {
    return this.children[char];
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.containsKey(char)) {
        node.put(char, new TrieNode());
      }
      node = node.get(char);
    }
    node.setEnd();
  }

  searchPrefix(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (node.containsKey(char)) {
        node = node.get(char);
      } else {
        return null;
      }
    }
    return node;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this.searchPrefix(word);
    return node !== null && node.isEnd();
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.searchPrefix(prefix) !== null;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

module.exports = Trie;
