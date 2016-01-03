import { matchesRequired } from './config';

module.exports = isVertical;

/**
 * Are there matches found vertically?
 * @return {Boolean}
 */
function isVertical(grid) {

  let found = 0;
  let foundPiece = 0;
  let didFind = false;

  grid.forEach(column => {
    column.forEach(piece => {

      // Don't do anything else because it was already found
      if (didFind) {
        return;
      }

      // Reset things if piece is 0
      if (piece === 0) {
        found = 0;
        foundPiece = 0;
        return;
      }

      if (piece !== foundPiece) {
        found = 1;
        foundPiece = piece;
        return;
      }

      // Increase number of found pieces
      found++;

      // More than 4 found pieces in a column?
      if (found >= matchesRequired) {
        didFind = true;
        return;
      }
    });
  });

  return didFind;
}
