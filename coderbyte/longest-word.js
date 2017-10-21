/**
 * https://coderbyte.com/information/Longest%20Word#
 * 
 * For this challenge you will be determining the largest word in a string.
 * 
 * @param {any} sen 
 * @returns 
 */
function LongestWord(sen) {
  return sen.match(/\w+/g).sort((a, b) => b.length - a.length)[0];
}
