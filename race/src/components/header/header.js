import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import './header.css';
import icon from './logo.svg';
import filterIco from './filter.svg';
import filterIcoActive from './filter-active.svg';

const Header = ({ activateFilter, filter }) => {

  const filterBtn = (<li>
    <img src={filter ? filterIcoActive : filterIco} alt="Filter icon" onClick={() => activateFilter(!filter)} />
  </li>);


  const { token } = useContext(AuthContext);
  let navigation = (
    <nav className="header__navigation">
      <ul>
        <li>
          <NavLink to="/jogs">JOGS</NavLink>
        </li>
        <li>
          <NavLink to="/info">INFO</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">CONTACT US</NavLink>
        </li>
        <Route path="/jogs" render={() => filterBtn} />
      </ul>
    </nav>)

  const navigationVie = !!token ? navigation : null;

  return (
    <div className="header">
      <div className="container header__container">
        <img src={icon} alt="Bear icon" />
        {navigationVie}
      </div>
    </div>
  );
};

export default Header;