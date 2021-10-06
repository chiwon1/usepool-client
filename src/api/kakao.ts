import { userInfo } from '../types';
import axiosInstance from './index';

export const getAuth = async (kakaoToken: string) => {
  const res = await axiosInstance.post<any, { token: string }>(
    `/login?authCode=${kakaoToken}`,
  );

  return res.token;
};
