import axios, { AxiosError, AxiosResponse } from 'axios';
import ERROR from '../constants/error';

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL!}/api`,
  timeout: 4000,
  withCredentials: true,
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

setResponseInterceptor();

export default axiosInstance;
