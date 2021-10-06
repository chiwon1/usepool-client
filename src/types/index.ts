import { IKakao } from './Kakao';

export interface userInfo {
  nickname: string;
  profilePicture?: string;
}

declare global {
  interface Window {
    Kakao: IKakao;
    foo: string;
  }
}
