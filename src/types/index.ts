import { IKakao } from './Kakao';

export interface userInfo {
  kakaoId: string;
  nickname: string;
  profilePicture?: string;
}

declare global {
  interface Window {
    Kakao: IKakao;
  }
}
