import axiosInstance from './index';

export const getAuth = (kakaoToken: string) => {
  void axiosInstance.post(`/login?kakaoToken=${kakaoToken}`);
};
