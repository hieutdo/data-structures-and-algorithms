const Queue = require('./queue');

describe('Queue', () => {

  describe('when initialized', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it('should have count equals to zero', () => {
      expect(queue.count()).toBe(0);
    });

    it('should return error when queue is empty', () => {
      expect(queue.dequeue()).toBe('queue is empty');
    });

  });

  describe('when enqueue', () => {

    it('should return collection count', () => {
      const queue = new Queue();
      expect(queue.enqueue('a')).toBe(1);
      expect(queue.enqueue('b')).toBe(2);
    });

    it('should return error when capacity is reached', () => {
      const queue = new Queue(2);
      queue.enqueue('a');
      queue.enqueue('b');
      expect(queue.enqueue('c')).toBe('Max capacity already reached. Remove element before adding a new one.');
    });

    it('should not return error when capacity is not reached', () => {
      const queue = new Queue(2);
      queue.enqueue('a');
      queue.enqueue('b');
      queue.dequeue();
      expect(queue.enqueue('c')).toBe(2);
    });

  });

  describe('when dequeue', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
    });

    it('should return the first element', () => {
      expect(queue.dequeue()).toBe('a');
    });

    it('should delete the first element', () => {
      queue.dequeue();
      expect(queue.peek()).toBe('b');
    });

    it('should return error when queue is empty', () => {
      queue.dequeue();
      queue.dequeue();
      queue.enqueue('b');
      queue.dequeue();
      expect(queue.dequeue()).toBe('queue is empty');
    });

  });

  describe('when getting count', () => {

    it('should return correct count', () => {
      const queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.dequeue();
      queue.enqueue('c');
      expect(queue.count()).toBe(2);
    });

  });

  describe('when looking for an element', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');
      queue.dequeue();
    });

    it('should return true when found', () => {
      expect(queue.contains('b')).toBe(true);
      expect(queue.contains('c')).toBe(true);
    });

    it('should return false when not found', () => {
      expect(queue.contains('a')).toBe(false);
      expect(queue.contains('d')).toBe(false);
    });

  });

  describe('when counting number of dequeues to reach an element', () => {

    it('should return correct number of dequeues', () => {
      const queue = new Queue();
      queue.enqueue(5);
      queue.enqueue(3);
      queue.dequeue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(2);
      expect(queue.until(2)).toBe(3);
    });

  });

});