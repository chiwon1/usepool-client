import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  down: boolean;
  location: string;
  time?: string;
};

const LocationIcon: FC<Props> = ({ down, location, time }) => {
  return (
    <ListWrapper>
      <div>
        <TimeContainer>
          <time>{time}</time>
          <span>&nbsp;</span>
        </TimeContainer>
        {down ? (
          <IconContainer>
            <StyledDiv />
            <UpperIconWrapper>
              <div />
            </UpperIconWrapper>
            <ConnectionIcon />
          </IconContainer>
        ) : (
          <IconContainer>
            <UpperCircleIcon />
            <LowerIconWrapper>
              <div />
            </LowerIconWrapper>
            <LowerCircleIcon />
          </IconContainer>
        )}
        <LocationContainer>
          <span>{location}</span>
          <div>
            <div />
          </div>
        </LocationContainer>
      </div>
    </ListWrapper>
  );
};

const ListWrapper = styled.li`
  min-height: 32px;

  & > div {
    display: flex;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;

  time {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 18px;
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

const IconContainer = styled.div`
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
  background: transparent;
`;

const UpperIconWrapper = styled.div`
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

const ConnectionIcon = styled.div`
  width: 4px;
  height: calc(13px);
  background: rgb(5, 71, 82);
  flex: 1 1 0%;
`;

const LocationContainer = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 8px 0px;

  span {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
  }

  & > div {
    & > div {
      display: flex;
      line-height: 0;
      -webkit-box-align: center;
      align-items: center;
      padding-top: 4px;
    }
  }
`;

const UpperCircleIcon = styled.div`
  width: 4px;
  height: calc(13px);
  background: rgb(5, 71, 82);
`;

const LowerIconWrapper = styled.div`
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

const LowerCircleIcon = styled.div`
  width: 4px;
  height: calc(13px);
  background: transparent;
  flex: 1 1 0;
`;

export default LocationIcon;
