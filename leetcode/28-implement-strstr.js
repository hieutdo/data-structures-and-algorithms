/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  let l1 = haystack.length;
  let l2 = needle.length;

  if (l2 === 0) return 0;
  if (l1 === 0 || l1 < l2) return -1;

  let i = 0;
  while (i <= l1 - l2) {
    if (haystack.substring(i, i + l2) === needle) {
      return i;
    }
    i++;
  }

  return -1;
};

module.exports = strStr;