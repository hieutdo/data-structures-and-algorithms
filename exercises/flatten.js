const flatten = arr =>
  arr.reduce(
    (flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next),
    [],
  );

module.exports = flatten;
