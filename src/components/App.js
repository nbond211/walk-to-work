import React, {Component} from 'react';
import autoBind from 'react-autobind';
import '../styles/App.css';
import photoData from '../photo-data';
import Day from './day';
import GridView from './grid-view';
import TopMenu from './top-menu';

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

  setIndex = index => {
    this.setState({index});
  }

  clickNext = () => {
    const {intervalId} = this.state;
    this.clearInterval(intervalId);
    this.setState({isPlaying: false});
    this.nextPhoto();
  }

  clickPrev = () => {
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

  toggleGridView = () => {
    const {isGridView} = this.state;
    this.setState({isGridView: !isGridView});
  }

  render() {
    const {index, isPlaying, isGridView} = this.state;
    const photo = photoData[photos[index]];

    return (
      <div>
        <TopMenu
          isPlaying={isPlaying}
          isGridView={isGridView}
          pause={this.pause}
          autoPlay={this.autoPlay}
          toggleGridView={this.toggleGridView} 
        />
        {!isGridView &&
        <Day
          photo={photo}
          clickPrev={this.clickPrev}
          clickNext={this.clickNext}
        />
        }
        {isGridView &&
        <GridView
          photoData={photoData}
          toggleGridView={this.toggleGridView}
          setIndex={this.setIndex}
        />
        }
        
      </div>
    );
  }
}

export default App;
