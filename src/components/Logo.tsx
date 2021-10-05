import React, { FC } from 'react';
import styled from 'styled-components';
import UI from '../constants/ui';

const Logo: FC = () => {
  return <Wrapper href="/">{UI.APP_TITLE}</Wrapper>;
};

const Wrapper = styled.a`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  border-width: 0;
  box-sizing: border-box;
  color: #00aff5;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 2em;
  font-weight: 500;
  line-height: 16px;
  margin: 0 24px 0 0;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;

  @media (min-width: 800px) {
    margin-left: 0 !important;
  }
`;

export default Logo;
