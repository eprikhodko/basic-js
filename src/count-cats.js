const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  // loop through every line in the matrix
  for (let i = 0; i < matrix.length; i += 1) {
    // for each array check every element of this array
    for (let j = 0; j < matrix[i].length; j += 1) {
      // if current element of array equal to "^^", then increase count by 1
      if (matrix[i][j] === "^^") {
        count += 1;
      }
    }
  }
  return count;
}

module.exports = {
  countCats,
};
