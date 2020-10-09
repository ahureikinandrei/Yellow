import React from 'react'
import { NavLink } from 'react-router-dom';

import './side-menu.css';
import bearSide from './BearSide.png';
import cancel from './cancel.svg';

const SideMenu = ({ activateHumburger }) => {
    return (
        <div className="side-manu">
            <img src={bearSide} alt="Filter icon" className="side-manu__logo" />
            <img src={cancel} alt="Cansel icon" className="side-manu__cancel" onClick={() => activateHumburger(false)} />
            <NavLink to="/jogs" onClick={() => activateHumburger(false)}>JOGS</NavLink>
            <NavLink to="/info" onClick={() => activateHumburger(false)}>INFO</NavLink>
            <NavLink to="/contacts" onClick={() => activateHumburger(false)}>CONTACT US</NavLink>
        </div>
    );
};

export default SideMenu;