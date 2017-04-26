import React, { Component, PropTypes } from 'react';
import '../styles/prev-button.css';

class PrevButton extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    prevPhoto: PropTypes.func.isRequired
  }

  render() {
    return (
        <div></div>
    );
  }
}

export default PrevButton;