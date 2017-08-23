const { buildTreeFromArray, printTreeToArray } = require('./utils');
const TreeNode = require('./TreeNode');
const findDuplicateSubtrees = require('./652-find-duplicate-subtrees');

describe('Find Duplicate Subtrees', () => {

  describe('when the tree is null', () => {

    it('returns an empty array', () => {
      expect(findDuplicateSubtrees(null)).toEqual([]);
    });

  });

  describe('when the tree has only one node', () => {

    it('returns an empty array', () => {
      expect(findDuplicateSubtrees(new TreeNode(1))).toEqual([]);
    });

  });

  describe('when the tree has no duplicate subtree', () => {

    it('returns an empty array', () => {
      const root = buildTreeFromArray([1, 2, 3]);
      expect(findDuplicateSubtrees(root)).toEqual([]);
    });

  });

  describe('when the tree has one duplicate subtree', () => {

    it('returns correct result', () => {
      const root = buildTreeFromArray([2, 1, 1]);
      const arraySubtrees = findDuplicateSubtrees(root);
      const arrayValues = arraySubtrees.map(printTreeToArray);
      expect(arrayValues).toEqual([[1]]);
    });

  });

  describe('when the tree has multiple duplicate subtrees', () => {

    it('returns correct result', () => {
      const root = buildTreeFromArray([1, 2, 3, 4, null, 2, 4, null, null, 4]);
      const arraySubtrees = findDuplicateSubtrees(root);
      const arrayValues = arraySubtrees.map(printTreeToArray);
      expect(arrayValues).toEqual([
        [4],
        [2, 4],
      ]);
    });

    it('returns correct result', () => {
      const root = buildTreeFromArray([0, 0, 0, 0, null, 0, null, 0, 0, 0, 0]);
      const arraySubtrees = findDuplicateSubtrees(root);
      const arrayValues = arraySubtrees.map(printTreeToArray);
      expect(arrayValues).toEqual([
        [0],
        [0, 0, 0],
        [0, 0, null, 0, 0],
      ]);
    });

  });

});