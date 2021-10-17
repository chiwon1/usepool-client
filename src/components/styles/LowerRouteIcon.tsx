import React from 'react';
import styled from 'styled-components';

const LowerRouteIcon = () => {
  return (
    <Wrapper8>
      <Wrapper15></Wrapper15>
      <Wrapper16>
        <div></div>
      </Wrapper16>
      <Wrapper9 />
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

const Wrapper15 = styled.div`
  width: 4px;
  height: calc(13px);
  background: rgb(5, 71, 82);
`;

const Wrapper16 = styled.div`
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

const Wrapper9 = styled.div`
  width: 4px;
  height: calc(13px);
  background: transparent;
`;

export default LowerRouteIcon;
