const countUnivalSubtrees = require('./250-count-univalue-subtrees');
const { buildTreeFromArray } = require('./utils');

describe('Count Univalue Subtress', () => {
  it('returns 0 when tree is null', () => {
    const root = null;
    expect(countUnivalSubtrees(root)).toBe(0);
  });

  it('returns 1 when tree height == 0', () => {
    const root = buildTreeFromArray([1]);
    expect(countUnivalSubtrees(root)).toBe(1);
  });

  describe('when tree height >= 1', () => {
    it('returns correct result', () => {
      const root = buildTreeFromArray([5, 1, 5, 5, 5, null, 5]);
      expect(countUnivalSubtrees(root)).toBe(4);
    });
  });
});
