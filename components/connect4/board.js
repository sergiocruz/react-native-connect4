// Library dependencies
import React, { View, Text } from 'react-native';
import styles from './styles/stylesheet';
import BoardStatus from './board-status';

const Connect4 = require('./lib/index');


// Component dependencies
import Cell from './cell';

/**
 * Board Component
 */
export default class Board extends React.Component {
  render() {

    const { board } = this.props;

    const columns = board.grid.map((column, y) => {
      return (
        <View key={`column-${y}`}>
          {column.map((cell, x) => {
            return (
              <Cell
                key={`cell-${x}-${y}`}
                cell={cell.toString()}
                onAddPiece={() => { this.props.onAddPiece(y, board.nextPlayer) }} />
            )
          })}
        </View>
      )
    });

    return (
      <View style={styles.board}>

        <View style={styles.columns}>
          {columns}
        </View>

        <BoardStatus board={board} />

      </View>
    );
  }
}

/**
 * Props this component needs to receive
 * @type {Object}
 */
Board.propTypes = {
  board: React.PropTypes.instanceOf(Connect4.Board).isRequired,
  onAddPiece: React.PropTypes.func.isRequired
}
