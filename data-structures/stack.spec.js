const Stack = require('./stack');

describe('Stack', () => {

  describe('push()', () => {

    it('should throw error when capacity is reached', () => {
      const stack = new Stack(2);
      stack.push('a');
      stack.push('b');
      expect(stack.push.bind(stack, 3)).toThrow();
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

  describe('contains()', () => {

    it('should return true when the stack contains the value', () => {
      const stack = new Stack();
      stack.push('a');
      stack.push('b');
      stack.push('c');
      expect(stack.contains('c')).toBe(true);
    });

    it('should return false when the stack does not contain the value', () => {
      const stack = new Stack();
      stack.push('a');
      stack.push('b');
      stack.push('c');
      expect(stack.contains('d')).toBe(false);
    });

  });

});
