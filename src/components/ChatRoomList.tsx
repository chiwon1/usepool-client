import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RightAddOnIcon from './styles/RightAddOnIcon';
import { IChatRoom } from '../types/chatRoom';
import { UserContext } from '../contexts/AuthProvider';
import defaultProfile from '../assets/default-profile.svg';
import dayjs from 'dayjs';

type Props = {
  data: IChatRoom;
};

const ChatRoomList = ({ data }: Props): JSX.Element => {
  const { user } = useContext(UserContext);

  const {
    _id: roomId,
    driver,
    passenger,
    ride: { departFrom, arriveAt },
    chatList,
  } = data;

  const sender =
    user?.userId === driver._id ? passenger.nickname : driver.nickname;

  const profilePicture =
    user?.userId === driver._id
      ? passenger.profilePicture
      : driver.profilePicture;

  const lastMessageDate = chatList[chatList.length - 1]?.createdAt;

  const formattedDate = dayjs(lastMessageDate).format('MM/D');

  return (
    <StyledLi>
      <StyledLink to={`/chatRooms/${roomId}`}>
        <SpanWrapper>
          <SpanWrapper2>
            <span>{sender}</span>
            <span>
              <SpanWrapper3>
                <Wrapper>
                  {departFrom}
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      stroke="#708C91"
                      transform="rotate(180 12 12)"
                    >
                      <path d="M9 19l-7-7 7-7" />
                      <path d="M22 12H2" />
                    </g>
                  </svg>
                  {arriveAt}
                </Wrapper>
              </SpanWrapper3>
            </span>
            <SpanWrapper4>
              <time>{formattedDate}</time>
            </SpanWrapper4>
          </SpanWrapper2>
        </SpanWrapper>
        <SpanWrapper5>
          <div>
            <img
              alt="profilePicture"
              src={profilePicture ? profilePicture : defaultProfile}
            />
          </div>
        </SpanWrapper5>
        <RightAddOnIcon />
      </StyledLink>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
  list-style: none;
`;

const StyledLink = styled(Link)`
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

  :hover {
    background-color: #ededed;
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }
`;

const SpanWrapper = styled.span`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;
`;

const SpanWrapper2 = styled.span`
  flex: 1 1 0;

  span {
    margin: 0;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    display: block;
    color: rgb(112, 140, 145);
  }
`;

const Wrapper = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;

  svg {
    box-sizing: border-box;
    fill: #708c91;
    flex: 0 0 auto;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const SpanWrapper3 = styled.span`
  display: flex;
  word-break: break-word;
  max-height: 2.5em;
  overflow: hidden;
`;

const SpanWrapper4 = styled.span`
  time {
    font-size: 13px;
  }
`;

const SpanWrapper5 = styled.span`
  display: inline-flex;
  min-width: 24px;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 16px;

  div {
    box-sizing: border-box;
    border-radius: 50%;
    position: relative;
    width: 48px;
    height: 48px;
    border: none;

    img {
      -webkit-font-smoothing: antialiased;
      border-radius: 50%;
      border-width: 0;
      box-sizing: border-box;
      font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      height: 100%;
      line-height: 16px;
      margin: 0;
      object-fit: cover;
      padding: 0;
      vertical-align: baseline;
      width: 100%;
    }
  }
`;

export default ChatRoomList;
