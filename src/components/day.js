import React, {Component, PropTypes} from 'react';
import TopBar from './top-bar';
import ColorSwatches from './color-swatches';
import PrevButton from './prev-button';
import NextButton from './next-button';
import '../styles/day.css';

class Day extends Component {
    static propTypes = {
        photo: PropTypes.object.isRequired,
        clickNext: PropTypes.func.isRequired,
        clickPrev: PropTypes.func.isRequired
    }

    render() {
        const {photo, clickNext, clickPrev} = this.props;
        const {colors, dateTime, gpsLatitude, gpsLatitudeRef, gpsLongitude, gpsLongitudeRef} = photo;

        return (
            <div className="day-container">
                <TopBar
                    dateTime={dateTime}
                    gpsLatitude={gpsLatitude}
                    gpsLatitudeRef={gpsLatitudeRef}
                    gpsLongitude={gpsLongitude}
                    gpsLongitudeRef={gpsLongitudeRef}
                />
                <div className="bottom-row">
                    <PrevButton prevPhoto={clickPrev}/>
                    <ColorSwatches colors={colors}/>
                    <NextButton nextPhoto={clickNext}/>
                </div>
            </div>
        );
    }
}

export default Day;