const reverseWords = require('./151-reverse-words-in-a-string');

describe('Reverse words in a string', () => {

  it('returns correct result when input has multiple spaces between words', () => {
    const input = 'the   sky   is   blue';
    const output = 'blue is sky the';
    expect(reverseWords(input)).toBe(output);
  });

  it('returns correct result when input has leading and trailing spaces', () => {
    const input = '   the sky is blue   ';
    const output = 'blue is sky the';
    expect(reverseWords(input)).toBe(output);
  });

  it('returns empty string when input is empty', () => {
    const input = '';
    const output = '';
    expect(reverseWords(input)).toBe(output);
  });

});