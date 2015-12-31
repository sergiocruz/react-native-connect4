import React, { View, Text } from 'react-native';
import { Board as BoardClass } from './lib/index';

export default class Board extends React.Component {
  render() {

    const { board } = this.props;

    const columns = board.grid.map((column, y) => {
      return (
        <View>
          <Text>Column #{y}</Text>

          {column.map((cell, x) => {
            return (
              <Text>Cell #{x}</Text>
            )
          })}

        </View>
      )
    });

    return (
      <View>
        <Text>Board</Text>
        {columns}
      </View>
    );
  }
}

/**
 * Props this component needs to receive
 * @type {Object}
 */
Board.propTypes = {
  board: React.PropTypes.instanceOf(BoardClass).isRequired,
  addPiece: React.PropTypes.func.isRequired
}
