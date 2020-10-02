import styled from 'styled-components';

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #565961;
`;

export const LogoRickAndMorty = styled.img`
  width: 300px;
  height: 60px;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavRickAndMorty = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 50px;
  font-size: 18px;
  width: 600px;
  height: 60px;
  list-style-type: none;
  color: #ffffff;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: flex;
  }
`;

export const Title = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 60px;
    color: #ffffff;
    font-size: 18px;
    font-family: Bradley Hand, cursive;
  }
`;

export const MenuButton = styled.label`
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
  }
`;

export const MenuBox = styled.ul`
  @media (max-width: 700px) {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: -100%;
    width: 220px;
    margin: 0;
    padding: 50px 0;
    list-style: none;
    background-color: #eceff1;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
    transition-duration: 0.25s;
  }
  @media (max-width: 500px) {
    width: 175px;
  }
  @media (max-width: 360px) {
    width: 155px;
  }
`;

export const MenuItem = styled.a`
  @media (max-width: 700px) {
    display: block;
    padding: 10px 22px;
    color: #000000;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
    &:hover {
      background-color: #cfd8dc;
    }
  }
  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

export const Line = styled.span`
  @media (max-width: 700px) {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    transition-duration: 0.25s;
    &::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #ffffff;
      transition-duration: 0.25s;
      content: '';
      top: 8px;
    }
    &::before {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #ffffff;
      transition-duration: 0.25s;
      content: '';
      top: -8px;
    }
  }
`;

export const MenuToggle = styled.input`
  @media (max-width: 700px) {
    opacity: 0;
    display: none;
    &:checked ~ ${MenuBox} {
      visibility: visible;
      right: 0;
    }
    &:checked ~ ${MenuButton} {
      position: fixed;
    }
    &:checked ~ ${MenuButton} {
      ${Line} {
        transform: rotate(45deg);
        &::before {
          top: 0;
          transform: rotate(0);
          background-color: #000000;
        }
        &::after {
          top: 0;
          transform: rotate(90deg);
          background-color: #000000;
        }
      }
    }
  }
`;

export const Item = styled.li``;
