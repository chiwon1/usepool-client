import React, { FC } from 'react';
import styled from 'styled-components';
import APP_TITLE from '../constants';

const Logo: FC = () => {
  return <Wrapper href="/">{APP_TITLE}</Wrapper>;
};

const Wrapper = styled.a`
  color: rgb(0, 175, 245);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  display: flex !important;
  align-items: center !important;
  font-size: 2em;

  @media (min-width: 800px) {
    margin-left: 0 !important;
  }

  @media (min-width: 800px) {
    margin-right: 24px !important;
  }
`;

export default Logo;
