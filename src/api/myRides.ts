import axiosInstance from './axios';
import { ISearchRide } from '../types/ride';

export const fetchMyRidesAsDriver = () => async () => {
  const { rides } = (await axiosInstance.get('/myRides/asDriver')) as any;

  return rides as ISearchRide[];
};

export const fetchMyRidesAsPassenger = () => async () => {
  const { rides } = (await axiosInstance.get('/myRides/asPassenger')) as any;

  return rides as ISearchRide[];
};
