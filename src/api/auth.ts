import axiosInstance from '../utils/axios';
import { IGetUserResponse } from './user';

export const getAuth = async (authCode: string): Promise<IGetUserResponse> => {
  // TODO 2021/10/14 cw: authCode body vs query 뭐가 더 적절할지 확인하기
  return await axiosInstance.post<string, IGetUserResponse>(
    `/login?authCode=${authCode}`,
  );
};
