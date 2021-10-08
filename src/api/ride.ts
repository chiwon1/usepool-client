import axiosInstance from './axios';
import { INewRide } from '../Pages/NewRide/NewRide';

export const postNewRide = (value: INewRide) => {
  console.log('postNewRide');
  void axiosInstance.post(`/rides/new`, value);
};
