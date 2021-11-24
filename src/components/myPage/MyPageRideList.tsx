import React, { FC } from 'react';
import styled from 'styled-components';
import UpperRouteIcon from '../styles/UpperRouteIcon';
import LowerRouteIcon from '../styles/LowerRouteIcon';

type Props = {
  departureDate: string;
  departureTime: string;
  departureLocation: string;
  destination: string;
  handleClick?: () => void;
};

const MyPageRideList: FC<Props> = ({
  departureDate,
  departureTime,
  departureLocation,
  destination,
  handleClick,
}) => {
  return (
    <StyledLi onClick={handleClick}>
      <div>
        <button>
          <Wrapper>
            <StyledSpan>{`${departureDate} ${departureTime}`}</StyledSpan>
            <div>
              <div>
                <StyledUl>
                  <li>
                    <DepartureContainer>
                      <UpperStyledDiv />
                      <UpperRouteIcon />
                      <LocationWrapper>
                        <span>{departureLocation}</span>
                      </LocationWrapper>
                    </DepartureContainer>
                  </li>
                  <li>
                    <DepartureContainer>
                      <UpperStyledDiv />
                      <LowerRouteIcon />
                      <LocationWrapper>
                        <span>{destination}</span>
                      </LocationWrapper>
                    </DepartureContainer>
                  </li>
                </StyledUl>
              </div>
            </div>
          </Wrapper>
        </button>
      </div>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  margin-bottom: 8px;
  padding-left: 24px;
  padding-right: 24px;
  isolation: isolate;

  & > div {
    border-radius: 16px;
    box-shadow: rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt;
    list-style-type: none;
    transition: box-shadow 200ms ease-in 0s;
    background-color: rgb(255, 255, 255);
    flex: 1 1 0%;
    position: relative;

    button {
      -webkit-tap-highlight-color: transparent;
      border-width: 0;
      box-sizing: border-box;
      color: #00aff5;
      display: block;
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
  }
`;

const StyledSpan = styled.span`
  margin: 0px;
  color: rgb(5, 71, 82);
  font-size: 22px;
  line-height: 24px;
`;

const Wrapper = styled.div`
  -webkit-box-pack: justify;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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

  & > div {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;

    & > div {
      min-width: 0px;
      position: relative;
      left: -24px;
    }
  }
`;

const StyledUl = styled.ul`
  list-style: none;

  li {
    min-height: 32px;
  }
`;

const DepartureContainer = styled.div`
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
`;

const UpperStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;

  time {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    width: 48px;
    display: none;
    flex-shrink: 0;
  }
`;

const LocationWrapper = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 8px 0px;
  text-align: left;

  span {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export default MyPageRideList;
