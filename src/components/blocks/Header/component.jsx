import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/images/logo.png';

import './styles.css';

const Header = () => {
  const linksHeader = {
    textDecoration: 'none',
    color: '#ffffff',
  };
  return (
    <>
      <div className="header">
        <img className="logoRickAndMorty" src={logo} alt="Rick And Morty" />
        <div className="title">Rick and Morty</div>
        <div className="hamburgerMenu">
          <input id="menuToggle" type="checkbox" />
          <label className="menuBtn" htmlFor="menuToggle">
            <span />
          </label>
          <ul className="menuBox">
            <li>
              <a className="menuItem" href="/characters">
                Characters
              </a>
            </li>
            <li>
              <a className="menuItem" href="/locations">
                Locations
              </a>
            </li>
            <li>
              <a className="menuItem" href="/episodes">
                Episodes
              </a>
            </li>
          </ul>
        </div>
        <ul className="navRickAndMorty">
          <Link style={linksHeader} to="/characters">
            <li>Characters</li>
          </Link>
          <Link style={linksHeader} to="/locations">
            <li>Locations</li>
          </Link>
          <Link style={linksHeader} to="/episodes">
            <li>Episodes</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
