const config = require('./config');

const {
  columns,
  rows,
  matchesRequired
} = config;

module.exports = isHorizontal;

/**
 * Are there any matches horizontally?
 * @param {Array} grid Multimentional array containing the connect4 grid
 *
 * @return {Boolean}
 */
function isHorizontal(grid) {

  // which piece was found and how many
  let found = 0;
  let foundPiece = 0;

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {

      // Current piece in this row
      let piece = grid[y][x];

      // Reset things if piece is 0
      if (piece === 0) {
        found = 0;
        foundPiece = 0;
        continue;
      }

      if (piece !== foundPiece) {
        found = 1;
        foundPiece = piece;
        continue;
      }

      // Increase number of found pieces
      found++;

      // More than 4 found pieces in a piece?
      if (found >= matchesRequired) {
        return true;
      }
    }
  }

  // nothing was found in the same row
  return false;
}
