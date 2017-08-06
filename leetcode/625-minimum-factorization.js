/*
Given a positive integer a, find the smallest positive integer b whose multiplication of each digit equals to a.

If there is no answer or the answer is not fit in 32-bit signed integer, then return 0.

Example 1
Input: 48
Output: 68

Example 2
Input: 15
Output: 35
 */

/**
 * @param {number} a
 * @return {number}
 */
const smallestFactorization = function (a) {
  if (a < 2) return a;
  let res = 0;
  let mul = 1;
  for (let i = 9; i >= 2; i--) {
    while (a % i === 0) {
      a /= i;
      res += mul * i;
      mul *= 10;
    }
  }
  return a < 2 && res < Math.pow(2, 31) - 1 ? res : 0;
};

module.exports = smallestFactorization;
