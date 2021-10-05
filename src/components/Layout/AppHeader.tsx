import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import UI from '../../constants/ui';
// TODO 2021/10/03 cw: svg 를 컴포넌트 형태로 가져오기
import myPageIcon from '../../assets/my-page-icon.svg';
import menuIcon from '../../assets/menu-icon.svg';
import Menu from '../Menu';

const AppHeader: FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleShowMenu = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      console.log('toggleShowMenu');
      e.stopPropagation();
      setIsShowMenu((prev) => !prev);
    },
    [],
  );

  return (
    <Wrapper>
      <InnerWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Center />
        <RightWrapper>
          <CreateRideButton>{UI.PUBLICH_A_RIDE}</CreateRideButton>
          <MyPageWrapper>
            <MenuButton onClick={toggleShowMenu}>
              <ProfileWrapper>
                <img src={myPageIcon} alt="myPageIcon" />
              </ProfileWrapper>
              <img src={menuIcon} alt="menuIcon" />
              {isShowMenu && (
                <Menu show={isShowMenu} onCloseMenu={toggleShowMenu}></Menu>
              )}
            </MenuButton>
          </MyPageWrapper>
        </RightWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

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

const MenuButton = styled.a`
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
  -webkit-box-align: center;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: #fff;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 72px;
  line-height: 16px;
  margin: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  vertical-align: baseline;
  width: 100%;
  z-index: 60;

  @media (min-width: 800px) {
    height: 72px;
    padding: 0 24px;
  }
`;

const InnerWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin: auto;
  padding: 0;
  vertical-align: baseline;
  width: 1280px;
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
  -webkit-box-pack: end;
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 0;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  justify-content: flex-end;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;

  &:nth-child(3n) {
    flex: 0 0 auto;
  }

  @media (min-width: 800px) {
    flex: 0 0 auto;
  }
`;

const CreateRideButton = styled.a`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  border-width: 0;
  box-sizing: border-box;
  color: #00aff5;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin: 0 24px 0 0;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;
`;

export default AppHeader;
