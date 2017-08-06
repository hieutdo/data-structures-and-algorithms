const MinStack = require('./155-min-stack');

describe('MinStack', () => {
  let stack;

  beforeEach(() => {
    stack = new MinStack();
  });

  it('can push element onto the stack', () => {
    stack.push(2);
    stack.push(3);
    expect(stack.top()).toBe(3);
  });

  it('can pop element off the stack', () => {
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.top()).toBe(2);
  });

  it('can get the minimum element in the stack', () => {
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
    stack.pop();
    expect(stack.getMin()).toBe(-2);
  });
});