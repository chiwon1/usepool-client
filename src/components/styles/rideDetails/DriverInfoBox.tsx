import React, { FC } from 'react';
import RightAddOnIcon from '../RightAddOnIcon';
import styled from 'styled-components';
import defaultProfile from '../../../assets/default-profile.svg';

type Props = {
  nickname: string;
  profilePicture?: string;
};

const DriverInfoBox: FC<Props> = ({ nickname, profilePicture }) => {
  return (
    <Wrapper4>
      <SpanWrapper1>
        <span>{nickname}</span>
      </SpanWrapper1>
      <SpanWrapper2>
        <Wrapper5>
          <img src={profilePicture ? profilePicture : defaultProfile} />
        </Wrapper5>
      </SpanWrapper2>
      <RightAddOnIcon />
    </Wrapper4>
  );
};

const Wrapper4 = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  border: 0px;
  background: none;
  white-space: pre-line;
  background: none;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(221, 221, 221, 0.4);
`;

const SpanWrapper1 = styled.span`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;

  span {
    flex: 1 1 0%;
    margin: 0px;
    font-weight: 500;
    color: rgb(5, 71, 82);
    font-size: 18px;
    line-height: 20px;
    display: block;
  }
`;

const SpanWrapper2 = styled.span`
  display: inline-flex;
  min-width: 24px;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 16px;

  svg {
    fill: #708c91;
  }
`;

const Wrapper5 = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
  width: 48px;
  height: 48px;
  border: none;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default DriverInfoBox;
