import React, { Component, PropTypes } from 'react';
import '../styles/top-menu.css';

class TopMenu extends Component {
  static propTypes = {
    isPlaying: PropTypes.bool,
    isGridView: PropTypes.bool,
    pause: PropTypes.func,
    autoPlay: PropTypes.func,
    toggleGridView: PropTypes.func
  }

  render() {
      const {isPlaying, isGridView, pause, autoPlay, toggleGridView} = this.props;

      let playButton;
    if (isPlaying) {
      playButton = (
        <button onClick={pause} className="button">
          <i className="material-icons button-icon">pause_circle_outline</i>
        </button>
      );
    } else {
      playButton = (
        <button onClick={autoPlay} className="button">
          <i className="material-icons button-icon">play_circle_outline</i>
        </button>
      )
    }

    let gridButton;
    if (isGridView) {
      gridButton = (
        <button onClick={toggleGridView} className="button">
          <i className="material-icons button-icon">view_week</i>
        </button>
      );
    } else {
      gridButton = (
        <button onClick={toggleGridView} className="button">
          <i className="material-icons button-icon">grid_on</i>
        </button>
      )
    }

    return (
        <div className="top-menu">
          <button className="button">
            <i className="material-icons button-icon">info_outline</i>
          </button>
          {playButton}
          {gridButton}
        </div>
    );
  }
}

export default TopMenu;