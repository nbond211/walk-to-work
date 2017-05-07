import React, {Component, PropTypes} from 'react';
import contrast from 'contrast';
import {formatDateTimeForTile} from '../utils/format-datetime';
import chooseRandomFrom from '../utils/choose-random-from';
import '../styles/tile.css';

class Tile extends Component {
    static propTypes = {
        colors: PropTypes.array.isRequired,
        dateTime: PropTypes.string.isRequired
    }

    render() {
        const {colors, dateTime} = this.props;
        const color = chooseRandomFrom(colors);
        const labelColor = contrast(color) === 'light' ? '#000' : '#fff'; 

        return (
            <div className="tile-container col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div style={{backgroundColor: color}} className="tile">
                    <span style={{color: labelColor}} className="tile-label">{formatDateTimeForTile(dateTime)}</span>
                </div>
            </div>
        );
    }
}

export default Tile;