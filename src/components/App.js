import React, {Component} from 'react';
import autoBind from 'react-autobind';
import '../styles/App.css';
import photoData from '../photo-data';
import Day from './day';
import GridView from './grid-view';
import TopMenu from './top-menu';
import InfoModal from './info-modal';

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
    if (intervalId) {
      this.clearInterval(intervalId);
    }
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

  toggleModal = () => {
    const {isModalVisible} = this.state;
    this.setState({isModalVisible: !isModalVisible});
  }

  hideModal = () => {
    this.setState({isModalVisible: false});
  }

  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        this.clickPrev();
      } else if (event.key === 'ArrowRight') {
        this.clickNext();
      }
    });
  }

  render() {
    const {index, isPlaying, isGridView, isModalVisible} = this.state;
    const photo = photoData[photos[index]];

    return (
      <div>
        <InfoModal
        isModalVisible={isModalVisible}
        toggleModal={this.toggleModal}
        hideModal={this.hideModal}
        />
        <TopMenu
          isPlaying={isPlaying}
          isGridView={isGridView}
          pause={this.pause}
          autoPlay={this.autoPlay}
          toggleGridView={this.toggleGridView}
          toggleModal={this.toggleModal}
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
          pause={this.pause}
        />
        }
        
      </div>
    );
  }
}

export default App;
