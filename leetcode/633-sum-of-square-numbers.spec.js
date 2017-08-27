const judgeSquareSum = require('./633-sum-of-square-numbers');

describe('Sum of Square Numbers', () => {
  const trueExpects = [1, 2, 4, 5, 8, 10, 41];
  const falseExpects = [3, 6, 7, 12, 23];

  trueExpects.forEach(c => {
    it(`returns true when c is ${c}`, () => {
      expect(judgeSquareSum(c)).toBe(true);
    });
  });

  falseExpects.forEach(c => {
    it(`returns false when c is ${c}`, () => {
      expect(judgeSquareSum(c)).toBe(false);
    });
  });

});