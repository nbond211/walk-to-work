import React, { Component, PropTypes } from 'react';
import '../styles/color-swatch.css';

class ColorSwatch extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  render() {
      const {color} = this.props;
    return (
        <div className="color-container">
            <div className="color-box" style={{backgroundColor: color}}/>
            <div className="color-label">{color}</div>
        </div>
    );
  }
}

export default ColorSwatch;