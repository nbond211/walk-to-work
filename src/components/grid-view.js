import React, {Component, PropTypes} from 'react';
import autoBind from 'react-autobind';
import '../styles/grid-view.css';
import '../styles/flexboxgrid.css';
import Tile from './tile';

class GridView extends Component {
    static propTypes = {
        photoData: PropTypes.object.isRequired,
        setIndex: PropTypes.func.isRequired,
        toggleGridView: PropTypes.func.isRequired,
        pause: PropTypes.func.isRequired
    }

    constructor(props) {
    super(props);
    this.photos = Object.getOwnPropertyNames(props.photoData);
    autoBind(this);
  }

    render() {
        const {photoData, setIndex, toggleGridView, pause} = this.props;

        const tiles = this.photos.map((photo, index) => {
            const data = photoData[photo];
            const {colors, dateTime} = data;
            return (
                <Tile 
                key={photo}
                index={index} 
                colors={colors} 
                dateTime={dateTime}
                setIndex={setIndex}
                toggleGridView={toggleGridView}
                pause={pause}
                />
            );
        });

        return (
            <div className="row">
                {tiles}
            </div>
        );
    }
}

export default GridView;