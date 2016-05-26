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

  for (let x = 0; x < rows; x++) {

    // New stats (which piece was found and how many) for new row
    let found = 0;
    let foundPiece = 0;

    for (let y = 0; y < columns; y++) {

      // Current piece in this cell
      let piece = grid[y][x];

      // Go to next cell AND reset stats if current piece is 0
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

      // More than 4 found pieces in a row?
      if (found >= matchesRequired) {
        return true;
      }
    }
  }

  // No matches found
  return false;
}
