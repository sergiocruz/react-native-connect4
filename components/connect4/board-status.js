import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import styles, { getCellStyle } from './styles/stylesheet';

/**
 * BoardStatus Component
 */
export default class BoardStatus extends React.Component {
  render() {

    const { board } = this.props;
    let nextTurn;

    if (board.isActive) {

      let textStyles = [
        styles.boardStatusNextTurnText,
        (board.nextPlayer === 'red')?
          styles.boardStatusNextTurnTextRed : styles.boardStatusNextTurnTextBlue
      ];

      nextTurn = (
        <View style={styles.boardStatusNextTurn}>
          <Text style={textStyles}>NEXT TURN</Text>
          <View style={ getCellStyle(board.nextPlayer) } />
        </View>
      );

    } else {

      nextTurn = (
        <View style={styles.boardStatusNextTurn}>
          <Text style={styles.boardStatusGameOver}>GAME OVER</Text>
        </View>
      );

    }

    return (
      <View style={styles.boardStatus}>
        {nextTurn}
      </View>
    );
  }
}
