import React, { Component, PropTypes } from 'react';
import '../styles/top-bar.css';

class TopBar extends Component {
  static propTypes = {
    dateTime: PropTypes.string.isRequired,
    gpsLatitude: PropTypes.array.isRequired,
    gpsLatitudeRef: PropTypes.string.isRequired,
    gpsLongitude: PropTypes.array.isRequired,
    gpsLongitudeRef: PropTypes.string.isRequired
  }

  render() {
    return (
        <div>TopBar</div>
    );
  }
}

export default TopBar;