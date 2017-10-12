function makeCurry(fn) {
  if (typeof fn !== 'function') throw 'No function provided';

  return function curriedFn(...args1) {
    if (args1.length < fn.length) {
      return function(...args2) {
        return curriedFn.apply(this, args1.concat(args2));
      };
    }
    return fn.apply(this, args1);
  };
}

module.exports = makeCurry;
