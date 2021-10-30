export interface IChat {
  _id: string;
  sender: string;
  senderNickname: string;
  senderProfilePicture: string;
  contents: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
