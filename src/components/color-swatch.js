import React, { Component, PropTypes } from 'react';
import '../styles/color-swatch.css';

class ColorSwatch extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  render() {
    return (
        <div></div>
    );
  }
}

export default ColorSwatch;