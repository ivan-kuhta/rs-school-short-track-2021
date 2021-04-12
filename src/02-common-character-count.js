/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrayS1 = [...s1];
  const arrayS2 = [...s2];
  let count = 0;
  arrayS1.forEach((item) => {
    if (arrayS2.indexOf(item) !== -1) {
      count++;
      arrayS2.splice(arrayS2.indexOf(item), 1);
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
