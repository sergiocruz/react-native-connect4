import Exponent from 'exponent';
import React from 'react';
import { AppRegistry, Text, StatusBar } from 'react-native';

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
        <StatusBar barStyle="light-content" />

      </ExScreen>
    );
  }
}

AppRegistry.registerComponent('main', () => App);
