/*
https://leetcode.com/problems/majority-element/

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let index = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    count += nums[index] === nums[i] ? 1 : -1;
    if (count === 0) {
      count = 1;
      index = i;
    }
  }
  return nums[index];
};

module.exports = majorityElement;
