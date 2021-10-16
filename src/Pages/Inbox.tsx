import React, { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import { fetchChatRoomList } from '../api/chatRoom';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider';
import styled from 'styled-components';
import ChatRoomList from '../components/ChatRoomList';

const Inbox: FC = () => {
  const { user } = useContext(UserContext);
  const {
    isLoading,
    error,
    data: chatRoomList,
  } = useQuery(['fetchChatRoomList', { id: user?.userId }], fetchChatRoomList);

  if (!chatRoomList || isLoading) {
    return null;
  }

  return (
    <Wrapper>
      <div>
        <div>
          <TitleWrapper>
            <h1>Inbox</h1>
          </TitleWrapper>
        </div>
        <div>
          <TitleWrapper>
            <StyeldUl>
              {chatRoomList?.map((chatRoom) => (
                <ChatRoomList key={chatRoom._id} data={chatRoom} />
              ))}
            </StyeldUl>
          </TitleWrapper>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative !important;
  -webkit-box-flex: 1;
  flex-grow: 1;
  min-height: 872px;
  height: auto;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

const TitleWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 662px;

  h1 {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 30px;
    line-height: 1.06;
    font-weight: 500;
    --space-bottom: 32px;
    --font-size-desktop: 40px;
    padding-left: 24px;
    padding-right: 24px;
    margin: 0px;
    text-align: center;
    font-size: var(--font-size-desktop);
  }
`;

const StyeldUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export default Inbox;
