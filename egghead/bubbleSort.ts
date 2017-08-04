export function bubbleSort(arr: number[]): number[] {
  arr = arr.slice();
  while (true) {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([5, 0, 4, 2, 3, 1]))