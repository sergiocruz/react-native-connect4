import React, {TouchableHighlight, Text} from 'react-native';
import styles, {colors} from './styles/stylesheet';

export default class BoardRestart extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.boardStatusRestart}
        underlayColor={colors.cyanDark}
        onPress={() => this.props.onRestart()}>
        <Text style={styles.boardStatusRestartText}>RESTART GAME</Text>
      </TouchableHighlight>
    )
  }
}
