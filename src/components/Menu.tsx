import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../contexts/AuthProvider';

import MenuList from './MenuList';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../api/axios';
import UI from '../constants/ui';
import { loginWithKakao } from '../utils/kakaoLogin';

interface Props {
  onCloseMenu: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Menu: FC<Props> = ({ onCloseMenu }: Props) => {
  const { user, handleUser } = useContext(UserContext);

  const history = useHistory();

  const logout = async () => {
    handleUser!(null);
    await axiosInstance.post('/logout');
    history.push('/');
  };

  return (
    <CreateMenu onClick={onCloseMenu}>
      <NavWrapper>
        <Nav>
          <ul>
            {user ? (
              <>
                <MenuList
                  buttonName={UI.MY_RIDES_AS_DRIVER}
                  handleClick={() => history.push('/myRides/asDriver')}
                />
                <MenuList
                  buttonName={UI.MY_RIDES_AS_PASSENGER}
                  handleClick={() => history.push('/myRides/asPassenger')}
                />
                <MenuList
                  buttonName={UI.INBOX}
                  handleClick={() => history.push('/inbox')}
                />
                <MenuList buttonName={UI.LOGOUT} handleClick={logout} />
              </>
            ) : (
              <MenuList buttonName={UI.LOGIN} handleClick={loginWithKakao} />
            )}
          </ul>
        </Nav>
      </NavWrapper>
    </CreateMenu>
  );
};

export const CreateMenu = styled.aside`
  position: fixed;
  inset: 0px;
  z-index: 50;
  visibility: visible;

  @media (min-width: 800px) {
    inset: 0px auto 0px 50%;
    width: 1280px;
    position: fixed;
    transform: translate(-50%, 0px);
  }
`;

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
