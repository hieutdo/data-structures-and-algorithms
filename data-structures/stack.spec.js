const { Stack, MinStack } = require('./stack');

describe('Stack', () => {

  describe('push()', () => {

    it('should throw error when capacity is reached', () => {
      const stack = new Stack(2);
      stack.push('a');
      stack.push('b');
      expect(stack.push.bind(stack, 3)).toThrow('capacity reached.');
    });

    it('should return count', () => {
      const stack = new Stack();
      expect(stack.push('a')).toBe(1);
      expect(stack.push('b')).toBe(2);
    });

  });

  describe('pop()', () => {

    it('should throw error when stack is empty', () => {
      const stack = new Stack();
      expect(stack.pop.bind(stack)).toThrow('stack is empty');
    });

    it('should return the most recent added element', () => {
      const stack = new Stack();
      stack.push('a');
      expect(stack.pop()).toBe('a');
    });

    it('should remove the most recent added element', () => {
      const stack = new Stack();
      stack.push('a');
      stack.push('b');
      stack.pop();
      expect(stack.count()).toBe(1);
    });

  });

  describe('peek()', () => {

    it('should return the most recent added element', () => {
      const stack = new Stack();
      stack.push('a');
      expect(stack.peek()).toBe('a');
    });

    it('should not remove the most recent added element', () => {
      const stack = new Stack();
      stack.push('a');
      stack.push('b');
      stack.pop();
      expect(stack.count()).toBe(1);
    });

    it('should return undefined when stack is empty', () => {
      const stack = new Stack();
      expect(stack.peek()).toBeUndefined();
    });

  });
});

describe('MinStack', () => {

  describe('pop', () => {

    it('return the most recent added element', () => {
      const minStack = new MinStack();
      minStack.push(4);
      minStack.push(3);
      expect(minStack.pop()).toBe(3);
    });

  });

  describe('min', () => {

    it('return the minimum element in the stack', () => {
      const minStack = new MinStack();
      minStack.push(4);
      minStack.push(3);
      minStack.push(5);
      minStack.push(2);
      minStack.push(6);
      minStack.pop();
      minStack.pop();
      expect(minStack.min()).toBe(3);
    });

  });

});