export interface IUserInfo {
  userId: string;
  nickname: string;
  profilePicture?: string;
}

export interface IUser {
  _id: string;
  kakaoId: number;
  nickname: string;
  profilePicture: string;
  ridesAsPassenger: string[];
  __v: number;
}

export interface IGetUserResponse {
  result: string;
  userInfo: IUserInfo;
  token: string;
}
