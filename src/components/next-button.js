import React, { Component, PropTypes } from 'react';
import '../styles/next-button.css';

class NextButton extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    nextPhoto: PropTypes.func.isRequired
  }

  render() {
    return (
        <button onClick={this.props.nextPhoto} className="next-button">Next</button>
    );
  }
}

export default NextButton;