import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import '../styles/info-modal.css';

class InfoModal extends Component {
  static propTypes = {
    isModalVisible: PropTypes.bool,
    toggleModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);
    if ((!domNode || !domNode.contains(event.target))) {
        this.props.hideModal();
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
  }

componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  }

  render() {
      const {isModalVisible, toggleModal} = this.props;
      const style = isModalVisible ? {display: 'block'} : {display: 'none'};
    return (
        <div style={style} className="info-modal">
            <button onClick={toggleModal} className="next-prev-button close-modal">
                <i className="material-icons">close</i>
            </button>
            <p>
                From 1.31.17 until 6.30.17, I walked to work every morning and took a photo at a different location during my commute. 
                I extracted prominent colors, date time information, and gps coordinates from each photo. Here is my walk to work.
            </p>
        </div>
    );
  }
}

export default InfoModal;