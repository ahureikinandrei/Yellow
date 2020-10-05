import React from 'react';

import './header.css';
import icon from './logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img src={icon} alt="Bear icon" />
      </div>
    </div>
  );
};

export default Header;