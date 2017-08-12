const climbStairs = require('./70-climbing-stairs');

describe('Climbing Stairs', () => {

  it('returns correct results when n = 1', () => {
    expect(climbStairs(1)).toBe(1);
  });

  it('returns correct results when n = 2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('returns correct results when n > 2', () => {
    expect(climbStairs(6)).toBe(13);
  });

});