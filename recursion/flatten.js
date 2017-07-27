/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
  const flattenArr = [];

  function _flatten(a) {
    for (let i of a) {
      if (Array.isArray(i)) {
        _flatten(i);
      } else {
        flattenArr.push(i);
      }
    }
  }

  _flatten(arr);

  return flattenArr;
}

flatten([1,[null],[undefined, [{foo: 'bar'}, ['string', [false, [true]]]]]]);