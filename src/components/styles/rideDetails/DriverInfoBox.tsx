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
    <Wrapper>
      <NicknameWrapper>
        <span>{nickname}</span>
      </NicknameWrapper>
      <ProfilePictureContainer>
        <div>
          <img
            src={profilePicture ? profilePicture : defaultProfile}
            alt="Profile-picture"
          />
        </div>
      </ProfilePictureContainer>
      <RightAddOnIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 16px 24px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0;
  border: 0;
  background: none;
  white-space: pre-line;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(221, 221, 221, 0.4);
`;

const NicknameWrapper = styled.span`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;

  span {
    flex: 1 1 0;
    margin: 0;
    font-weight: 500;
    color: rgb(5, 71, 82);
    font-size: 18px;
    line-height: 20px;
    display: block;
  }
`;

const ProfilePictureContainer = styled.span`
  display: inline-flex;
  min-width: 24px;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 16px;

  svg {
    fill: #708c91;
  }

  & > div {
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
  }
`;

export default DriverInfoBox;
