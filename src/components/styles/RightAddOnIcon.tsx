import React, { FC } from 'react';
import styled from 'styled-components';

const RightAddOnIcon: FC = () => {
  return (
    <Wrapper>
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          fill="none"
          points="9 18 15 12 9 6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          stroke="#708C91"
        />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: inline-flex;
  min-width: 24px;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 16px;

  svg {
    fill: #708c91;
  }
`;

export default RightAddOnIcon;
