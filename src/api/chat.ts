import axiosInstance from './axios';

export const postNewChat = async ({
  roomId,
  contents,
}: {
  roomId: string;
  contents: string;
}) => {
  return await axiosInstance.post(`/chats/${roomId}`, { contents });
};
