/**
 * Given a list 1,0,3,5,0,0,34,5,0,36 push all the zeroes to the end. Develop an in-place algorithm
 */

function moveZerosToRight(arr) {
  const n = arr.length;
  let i = 0;
  for (const num of arr) {
    if (num !== 0) {
      arr[i++] = num;
    }
  }
  while (i < n) {
    arr[i++] = 0;
  }
  return arr;
}

console.log(moveZerosToRight([1, 0, 3, 5, 0, 0, 34, 5, 0, 36]));
