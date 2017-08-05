const isPalindrome = require('./125-valid-palindrome');

describe('valid palindrome', () => {

  it('returns true for a palindrome', () => {
    const input = 'A man, a plan, a canal: Panama';
    expect(isPalindrome(input)).toBe(true);
  });

  it('returns false for a not valid palindrome', () => {
    const input = 'something';
    expect(isPalindrome(input)).toBe(false);
  });

  it('returns true for empty string', () => {
    const input = '';
    expect(isPalindrome(input)).toBe(true);
  });

  it('returns true for non-alphanumeric string', () => {
    const input = '!@#$  ()#@';
    expect(isPalindrome(input)).toBe(true);
  });

});