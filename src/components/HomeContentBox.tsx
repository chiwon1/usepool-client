import React, { FC } from 'react';
import styled from 'styled-components';

const HomeContentBox: FC = ({ children }) => {
  return (
    <Wrapper>
      <StyledDiv />
      <TitleContainer>
        <h1>Usepool</h1>
        <div>{children}</div>
      </TitleContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
  width: 100%;
  min-height: 45vh;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

const StyledDiv = styled.div`
  background-position: center center;
  background-image: url(https://cdn.blablacar.com/kairos/assets/build/images/carpool_blablabus_large-e3d8eff32c13cdafc080a100f03628bd.svg);
  background-size: cover;
  border-width: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  height: 100%;
  left: 0;
  line-height: 16px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  vertical-align: baseline;
  width: 100%;
  z-index: -1;

  &:after {
    background-color: initial;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 30%, transparent 100%);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  border-width: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  max-width: 1016px;
  padding: 0 24px;
  vertical-align: baseline;
  width: 100%;

  & > h1 {
    -webkit-box-pack: center;
    align-items: flex-start;
    border-width: 0;
    color: #fff;
    display: flex;
    font-size: 60px;
    font-weight: 500;
    height: 9vh;
    justify-content: center;
    line-height: 60px;
    margin: 4.5vh 0 0;
    padding: 0;
    text-align: center;
    vertical-align: baseline;
    width: 100%;
  }

  & > div {
    -webkit-box-align: center;
    -webkit-box-pack: center;
    align-items: center;
    border-width: 0;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    justify-content: center;
    line-height: 16px;
    margin: 18vh 0 0;
    min-height: 13.5vh;
    padding: 0;
    vertical-align: baseline;
    width: 100%;
  }
`;

export default HomeContentBox;
