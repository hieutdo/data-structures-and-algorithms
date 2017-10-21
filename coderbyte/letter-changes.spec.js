const LetterChanges = require('./letter-changes');

describe('Letter Changes', () => {
  it('should replace z or Z to A', () => {
    expect(LetterChanges('z')).toBe('A');
    expect(LetterChanges('Z')).toBe('A');
  });

  it('should capitalize vowels', () => {
    expect(LetterChanges('zdhnt')).toBe('AEIOU');
  });

  it('should not capitalize letters which are not vowels', () => {
    expect(LetterChanges('abc')).toBe('bcd');
  });

  it('should work properly with capitalized letters', () => {
    expect(LetterChanges('ABC')).toBe('BCD');
  });

  it('should ignore numbers, whitespaces and symbols', () => {
    expect(LetterChanges('abc 123 def !@#')).toBe('bcd 123 Efg !@#');
  });
});
