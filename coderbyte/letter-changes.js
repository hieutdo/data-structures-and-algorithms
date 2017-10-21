/**
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

Sample Test Cases

Input:"hello*3"
Output:"Ifmmp*3"

Input:"fun times!"
Output:"gvO Ujnft!"
 * 
 * @param {string} str 
 */
function LetterChanges(str) {
  return str
    .replace(/[a-z]/gi, letter => {
      if (letter === 'z') return 'a';
      if (letter === 'Z') return 'A';
      return String.fromCharCode(letter.charCodeAt(0) + 1);
    })
    .replace(/[aeiou]/gi, vowel => vowel.toUpperCase());
}

module.exports = LetterChanges;
