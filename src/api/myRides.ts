import axiosInstance from '../utils/axios';
import { ISearchRide } from '../types/ride';

export const fetchMyRidesAsDriver = () => async (): Promise<ISearchRide[]> => {
  const { rides }: { rides: ISearchRide[] } = await axiosInstance.get(
    '/myRides/asDriver',
  );

  return rides;
};

export const fetchMyRidesAsPassenger =
  () => async (): Promise<ISearchRide[]> => {
    const { rides }: { rides: ISearchRide[] } = await axiosInstance.get(
      '/myRides/asPassenger',
    );

    return rides;
  };
