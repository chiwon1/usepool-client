import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import ChatBox from '../components/chat/ChatBox';
import ChatList from '../components/chat/ChatList';
import styled from 'styled-components';
import useSocket from '../hooks/useSocket';
import Scrollbars from 'react-custom-scrollbars-2';
import useInput from '../hooks/useInput';
import { IChat } from '../types/chat';
import { fetchChatList, joinChatRoom } from '../api/chatRoom';
import { postNewChat } from '../api/chat';

const ChatRoom = () => {
  const queryClient = useQueryClient();
  const { user } = useContext(UserContext);
  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  const [socket, disconnect] = useSocket(chatRoomId);

  const [chat, onChangeChat, setChat] = useInput<string>('');
  const { data } = useQuery(
    ['joinChatRoom', { chatRoomId }],
    joinChatRoom(chatRoomId),
    {
      onSuccess: () => {
        socket?.emit('join-room', chatRoomId);
      },
    },
  );

  const { data: chatList } = useQuery<any, any, IChat[]>(
    ['fetchChatList', { chatRoomId }],
    fetchChatList(chatRoomId),
  );

  // TODO 2021/10/14 cw: forward ref로 리팩토링하기
  // const scrollbarRef = useRef<Scrollbars>(null);

  useEffect(() => {
    joinChatRoom(chatRoomId);
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
        console.log('prev', prev);
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

  return (
    <Container>
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
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 38px);
  flex-flow: column;
  position: relative;
`;

export default ChatRoom;
