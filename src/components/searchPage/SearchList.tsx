import React, { FC } from 'react';
import styled from 'styled-components';
import LocationDiv from '../LocationDiv';

type Props = {
  departureLocation: string;
  arriveAt: string;
  departureTime: string;
  nickname: string;
  profilePicture?: string;
  handleClick?: () => void;
};

const SearchList: FC<Props> = ({
  departureLocation,
  arriveAt,
  departureTime,
  nickname,
  profilePicture,
  handleClick,
}) => {
  // TODO 2021/10/10 cw: profilePicture default prop 지정하기

  return (
    <StyledLi onClick={handleClick}>
      <Wrapper11>
        <Wrapper12 />
        <Awrapper>
          <Wrapper13>
            <Wrapper14>
              <Wrapper15>
                <ul>
                  <LocationDiv
                    location={departureLocation}
                    down={true}
                    time={departureTime}
                  />
                  <LocationDiv location={arriveAt} down={false} />
                </ul>
                <div></div>
              </Wrapper15>
              <span />
            </Wrapper14>
            <Wrapper16>
              <SpanWrapper1>
                <SpanWrapper2>
                  <Wrapper17>
                    <img src={profilePicture} />
                  </Wrapper17>
                </SpanWrapper2>
                <SpanWrapper3>
                  <SpanWrapper4>{nickname}</SpanWrapper4>
                </SpanWrapper3>
              </SpanWrapper1>
            </Wrapper16>
          </Wrapper13>
        </Awrapper>
      </Wrapper11>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  margin-bottom: 8px;
  padding-left: 24px;
  padding-right: 24px;
  isolation: isolate;
`;

const Wrapper11 = styled.div`
  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt;
  list-style-type: none;
  transition: box-shadow 200ms ease-in 0s;
  background-color: rgb(255, 255, 255);
  flex: 1 1 0;
  position: relative;
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0 2pt 8pt, rgba(0, 0, 0, 0.08) 0 2pt 16pt;
  }
`;

const Wrapper12 = styled.div`
  position: absolute;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  inset: 0px;
  opacity: 0.8;
  display: none;
  z-index: 3;
`;

const Awrapper = styled.a`
  color: rgb(0, 175, 245);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  display: block;
  text-decoration: none;
`;

const Wrapper13 = styled.div`
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Wrapper14 = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Wrapper15 = styled.div`
  min-width: 0px;
  position: relative;
  left: -24px;
`;

const Wrapper16 = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  border: 0px;
  background: none;
  white-space: pre-line;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
  padding-bottom: 0px;
`;

const SpanWrapper1 = styled.span`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
`;

const SpanWrapper2 = styled.span`
  display: inline-flex;
  min-width: 24px;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 16px;
`;

const Wrapper17 = styled.div`
  border: 2px dashed rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
  width: 48px;
  height: 48px;
  border: none;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SpanWrapper3 = styled.span`
  flex: 1 1 0%;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const SpanWrapper4 = styled.span`
  margin: 0px;
  font-weight: 400;
  color: rgb(5, 71, 82);
  font-size: 18px;
  line-height: 20px;
  display: block;
`;

export default SearchList;
