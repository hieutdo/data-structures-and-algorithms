/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this._storage = [];
  this._min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  const minTop = this._min[this._min.length - 1];
  if (this._min.length === 0 || x < minTop) {
    this._min.push(x);
  } else {
    this._min.push(minTop);
  }
  this._storage.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this._storage.pop();
  this._min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this._storage[this._storage.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this._min[this._min.length - 1];
};

module.exports = MinStack;
