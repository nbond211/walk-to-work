import React, { Component, PropTypes } from 'react';
import '../styles/next-prev-button.css';

class PrevButton extends Component {
  static propTypes = {
    prevPhoto: PropTypes.func.isRequired
  }

  render() {
    return (
        <button onClick={this.props.prevPhoto} className="next-prev-button">
          <i className="material-icons arrow-icon">chevron_left</i>
        </button>
    );
  }
}

export default PrevButton;