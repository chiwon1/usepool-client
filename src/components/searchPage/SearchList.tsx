import React, { FC } from 'react';
import styled from 'styled-components';
import LocationIcon from '../LocationIcon';

type Props = {
  departureLocation: string;
  arriveAt: string;
  departureTime: string;
  nickname: string;
  profilePicture?: string;
  handleClick?: () => void;
};

const SearchList: FC<Props> = ({
  departureLocation,
  arriveAt,
  departureTime,
  nickname,
  profilePicture,
  handleClick,
}) => {
  return (
    <StyledLi onClick={handleClick}>
      <Wrapper>
        <div />
        <StyledA>
          <div>
            <div>
              <div>
                <ul>
                  <LocationIcon
                    location={departureLocation}
                    down={true}
                    time={departureTime}
                  />
                  <LocationIcon location={arriveAt} down={false} />
                </ul>
                <div />
              </div>
              <span />
            </div>
            <ProfileContainer>
              <span>
                <PictureContainer>
                  <div>
                    <img src={profilePicture} alt="User-profile-picture" />
                  </div>
                </PictureContainer>
                <NicknameContainer>
                  <span>{nickname}</span>
                </NicknameContainer>
              </span>
            </ProfileContainer>
          </div>
        </StyledA>
      </Wrapper>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  margin-bottom: 8px;
  padding-left: 24px;
  padding-right: 24px;
  isolation: isolate;
`;

const Wrapper = styled.div`
  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt;
  list-style-type: none;
  transition: box-shadow 200ms ease-in 0s;
  background-color: rgb(255, 255, 255);
  flex: 1 1 0;
  position: relative;
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0 2pt 8pt, rgba(0, 0, 0, 0.08) 0 2pt 16pt;
  }

  & > div {
    position: absolute;
    background: rgb(255, 255, 255);
    border-radius: 16px;
    inset: 0;
    opacity: 0.8;
    display: none;
    z-index: 3;
  }
`;

const StyledA = styled.a`
  color: rgb(0, 175, 245);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  display: block;

  & > div {
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: space-between;

      & > div {
        min-width: 0;
        position: relative;
        left: -24px;
      }
    }
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0;
  border: 0;
  background: none;
  white-space: pre-line;
  padding: 8px 0 0;

  & > span {
    display: flex;
    -webkit-box-flex: 1;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0;
  }
`;

const PictureContainer = styled.span`
  display: inline-flex;
  min-width: 24px;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 16px;

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

const NicknameContainer = styled.span`
  flex: 1 1 0;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  & > span {
    margin: 0;
    font-weight: 400;
    color: rgb(5, 71, 82);
    font-size: 18px;
    line-height: 20px;
    display: block;
  }
`;

export default SearchList;
