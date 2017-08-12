/*
https://leetcode.com/problems/house-robber/

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (nums.length === 0) return 0;
  let prevMax = 0;
  let currMax = 0;
  for (let x of nums) {
    let temp = currMax;
    currMax = Math.max(prevMax + x, currMax);
    prevMax = temp;
  }
  return currMax;
};

module.exports = rob;
