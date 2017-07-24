const Stack = require('./stack');

function MinStack(capacity) {
  Stack.call(this, capacity);
  this._min = new Stack();
}

MinStack.prototype = Object.create(Stack.prototype);

MinStack.prototype.push = function (value) {
  const count = Stack.prototype.push.call(this, value);
  if (this._min.peek() < value) {
    this._min.push(this._min.peek());
  } else {
    this._min.push(value);
  }
  return count;
};

MinStack.prototype.pop = function () {
  const value = Stack.prototype.pop.call(this);
  this._min.pop();
  return value;
};

MinStack.prototype.min = function () {
  return this._min.peek();
};

module.exports = MinStack;
