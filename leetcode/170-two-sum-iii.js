/*
https://leetcode.com/problems/two-sum-iii-data-structure-design

Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

For example,
add(1); add(3); add(5);
find(4) -> true
find(7) -> false
*/

/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.map = new Map();
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.map.set(number, (this.map.get(number) || 0) + 1);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for (const [num, count] of this.map.entries()) {
    const complement = value - num;
    if (complement === num) {
      if (count >= 2) {
        return true;
      }
    } else if (this.map.has(complement)) {
      return true;
    }
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

module.exports = TwoSum;