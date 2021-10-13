import axiosInstance from './axios';
import { IChatRoom } from '../types/chatRoom';

export const fetchChatRoomList = async () => {
  const res = (await axiosInstance.get('/chatRooms/list')) as any;

  return res.chatRoomList as IChatRoom[];
};

export const joinChatRoom = (roomId: string) => async () => {
  return await axiosInstance.get(`/chatRooms/${roomId}/join`);
};

export const fetchChatList = (roomId: string) => async () => {
  const res = (await axiosInstance.get(`/chatRooms/${roomId}`)) as any;

  return res.chatList;
};
