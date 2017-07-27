//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

//2. Next, try looping just like above except using recursion

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function myloop(n) {
  if (n === 0) {
    console.log('done');
    return;
  }
  console.log('n = ', n);
  myloop(n - 1);
}

function exponent(base, expo) {
  const isNegative = expo < 0;
  let power = 1;
  while (expo !== 0) {
    power = power * base;
    expo = isNegative ? expo + 1 : expo - 1;
  }
  return isNegative ? 1 / power : power;
}

function recursiveExponent(base, expo) {
  if (expo === 0) {
    return 1;
  } else if (expo < 0) {
    return recursiveExponent(base, expo + 1) / base;
  } else {
    return base * recursiveExponent(base, expo - 1);
  }
}

function recursiveMultiplier(arr, num) {
  const res = [];

  function multiplier(i) {
    if (i < arr.length) {
      res[i] = arr[i] * num;
      multiplier(i + 1);
    }
  }

  multiplier(0);
  return res;
}

function recursiveReverse(arr) {
  return arr.length > 0 ? recursiveReverse(arr.slice(1)).concat(arr[0]) : arr;
}
