/*
https://leetcode.com/problems/maximum-average-subarray-ii/

Given an array consisting of n integers, find the contiguous subarray
whose length is greater than or equal to k that has the maximum average value.
And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation:
when length is 5, maximum average value is 10.8,
when length is 6, maximum average value is 9.16667.
Thus return 12.75.
Note:
1 <= k <= n <= 10,000.
Elements of the given array will be in range [-10,000, 10,000].
The answer with the calculation error less than 10-5 will be accepted.
 */

function check(nums, mid, k) {
  let sum = 0;
  let prevSum = 0;
  let minSum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i] - mid;
  }
  if (sum >= 0) {
    return true;
  }
  for (let j = k; j < nums.length; j++) {
    sum += nums[j] - mid;
    prevSum += nums[j - k] - mid;
    minSum = Math.min(prevSum, minSum);
    if (sum >= minSum) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let maxVal = Number.MIN_SAFE_INTEGER;
  let minVal = Number.MAX_SAFE_INTEGER;
  nums.forEach(n => {
    maxVal = Math.max(maxVal, n);
    minVal = Math.min(minVal, n);
  });
  let prevMid = maxVal;
  let error = Number.MAX_SAFE_INTEGER;
  while (error > 0.00001) {
    const mid = (maxVal + minVal) / 2;
    if (check(nums, mid, k)) {
      minVal = mid;
    } else {
      maxVal = mid;
    }
    error = Math.abs(prevMid - mid);
    prevMid = mid;
  }
  return minVal;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4);

module.exports = findMaxAverage;
