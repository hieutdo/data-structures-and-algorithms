function isPrime(n) {
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }

  const limit = Math.sqrt(n);
  let divisor = 3;

  while (divisor < limit) {
    if (n % divisor === 0) {
      return false;
    }
    divisor += 2;
  }

  return true;
}

console.log(isPrime(137) === true);
console.log(isPrime(237) === false);
