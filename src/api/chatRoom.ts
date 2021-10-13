import axiosInstance from './axios';
import { IChatRoom } from '../types/chatRoom';

export const fetchChatRoomList = async () => {
  const res = (await axiosInstance.get('/chatRooms/list')) as any;

  return res.chatRoomList as IChatRoom[];
};
