import React, { Component, PropTypes } from 'react';
import '../styles/top-bar.css';
import formatDatetime from '../utils/format-datetime';

class TopBar extends Component {
  static propTypes = {
    dateTime: PropTypes.string.isRequired,
    gpsLatitude: PropTypes.array.isRequired,
    gpsLatitudeRef: PropTypes.string.isRequired,
    gpsLongitude: PropTypes.array.isRequired,
    gpsLongitudeRef: PropTypes.string.isRequired
  }

  render() {
      console.log(this.props.dateTime);
    return (
        <div>{formatDatetime(this.props.dateTime)}</div>
    );
  }
}

export default TopBar;