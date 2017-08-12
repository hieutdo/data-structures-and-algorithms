const majorityElement = require('./169-majority-element');

describe('Majority Element', () => {

  it('returns correct result when array has only one element', () => {
    expect(majorityElement([1])).toBe(1);
  });

  it('returns correct result when array has multiple elements', () => {
    expect(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])).toBe(4);
  });

});