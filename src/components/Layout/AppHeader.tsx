import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import CONSTANTS from '../../constants';
// TODO 2021/10/03 cw: svg를 컴포넌트 형태로 가져오기
import myPageIcon from '../../assets/my-page-icon.svg';
import menuIcon from '../../assets/menu-icon.svg';
import Menu from '../Menu';

const AppHeader: FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenu = useCallback(() => {
    setIsShowMenu((prev) => !prev);
  }, []);

  return (
    <Wrapper>
      <HeaderButtonWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Center />
        <RightWrapper>
          <a>{CONSTANTS.PUBLICH_A_RIDE}</a>
          <MyPageWrapper>
            <MenuButton onClick={showMenu}>
              <ProfileWrapper>
                <img src={myPageIcon} />
              </ProfileWrapper>
              <img src={menuIcon} />
              {isShowMenu && (
                <Menu show={isShowMenu} onCloseMenu={showMenu}></Menu>
              )}
            </MenuButton>
          </MyPageWrapper>
        </RightWrapper>
      </HeaderButtonWrapper>
    </Wrapper>
  );
};

export default AppHeader;

const ProfileWrapper = styled.div`
  border: 2px dashed rgb(221, 221, 221);
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

const MenuButton = styled.button`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(0, 175, 245);
  background: none;
  border: 0px;
  font-size: 16px;
  cursor: pointer;
`;

const MyPageWrapper = styled.div`
  display: flex !important;
  margin-left: 8px !important;
  margin-right: 8px !important;

  @media (min-width: 800px) {
    flex: 0 0 auto;
  }
`;

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  top: 0;
  z-index: 60;

  @media (min-width: 800px) {
    height: 72px;
    padding: 0 24px;
  }
`;

const HeaderButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  font-weight: 500;
`;

const LogoWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const RightWrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;

  @media (min-width: 800px) {
    flex: 0 0 auto;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 1.5em;
  }
`;
