import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';

import useSocket from '../hooks/useSocket';

import ChatBox from '../components/chat/ChatBox';
import ChatList from '../components/chat/ChatList';
import ChatRoomHeader from '../components/chat/ChatRoomHeader';

import { UserContext } from '../contexts/AuthProvider';
import { postNewChat } from '../api/chat';
import { IChat } from '../types/chat';

const ChatRoom: FC = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const { user } = useContext(UserContext);
  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  const [socket, disconnect] = useSocket(chatRoomId);
  const [chat, setChat] = useState<string>('');

  const { mutate } = useMutation(['postNewChat', { chatRoomId }], postNewChat);

  const handleChatChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChat(ev.target.value);
  };

  const handleSubmit = useCallback(
    (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();

      if (chat?.trim()) {
        mutate({
          roomId: chatRoomId,
          contents: chat,
        });
      }

      setChat('');
    },
    [chat],
  );

  const onMessage = useCallback((data: IChat) => {
    queryClient.setQueryData<IChat[]>(
      ['fetchChatList', { chatRoomId }],
      (prev) => {
        return prev ? [...prev, data] : [data];
      },
    );
  }, []);

  useEffect(() => {
    socket?.emit('join-room', chatRoomId);
  }, [chatRoomId]);

  useEffect(() => {
    socket?.on('chat', onMessage);
    return () => {
      socket?.off('chat', onMessage);
    };
  }, [socket]);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [chatRoomId, disconnect]);

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  return (
    <Container>
      <ChatRoomHeader />
      <ChatList />
      <ChatBox
        chat={chat}
        onChangeChat={handleChatChange}
        onSubmitForm={handleSubmit}
      />
    </Container>
  );
};

export const Container = styled.div`
  position: relative !important;
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-bottom: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: calc(100vh - 150px);
`;

export default ChatRoom;
