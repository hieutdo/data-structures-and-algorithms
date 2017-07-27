/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

function factorial(n) {
  return n === 1 ? n : n * factorial(n - 1);
}

console.log(factorial(5))