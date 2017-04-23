import React, { Component, PropTypes } from 'react';
import '../styles/color-swatches.css';

class ColorSwatches extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  render() {
    return (
        <div>ColorSwatch</div>
    );
  }
}

export default ColorSwatches;