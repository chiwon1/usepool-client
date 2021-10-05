import React, { FC } from 'react';
import UI from '../constants/ui';
import styled from 'styled-components';

const NewRideButton: FC = () => {
  return (
    <Wrapper onClick={() => console.log('New Ride!')}>
      {UI.PUBLICH_A_RIDE}
    </Wrapper>
  );
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
