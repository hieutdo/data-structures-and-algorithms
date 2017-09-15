/**
 * Implement filter function
 * 
 * filter([1, 2, 3, 4], n => n < 3)    // [1, 2]
 * 
 * @param {number[]} arr 
 * @param {function} cb 
 * @return {number[]}
 */
function filter(arr, cb) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

// console.log(filter([1, 2, 3, 4], n => n < 3));
