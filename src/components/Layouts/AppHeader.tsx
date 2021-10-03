import React, { FC } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const AppHeader: FC = () => {
  return (
    <Wrapper>
      <HeaderButtonWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </HeaderButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 56px;
  padding: 0px 16px;
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  top: 0px;
  z-index: 60;

  @media (min-width: 800px) {
    height: 72px;
    padding: 0px 24px;
  }
`;

const HeaderButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  font-weight: 500;
`;

const LogoWrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

export default AppHeader;
