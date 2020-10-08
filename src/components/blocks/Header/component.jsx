import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/images/logo.png';
import { CHARACTERS_PAGE, LOCATIONS_PAGE, EPISODES_PAGE } from '@/constants';

import {
  HeaderPage,
  LogoRickAndMorty,
  NavRickAndMorty,
  HamburgerMenu,
  MenuButton,
  MenuBox,
  Title,
  MenuItem,
  MenuToggle,
  Line,
  Item,
} from './styles';

const Header = () => {
  const linksHeader = {
    textDecoration: 'none',
    color: '#ffffff',
  };
  return (
    <>
      <HeaderPage>
        <LogoRickAndMorty src={logo} alt="Rick And Morty" />
        <Title>Rick and Morty</Title>
        <HamburgerMenu>
          <MenuToggle id="menuToggle" type="checkbox" />
          <MenuButton htmlFor="menuToggle">
            <Line />
          </MenuButton>
          <MenuBox>
            <Item>
              <MenuItem href={CHARACTERS_PAGE}>Characters</MenuItem>
            </Item>
            <Item>
              <MenuItem href={LOCATIONS_PAGE}>Locations</MenuItem>
            </Item>
            <Item>
              <MenuItem href={EPISODES_PAGE}>Episodes</MenuItem>
            </Item>
          </MenuBox>
        </HamburgerMenu>
        <NavRickAndMorty>
          <Link style={linksHeader} to={CHARACTERS_PAGE}>
            <Item>Characters</Item>
          </Link>
          <Link style={linksHeader} to={LOCATIONS_PAGE}>
            <Item>Locations</Item>
          </Link>
          <Link style={linksHeader} to={EPISODES_PAGE}>
            <Item>Episodes</Item>
          </Link>
        </NavRickAndMorty>
      </HeaderPage>
    </>
  );
};

export default Header;
