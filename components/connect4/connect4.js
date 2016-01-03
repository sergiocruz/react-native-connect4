import React, { Text, View } from 'react-native';
import styles from './styles/stylesheet';

import Board from './board';
import BoardRestart from './board-restart';

const Connect4 = require('./lib/index');

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

  handleRestart() {
    this.setState({
      board: new Connect4.Board()
    });
  }

  render() {
    return (
      <View  style={styles.gameBoard}>
        <Board
          board={this.state.board}
          onAddPiece={(columnIndex, piece) => { this.handleAddPiece(columnIndex, piece) }} />

        <BoardRestart onRestart={() => { this.handleRestart() }} />


      </View>
    );
  }
}
