export interface ILocationInfo {
  address: string;
  name: string;
  coordinate: ICoordinate;
}

export interface ICoordinate {
  lat: number;
  lng: number;
}

export interface IRide {
  departureLocation?: string;
  departureAddress?: string;
  departureCoordinate?: ICoordinate;
  departureDate?: string | null;
  departureTime?: string | null;
  destination?: string;
  destinationAddress?: string;
  destinationCoordinate?: ICoordinate;
}

export interface ISearchRide {
  _id: string;
  departureLocation: string;
  departureAddress: string;
  departureCoordinate: ICoordinate;
  departureDate: string;
  departureTime: string;
  destination: string;
  destinationAddress: string;
  destinationCoordinate: ICoordinate;
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
