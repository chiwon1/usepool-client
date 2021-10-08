import { IKakao } from './kakao';

export interface IUserInfo {
  kakaoId: string;
  nickname: string;
  profilePicture?: string;
}

declare global {
  interface Window {
    Kakao: IKakao;
  }
}
