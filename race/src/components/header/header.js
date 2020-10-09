import React, { useContext, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import SideMenu from '../side-meny'

import './header.css';
import icon from './logo.svg';
import filterIco from './filter.svg';
import filterIcoActive from './filter-active.svg';
import humburgerIco from './menu.png';


const Header = ({ activateFilter, filter }) => {
  const [humburger, activateHumburger] = useState(false)

  const filterBtn = (<li>
    <img src={filter ? filterIcoActive : filterIco} alt="Filter icon" onClick={() => activateFilter(!filter)} />
  </li>);

  const { token } = useContext(AuthContext);
  let navigation = (
    <nav className="header__navigation">
      <ul>
        <li className="links">
          <NavLink to="/jogs">JOGS</NavLink>
        </li>
        <li className="links">
          <NavLink to="/info">INFO</NavLink>
        </li>
        <li className="links">
          <NavLink to="/contacts">CONTACT US</NavLink>
        </li>
        <Route path="/jogs" render={() => filterBtn} />
        <li>
          <img src={humburgerIco} alt="humburger icon" className="humburger" onClick={() => activateHumburger(true)} />
        </li>
      </ul>
    </nav>)

  const navigationVie = !!token ? navigation : null;

  return (
    <div className="header">
      <div className="container header__container">
        <img src={icon} alt="Bear icon" />
        {navigationVie}
        {humburger ? <SideMenu activateHumburger={activateHumburger} /> : null}
      </div>
    </div>
  );
};

export default Header;