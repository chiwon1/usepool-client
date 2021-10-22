import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  down: boolean;
  location: string;
  time?: string;
};

const LocationDiv: FC<Props> = ({ down, location, time }) => {
  return (
    <StyledLi2>
      <Wrapper16>
        <Wrapper17>
          <time>{time}</time>
          <span>&nbsp;</span>
        </Wrapper17>
        {down ? (
          <Wrapper18>
            <Wrapper19 />
            <Wrapper20>
              <div></div>
            </Wrapper20>
            <Wrapper21 />
          </Wrapper18>
        ) : (
          <Wrapper18>
            <Wrapper24></Wrapper24>
            <Wrapper25>
              <div />
            </Wrapper25>
            <Wrapper26></Wrapper26>
          </Wrapper18>
        )}
        <Wrapper22>
          <span>{location}</span>
          <div>
            <Wrapper23></Wrapper23>
          </div>
        </Wrapper22>
      </Wrapper16>
    </StyledLi2>
  );
};

const StyledLi2 = styled.li`
  min-height: 32px;
`;

const Wrapper16 = styled.div`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
`;

const Wrapper17 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;

  time {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    font-weight: 500;
    width: 48px;
    display: initial;
    flex-shrink: 0;
  }

  span {
    white-space: pre-line;
    color: rgb(112, 140, 145);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    width: 48px;
    margin-top: 4px;
  }
`;

const Wrapper18 = styled.div`
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

const Wrapper19 = styled.div`
  width: 4px;
  height: calc(13px);
  background: transparent;
`;

const Wrapper20 = styled.div`
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

const Wrapper21 = styled.div`
  width: 4px;
  height: calc(13px);
  background: rgb(5, 71, 82);
  flex: 1 1 0%;
`;

const Wrapper22 = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 8px 0px;

  span {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    font-weight: 500;
  }
`;

const Wrapper23 = styled.div`
  display: flex;
  line-height: 0;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 4px;
`;

const Wrapper24 = styled.div`
  width: 4px;
  height: calc(13px);
  background: rgb(5, 71, 82);
`;

const Wrapper25 = styled.div`
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

const Wrapper26 = styled.div`
  width: 4px;
  height: calc(13px);
  background: transparent;
  flex: 1 1 0%;
`;

export default LocationDiv;
