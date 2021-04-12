/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrNumber = [...n.toString()];
  const minNumber = Math.min(...arrNumber);
  const indexNumber = arrNumber.findIndex((item) => +item === minNumber);
  return +arrNumber.filter((item, index) => index !== indexNumber).join('');
}

module.exports = deleteDigit;
