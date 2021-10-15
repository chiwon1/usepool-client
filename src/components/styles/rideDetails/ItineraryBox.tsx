import React from 'react';
import TimeIndicator from './TimeIndicator';
import LocationIndicator from './LocationIndicator';
import styled from 'styled-components';

type Props = {
  departTime: string;
  departFrom: string;
  arriveAt: string;
};

const ItineraryBox = ({ departTime, departFrom, arriveAt }: Props) => {
  return (
    <>
      <ul>
        <li>
          <Wrapper6>
            <TimeIndicator time={departTime} />
            <Wrapper8>
              <Wrapper9 />
              <Wrapper10>
                <div />
              </Wrapper10>
              <Wrapper11 />
            </Wrapper8>
            <LocationIndicator location={departFrom} />
          </Wrapper6>
        </li>
        <li>
          <Wrapper6>
            <TimeIndicator />
            <Wrapper8>
              <Wrapper15></Wrapper15>
              <Wrapper16>
                <div></div>
              </Wrapper16>
              <Wrapper9 />
            </Wrapper8>
            <LocationIndicator location={arriveAt} />
          </Wrapper6>
        </li>
      </ul>
      <Wrapper3>
        <hr />
      </Wrapper3>
    </>
  );
};

const Wrapper6 = styled.div`
  color: rgb(0, 175, 245);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
`;

const Wrapper8 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  min-height: 32px;
  margin: 0px 8px;
  width: 8px;
  flex-shrink: 0;
`;

const Wrapper9 = styled.div`
  width: 4px;
  height: calc(13px);
  background: transparent;
`;

const Wrapper10 = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);

  div {
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(5, 71, 82);
    border-radius: 50%;
  }
`;

const Wrapper11 = styled.div`
  width: 4px;
  height: calc(13px);
  background: rgb(5, 71, 82);
  flex: 1 1 0%;
`;

const Wrapper15 = styled.div`
  width: 4px;
  height: calc(13px);
  background: rgb(5, 71, 82);
`;

const Wrapper16 = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);

  div {
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(5, 71, 82);
    border-radius: 50%;
  }
`;

const Wrapper3 = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;

  hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border: none;
    background-color: rgb(237, 237, 237);
    height: 1px;
    margin: 0px;
    height: 8px;
  }
`;

export default ItineraryBox;
