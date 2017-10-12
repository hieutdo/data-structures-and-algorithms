const makeCurry = require('./makeCurry');

describe('Curry function generator', () => {
  it('should return a function', () => {
    const add = () => {};
    expect(typeof makeCurry(add)).toBe('function');
  });

  it('should throw an error if there is no valid function provided as argument', () => {
    expect(() => {
      makeCurry();
    }).toThrow('No function provided');
  });
});

describe('Curry function', () => {
  let add;

  beforeEach(() => {
    add = (a, b, c) => a + b + c;
  });

  it('should return the proper result if called with original number of arguments', () => {
    const curriedAdd = makeCurry(add);
    expect(curriedAdd(1, 2, 3)).toBe(add(1, 2, 3));
  });

  it('should return a function when arguments count is less than the original number of arguments', () => {
    const curriedAdd = makeCurry(add);
    expect(typeof curriedAdd(1, 2)).toBe('function');
  });

  it('should return the result whenever the total number of arguments is greater than or equal to the original number of arguments', () => {
    const curriedAdd = makeCurry(add);
    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1, 2)(3, 4, 5)).toBe(6);
  });

  it('should support creating multiple curry functions', () => {
    const curryA = makeCurry(add);
    const curryB = makeCurry(add);

    expect(curryA(1, 2)(3)).toBe(6);
    expect(typeof curryA(1, 2)).toBe('function');

    expect(curryB(1)(2)(3)).toBe(6);
    expect(typeof curryB(1)(2)).toBe('function');
  });
});
