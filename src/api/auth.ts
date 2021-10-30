import axiosInstance from '../utils/axios';
import { IGetUserResponse } from '../types/user';

export const getAuth = async (authCode: string): Promise<IGetUserResponse> => {
  return await axiosInstance.post<string, IGetUserResponse>(
    `/login?authCode=${authCode}`,
  );
};
