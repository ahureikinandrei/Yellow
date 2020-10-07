import React, { useContext } from 'react';

import './header.css';
import icon from './logo.svg';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {

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
        <li>
          <NavLink to="/jog-create-page">create</NavLink>
        </li>
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