import React, { FC } from 'react';
import styled from 'styled-components';

const ReverseLocationButton: FC = () => {
  return (
    <Wrapper>
      <StyledButton disabled={true} type="button">
        <svg
          aria-hidden="true"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fillRule="nonzero" fill="#00AFF5">
            <path d="M7.786 16.762a.5.5 0 0 1-1 0V2.476a.5.5 0 1 1 1 0v14.286z" />
            <path d="M3.83 6.64a.5.5 0 0 1-.707-.708l3.81-3.81a.5.5 0 0 1 .706 0l3.81 3.81a.5.5 0 0 1-.707.707L7.286 3.183 3.83 6.64zm12.48-.354a.5.5 0 1 1 1 0v15.238a.5.5 0 1 1-1 0V6.286z" />
            <path d="M20.265 17.36a.5.5 0 0 1 .708.708l-3.81 3.81a.5.5 0 0 1-.707 0l-3.81-3.81a.5.5 0 0 1 .708-.707l3.456 3.456 3.455-3.456z" />
          </g>
        </svg>
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

const StyledButton = styled.button`
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
  min-width: 0;
  overflow: hidden;
  padding: 0;
  text-align: left;
  vertical-align: baseline;
  white-space: nowrap;
  width: 27px;

  &:disabled {
    cursor: default;
    opacity: 0;
  }

  svg {
    box-sizing: border-box;
    fill: #00aff5;
    flex: 0 0 auto;
    flex: 0 0 auto;
    transform: rotate(90deg);
  }
`;

export default ReverseLocationButton;
