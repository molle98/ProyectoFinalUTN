import React from 'react';
import logo from '../img/home/logo.png'

const Header = () => {
  return (
    <header>
      <div className="holder">
        <img src={logo} width="300" alt="ComicSensitive" className="center" />
      </div>
    </header>
  );
};

export default Header;
