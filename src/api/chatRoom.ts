import axiosInstance from '../utils/axios';
import { IChatRoom } from '../types/chatRoom';
import { IChat } from '../types/chat';

export const fetchChatRoomList = async (): Promise<IChatRoom[]> => {
  const res: { chatRoomList: IChatRoom[] } = await axiosInstance.get(
    '/chatRooms/list',
  );

  return res.chatRoomList;
};

export const fetchChatList = (roomId: string) => async (): Promise<IChat[]> => {
  const res: { chatList: IChat[] } = await axiosInstance.get(
    `/chatRooms/${roomId}`,
  );

  return res.chatList;
};

export const fetchChatRoomInfo =
  (roomId: string) => async (): Promise<IChatRoom> => {
    const res: { info: IChatRoom } = await axiosInstance.get(
      `/chatRooms/${roomId}/info`,
    );

    return res.info;
  };
