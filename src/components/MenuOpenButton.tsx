import React, { FC, useCallback, useContext, useState } from 'react';
import styled from 'styled-components';

import Menu from './Menu';

// TODO 2021/10/03 cw: svg 를 컴포넌트 형태로 가져오기
import defaultProfile from '../assets/default-profile.svg';
import menuIcon from '../assets/menu-icon.svg';
import { UserContext } from '../contexts/AuthProvider';

const MenuOpenButton: FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { user } = useContext(UserContext);

  const toggleShowMenu = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.stopPropagation();
      setIsShowMenu((prev) => !prev);
    },
    [],
  );

  return (
    <Wrapper>
      <MenuButton onClick={toggleShowMenu}>
        {user && <span>{user.nickname}</span>}
        <ProfileWrapper>
          <img
            src={user ? user.profilePicture : defaultProfile}
            alt="myPageIcon"
          />
        </ProfileWrapper>
        <img src={menuIcon} alt="menuIcon" />
        {isShowMenu && <Menu />}
      </MenuButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex !important;
  margin-left: 8px !important;
  margin-right: 8px !important;

  @media (min-width: 800px) {
    flex: 0 0 auto;
  }
`;

const MenuButton = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(0, 175, 245);
  background: none;
  border: 0;
  font-size: 16px;
  cursor: pointer;

  span {
    margin-left: 16px !important;
    margin-right: 20px !important;
    color: #054752;
  }
`;

const ProfileWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
  width: 48px;
  height: 48px;
  margin-right: 16px !important;
  border: 1px solid #ddd;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MenuOpenButton;
