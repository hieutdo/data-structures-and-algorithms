/*
https://leetcode.com/problems/moving-average-from-data-stream/

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

For example,
MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

class MovingAverage {
  /**
   * Initialize your data structure here.
   * @param {number} size
   */
  constructor(size) {
    this.storage = new Array(size);
    this.currentIndex = 0;
    this.currentSize = 0;
  }

  /**
  * @param {number} val
  * @return {number}
  */
  next(val) {
    this.storage[this.currentIndex++] = val;
    if (this.currentSize < this.storage.length) {
      this.currentSize++;
    }
    const sum = this.storage.reduce((m, n) => m + n);
    const average = sum / this.currentSize;
    if (this.currentIndex >= this.storage.length) {
      this.currentIndex = 0;
    }
    return average;
  }
}

module.exports = MovingAverage;
