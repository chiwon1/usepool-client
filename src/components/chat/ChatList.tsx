import React, { FC, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { IChat } from '../../types/chat';
import Chat from './Chat';
import makeSection from '../../utils/makeSection';
import Scrollbars from 'react-custom-scrollbars-2';
import { fetchChatList } from '../../api/chatRoom';

const ChatList: FC = () => {
  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  const scrollbarRef = useRef<Scrollbars>(null);

  const { data: chatList } = useQuery<any, any, IChat[]>(
    ['fetchChatList', { chatRoomId }],
    fetchChatList(chatRoomId),
  );

  const chatSections = useMemo(
    () => (chatList ? makeSection(chatList) : []),
    [chatList],
  );

  useEffect(() => {
    if (chatList?.length !== 1) {
      setTimeout(() => {
        scrollbarRef.current?.scrollToBottom();
      }, 100);
    }
  }, [chatList]);

  return (
    <ChatWrapper>
      <Scrollbars autoHide ref={scrollbarRef}>
        <Wrapper>
          <Wrapper2>
            <Wrapper3>
              <div>
                <div>
                  {Object.entries(chatSections).map(([date, chatList]) => {
                    return (
                      <Section className={`section-${date}`} key={date}>
                        <StickyHeader>
                          <p>{date}</p>
                        </StickyHeader>
                        {chatList.map((chat, index) => (
                          <Chat key={index} data={chat} />
                        ))}
                      </Section>
                    );
                  })}
                </div>
              </div>
            </Wrapper3>
          </Wrapper2>
        </Wrapper>
      </Scrollbars>
    </ChatWrapper>
  );
};

export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  padding-bottom: 70px;
`;

export const Section = styled.section`
  margin-top: 20px;
  border-top: 1px solid #eee;
`;

export const StickyHeader = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
  word-break: break-word;

  & p {
    white-space: pre-line;
    color: rgb(112, 140, 145);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 662px;
`;

const Wrapper2 = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Wrapper3 = styled.div`
  width: 100%;
  padding-bottom: 6px;
`;

export default ChatList;
