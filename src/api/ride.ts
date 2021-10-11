import axiosInstance from './axios';
import { IRide, ISearchRide } from '../types/ride';

export const postNewRide = (value: IRide) => {
  void axiosInstance.post(`/rides/new`, value);
};

export const searchRide = async (value: IRide) => {
  const { departFrom, departDate, arriveAt } = value;

  if (!departFrom || !departDate || !arriveAt) {
    return console.log('invalid parameter input for searchRide');
  }

  const { searchResult } = (await axiosInstance.get(
    `/rides/search?departFrom=${departFrom}&arriveAt=${arriveAt}&departDate=${departDate}`,
  )) as any;

  return searchResult as ISearchRide[];
};

export const getRideDetails = async (id: string) => {
  const { details } = (await axiosInstance.get(`/rides/${id}`)) as any;

  return details as ISearchRide;
};

export const bookRide = (rideId: string) => {
  void axiosInstance.post(`/rides/${rideId}`);
};
