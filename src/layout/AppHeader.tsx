import React, { FC } from 'react';
import styled from 'styled-components';

import MenuOpenButton from '../components/MenuOpenButton';
import Logo from '../components/Logo';

import NewRideButton from '../components/NewRideButton';

const AppHeader: FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo />
        <Center />
        <RightWrapper>
          <NewRideButton />
          <MenuOpenButton />
        </RightWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

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

export default AppHeader;
