import React, { FC } from 'react';
import styled from 'styled-components';

const LowerRouteIcon: FC = () => {
  return (
    <Wrapper>
      <StyledDiv />
      <IconContainer>
        <div />
      </IconContainer>
      <StyledDiv2 />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  min-height: 32px;
  margin: 0px 8px;
  width: 8px;
  flex-shrink: 0;
`;

const StyledDiv = styled.div`
  width: 4px;
  height: calc(13px);
  background: rgb(5, 71, 82);
`;

const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);

  div {
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(5, 71, 82);
    border-radius: 50%;
  }
`;

const StyledDiv2 = styled.div`
  width: 4px;
  height: calc(13px);
  background: transparent;
`;

export default LowerRouteIcon;
