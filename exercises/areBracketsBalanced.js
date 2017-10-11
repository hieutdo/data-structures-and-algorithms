const BRACKET_MAP = {
  '[': ']',
  '(': ')',
  '{': '}',
};
const OPEN_BRACKETS = Object.keys(BRACKET_MAP);
const CLOSE_BRACKETS = Object.values(BRACKET_MAP);

function areBracketsBalanced(str) {
  const brackets = str.split('');
  const stack = [];
  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];
    if (OPEN_BRACKETS.includes(bracket)) {
      stack.push(bracket);
    } else if (CLOSE_BRACKETS.includes(bracket)) {
      if (stack.length === 0) return false;
      const openBracket = stack.pop();
      if (BRACKET_MAP[openBracket] !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = areBracketsBalanced;
