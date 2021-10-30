import React, { useContext, useMemo, FC } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { UserContext } from '../../contexts/AuthProvider';
import { IChat } from '../../types/chat';
import defaultProfile from '../../assets/default-profile.svg';

type Props = {
  data: IChat;
};

const Chat: FC<Props> = ({ data }) => {
  const { user } = useContext(UserContext);

  const { sender } = data;

  const isSenderUser = useMemo(() => user?.userId === sender, [user, sender]);

  return (
    <ChatWrapper>
      <Wrapper>
        <span>
          {!isSenderUser && (
            <span>
              <div>
                <img
                  alt="Profile-picture"
                  src={
                    data?.senderProfilePicture
                      ? data?.senderProfilePicture
                      : defaultProfile
                  }
                />
              </div>
            </span>
          )}
          {!isSenderUser && (
            <StyledSpan>
              <span>{data.senderNickname}</span>
            </StyledSpan>
          )}
        </span>
      </Wrapper>
      <SendTimeWrapper>
        <div className={isSenderUser ? 'user' : undefined}>
          {isSenderUser && <span>{dayjs(data.createdAt).format('HH:mm')}</span>}
          <blockquote className={isSenderUser ? 'user' : undefined}>
            <div className={isSenderUser ? 'user' : undefined}>
              <p>{data.contents}</p>
            </div>
          </blockquote>
          {!isSenderUser && (
            <span>{dayjs(data.createdAt).format('HH:mm')}</span>
          )}
        </div>
      </SendTimeWrapper>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  &:hover {
    background: #eee;
  }
`;

const Wrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0;
  background: none;
  white-space: pre-line;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(221, 221, 221, 0.4);

  & > span {
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;

    & > span {
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

        & > img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

const SendTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-weight: 400;
    color: rgb(112, 140, 145);
    font-size: 13px;
    line-height: 16px;
    display: flex;
    margin: 0 48px 0 40px;
    padding-left: 16px;
  }

  .user {
    justify-content: flex-end;
    margin-right: 6px;
  }

  & > div {
    word-break: break-word;
    display: flex;
    margin-left: 48px;
    margin-right: 48px;

    & > span {
      font-weight: 400;
      color: rgb(112, 140, 145);
      font-size: 13px;
      line-height: 16px;
      display: flex;
      padding-left: 8px;
      margin-top: 30px;
      min-width: 50px;
    }

    & > blockquote {
      margin: 0;
      display: inline-block;
      padding-bottom: 4px;

      & > div {
        position: relative;
        padding: 16px;
        border-radius: 0px 16px 16px;
        background: rgb(237, 237, 237);
        color: rgb(5, 71, 82);
        font-size: 16px;
        line-height: 20px;

        & > p {
          margin: 0px;
          white-space: pre-line;
          font-size: 16px;
          font-weight: bolder;
        }
      }

      & > .user {
        position: relative;
        padding: 16px;
        font-size: 16px;
        line-height: 20px;
        background: rgb(5, 71, 82);
        color: rgb(255, 255, 255);
        border-radius: 16px 16px 0px 16px;
      }
    }
  }
`;

const StyledSpan = styled.span`
  flex: 1 1 0;

  & > span {
    margin: 0;
    font-weight: 400;
    color: rgb(5, 71, 82);
    font-size: 18px;
    line-height: 20px;
    display: block;
  }
`;

export default Chat;
