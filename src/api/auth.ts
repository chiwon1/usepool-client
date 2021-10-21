import axiosInstance from './axios';
import { IGetUserResponse } from './user';

export const getAuth = async (authCode: string): Promise<IGetUserResponse> => {
  // TODO 2021/10/14 cw: authCode body vs query 뭐가 더 적절할지 확인하기
  return await axiosInstance.post<string, IGetUserResponse>(
    `/login?authCode=${authCode}`,
  );

  // TODO 2021/10/14 cw: try catch 로 userInfo 못가져온 경우 핸들링으로 리팩토링
};
