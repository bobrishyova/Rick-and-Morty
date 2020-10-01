import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/images/logo.png';
import { CHARACTERS_PAGE, LOCATIONS_PAGE, EPISODES_PAGE } from '@/constants';

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
              <a className="menuItem" href={CHARACTERS_PAGE}>
                Characters
              </a>
            </li>
            <li>
              <a className="menuItem" href={LOCATIONS_PAGE}>
                Locations
              </a>
            </li>
            <li>
              <a className="menuItem" href={EPISODES_PAGE}>
                Episodes
              </a>
            </li>
          </ul>
        </div>
        <ul className="navRickAndMorty">
          <Link style={linksHeader} to={CHARACTERS_PAGE}>
            <li>Characters</li>
          </Link>
          <Link style={linksHeader} to={LOCATIONS_PAGE}>
            <li>Locations</li>
          </Link>
          <Link style={linksHeader} to={EPISODES_PAGE}>
            <li>Episodes</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
