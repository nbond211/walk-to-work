import React, { Component, PropTypes } from 'react';
import '../styles/next-prev-button.css';

class NextButton extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    nextPhoto: PropTypes.func.isRequired
  }

  render() {
    return (
        <button onClick={this.props.nextPhoto} className="next-prev-button">
          <i className="material-icons arrow-icon">chevron_right</i>
        </button>
    );
  }
}

export default NextButton;