/*
https://leetcode.com/problems/wiggle-sort

Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].
 */

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0) {
      if (nums[i] > nums[i + 1]) {
        swap(nums, i, i + 1);
      }
    } else if (nums[i] < nums[i + 1]) {
      swap(nums, i, i + 1);
    }
  }
}

module.exports = wiggleSort;
