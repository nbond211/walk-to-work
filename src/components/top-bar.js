import React, { Component, PropTypes } from 'react';
import '../styles/top-bar.css';
import formatDatetime from '../utils/format-datetime';
import formatGPSCoords from '../utils/format-gps-coords';

class TopBar extends Component {
  static propTypes = {
    dateTime: PropTypes.string.isRequired,
    gpsLatitude: PropTypes.array.isRequired,
    gpsLatitudeRef: PropTypes.string.isRequired,
    gpsLongitude: PropTypes.array.isRequired,
    gpsLongitudeRef: PropTypes.string.isRequired
  }

  render() {
      const {dateTime, gpsLatitude, gpsLatitudeRef, gpsLongitude, gpsLongitudeRef} = this.props;
    return (
        <div className="topBar">
            <div className="dateTimeContainer">
                <span>{formatDatetime(dateTime)}</span>
            </div>
            <div className="gpsContainer">
                <span>{formatGPSCoords(gpsLatitude)} {gpsLatitudeRef}&nbsp;</span>
                <span>{formatGPSCoords(gpsLongitude)} {gpsLongitudeRef}</span>
            </div>
        </div>
    );
  }
}

export default TopBar;