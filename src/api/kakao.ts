import axiosInstance from './axios';

export const getAuth = (kakaoToken: string): Promise<void> => {
  return axiosInstance.post(`/login?kakaoToken=${kakaoToken}`);
};
