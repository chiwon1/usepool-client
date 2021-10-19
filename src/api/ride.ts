import axiosInstance from './axios';
import { IRide, ISearchRide } from '../types/ride';

export const postNewRide = async (value: IRide) => {
  return await axiosInstance.post(`/rides/new`, value);
};

export const fetchSearchedRides = (value: IRide) => async () => {
  const { departureCoordinate, departureDate, destinationCoordinate } = value;

  if (!departureCoordinate || !departureDate || !destinationCoordinate) {
    return console.log('invalid parameter input for searchRide');
  }

  const { searchResult } = (await axiosInstance.get(
    `/rides/search?departureCoordinate=${departureCoordinate[0]}&departureCoordinate=${departureCoordinate[1]}&departureDate=${departureDate}&destinationCoordinate=${destinationCoordinate[0]}&destinationCoordinate=${destinationCoordinate[1]}`,
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

export const postNewChatRoom = async (rideId: string) => {
  const res = (await axiosInstance.post(`/rides/${rideId}/newChatRoom`)) as any;

  return res.roomId as string;
};
