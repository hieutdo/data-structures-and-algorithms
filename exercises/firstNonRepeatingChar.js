function firstNonRepeatingChar(str) {
  const charMap = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charMap[char]) {
      charMap[char].count++;
    } else {
      charMap[char] = {
        count: 1,
        index: i,
      };
    }
  }
  const charObjs = Object.values(charMap);
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < charObjs.length; i++) {
    const { count, index } = charObjs[i];
    if (count === 1 && index < result) {
      result = index;
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? null : str.charAt(result);
}

console.log(firstNonRepeatingChar('aa'));
