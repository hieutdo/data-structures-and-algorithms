/**
 * Implement reduce function
 * 
 * @param {any[]} arr 
 * @param {function} cb 
 * @param {any} initialValue 
 * @return {any}
 */
function reduce(arr, cb, initialValue) {
  let memo = arr[0];
  let i = 1;
  if (initialValue !== undefined) {
    memo = initialValue;
    i = 0;
  }
  for (; i < arr.length; i++) {
    memo = cb(memo, arr[i]);
  }
  return memo;
}

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b));
// console.log(reduce([1, 2, 3, 4], (a, b) => a * b, 10));
