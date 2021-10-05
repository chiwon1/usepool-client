import { userInfo } from '../types';
import axiosInstance from './index';

export const loginWithKakao = () => {
  window.location.href = process.env.REACT_APP_KAKAO_AUTH_URL!;
};

export const getAuth = async (authCode: string) => {
  return await axiosInstance.get<any, { token: string; userInfo: userInfo }>(
    `/login?authCode=${authCode}`,
  );
};
