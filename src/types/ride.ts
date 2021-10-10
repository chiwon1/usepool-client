export interface IRide {
  departFrom?: string;
  departDate?: string | null;
  departTime?: string | null;
  arriveAt?: string;
  seatCapacity?: number | null;
  driverNickname?: string;
}

export interface ISearchRide {
  _id: string;
  departFrom: string;
  departDate: string;
  departTime: string;
  arriveAt: string;
  seatCapacity: number;
  driver: {
    _id: string;
    kakaoId: number;
    nickname: string;
    profilePicture: string;
    ridesAsDriver: string[];
    ridesAsPassenger: string[];
    __v: number;
    token: string;
  };
  driverNickname: string;
  passengers: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
