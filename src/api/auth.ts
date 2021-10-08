import axiosInstance from './axios';

export const getAuth = (authCode: string): Promise<void> => {
  return axiosInstance.post(`/login?authCode=${authCode}`);
};
