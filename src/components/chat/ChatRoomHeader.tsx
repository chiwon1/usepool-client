import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RightAddOnIcon from '../styles/RightAddOnIcon';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchChatRoomInfo } from '../../api/chatRoom';
import { IChatRoom } from '../../types/chatRoom';

const ChatRoomHeader = () => {
  const { chatRoomId } = useParams<{ chatRoomId: string }>();

  const { data: info, isLoading } = useQuery<any, any, IChatRoom>(
    ['fetchChatRoomInfo', { chatRoomId }],
    fetchChatRoomInfo(chatRoomId),
  );

  if (isLoading || !info) {
    return null;
  }

  return (
    <div>
      <Wrapper>
        <div>
          <Link to={`/rides/${info.ride._id}`}>
            <SpanWrapper>
              <SpanWrapper5>
                <svg
                  aria-hidden="true"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fillRule="evenodd"
                    fill="none"
                    transform="translate(-1 -1)"
                  >
                    <path
                      d="M12 22.065C6.441 22.065 1.935 17.56 1.935 12 1.935 6.441 6.44 1.935 12 1.935c5.559 0 10.065 4.506 10.065 10.065 0 5.559-4.506 10.065-10.065 10.065zm0-1a9.065 9.065 0 1 0 0-18.13 9.065 9.065 0 0 0 0 18.13z"
                      fillRule="nonzero"
                      fill="#708C91"
                    />
                    <path
                      d="M10.26 11.63a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5v5.218a.5.5 0 1 1-1 0V11.63h-1.24zm0 5.218a.5.5 0 1 1 0-1h3.48a.5.5 0 1 1 0 1h-3.48z"
                      fillRule="nonzero"
                      fill="#708C91"
                    />
                    <circle
                      cx="12"
                      cy="7.652"
                      fillRule="nonzero"
                      fill="#708C91"
                      r="1"
                    />
                  </g>
                </svg>
              </SpanWrapper5>
              {info && (
                <SpanWrapper2>
                  <SpanWrapper4>{`${info.ride.departFrom} → ${info.ride.arriveAt}`}</SpanWrapper4>
                  <SpanWrapper3>{`${info.ride.departDate} ${info.ride.departTime}`}</SpanWrapper3>
                </SpanWrapper2>
              )}
            </SpanWrapper>
            <RightAddOnIcon />
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 662px;

  & > div {
    position: sticky;
    position: -webkit-sticky;
    background-color: #fff;
    z-index: 1;
    top: 72px;

    & > a {
      padding-left: 24px;
      padding-right: 24px;
      position: relative;
      display: flex;
      padding-top: 16px;
      padding-bottom: 16px;
      -webkit-box-align: center;
      align-items: center;
      flex: 1 1 0%;
      border: 0px;
      background: none;
      white-space: pre-line;
      background: none;
      text-decoration: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(221, 221, 221, 0.4);

      :hover {
        background-color: #ededed;
        cursor: pointer;
      }

      :disabled {
        cursor: default;
      }
    }
  }
`;

const SpanWrapper = styled.span`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 16px;
`;

const SpanWrapper5 = styled.span`
  display: inline-flex;
  min-width: 24px;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 16px;

  & > svg {
    fill: rgb(112, 140, 145);
  }
`;

const SpanWrapper2 = styled.span`
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
  flex: 1 1 0%;
`;

const SpanWrapper3 = styled.span`
  font-size: 16px;
  color: rgb(112, 140, 145);
`;

const SpanWrapper4 = styled.span`
  margin: 0px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: rgb(5, 71, 82);
  display: block;
`;

export default ChatRoomHeader;
