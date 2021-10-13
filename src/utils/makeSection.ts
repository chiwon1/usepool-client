import dayjs from 'dayjs';
import { IChat } from '../types/chat';

export default (chatList: IChat[]) => {
  const sections: { [key: string]: IChat[] } = {};

  chatList.forEach((chat) => {
    const monthDate = dayjs(chat.createdAt).format('YYYY-MM-DD');
    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });

  return sections;
};
