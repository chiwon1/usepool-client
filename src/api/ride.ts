import axiosInstance from './axios';
import { IRide, ISearchRide } from '../types/ride';

export const postNewRide = async (value: IRide) => {
  return await axiosInstance.post(`/rides/new`, value);
};

export const fetchSearchedRides = (value: IRide) => async () => {
  const { departFrom, departDate, arriveAt } = value;

  if (!departFrom || !departDate || !arriveAt) {
    return console.log('invalid parameter input for searchRide');
  }

  const { searchResult } = (await axiosInstance.get(
    `/rides/search?departFrom=${departFrom}&arriveAt=${arriveAt}&departDate=${departDate}`,
  )) as any;

  return searchResult as ISearchRide[];
};

export const fetchRideDetails = (id: string) => async () => {
  const { details } = (await axiosInstance.get(`/rides/${id}`)) as any;

  return details as ISearchRide;
};

export const bookRide = async (rideId: string) => {
  return await axiosInstance.post(`/rides/${rideId}`);
};
