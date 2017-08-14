const computeArea = require('./223-rectangle-area');

describe('Rectangle Area', () => {

  it('returns correct results', () => {
    expect(computeArea(-2, -2, 2, 2, 3, 3, 4, 4)).toBe(17);
    expect(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)).toBe(45);
    expect(computeArea(-2, -2, 2, 2, 0, 0, 0, 0)).toBe(16);
  });

});