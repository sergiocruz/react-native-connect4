import { StyleSheet } from 'react-native';

export const colors = {
  red: '#D91E00',
  redDark: '#A71700',
  blue: '#005168',
  white: '#FFFFFF',
  gray: '#EAEAEA',
  cyan: '#08C9FF',
  cyanDark: '#006987',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gameBoard: {
    padding: 10,
  },
  board: {
    backgroundColor: colors.gray,
    borderRadius: 5,
    padding: 10,
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cell: {
    backgroundColor: colors.white,
    borderRadius: 19,
    margin: 2,
    height: 30,
    padding: 20,
    width: 30,
  },
  cellRed: {
    backgroundColor: colors.red
  },
  cellBlue: {
    backgroundColor: colors.blue
  },
  boardStatus: {
    marginTop: 20
  },
  boardStatusRestart: {
    alignItems: 'center',
    backgroundColor: colors.cyan,
    borderRadius: 5,
    marginTop: 15,
    padding: 10,
  },
  boardStatusRestartText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  boardStatusNextTurn: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
  },
  boardStatusNextTurnText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 6,
  },
  boardStatusNextTurnTextRed: {
    color: colors.red
  },
  boardStatusNextTurnTextBlue: {
    color: colors.blue
  },
  boardStatusGameOver: {
    color: colors.redDark,
    fontSize: 22,
    fontWeight: 'bold',
  }
})


export default styles;

/**
 * Builds individual cell style
 * @param  {String} player
 * @return {Array}
 */
export function getCellStyle(player) {

  // Cell styles, containing default `cell` style by default
  let cellStyles = [styles.cell];

  if (player === 'red') {
    cellStyles.push(styles.cellRed);
  } else if (player === 'blue') {
    cellStyles.push(styles.cellBlue);
  }

  // Returns array
  return cellStyles

}
