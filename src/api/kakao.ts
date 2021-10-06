import { userInfo } from '../types';
import axiosInstance from './index';
import { kakao } from '../config/kakao';

export const loginWithKakao = () => {
  kakao.Auth.login({
    success: function (res: string) {
      console.log(res);
    },
    fail: function (err: string) {
      console.log(err);
    },
  });
};

export const getAuth = async (authCode: string) => {
  return await axiosInstance.get<any, { token: string; userInfo: userInfo }>(
    `/login?authCode=${authCode}`,
  );
};
