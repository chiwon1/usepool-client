export interface IChat {
  // DM 채팅
  _id: string;
  sender: string;
  senderNickname: string;
  senderProfilePicture: string;
  contents: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
