import React, { View, Text, TouchableHighlight } from 'react-native';
import { Board as BoardClass } from './lib/index';

export default class Board extends React.Component {
  render() {

    const { board } = this.props;

    const columns = board.grid.map((column, y) => {
      return (
        <View>

          {column.map((cell, x) => {
            return (
              <TouchableHighlight style={{padding: '10', margin: '3 0', backgroundColor: '#EBF9FF', borderRadius: '20%'}}>
                <Text>#{x}</Text>
              </TouchableHighlight>
            )
          })}

        </View>
      )
    });

    return (
      <View style={{padding: '10'}}>
        <Text>Board</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {columns}
        </View>
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
