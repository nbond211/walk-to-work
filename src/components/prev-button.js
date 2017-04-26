import React, { Component, PropTypes } from 'react';
import '../styles/prev-button.css';

class PrevButton extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    prevPhoto: PropTypes.func.isRequired
  }

  render() {
    return (
        <button onClick={this.props.prevPhoto} className="prev-button">Prev</button>
    );
  }
}

export default PrevButton;