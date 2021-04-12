/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index = Math.floor(array.length / 2);
  let tmpIndex = Math.floor(array.length / 2);
  if (value > array[array.length - 1]) return -1;
  while (value !== array[index]) {
    let tmp = Math.floor(tmpIndex / 2);
    if (tmp === 0) {
      tmp = 1;
    }
    if (value < array[index]) {
      index -= tmp;
    } else {
      index += tmp;
    }
    tmpIndex = tmp;
  }
  return index;
}

module.exports = findIndex;
