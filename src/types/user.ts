export interface IUserInfo {
  userId: string;
  kakaoId: string;
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
