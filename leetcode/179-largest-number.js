/*
https://leetcode.com/problems/largest-number/

Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  const res = nums
    .sort((a, b) => ('' + b + a) < ('' + a + b) ? -1 : 1)
    .join('');
  return res[0] === '0' ? '0' : res;
};

module.exports = largestNumber;
