import React, { FC } from 'react';
import styled from 'styled-components';

const ContentBox: FC = ({ children }) => {
  return (
    <Wrapper>
      <Wrapper2>
        <Wrapper3>{children}</Wrapper3>
      </Wrapper2>
    </Wrapper>
  );
};

export default ContentBox;

const Wrapper = styled.main`
  box-sizing: content-box;
  display: block;
  height: -webkit-fill-available;
  height: 100%;
  padding-top: 72px;
  position: relative;
`;

const Wrapper2 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: -webkit-fill-available;
  height: auto;
  line-height: 16px;
  margin: 0;
  height: 100%;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const Wrapper3 = styled.div`
  -webkit-box-pack: start;
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: auto;
  justify-content: flex-start;
  line-height: 16px;
  margin: 0;
  height: 100%;
  padding: 0;
  vertical-align: baseline;
`;
