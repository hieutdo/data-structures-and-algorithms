/*
https://leetcode.com/problems/shortest-word-distance

Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
 */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestDistance = function(words, word1, word2) {
  let i1 = -1;
  let i2 = -1;
  let minDistance = words.length - 1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      i1 = i;
    } else if (words[i] === word2) {
      i2 = i;
    }
    if (i1 !== -1 && i2 !== -1) {
      minDistance = Math.min(Math.abs(i1 - i2), minDistance);
    }
  }
  return minDistance;
};

module.exports = shortestDistance;
