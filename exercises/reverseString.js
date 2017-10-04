function reverse1(str) {
  return str ? reverse1(str.substr(1)) + str.charAt(0) : str;
}

function reverse2(str) {
  const arr = str.split('');
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
  return arr.join('');
}

String.prototype.reverse = function() {
  return reverse1(this);
};
console.log(reverse1('hello world'));
console.log(reverse2('hello world'));
