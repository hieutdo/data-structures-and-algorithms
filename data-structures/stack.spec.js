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
      expect(stack.pop(stack)).toBe('stack is empty');
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
    let stack;

    beforeEach(() => {
      stack = new Stack();
      stack.push('a');
      stack.push('b');
      stack.push('c');
    });

    it('should return true when the stack contains the value', () => {
      expect(stack.contains('c')).toBe(true);
    });

    it('should return false when the stack does not contain the value', () => {
      expect(stack.contains('d')).toBe(false);
    });

  });

  describe('until()', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
      stack.push(3);
      stack.push(2);
      stack.push(4);
      stack.push(1);
      stack.push(5);
    });

    it('should return 1 when the parameter is the last element in the stack', () => {
      expect(stack.until(5)).toBe(1);
    });

    it('should return correct number of pops', () => {
      expect(stack.until(4)).toBe(3);
    });

    it('should return count when the stack does not contain the parameter', () => {
      expect(stack.until(6)).toBe(5);
    });

  });

});
