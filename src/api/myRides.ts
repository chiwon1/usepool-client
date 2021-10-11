import axiosInstance from './axios';
import { ISearchRide } from '../types/ride';

export const getMyRidesAsDriver = async () => {
  const { rides } = (await axiosInstance.get('/myRides/asDriver')) as any;

  return rides as ISearchRide[];
};
