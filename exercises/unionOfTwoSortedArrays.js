function unionOfTwoSortedArrays(arr1, arr2) {
  let union = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      union.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      union.push(arr2[j]);
      j++;
    } else {
      union.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    union.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    union.push(arr2[j]);
    j++;
  }
  return union;
}

module.exports = unionOfTwoSortedArrays;
