import React, { FC, ReactNode, useCallback } from 'react';
import { CloseMenuButton, CreateMenu } from './styles';
import styled from 'styled-components';
import LoginButton from '../LoginButton';

interface Props {
  show: boolean;
  onCloseMenu: () => void;
  closeButton?: boolean;
}

const Menu: FC<Props> = ({ show, onCloseMenu, closeButton }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <CreateMenu onClick={onCloseMenu}>
      <NavWrapper onClick={stopPropagation}>
        {closeButton && (
          <CloseMenuButton onClick={onCloseMenu}>&times;</CloseMenuButton>
        )}
        <Nav>
          <ul>
            <li>
              <LoginButton />
            </li>
          </ul>
        </Nav>
      </NavWrapper>
    </CreateMenu>
  );
};

export default Menu;

const NavWrapper = styled.div`
  position: relative;
  z-index: 2;
  left: 0px;
  top: 56px;
  bottom: 0px;
  overflow-y: auto;
  background-color: rgb(255, 255, 255);
  transition: transform 200ms ease-in-out 0s;
  will-change: transform;
  transform: translateY(-100%);
  max-width: 100%;

  @media (min-width: 800px) {
    top: 72px;
    left: auto;
    right: auto;
    width: 350px;
    float: right;
    position: relative;
  }

  box-shadow: rgb(0 0 0 / 30%) 0px 36px 36px 0px;
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
    list-style-type: none;
  }
`;

Menu.defaultProps = {
  closeButton: true,
};
