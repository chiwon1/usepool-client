import React from 'react';
import { IChat } from '../../types/chat';
import styled from 'styled-components';
import dayjs from 'dayjs';

type Props = {
  data: IChat;
};

const Chat = ({ data }: Props) => {
  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={data.senderProfilePicture} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{data.senderNickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{data.contents}</p>
      </div>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
  &:hover {
    background: #eee;
  }
  & .chat-img {
    display: flex;
    width: 36px;
    margin-right: 8px;
    & img {
      width: 36px;
      height: 36px;
    }
  }
`;

export default Chat;
