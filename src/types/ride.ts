export interface IRide {
  departLocation?: string;
  departAddress?: string;
  departCoordinate?: number[];
  departDate?: string | null;
  departTime?: string | null;
  destination?: string;
  destinationAddress?: string;
  destinationCoordinate?: number[];
}

export interface ILocationInfo {
  address: string;
  name: string;
  coordinate: number[];
}

// TODO 2021/10/14 cw: 변수명수정하기
export interface ISearchRide {
  _id: string;
  departFrom: string;
  departDate: string;
  departTime: string;
  arriveAt: string;
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
