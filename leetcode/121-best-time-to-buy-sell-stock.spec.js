const maxProfit = require('./121-best-time-to-buy-sell-stock');

describe('Best Time to Buy and Sell Stock', () => {

  it('returns correct value when max profit found', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([1, 1, 5, 3, 2, 5])).toBe(4);
  });

  it('returns 0 when no max profit found', () => {
    expect(maxProfit([6, 5, 4, 3, 2, 1])).toBe(0);
  });

  it('returns 0 when input array has 0 or 1 element', () => {
    expect(maxProfit([])).toBe(0);
    expect(maxProfit([5])).toBe(0);
  });

});