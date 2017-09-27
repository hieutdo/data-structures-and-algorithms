function longestIncreasingSubsequence(array) {
  const len = array.length;
  const LIS = Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j] && LIS[j] + 1 < LIS[i]) {
        LIS[i]++;
      }
    }
  }
}

console.log(longestIncreasingSubsequence([50, 3, 10, 7, 40, 80]));
