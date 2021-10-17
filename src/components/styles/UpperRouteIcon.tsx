import React from 'react';
import styled from 'styled-components';

const UpperRouteIcon = () => {
  return (
    <Wrapper8>
      <Wrapper9 />
      <Wrapper10>
        <div />
      </Wrapper10>
      <Wrapper11 />
    </Wrapper8>
  );
};

const Wrapper8 = styled.div`
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

const Wrapper9 = styled.div`
  width: 4px;
  height: calc(13px);
  background: transparent;
`;

const Wrapper10 = styled.div`
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

const Wrapper11 = styled.div`
  width: 4px;
  height: calc(13px);
  background: rgb(5, 71, 82);
  flex: 1 1 0%;
`;

export default UpperRouteIcon;
