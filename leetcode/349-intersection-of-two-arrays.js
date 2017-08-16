/*
https://leetcode.com/problems/intersection-of-two-arrays/

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }
  const set = new Set();
  const intersect = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      intersect.add(nums2[i]);
    }
  }
  return Array.from(intersect.keys());
};

module.exports = intersection;
