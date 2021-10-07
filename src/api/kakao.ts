import axiosInstance from './index';

export const getAuth = (kakaoToken: string): Promise<void> => {
  return axiosInstance.post(`/login?kakaoToken=${kakaoToken}`);
};
