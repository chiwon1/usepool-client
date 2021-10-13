import axiosInstance from './axios';

export const joinChat = async (rideId: string) => {
  const res = (await axiosInstance.post(`/rides/${rideId}/joinChat`)) as any;

  return res.roomId;
};
