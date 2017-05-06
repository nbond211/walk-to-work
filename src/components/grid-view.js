import React, {Component, PropTypes} from 'react';
import autoBind from 'react-autobind';
import '../styles/grid-view.css';
import '../styles/flexboxgrid.css';
import Tile from './tile';

class GridView extends Component {
    static propTypes = {
        photoData: PropTypes.object.isRequired,
    }

    constructor(props) {
    super(props);
    this.photos = Object.getOwnPropertyNames(props.photoData);
    autoBind(this);
  }

    render() {
        const {photoData} = this.props;

        const tiles = this.photos.map(photo => {
            const data = photoData[photo];
            const {colors, dateTime} = data;
            return (
                <Tile key={photo} colors={colors} dateTime={dateTime}/>
            );
        });

        return (
            <div className="row around-md around-lg">
                {tiles}
            </div>
        );
    }
}

export default GridView;