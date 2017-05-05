import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../styles/App.css';
import photoData from '../photo-data';
import TopBar from './top-bar';
import ColorSwatches from './color-swatches';
import PrevButton from './prev-button';
import NextButton from './next-button';

const photos = Object.getOwnPropertyNames(photoData);
const maxIndex = photos.length - 1;

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      index: 34
    };
  }

  nextPhoto = () => {
    const currentIndex = this.state.index;
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      this.setState({index: newIndex});
    } else {
      this.setState({index: 0});
    }
  }

  prevPhoto = () => {
    const currentIndex = this.state.index;
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      this.setState({index: newIndex});
    } else {
      this.setState({index: maxIndex});
    }
    
  }

  clickNext = () =>{
    const {intervalId} = this.state;
    this.clearInterval(intervalId);
    this.setState({isPlaying: false});
    this.nextPhoto();
  }

  clickPrev = () =>{
    const {intervalId} = this.state;
    this.clearInterval(intervalId);
    this.setState({isPlaying: false});
    this.prevPhoto();
  }

  autoPlay = () => {
    const intervalId = window.setInterval(() => {
      this.nextPhoto();
    }, 1500);
    this.setState({intervalId, isPlaying: true});
  }

  pause = () => {
    const {intervalId} = this.state;
    this.clearInterval(intervalId);
    this.setState({isPlaying: false});
  }

  clearInterval = intervalId => {
    if (intervalId) {
      window.clearInterval(intervalId);
    }
  }

  render() {
    const {index, isPlaying} = this.state;
    const photo = photoData[photos[index]];
    const {colors, dateTime, gpsLatitude, gpsLatitudeRef, gpsLongitude, gpsLongitudeRef} = photo;

    let playButton;
    if (isPlaying) {
      playButton = (
        <button onClick={this.pause} className="button">
          <i className="material-icons button-icon">pause_circle_outline</i>
        </button>
      );
    } else {
      playButton = (
        <button onClick={this.autoPlay} className="button">
          <i className="material-icons button-icon">play_circle_outline</i>
        </button>
      )
    }

    return (
      <div className="container">
        <div className="top-menu">
          <button className="button">
            <i className="material-icons button-icon">info_outline</i>
          </button>
          {playButton}  
          <button className="button">
            <i className="material-icons button-icon">view_week</i>
          </button>
          <button className="button">
            <i className="material-icons button-icon">grid_on</i>
          </button>
        </div>
        <TopBar
        dateTime={dateTime}
        gpsLatitude={gpsLatitude}
        gpsLatitudeRef={gpsLatitudeRef}
        gpsLongitude={gpsLongitude}
        gpsLongitudeRef={gpsLongitudeRef}
        />
        <div className="bottom-row">
          <PrevButton prevPhoto={this.clickPrev} active={index > 0}/>
          <ColorSwatches colors={colors}/>
          <NextButton nextPhoto={this.clickNext} active={index < maxIndex}/>
        </div>
      </div>
    );
  }
}

export default App;
