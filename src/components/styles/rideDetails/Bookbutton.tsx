import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Bookbutton: FC<Props> = ({ handleClick }) => {
  return (
    <Wrapper18>
      <div>
        <StyledButton onClick={handleClick}>Book</StyledButton>
      </div>
    </Wrapper18>
  );
};

const Wrapper18 = styled.div`
  position: sticky;
  flex: 1 1 100%;
  bottom: 0px;
  background: rgb(255, 255, 255);
  z-index: 2;
  border-top: 1px solid rgb(237, 237, 237);

  div {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 16px 0px;
  }
`;

const StyledButton = styled.button`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  padding: 0px 24px;
  border: 1px solid transparent;
  border-radius: 48px;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  height: 48px;
  min-width: 48px;
  max-width: 100%;
  overflow: hidden;
  user-select: none;
  -webkit-box-align: center;
  align-items: center;
  transition: max-width 500ms ease-in 0s, background-color 200ms ease-in 0s;
  white-space: nowrap;
  background-color: rgb(0, 175, 245);
  color: rgb(255, 255, 255);
  cursor: pointer;

  :hover {
    background-color: #008fc1;
    outline: 0;
  }

  :active {
    background-color: #008fc1;
    outline: 0;
  }

  :focus {
    background-color: #008fc1;
  }
`;

export default Bookbutton;
