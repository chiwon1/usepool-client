import React, { useContext, useMemo } from 'react';
import { IChat } from '../../types/chat';
import styled from 'styled-components';
import dayjs from 'dayjs';
import defaultProfile from '../../assets/default-profile.svg';
import { UserContext } from '../../contexts/AuthProvider';

type Props = {
  data: IChat;
};

const Chat = ({ data }: Props) => {
  const { user } = useContext(UserContext);

  const { sender } = data;

  const isSenderUser = useMemo(() => user?.userId === sender, [user, sender]);

  return (
    <ChatWrapper>
      <Wrapper>
        <SpanWrapper3>
          {!isSenderUser && (
            <SpanWrapper2>
              <div>
                <img
                  src={
                    data?.senderProfilePicture
                      ? data?.senderProfilePicture
                      : defaultProfile
                  }
                />
              </div>
            </SpanWrapper2>
          )}
          {!isSenderUser && (
            <SpanWrapper1>
              <span>{data.senderNickname}</span>
            </SpanWrapper1>
          )}
        </SpanWrapper3>
      </Wrapper>
      <Wrapper2>
        <Wrapper3 className={isSenderUser ? 'user' : undefined}>
          {isSenderUser && (
            <SpanWrapper4>{dayjs(data.createdAt).format('HH:mm')}</SpanWrapper4>
          )}
          <blockquote className={isSenderUser ? 'user' : undefined}>
            <div className={isSenderUser ? 'user' : undefined}>
              <p>{data.contents}</p>
            </div>
          </blockquote>
          {!isSenderUser && (
            <SpanWrapper4>{dayjs(data.createdAt).format('HH:mm')}</SpanWrapper4>
          )}
        </Wrapper3>
      </Wrapper2>
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
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  border: 0px;
  background: none;
  white-space: pre-line;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  background: none;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(221, 221, 221, 0.4);

  & span {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    margin: 0px;
    font-weight: 400;
    color: rgb(112, 140, 145);
    font-size: 13px;
    line-height: 16px;
    display: flex;
    margin-left: 40px;
    margin-right: 48px;
    padding-left: 16px;
  }

  .user {
    justify-content: flex-end;
    margin-right: 6px;
  }
`;

const SpanWrapper1 = styled.span`
  flex: 1 1 0%;

  & > span {
    margin: 0px;
    font-weight: 400;
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
  margin-right: 16px;

  & > div {
    border: 2px dashed rgb(221, 221, 221);
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
`;

const SpanWrapper3 = styled.span`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;
`;

const Wrapper3 = styled.div`
  word-break: break-word;
  display: flex;
  margin-left: 48px;
  margin-right: 48px;

  & > span {
    margin: 0px;
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
    margin: 0px;
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
      border-radius: 0px 16px 16px;
      background: rgb(237, 237, 237);
      color: rgb(5, 71, 82);
      font-size: 16px;
      line-height: 20px;
      background: rgb(5, 71, 82);
      color: rgb(255, 255, 255);
      border-top-left-radius: 16px;
      border-bottom-right-radius: 0px;
    }
  }
`;

const SpanWrapper4 = styled.span``;

export default Chat;
