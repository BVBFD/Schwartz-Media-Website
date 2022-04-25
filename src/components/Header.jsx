import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 5rem;
  padding-left: 2rem;
  padding-top: 0.8rem;
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  ${(props) =>
    props.scrollY > 0
      ? 'box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);height: 4rem;padding-top: 2rem;'
      : 'transform: scale(1);'}

  h1 {
    font-size: 3.4rem;
    letter-spacing: -0.2rem;
    margin-left: 2rem;
    font-weight: 510;
  }

  h1:nth-child(1) {
    ${(props) =>
      props.scrollY > 0
        ? 'transform: scale(0) translateY(-20rem);'
        : 'transform: scale(1);'}
  }

  h1:nth-child(2) {
    ${(props) =>
      props.scrollY > 0
        ? 'transform: scale(0.6) translateX(1rem) translateY(-1.8rem);'
        : 'transform: scale(1);'}
  }
`;

const MenuLogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MenuBtn = styled.div`
  cursor: pointer;
  width: 1.7rem;
  height: 1.4rem;
  position: relative;
  top: -0.8rem;
`;

const MenuBar = styled.div`
  width: 1.7rem;
  border-bottom: 0.1rem solid #000;
  position: relative;
  margin-right: 2rem;
  cursor: pointer;
  ${(props) => (props.toggleMenu ? '' : 'transform:rotate(45deg);')};

  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 100%;
    border-bottom: 0.1rem solid #000;
    ${(props) =>
      props.toggleMenu ? '' : 'transform: rotate(-90deg) translateX(0.45rem);'};
  }

  &::after {
    content: '';
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    border-bottom: 0.1rem solid #000;
    ${(props) => (props.toggleMenu ? '' : 'opacity: 0;')};
  }
`;

const Header = ({ scrollY }) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const onToggle = () => {
    !toggleMenu ? setToggleMenu(true) : setToggleMenu(false);
  };

  return (
    <Topbar scrollY={scrollY}>
      <MenuLogoBox>
        <MenuBtn onClick={onToggle}>
          <MenuBar toggleMenu={toggleMenu} />
        </MenuBtn>
        <h1>Schwartz</h1>
      </MenuLogoBox>

      <div>
        <h1>Media</h1>
      </div>
    </Topbar>
  );
};

export default Header;
