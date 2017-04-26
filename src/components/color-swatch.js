import React, { Component, PropTypes } from 'react';
import '../styles/color-swatch.css';

class ColorSwatch extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  render() {
      const {color} = this.props;
      const style = {backgroundColor: this.props.color};
    return (
        <div className="color-container">
            <div className="color-box" style={style}/>
            <div className="color-label">{color}</div>
        </div>
    );
  }
}

export default ColorSwatch;