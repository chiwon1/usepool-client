import { IUser } from './user';
import { IChat } from './chat';

export interface IChatRoom {
  _id: string;
  driver: IUser;
  ride: IRideNotPopulated;
  passenger: IUser;
  status: boolean;
  chatList: IChat[];
}

interface IRideNotPopulated {
  _id: string;
  departFrom: string;
  departDate: string;
  departTime: string;
  arriveAt: string;
  seatCapacity: number;
  driver: string;
  passengers: [];
  chatRooms: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
