const Stack = require('./stack');

function TwoStacksQueue(capacity) {
  this._capacity = capacity || Infinity;
  this._stackIn = new Stack();
  this._stackOut = new Stack();
}

TwoStacksQueue.prototype._transferStacks = function () {
  while (this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};

TwoStacksQueue.prototype.enqueue = function (value) {
  if (this.count() === this._capacity) {
    return 'Max capacity already reached. Remove element before adding a new one.';
  }
  this._stackIn.push(value);
  return this.count();
};

TwoStacksQueue.prototype.dequeue = function () {
  if (this.count() === 0) {
    return 'queue is empty';
  }
  if (this._stackOut.count() === 0) {
    this._transferStacks();
  }
  return this._stackOut.pop();
};

TwoStacksQueue.prototype.peek = function () {
  if (this._stackOut.count() === 0) {
    this._transferStacks();
  }
  return this._stackOut.peek();
};

TwoStacksQueue.prototype.count = function () {
  return this._stackIn.count() + this._stackOut.count();
};

TwoStacksQueue.prototype.contains = function (value) {
  return this._stackIn.contains(value) || this._stackOut.contains(value);
};

module.exports = TwoStacksQueue;
