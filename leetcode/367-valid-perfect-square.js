/*
https://leetcode.com/problems/valid-perfect-square/

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  let low = 1;
  let high = num;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    const square = mid * mid;
    if (square === num) return true;
    if (square < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};

module.exports = isPerfectSquare;
