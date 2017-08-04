export function isPalindrome(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

export function isAnyPermutationPalindrome(str: string): boolean {
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) {
      unmatched.delete(char);
    } else {
      unmatched.add(char)
    }
  });
  return unmatched.size <= 1;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('toot'));

console.log(isAnyPermutationPalindrome('civic'));
console.log(isAnyPermutationPalindrome('vicic'));
console.log(isAnyPermutationPalindrome('toot'));
console.log(isAnyPermutationPalindrome('civil'));