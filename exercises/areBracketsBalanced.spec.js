const areBracketsBalanced = require('./areBracketsBalanced');

describe('Are Brackets Balanced', () => {
  it('should return true if brackets are balanced', () => {
    const brackets = '{()}';
    expect(areBracketsBalanced(brackets)).toBe(true);
  });
  it('should return false if brackets are not balanced', () => {
    const brackets = '({)}';
    expect(areBracketsBalanced(brackets)).toBe(false);
  });
});
