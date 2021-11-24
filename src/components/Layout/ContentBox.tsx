import React, { FC } from 'react';
import styled from 'styled-components';

const ContentBox: FC = ({ children }) => {
  return (
    <Wrapper>
      <div>
        <div>{children}</div>
      </div>
    </Wrapper>
  );
};

export default ContentBox;

const Wrapper = styled.main`
  box-sizing: content-box;
  display: block;
  height: 100%;
  padding-top: 72px;
  position: relative;

  & > div {
    border-width: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin: 0;
    height: 100%;
    padding: 0;
    position: relative;
    vertical-align: baseline;

    & > div {
      -webkit-box-pack: start;
      border-width: 0;
      display: flex;
      flex-direction: column;
      font-size: 16px;
      font-weight: 400;
      justify-content: flex-start;
      line-height: 16px;
      margin: 0;
      height: 100%;
      padding: 0;
      vertical-align: baseline;
    }
  }
`;
