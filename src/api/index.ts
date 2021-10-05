import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import ERROR from '../constants/error';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 4000,
});

const setResponseInterceptor = () => {
  const parseResponseData = (res: AxiosResponse) => res.data;

  const handleResponseError = (err: AxiosError) => {
    if (err.response) {
      const error =
        err.response?.status < 500
          ? {
              statusCode: err.response?.status,
              message: err.response?.data,
            }
          : {
              statusCode: 500,
              message: ERROR.INTERNAL_SERVER_ERROR,
            };

      console.log('error', error);
    } else {
      console.log('error', err);
    }
  };

  axiosInstance.interceptors.response.use(
    parseResponseData,
    handleResponseError,
  );
};

export const updateToken = (token: string): void => {
  // axiosInstance.interceptors.request.use((req) => {
  //   if (req.headers) {
  //     req.headers.authorization = token;
  //     return req;
  //   }
  // });

  const setAccessToken = (config: AxiosRequestConfig) => {
    if (!token) {
      throw new axios.Cancel(ERROR.INVALID_ACCESS_TOKEN);
    }

    config.headers!.authorization = `Bearer ${token}`;

    return config;
  };

  const handleRequestError = (err: AxiosError) => Promise.reject(err);

  axiosInstance.interceptors.request.use(setAccessToken, handleRequestError);
};

setResponseInterceptor();

export default axiosInstance;
