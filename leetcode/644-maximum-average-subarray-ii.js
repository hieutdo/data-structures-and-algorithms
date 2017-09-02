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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let high = nums.reduce((a, b) => Math.max(a, b));
  let low = nums.reduce((a, b) => Math.min(a, b));

  function hasAverageGreaterThan(x) {
    let sum = 0;
    let minSum = 0;
    let prevSum = 0;
    let i = 0;
    for (i = 0; i < k; i++) {
      sum += nums[i] - x;
    }
    if (sum >= 0) {
      return true;
    }
    for (i = k; i < nums.length; i++) {
      sum += nums[i] - x;
      prevSum += nums[i - k] - x;
      minSum = Math.min(minSum, prevSum);
      if (sum >= minSum) {
        return true;
      }
    }
    return false;
  }

  while (high - low >= 0.00001) {
    const mid = (low + high) / 2;
    if (hasAverageGreaterThan(mid)) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return low;
}

module.exports = findMaxAverage;
