import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  departFrom: string;
  arriveAt: string;
  departDate: string;
};

const SearchTopBar: FC<Props> = ({ departFrom, arriveAt, departDate }) => {
  return (
    <Wrapper role="presentation">
      <div>
        <a>
          <div>
            <div>
              <div>
                <svg
                  aria-hidden="true"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1"
                    stroke="#708C91"
                  >
                    <line x1="22" x2="16.4" y1="22" y2="16.4" />
                    <circle cx="10" cy="10" r="9" />
                  </g>
                </svg>
                <LocationContainer>
                  <p>
                    <StyledSpan>
                      <DepartWrapper>{departFrom}</DepartWrapper>
                      <svg
                        aria-hidden="true"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                          stroke="#708C91"
                          transform="rotate(180 12 12)"
                        >
                          <path d="M9 19l-7-7 7-7" />
                          <path d="M22 12H2" />
                        </g>
                      </svg>
                      <ArrivalWrapper>{arriveAt}</ArrivalWrapper>
                    </StyledSpan>
                  </p>
                  <DepartDateWrapper>{departDate}</DepartDateWrapper>
                </LocationContainer>
              </div>
            </div>
          </div>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-width: 0;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  height: 76px;
  justify-content: flex-start;
  line-height: 16px;
  margin: 0;
  padding: 0;
  position: sticky;
  top: 72px;
  transition: top 250ms ease-in-out;
  vertical-align: baseline;
  z-index: 5;

  & > div {
    border-width: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin: 0 auto;
    max-width: 662px;
    padding: 0;
    vertical-align: baseline;
    width: 100%;

    & > a {
      -webkit-tap-highlight-color: transparent;
      border-width: 0;
      color: #00aff5;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      vertical-align: baseline;

      & > div {
        border-width: 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        margin: 0;
        padding: 0;
        vertical-align: baseline;

        & > div {
          border-width: 0;
          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
          margin: 0;
          padding: 8px 24px;
          vertical-align: baseline;
          width: 100%;

          & > div {
            -webkit-box-align: center;
            align-items: center;
            background-color: #ededed;
            border-radius: 16px;
            border-width: 0;
            color: #054752;
            display: flex;
            font-size: 16px;
            font-weight: 400;
            line-height: 54px;
            margin: 0;
            min-height: 54px;
            padding: 0 16px;
            text-decoration: none;
            vertical-align: baseline;

            svg {
              box-sizing: border-box;
              fill: #708c91;
              flex-shrink: 0;
            }
          }
        }
      }
    }
  }
`;

const LocationContainer = styled.div`
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  line-height: 54px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  vertical-align: baseline;
  white-space: nowrap;
  width: calc(100% - 48px);

  &:not(:first-child) {
    margin-left: 16px;
  }

  & > p {
    border-width: 0;
    color: #054752;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    width: 100%;
  }
`;

const Pwrapper = styled.p`
  border-width: 0;
  color: #054752;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  width: 100%;
`;

const StyledSpan = styled.span`
  border-width: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;

  span {
    border-width: 0;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    font-weight: bolder;
  }

  svg {
    -webkit-box-flex: 0;
    box-sizing: border-box;
    display: inline-block;
    fill: #708c91;
    flex: 0 0;
    height: 0.9em;
    margin: 0 8px;
    padding: 0.1em 0 0;
    width: 0.9em;
  }
`;

const ArrivalWrapper = styled.span`
  border-width: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const DepartDateWrapper = styled.span`
  border-width: 0;
  box-sizing: border-box;
  color: #708c91;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const DepartWrapper = styled.span`
  font-weight: bolder;
`;

export default SearchTopBar;
