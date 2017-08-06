/*
https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
// horizontal scanning
// const longestCommonPrefix = function(strs) {
//   if (strs.length === 0) return '';
//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (prefix === '') {
//         return '';
//       }
//     }
//   }
//   return prefix;
// };
// Time complexity: O(S), where S is the sum of all strings' length in the input array;

// vertical scanning
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  const prefix = strs[0];
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].length === i || strs[j][i] !== prefix[i]) {
        return prefix.substring(0, i);
      }
    }
  }
  return prefix;
}

module.exports = longestCommonPrefix;
