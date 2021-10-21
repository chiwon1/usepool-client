import axiosInstance from '../utils/axios';
import { IRide, ISearchRide } from '../types/ride';
import { AxiosResponse } from 'axios';

export const postNewRide = async (
  value: IRide,
): Promise<AxiosResponse<IRide>> => {
  return await axiosInstance.post(`/rides/new`, value);
};

export const fetchSearchedRides =
  (value: IRide) => async (): Promise<void | ISearchRide[]> => {
    const { departureCoordinate, departureDate, destinationCoordinate } = value;

    if (!departureCoordinate || !departureDate || !destinationCoordinate) {
      return console.log('invalid parameter input for searchRide');
    }

    const { searchResult }: { searchResult: ISearchRide[] } =
      await axiosInstance.get(
        `/rides/search?departureCoordinate=${departureCoordinate.lat}&departureCoordinate=${departureCoordinate.lng}&departureDate=${departureDate}&destinationCoordinate=${destinationCoordinate.lat}&destinationCoordinate=${destinationCoordinate.lng}`,
      );

    return searchResult;
  };

export const fetchRideDetails =
  (id: string) => async (): Promise<ISearchRide> => {
    const { details }: { details: ISearchRide } = await axiosInstance.get(
      `/rides/${id}`,
    );

    return details;
  };

export const bookRide = async (
  rideId: string,
): Promise<
  AxiosResponse<{
    result: string;
  }>
> => {
  return await axiosInstance.post(`/rides/${rideId}`);
};

export const postNewChatRoom = async (rideId: string): Promise<string> => {
  const res: { roomId: string } = await axiosInstance.post(
    `/rides/${rideId}/newChatRoom`,
  );

  return res.roomId;
};
