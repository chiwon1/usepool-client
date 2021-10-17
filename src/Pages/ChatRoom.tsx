import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import ChatBox from '../components/chat/ChatBox';
import ChatList from '../components/chat/ChatList';
import styled from 'styled-components';
import useSocket from '../hooks/useSocket';
import Scrollbars from 'react-custom-scrollbars-2';
import useInput from '../hooks/useInput';
import { IChat } from '../types/chat';
import { fetchChatList } from '../api/chatRoom';
import { postNewChat } from '../api/chat';
import ChatRoomHeader from '../components/chat/ChatRoomHeader';
import { UserContext } from '../contexts/AuthProvider';

const ChatRoom = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();
  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  const [socket, disconnect] = useSocket(chatRoomId);

  const [chat, onChangeChat, setChat] = useInput<string>('');

  // TODO 2021/10/14 cw: forward ref로 리팩토링하기
  // const scrollbarRef = useRef<Scrollbars>(null);

  useEffect(() => {
    socket?.emit('join-room', chatRoomId);
  }, [chatRoomId]);

  const { mutate } = useMutation(['postNewChat', { chatRoomId }], postNewChat);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

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
        onChangeChat={onChangeChat}
        onSubmitForm={onSubmitForm}
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
  min-height: 692px;
  padding-bottom: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: calc(100vh - 150px);
`;

export default ChatRoom;
