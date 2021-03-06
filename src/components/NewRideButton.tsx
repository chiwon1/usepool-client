import React, { FC } from 'react';
import UI from '../constants/ui';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NewRideButton: FC = () => {
  return <StyledLink to="/newRide">{UI.PUBLISH_A_RIDE}</StyledLink>;
};

const StyledLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  border-width: 0;
  box-sizing: border-box;
  color: #00aff5;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin: 0 24px 0 0;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;
  cursor: pointer;
`;

export default NewRideButton;
