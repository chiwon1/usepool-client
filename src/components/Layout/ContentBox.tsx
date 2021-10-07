import React, { FC } from 'react';
import styled from 'styled-components';

const ContentBox: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentBox;

const Wrapper = styled.main`
  box-sizing: content-box;
  display: block;
  height: -webkit-fill-available;
  height: auto;
  min-height: 692px;
  padding-top: 72px;
  position: relative;
`;
