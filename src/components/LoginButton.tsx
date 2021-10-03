import React, { FC } from 'react';
import styled from 'styled-components';
import CONSTANTS from '../constants';

const LoginButton: FC = () => {
  const login = () => {
    console.log('here');
  };

  return (
    <Wrapper onClick={login}>
      <span>
        <span>
          <span>{CONSTANTS.LOG_IN}</span>
        </span>
      </span>
    </Wrapper>
  );
};

export default LoginButton;

const Wrapper = styled.a`
  position: relative;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  border: 0px;
  background: none;
  white-space: pre-line;

  background: none;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(221, 221, 221, 0.4);

  padding-left: 24px;
  padding-right: 24px;
`;

const Span = styled.span`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;

  span {
    flex: 1 1 0%;

    span {
      display: block;
      color: #054752;
    }
  }
`;
