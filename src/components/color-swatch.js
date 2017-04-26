import React, { Component, PropTypes } from 'react';
import '../styles/color-swatch.css';

class ColorSwatch extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }

  render() {
      const {color, index} = this.props;
      const style = (index === 0) ? {borderLeftStyle: 'solid', borderLeftWidth: '10px', backgroundColor: this.props.color} : {backgroundColor: this.props.color};
      const labelStyle = (index === 0) ? {borderLeftStyle: 'solid', borderLeftWidth: '10px'} : undefined;
    return (
        <div className="color-container">
            <div className="color-box" style={style}/>
            <div className="color-label" style={labelStyle}>{color}</div>
        </div>
    );
  }
}

export default ColorSwatch;