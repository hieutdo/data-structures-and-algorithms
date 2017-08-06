/*
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".
 */

/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = function (str) {
  if (str.length === 0) return str;

  return str
    .trim()
    .split(/\s+/)
    .reduce((acc, w) => {
      acc.unshift(w);
      return acc;
    }, [])
    .join(' ');
};

module.exports = reverseWords;