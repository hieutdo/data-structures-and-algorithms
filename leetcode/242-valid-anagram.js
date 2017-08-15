/*
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const countMap = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (countMap[char] === undefined) {
      countMap[char] = 1;
    } else {
      countMap[char]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (countMap[char] === undefined) {
      return false;
    } else {
      countMap[char]--;
    }
    if (countMap[char] < 0) {
      return false;
    }
  }

  return true;
};

module.exports = isAnagram;
