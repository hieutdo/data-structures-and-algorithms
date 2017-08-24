const { buildTreeFromArray } = require('./utils');
const pathSum = require('./113-path-sum-ii');

describe('Path Sum II', () => {

  it('returns correct result', () => {
    const root = buildTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
    expect(pathSum(root, 22)).toEqual([
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ]);
  });

});