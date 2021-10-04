import React, { FC } from 'react';
import { CreateMenu } from './styles';
import styled from 'styled-components';
import LoginButton from '../LoginButton';

interface Props {
  show: boolean;
  onCloseMenu: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Menu: FC<Props> = ({ show, onCloseMenu }: Props) => {
  if (!show) {
    return null;
  }

  return (
    <CreateMenu onClick={onCloseMenu}>
      <NavWrapper>
        <Nav>
          <ul>
            <LoginButton />
          </ul>
        </Nav>
      </NavWrapper>
    </CreateMenu>
  );
};

const NavWrapper = styled.div`
  position: relative;
  z-index: 2;
  left: 0;
  top: 56px;
  bottom: 0;
  overflow-y: auto;
  background-color: rgb(255, 255, 255);
  transition: transform 200ms ease-in-out 0s;
  will-change: transform;
  max-width: 100%;

  @media (min-width: 800px) {
    top: 72px;
    left: auto;
    right: auto;
    width: 350px;
    float: right;
    position: relative;
  }

  box-shadow: rgb(0 0 0 / 30%) 0 36px 36px 0;
  transform: translateY(0%);
  width: 400px;
`;

const Nav = styled.nav`
  background-color: #fff !important;
  max-height: calc(100vh - 72px);
  overflow-y: auto;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
`;

export default Menu;
