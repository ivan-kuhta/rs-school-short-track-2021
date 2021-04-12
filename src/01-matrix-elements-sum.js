/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const check = function(x, y) {
    for (let c = y - 1; c > 0; c--) {
      if (matrix[c][x] === 0) {
        return false;
      }
    }
    return true;
  };
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (check(x, y)) {
        sum += matrix[y][x];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
