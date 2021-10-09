import axiosInstance from './axios';

export const getAuth = (authCode: string): Promise<void> => {
  // authCode body 로 보내는 것으로 서버와 같이 리팩토링
  return axiosInstance.post(`/login?authCode=${authCode}`);
};
