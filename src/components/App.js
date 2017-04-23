import React, { Component } from 'react';
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
    this.state = {
      index: 0
    };
  }

  nextPhoto = () => {
    const currentIndex = this.state.index;
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      this.setState({index: newIndex});
    }
  }

  prevPhoto = () => {
    const currentIndex = this.state.index;
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      this.setState({index: newIndex});
    }
  }

  render() {
    const {index} = this.state;
    const photo = photoData[photos[index]];
    const {colors, dateTime, gpsLatitude, gpsLatitudeRef, gpsLongitude, gpsLongitudeRef} = photo;

    return (
      <div className="container">
        <div className="main-panel">
          <TopBar
          dateTime={dateTime}
          gpsLatitude={gpsLatitude}
          gpsLatitudeRef={gpsLatitudeRef}
          gpsLongitude={gpsLatitude}
          gpsLongitudeRef={gpsLongitudeRef}
          />
          <ColorSwatches colors={colors}/>
        </div>
        <div className="side-panel">
          <PrevButton prevPhoto={this.prevPhoto} active={index > 0}/>
          <NextButton nextPhoto={this.NextPhoto} active={index < maxIndex}/>
        </div>
      </div>
    );
  }
}

export default App;
