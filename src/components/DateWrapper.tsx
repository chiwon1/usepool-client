import React, { FC } from 'react';
import styled from 'styled-components';

const DateWrapper: FC = ({ children }) => {
  return (
    <Wrapper6>
      <Wrapper7>{children}</Wrapper7>
    </Wrapper6>
  );
};

const Wrapper6 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const Wrapper7 = styled.div`
  -webkit-box-align: center;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #708c91;
  cursor: pointer;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  line-height: 24px;
  margin: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0 0 0 8px;
  text-align: left;
  vertical-align: baseline;
  white-space: nowrap;
  width: 160px;

  &:disabled {
    cursor: default;
  }

  svg {
    box-sizing: border-box;
    fill: #708c91;
    flex: 0 0 auto;
  }
`;

export default DateWrapper;
