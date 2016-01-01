import React, {
  TouchableHighlight,
  View
} from 'react-native';

import { colors, getCellStyle } from './styles/stylesheet';

/**
 * Cell Component
 */
export default class Cell extends React.Component {
  render() {

    let underlayColor;

    switch(this.props.cell) {
      case 'red':
        underlayColor = colors.red;
        break;

      case 'blue':
        underlayColor = colors.blue;
        break;

      default:
        underlayColor = colors.white;
        break;
    }

    return (
      <TouchableHighlight
        style={ getCellStyle(this.props.cell) }
        underlayColor={underlayColor}
        onPress={() => { this.props.onAddPiece() }}>

        {/* Empty view since `TouchableHighlight` needs a least one child */}
        <View></View>

      </TouchableHighlight>
    );
  }
}

Cell.propTypes = {
  onAddPiece: React.PropTypes.func.isRequired,
  cell: React.PropTypes.string.isRequired
}
