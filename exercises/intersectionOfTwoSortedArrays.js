function intersectionOfTwoSortedArrays(arr1, arr2) {
  const intersection = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      intersection.push(arr1[i]);
      i++;
      j++;
    }
  }
  return intersection;
}

module.exports = intersectionOfTwoSortedArrays;
