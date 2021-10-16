import React from 'react';
import styled from 'styled-components';
import UpperRouteIcon from '../styles/UpperRouteIcon';
import LowerRouteIcon from '../styles/LowerRouteIcon';

type Props = {
  departDate: string;
  departTime: string;
  departFrom: string;
  arriveAt: string;
  handleClick?: () => void;
};

const MyPageRideList = ({
  departDate,
  departTime,
  departFrom,
  arriveAt,
  handleClick,
}: Props) => {
  return (
    <StyledLi onClick={handleClick}>
      <Wrapper2>
        <button>
          <Wrapper>
            <SpanWrapper>{`${departDate} ${departTime}`}</SpanWrapper>
            <Wrapper6>
              <Wrapper8>
                <StyledUl>
                  <li>
                    <Wrapper3>
                      <Wrapper4 />
                      <UpperRouteIcon />
                      <Wrapper7>
                        <span>{departFrom}</span>
                      </Wrapper7>
                    </Wrapper3>
                  </li>
                  <li>
                    <Wrapper3>
                      <Wrapper4 />
                      <LowerRouteIcon />
                      <Wrapper7>
                        <span>{arriveAt}</span>
                      </Wrapper7>
                    </Wrapper3>
                  </li>
                </StyledUl>
              </Wrapper8>
            </Wrapper6>
          </Wrapper>
        </button>
      </Wrapper2>
    </StyledLi>
  );
};

const Wrapper6 = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const StyledLi = styled.li`
  margin-bottom: 8px;
  padding-left: 24px;
  padding-right: 24px;
  isolation: isolate;
`;

const SpanWrapper = styled.span`
  margin: 0px;
  color: rgb(5, 71, 82);
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  -webkit-box-pack: justify;
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 100%;
  justify-content: space-between;
  line-height: 16px;
  margin: 0;
  padding: 16px;
  vertical-align: baseline;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0 2pt 8pt, rgba(0, 0, 0, 0.08) 0 2pt 16pt;
  }
`;

const Wrapper2 = styled.div`
  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt;
  list-style-type: none;
  transition: box-shadow 200ms ease-in 0s;
  background-color: rgb(255, 255, 255);
  flex: 1 1 0%;
  position: relative;

  button {
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    border-width: 0;
    box-sizing: border-box;
    color: #00aff5;
    display: block;
    font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    vertical-align: baseline;
    width: 100%;
    text-align: left;
    background: none;
    cursor: pointer;
  }
`;

const StyledUl = styled.ul`
  list-style: none;

  li {
    min-height: 32px;
  }
`;

const Wrapper3 = styled.div`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
`;

const Wrapper4 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;

  time {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    font-weight: 500;
    width: 48px;
    display: none;
    flex-shrink: 0;
  }
`;

const Wrapper7 = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 8px 0px;
  text-align: left;

  span {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    font-weight: 500;
  }
`;

const Wrapper8 = styled.div`
  min-width: 0px;
  position: relative;
  left: -24px;
`;

export default MyPageRideList;
