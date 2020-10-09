import React from 'react';

import icon from './icon.svg';
import './jog-info.css';

const JogInfo = ({ jog, filterFrom, filterTo }) => {
    console.log(jog);
    const jogsinfo = jog.response.jogs.map((jog) => {
        return (
            <div className="jog-info" key={jog.id} date={jog.date}>
                <img src={icon} alt="Jog icon" />
                <div className="jog-info__data">
                    <span><span>{jog.date}</span></span>
                    <span>Speed: <span className="jog-info__value">15</span></span>
                    <span>Distance: <span className="jog-info__value">{jog.distance} km</span></span>
                    <span>Time: <span className="jog-info__value">{jog.time} min</span></span>
                </div>
            </div>
        );
    })

    if (filterFrom || filterTo) {
        return jogsinfo.filter((jog) => {
            return (+filterFrom || 0) < jog.props.date && jog.props.date < (+filterTo || Infinity);
        });
    }

    return jogsinfo
}

export default JogInfo;