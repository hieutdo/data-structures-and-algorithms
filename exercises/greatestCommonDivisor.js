function greatestCommonDivisor(a, b) {
  let greatestDivisor = 1;
  let divisor = 2;
  while (divisor <= a && divisor <= b) {
    if (a % divisor === 0 && b % divisor === 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

console.log(greatestCommonDivisor(2, 4));
