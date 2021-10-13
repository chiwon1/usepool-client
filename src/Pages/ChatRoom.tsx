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
import { joinChat } from '../api/chat';
import { Socket } from 'socket.io-client';

const ChatRoom = () => {
  const { rideId, id } = useParams<{ rideId: string; id: string }>();
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();
  const { data: rideDetails } = useQuery(
    'fetchRideDetails',
    fetchRideDetails(rideId),
  );
  const [socket, disconnect] = useSocket(rideId);
  const [chat, onChangeChat, setChat] = useInput<string>('');
  const [state, setState] = useState('');

  const handleChange = (e: any) => {
    setState(e.target.value);

    socket?.emit('send-changes', e.target.value);
    console.log('socket.id', socket?.id);
  };

  const { data: roomid, mutate: postJoinChat } = useMutation(
    'joinChat',
    joinChat,
    {
      onSuccess: (roomid) => {
        console.log('join-room', roomid);
        socket?.emit('join-room', roomid);
      },
    },
  );

  // const { data: chatData } = useQuery<any, any, IChat[]>(
  //   'fetchChatList',
  //   async () => {
  //     const res = (await axiosInstance.get(
  //       `/rides/${rideId}/chats/${user!.userId}`,
  //     )) as any;
  //
  //     return res.chats;
  //   },
  // );

  const scrollbarRef = useRef<Scrollbars>(null);
  // const { mutate } = useMutation(
  //   'fetchChatList',
  //   async (value: { contents: string }) => {
  //     return await axiosInstance.post(
  //       `/rides/${rideId}/chats/${user!.userId}`,
  //       value,
  //     );
  //   },
  //   {
  //     onMutate: async (value: { contents: string }) => {
  //       await queryClient.cancelQueries('fetchChatList');
  //
  //       const prevChatList = queryClient.getQueryData('fetchChatList');
  //
  //       const newChat = {
  //         senderNickname: user?.nickname,
  //         senderProfilePicture: user?.profilePicture,
  //         contents: value.contents,
  //         createdAt: new Date(),
  //       } as IChat;
  //
  //       queryClient.setQueryData<IChat[]>('fetchChatList', (prev) =>
  //         prev ? [...prev, newChat] : [newChat],
  //       );
  //
  //       return { prevChatList };
  //     },
  //     onSuccess: () => {
  //       void queryClient.invalidateQueries('fetchChatList');
  //     },
  //   },
  // );

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      socket?.emit('chat', chat);

      // if (chat?.trim() && chatData) {
      //   mutate({
      //     contents: chat,
      //   });
      //
      //   setChat('');
      // }

      setChat('');
      console.log('submit');
    },
    [chat],
  );
  //
  // const onMessage2 = (data: IChat) => {
  //   if (data.senderId === id && user?.userId !== id) {
  //     // chatData = [...chatData, data];
  //
  //     return queryClient.setQueryData<IChat[]>('fetchChatList', (prev) => {
  //       console.log('prev', prev);
  //       return prev ? [...prev, data] : [data];
  //     });
  //   }
  // };
  //
  // const onMessage = useCallback((data: IChat) => {
  //   console.log('data', data);
  //   // id는 상대방 아이디
  //   if (data.senderId === id && user?.userId !== id) {
  //     // chatData = [...chatData, data];
  //
  //     queryClient.setQueryData<IChat[]>('fetchChatList', (prev) =>
  //       prev ? [...prev, data] : [data],
  //     );
  //   }
  // }, []);

  // const queryClient = useQueryClient()
  //
  // return useMutation(editTodo, {
  //   // Notice the second argument is the variables object that the `mutate` function receives
  //   onSuccess: (data, variables) => {
  //     queryClient.setQueryData(['todo', { id: variables.id }], data)
  //   },
  // })

  useEffect(() => {
    postJoinChat(rideId);
  }, [rideId]);

  useEffect(() => {
    if (socket && rideId) {
      socket.on('hello', (world) => {
        console.log('world', world);
      });
    }

    return () => {
      disconnect();
      console.log('disconnected');
    };
  }, [rideId, disconnect]);

  if (!rideDetails) {
    return null;
  }

  return (
    <Container>
      <ChatList />
      <input value={state} onChange={handleChange} />
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
