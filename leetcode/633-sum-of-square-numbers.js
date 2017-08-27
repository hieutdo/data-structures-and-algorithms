/*
https://leetcode.com/problems/sum-of-square-numbers/

Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5

Example 2:
Input: 3
Output: False
 */

/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function (c) {
  if (c <= 2) return true;
  for (let a = 0; a * a <= c; a++) {
    const b = Math.sqrt(c - a * a);
    if (b === parseInt(b)) return true;
  }
  return false;
};

module.exports = judgeSquareSum;
