const Trie = require('./208-implement-trie');

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  describe('inserting words', () => {

    it('builds the tree internal correctly', () => {
      trie.insert('abca');
      trie.insert('abcd');

      const root = trie.root;
      const a1 = root.children.a;
      const b = a1.children.b;
      const c = b.children.c;
      const d = c.children.d;
      const a2 = c.children.a;

      expect(a1).toBeDefined();
      expect(a1.isEnd()).toBe(false);

      expect(b).toBeDefined();
      expect(b.isEnd()).toBe(false);

      expect(c).toBeDefined();
      expect(c.isEnd()).toBe(false);

      expect(a2).toBeDefined();
      expect(a2.isEnd()).toBe(true);

      expect(d).toBeDefined();
      expect(d.isEnd()).toBe(true);
    });

  });

  describe('searching for a word', () => {

    beforeEach(() => {
      trie.insert('angular 1');
      trie.insert('angular 2');
      trie.insert('react');
      trie.insert('redux');
    });

    it('returns true when the word is found', () => {
      expect(trie.search('angular 1')).toBe(true);
      expect(trie.search('angular 2')).toBe(true);
      expect(trie.search('react')).toBe(true);
      expect(trie.search('redux')).toBe(true);
    });

    it('returns false when the word is not found', () => {
      expect(trie.search('angular')).toBe(false);
      expect(trie.search('rxjs')).toBe(false);
    });

  });

  describe('searching for a prefix', () => {

    beforeEach(() => {
      trie.insert('angular 1');
      trie.insert('angular 2');
      trie.insert('react');
      trie.insert('redux');
    });

    it('returns true when the trie contains the given prefix', () => {
      expect(trie.startsWith('angular')).toBe(true);
      expect(trie.startsWith('re')).toBe(true);
    });

    it('returns false when the trie does not contain the given prefix', () => {
      expect(trie.startsWith('angi')).toBe(false);
      expect(trie.startsWith('rec')).toBe(false);
    });

  });

});