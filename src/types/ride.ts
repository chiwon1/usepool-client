export interface IRide {
  departFrom?: string;
  departDate?: string | null;
  departTime?: string | null;
  arriveAt?: string;
  seatCapacity?: number | null;
  driverNickname?: string;
}

export interface ISearchRide {
  _id: {
    $oid: string;
  };
  departFrom: string;
  departDate: string;
  departTime: string;
  arriveAt: string;
  driver: {
    kakaoId: number;
    nickname: string;
    profilePicture: string;
    ridesAsDriver: { $oid: string }[];
    ridesAsPassenger: { $oid: string }[];
    __v: number;
    token: string;
  };
  driverNickname: string;
  passengers: { $oid: string }[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
