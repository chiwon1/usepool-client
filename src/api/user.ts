import axiosInstance from './axios';
import { IUserInfo } from '../types';

export const getUser = async () => {
  const userInfo = (await axiosInstance.get(`/user`)) as unknown as IUserInfo;

  return userInfo;
};
