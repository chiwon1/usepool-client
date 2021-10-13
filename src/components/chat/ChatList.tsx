import React, { useCallback, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';
import axiosInstance from '../../api/axios';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider';
import { fetchRideDetails } from '../../api/ride';
import { IChat } from '../../types/chat';
import Chat from './Chat';
import makeSection from '../../utils/makeSection';
import Scrollbars from 'react-custom-scrollbars-2';

const ChatList = () => {
  const { rideId } = useParams<{ rideId: string; id: string }>();
  const { user } = useContext(UserContext);
  const scrollbarRef = useRef<Scrollbars>(null);

  const { data: rideDetails } = useQuery(
    'fetchRideDetails',
    fetchRideDetails(rideId),
  );

  const { data: chatData } = useQuery<any, any, IChat[]>(
    'fetchChatList',
    async () => {
      const res = (await axiosInstance.get(
        `/rides/${rideId}/chats/${user!.userId}`,
      )) as any;

      return res.chats;
    },
  );

  const chatSections = chatData ? makeSection(chatData) : [];

  useEffect(() => {
    if (chatData?.length !== 1) {
      setTimeout(() => {
        scrollbarRef.current?.scrollToBottom();
      }, 100);
    }
  }, [chatData]);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef}>
        <div>
          {Object.entries(chatSections).map(([date, chats]) => {
            return (
              <Section className={`section-${date}`} key={date}>
                <StickyHeader>
                  <button>{date}</button>
                </StickyHeader>
                {chats.map((chat) => (
                  <Chat key={chat._id} data={chat} />
                ))}
              </Section>
            );
          })}
        </div>
      </Scrollbars>
    </ChatZone>
  );
};

export const ChatZone = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`;

export const Section = styled.section`
  margin-top: 20px;
  border-top: 1px solid #eee;
`;

export const StickyHeader = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: sticky;
  top: 14px;
  & button {
    font-weight: bold;
    font-size: 13px;
    height: 28px;
    line-height: 27px;
    padding: 0 16px;
    z-index: 2;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    position: relative;
    top: -13px;
    background: white;
    border: none;
    outline: none;
  }
`;

export default ChatList;
