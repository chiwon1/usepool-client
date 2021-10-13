import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchRideDetails, postNewRide } from '../api/ride';
import ChatBox from '../components/chat/ChatBox';
import ChatList from '../components/chat/ChatList';
import styled from 'styled-components';
import useSocket from '../hooks/useSocket';
import Scrollbars from 'react-custom-scrollbars-2';
import useInput from '../hooks/useInput';
import axiosInstance from '../api/axios';
import { IChat } from '../types/chat';
import { log } from 'util';

const DirectMessage = () => {
  const { rideId, id } = useParams<{ rideId: string; id: string }>();
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();
  const { data: rideDetails } = useQuery(
    'fetchRideDetails',
    fetchRideDetails(rideId),
  );
  const [socket, disconnect] = useSocket(rideId);
  const [chat, onChangeChat, setChat] = useInput<string>('');

  const { data: chatData } = useQuery<any, any, IChat[]>(
    'fetchChatList',
    async () => {
      const res = (await axiosInstance.get(
        `/rides/${rideId}/chats/${user!.userId}`,
      )) as any;

      return res.chats;
    },
  );

  const scrollbarRef = useRef<Scrollbars>(null);
  const { mutate } = useMutation(
    'fetchChatList',
    async (value: { contents: string }) => {
      return await axiosInstance.post(
        `/rides/${rideId}/chats/${user!.userId}`,
        value,
      );
    },
    {
      onMutate: async (value: { contents: string }) => {
        await queryClient.cancelQueries('fetchChatList');

        const prevChatList = queryClient.getQueryData('fetchChatList');

        const newChat = {
          senderNickname: user?.nickname,
          senderProfilePicture: user?.profilePicture,
          contents: value.contents,
          createdAt: new Date(),
        } as IChat;

        queryClient.setQueryData<IChat[]>('fetchChatList', (prev) =>
          prev ? [...prev, newChat] : [newChat],
        );

        return { prevChatList };
      },
      onSuccess: () => {
        void queryClient.invalidateQueries('fetchChatList');
      },
    },
  );

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      console.log('chat', chat);

      if (chat?.trim() && chatData) {
        mutate({
          contents: chat,
        });

        setChat('');
      }

      setChat('');
      console.log('submit');
    },
    [chat],
  );

  const onMessage = useCallback((data: IChat) => {
    console.log('data', data);
    // id는 상대방 아이디
    if (data.senderId === id && user?.userId !== id) {
      // chatData = [...chatData, data];
    }

    // chatData?.unshift(data);

    // if (data.senderId === id && user?.userId !== id) {
    //   mutateChat((chatData) => {
    //     chatData?.[0].unshift(data);
    //     return chatData;
    //   }, false).then(() => {});
    // }
  }, []);

  useEffect(() => {
    if (user && rideId && socket) {
      socket.emit('join', { id: user.userId, ride: rideId });

      socket?.on('dm', (data) => console.log('data', data));
    }

    return () => {
      socket?.off('dm', (data: any) => console.log('data', data));
    };
  }, [user, rideId, socket]);

  // useEffect(() => {
  //   socket?.on('dm', (data) => {
  //     console.log('data', data);
  //   });
  //
  //   return () => {
  //     socket?.off('dm', onMessage);
  //   };
  // }, [socket, onMessage]);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [rideId, disconnect]);

  if (!rideDetails) {
    return null;
  }

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

export default DirectMessage;
