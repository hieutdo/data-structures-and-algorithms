export function insertionSort(arr: number[]): number[] {
  arr = arr.slice();
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      console.log(arr)
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log((insertionSort([4, 3, 2, 1])));