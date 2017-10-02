function primeFactors(n) {
  const factors = new Set();
  let divisor = 2;
  while (n > 2) {
    if (n % divisor === 0) {
      factors.add(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }
  return Array.from(factors);
}

console.log(primeFactors(9));
console.log(primeFactors(15));
console.log(primeFactors(107));
