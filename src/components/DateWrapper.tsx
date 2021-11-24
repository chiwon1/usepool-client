import React, { FC } from 'react';
import styled from 'styled-components';

const DateWrapper: FC = ({ children }) => {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-width: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  padding: 0;
  vertical-align: baseline;
  margin: 0 15px 0 0;

  & > div {
    -webkit-box-align: center;
    align-items: center;
    background-color: initial;
    background-image: none;
    border-style: none;
    box-sizing: border-box;
    color: #708c91;
    cursor: pointer;
    display: flex;
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
  }
`;

export default DateWrapper;
