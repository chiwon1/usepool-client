import React, { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import { fetchChatRoomList } from '../api/chatRoom';
import { useHistory } from 'react-router-dom';

const Inbox: FC = () => {
  const {
    isLoading,
    error,
    data: chatRoomList,
  } = useQuery('fetchChatRoomList', fetchChatRoomList);

  const history = useHistory();

  const handleClick = (chatRoomId: string) => {
    history.push(`/chatRooms/${chatRoomId}`);
  };

  if (!chatRoomList || isLoading) {
    return null;
  }

  return (
    <div>
      {chatRoomList?.map((chatRoom) => (
        <div
          key={chatRoom._id}
          style={{ border: '1px solid black' }}
          onClick={() => handleClick(chatRoom._id)}
        >
          <div>{`${chatRoom.ride.departFrom} -> ${chatRoom.ride.arriveAt}`}</div>
          <div>{`DepartDate: ${chatRoom.ride.departDate}`}</div>
          <div>{`Driver: ${chatRoom.driver.nickname}`}</div>
          <div>{`Passenger: ${chatRoom.passenger.nickname}`}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Inbox;
