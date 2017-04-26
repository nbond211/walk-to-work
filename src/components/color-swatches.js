import React, { Component, PropTypes } from 'react';
import ColorSwatch from './color-swatch';
import '../styles/color-swatches.css';

class ColorSwatches extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  render() {
      const {colors} = this.props;
      const colorSwatches = colors.map((key, index) => {
          return (
              <ColorSwatch key={key} color={colors[index]}/>
          );
      });
    return (
        <div className="color-swatches-container">
            {colorSwatches}
        </div>
    );
  }
}

export default ColorSwatches;