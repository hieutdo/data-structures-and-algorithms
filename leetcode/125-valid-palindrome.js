/**
 Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 For example,
 "A man, a plan, a canal: Panama" is a palindrome.
 "race a car" is not a palindrome.

 Note:
 Have you consider that the string might be empty? This is a good question to ask during an interview.

 For the purpose of this problem, we define empty string as valid palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var i = 0;
  var j = s.length - 1;
  for (; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};

module.exports = isPalindrome;