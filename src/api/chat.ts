import axiosInstance from '../utils/axios';
import { AxiosResponse } from 'axios';

export const postNewChat = async ({
  roomId,
  contents,
}: {
  roomId: string;
  contents: string;
}): Promise<AxiosResponse<{ contents: string }>> => {
  return await axiosInstance.post(`/chats/${roomId}`, { contents });
};
