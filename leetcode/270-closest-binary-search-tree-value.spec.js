const closestValue = require('./270-closest-binary-search-tree-value');
const { buildTreeFromArray } = require('./utils');

describe('Closest Binary Search Tree Value', () => {
  describe('when tree height is 1', () => {
    it('returns root.val regardless of target', () => {
      const root = buildTreeFromArray([1]);
      const target = 2;
      expect(closestValue(root, target)).toBe(1);
    });
  });

  describe('when tree height is 2', () => {
    it('returns root.val when root.val and root.left.val have same diff with target', () => {
      const root = buildTreeFromArray([2, 1, 3]);
      const target = 1.5;
      expect(closestValue(root, target)).toBe(2);
    });
    it('returns root.val when root.val and root.right.val have same diff with target', () => {
      const root = buildTreeFromArray([2, 1, 3]);
      const target = 2.5;
      expect(closestValue(root, target)).toBe(2);
    });
  });

  describe('when tree height is more than 2', () => {
    it('returns correct result', () => {
      const root = buildTreeFromArray([5, 3, 8, 1, 4, 6, 9]);
      const target = 7.5;
      expect(closestValue(root, target)).toBe(8);
    });
  });
});
