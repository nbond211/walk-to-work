import React, { Component, PropTypes } from 'react';
import {formatDateTimeForTile} from '../utils/format-datetime';
import chooseRandomFrom from '../utils/choose-random-from';

import '../styles/tile.css';

class Tile extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    dateTime: PropTypes.string.isRequired
  }

  render() {
      const {colors, dateTime} = this.props;
      const color = chooseRandomFrom(colors);

      return (
        <div style={{backgroundColor: color}} className="tile col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <span>{formatDateTimeForTile(dateTime)}</span>
        </div>
    );
  }
}

export default Tile;