import isHorizontal from './match-horizontal';
import isVertical from './match-vertical';
import isDiagonal from './match-diagonal';

/**
 * Does this grid contain any matches?
 * @param  {Array} grid    6x7 muldimentional array containing our grid
 * @return {Void}
 */
export default function matches(grid) {
  return isHorizontal(grid) || isVertical(grid) || isDiagonal(grid);
}
