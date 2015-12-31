import React, { Text, View } from 'react-native';

import Board from './board';
import Connect4 from './lib/index';

export default class Connect4Component extends React.Component {

  constructor() {
    super();

    this.state = {
      board: new Connect4.Board()
    };
  }

  /**
   * Function called when each cell is clicked, adding piece and re-render UI
   * @param  {Number} columnIndex
   * @param  {String} piece
   * @return {Void}
   */
  handleAddPiece(columnIndex, piece) {

    // Does nothing if board is inactive
    if (!this.state.board.isActive) {
      return;
    }

    // Add piece
    this.state.board.addPiece(columnIndex, piece);

    // Reresh state with newly changed
    this.setState({
      board: this.state.board
    });

  }

  render() {
    return (
      <View>
        <Text>Connect4</Text>
        <Board
          board={this.state.board}
          addPiece={(columnIndex, piece) => { this.handleAddPiece(columnIndex, piece) }} />
      </View>
    );
  }
}
