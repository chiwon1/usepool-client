import axiosInstance from './axios';
import { IRide } from '../types/ride';

export const postNewRide = (value: IRide) => {
  console.log('postNewRide');
  void axiosInstance.post(`/rides/new`, value);
};

export const searchRide = async (value: IRide) => {
  console.log('searchRide');

  const { departFrom, departDate, arriveAt } = value;

  if (!departFrom || !departDate || !arriveAt) {
    return console.log('invalid parameter input for searchRide');
  }

  return await axiosInstance.get(
    `/rides/search?departFrom=${departFrom}&departDate=${departDate}&arriveAt=${arriveAt}`,
  );
};
