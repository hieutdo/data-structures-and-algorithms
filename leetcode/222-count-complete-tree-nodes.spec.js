const countNodes = require('./222-count-complete-tree-nodes');
const { buildTreeFromArray } = require('./utils');

describe('Count Complete Tree Nodes', () => {
  describe('when tree height = 1', () => {
    it('always returns 1', () => {
      const root = buildTreeFromArray([2]);
      expect(countNodes(root)).toBe(1);
    });
  });

  describe('when tree height > 1', () => {
    it('returns correct result when left subtree is higher than right subtree', () => {
      const root = buildTreeFromArray([1, 1, 1, 1, 1, 1, 1, 1]);
      expect(countNodes(root)).toBe(8);
    });

    it('returns correct result when left and right subtree have the same height', () => {
      const tree1 = buildTreeFromArray([1, 1, 1]);
      expect(countNodes(tree1)).toBe(3);
      const tree2 = buildTreeFromArray([1, 1, 1, 1, 1, 1, 1]);
      expect(countNodes(tree2)).toBe(7);
    });
  });
});
