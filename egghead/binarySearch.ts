export function binarySearch(array: number[], element: number, start = 0, end = array.length - 1) {
  if (start > end) return -1;
  const middle = Math.floor((start + end) / 2);
  return element === array[middle]
    ? middle
    : element < array[middle]
      ? binarySearch(array, element, 0, middle - 1)
      : binarySearch(array, element, middle + 1, end)
}

console.log(binarySearch([123, 234, 345, 456], 123))