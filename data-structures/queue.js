/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._headIndex = 0;
  this._tailIndex = 0;
}

Queue.prototype.enqueue = function (value) {
  if (this.count() === this._capacity) {
    return 'Max capacity already reached. Remove element before adding a new one.';
  }
  this._storage[this._tailIndex++] = value;
  return this.count();
};
// Time complexity: O(1)

Queue.prototype.dequeue = function () {
  if (this.count() === 0) {
    return 'queue is empty';
  }
  const value = this._storage[this._headIndex];
  delete this._storage[this._headIndex++];
  return value;
};
// Time complexity: O(1)

Queue.prototype.peek = function () {
  return this._storage[this._headIndex];
};
// Time complexity: O(1)

Queue.prototype.count = function () {
  return this._tailIndex - this._headIndex;
};
// Time complexity: O(1)

Queue.prototype.contains = function (value) {
  for (let i = this._headIndex; i < this._tailIndex; i++) {
    if (this._storage[i] === value) {
      return true;
    }
  }
  return false;
};
// Time complexity: O(n)

Queue.prototype.until = function (value) {
  let numOfDequeues = 0;
  for (let i = this._headIndex; i < this._tailIndex; i++) {
    numOfDequeues++;
    if (this._storage[i] === value) {
      break;
    }
  }
  return numOfDequeues;
};

module.exports = Queue;

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
