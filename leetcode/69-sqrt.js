/*
https://leetcode.com/problems/sqrtx/

Implement int sqrt(int x).

Compute and return the square root of x.
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x < 1) return 0;

  function sqrt(low, high, n) {
    if (low > high) return low - 1;
    const mid = low + Math.floor((high - low) / 2);
    if (mid < n / mid) {
      return sqrt(mid + 1, high, n);
    } else if (mid > n / mid) {
      return sqrt(low, mid - 1, n);
    }
    return mid;
  }

  return sqrt(1, x, x);

  // let low = 1;
  // let mid = 0;
  // let high = x;
  // let sqrt = 0;
  // while (low <= high) {
  //   mid = Math.floor((high - low) / 2) + low;
  //   if (mid <= x / mid) {
  //     low = mid + 1;
  //     sqrt = mid;
  //   } else {
  //     high = mid - 1;
  //   }
  // }
  // return sqrt;
};

module.exports = mySqrt;
