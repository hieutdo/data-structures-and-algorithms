/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
  let flattenArr = [];

  function _flatten(a) {
    for (let i of a) {
      if (typeof i === 'number') {
        flattenArr.push(i);
      } else {
        _flatten(i);
      }
    }
  }

  _flatten(arr);

  return flattenArr;
}
