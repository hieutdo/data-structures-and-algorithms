const { buildTreeFromArray, printTreeToArray } = require('./utils');
const pathSum = require('./437-path-sum-iii');

describe('Path Sum III', () => {

  it('returns correct result', () => {
    const root1 = buildTreeFromArray([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
    const root2 = buildTreeFromArray([3, -3, 3, 6, 2, null, null, null, null, 4]);
    const root3 = buildTreeFromArray([1, -2, -3, 1, 3, -2, null, -1]);
    expect(pathSum(root1, 8)).toBe(3);
    expect(pathSum(root2, 6)).toBe(5);
    expect(pathSum(root3, -1)).toBe(4);
  });

});