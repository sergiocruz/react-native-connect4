import React, { AppRegistry, StatusBarIOS, Text } from 'react-native';

import ExScreen from './ExScreen';
import Connect4 from './components/connect4/connect4';
import styles, { colors } from './components/connect4/styles/stylesheet';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headerColor: colors.cyan,
      isBoxPressed: false,
    };

  }

  render() {
    return (
      <ExScreen
        title="Play Connect4"
        headerColor={this.state.headerColor}
        scrollEnabled={!this.state.isBoxPressed}
        style={styles.container}>

        <Connect4 />

      </ExScreen>
    );
  }

  componentDidMount() {
    if (StatusBarIOS) {
      StatusBarIOS.setStyle('light-content', true);
      StatusBarIOS.setHidden(false, 'fade');
    }
  }
}

AppRegistry.registerComponent('main', () => App);
