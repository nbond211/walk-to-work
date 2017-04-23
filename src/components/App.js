import React, { Component } from 'react';
import '../styles/App.css';
import photoData from '../photo-data';
import TopBar from './TopBar';
import ColorSwatches from './ColorSwatches';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

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
    const photo = photoData[photos[this.state.index]];
    const {colors, dateTime, gpsLatitude, gpsLatitudeRef, gpsLongitude, gpsLongitudeRef} = photo;

    return (
      <div className="container">
        <div className="main-panel">
          <TopBar/>
          <ColorSwatches/>
        </div>
        <div className="side-panel">
          <PrevButton/>
          <NextButton/>
        </div>
      </div>
    );
  }
}

export default App;
