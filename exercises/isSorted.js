/**
  * Returns true of false, indicating whether the given array of numbers is sorted
  *  isSorted([])                        // true
  *  isSorted([-Infinity, -5, 0, 3, 9])  // true
  *  isSorted([3, 9, -3, 10])            // false
  *
  * @param {number[]} arr 
  * @return {boolean}
  */
function isSorted(arr) {
  const limit = arr.length - 1;
  return arr.every((_, i) => (i < limit ? arr[i] <= arr[i + 1] : true));
}

// console.log(isSorted([]) === true);
// console.log(isSorted([-Infinity, -5, 0, 3, 9]) === true);
// console.log(isSorted([3, 9, -3, 10]) === false);
// console.log(isSorted([3, 2, 3, 4, 5]) === false);
