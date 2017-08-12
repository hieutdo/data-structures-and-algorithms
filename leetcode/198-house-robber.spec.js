const rob = require('./198-house-robber');

describe('House Robber', () => {

  it('returns correct result when input array has 0 element', () => {
    expect(rob([])).toBe(0);
  });

  it('returns correct result when input array has 1 element', () => {
    expect(rob([10])).toBe(10);
  });

  it('returns correct result when input array has 2 elements', () => {
    expect(rob([10, 15])).toBe(15);
  });

  it('returns correct result when input array has at least 3 elements', () => {
    expect(rob([10, 15, 4])).toBe(15);
    expect(rob([10, 15, 22, 6])).toBe(32);
  });

});