import React, {Component, PropTypes} from 'react';
import autoBind from 'react-autobind';
import contrast from 'contrast';
import {formatDateTimeForTile} from '../utils/format-datetime';
import chooseRandomFrom from '../utils/choose-random-from';
import '../styles/tile.css';

class Tile extends Component {
    static propTypes = {
        colors: PropTypes.array.isRequired,
        dateTime: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        toggleGridView: PropTypes.func.isRequired,
        setIndex: PropTypes.func.isRequired,
        pause: PropTypes.func.isRequired
    }

    constructor(props) {
    super(props);
    autoBind(this);
  }

  handleClick = () => {
      this.props.setIndex(this.props.index);
      this.props.toggleGridView();
      this.props.pause();
  }

    render() {
        const {colors, dateTime} = this.props;
        const color = chooseRandomFrom(colors);
        const labelColor = contrast(color) === 'light' ? '#000' : '#fff'; 

        return (
            <div className="tile-container col-xs-12 col-sm-5 col-md-4 col-lg-3">
                <div onClick={this.handleClick} style={{backgroundColor: color}} className="tile">
                    <span style={{color: labelColor}} className="tile-label">{formatDateTimeForTile(dateTime)}</span>
                </div>
            </div>
        );
    }
}

export default Tile;