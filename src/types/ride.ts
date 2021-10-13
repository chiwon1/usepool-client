export interface IRide {
  departFrom?: string;
  departDate?: string | null;
  departTime?: string | null;
  arriveAt?: string;
  seatCapacity?: number | null;
}

// TODO 2021/10/14 cw: 변수명수정하기
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
    ridesAsPassenger: string[];
    __v: number;
    token: string;
  };
  passengers: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
