const isHorizontal = require('./match-horizontal');
const isVertical = require('./match-vertical');
const isDiagonal = require('./match-diagonal');

// Exports matches function
module.exports = matches;

/**
 * Does this grid contain any matches?
 * @param  {Array} grid    6x7 muldimentional array containing our grid
 * @return {Void}
 */
function matches(grid) {
  return isHorizontal(grid) || isVertical(grid) || isDiagonal(grid);
}
