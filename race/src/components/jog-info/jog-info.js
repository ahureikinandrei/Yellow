import React from 'react';

import icon from './icon.svg';
import './jog-info.css';

const JogInfo = ({ jog }) => {
    return (
        jog.response.jogs.map((jog) => {
            return (
                <div className="jog-info" key={jog.id}>
                    <img src={icon} alt="Jog icon" />
                    <div className="jog-info__data">
                        <span>12.05.2020</span>
                        <span>Speed:</span>
                        <span>Distance:</span>
                        <span>Time:</span>
                    </div>
                </div>
            );
        })
    )

}

export default JogInfo;