const flatten = require('./flatten');

describe('flatten', () => {
  it('should return the original array if it does not contain any sub arrays', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it('should return flatten array', () => {
    expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3]);
  });
});
