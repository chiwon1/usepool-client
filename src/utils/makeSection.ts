import dayjs from 'dayjs';
import { IChat } from '../types/chat';

const makeSection = (chatList: IChat[]) => {
  const sections: { [key: string]: IChat[] } = {};

  chatList.forEach((chat) => {
    const formattedDate = dayjs(chat.createdAt).format('DD MMM YYYY');

    if (Array.isArray(sections[formattedDate])) {
      sections[formattedDate].push(chat);
    } else {
      sections[formattedDate] = [chat];
    }
  });

  return sections;
};

export default makeSection;
