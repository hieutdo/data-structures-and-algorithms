const MinStack = require('./minStack');

describe('MinStack', () => {

  describe('pop', () => {

    it('should return the most recent added element', () => {
      const minStack = new MinStack();
      minStack.push(4);
      minStack.push(3);
      expect(minStack.pop()).toBe(3);
    });

  });

  describe('min', () => {

    it('should return the minimum element in the stack', () => {
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
