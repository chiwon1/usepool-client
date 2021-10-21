import axiosInstance from '../utils/axios';
import { IUserInfo } from '../types/user';

export interface IGetUserResponse {
  result: string;
  userInfo: IUserInfo;
  token: string;
}

export const fetchUserInfo = () => async (): Promise<IUserInfo | undefined> => {
  const res = await axiosInstance.get<string, IGetUserResponse>(`/user`);

  // TODO 2021/10/14 cw: try catch 로 userInfo 못가져온 경우 핸들링으로 리팩토링
  if (res) {
    return res.userInfo;
  }
};
