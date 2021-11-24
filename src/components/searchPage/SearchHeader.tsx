import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  availableNumber: number;
};

const SearchHeader: FC<Props> = ({ availableNumber }) => {
  return (
    <Wrapper>
      <div>
        <div
          aria-multiselectable="false"
          aria-orientation="horizontal"
          role="tablist"
        >
          <div>
            <ButtonWrapper
              aria-controls="tab_carpooling_panel"
              aria-selected="false"
              role="tab"
              tabIndex={-1}
              title="Carpool"
            >
              <SpanWrapper>
                <svg
                  aria-hidden="true"
                  height="32"
                  viewBox="0 0 28 16"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    color="#00AFF5"
                    fillRule="evenodd"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6.62.33h8.04a4 4 0 0 1 3.2 1.6l2.8 3.75 4.06.8a3.25 3.25 0 0 1 2.61 3.19v1.66a1 1 0 0 1-1 1H4.68l-3.33-1.1a1 1 0 0 1-.68-.95v-3.6a1 1 0 0 1 1-1h1.66l2.4-4.8a1 1 0 0 1 .89-.55z" />
                    <path d="M10 .33v5.34" strokeLinecap="square" />
                    <path
                      d="M1.67 5.67h19l4.05.8a3.25 3.25 0 0 1 2.61 3.2v1.66a1 1 0 0 1-1 1H4.68l-3.33-1.1a1 1 0 0 1-.68-.95V6.67a1 1 0 0 1 1-1z"
                      fill="currentColor"
                    />
                    <circle cx="7.33" cy="12.33" fill="#FFF" r="2.67" />
                    <circle cx="20.67" cy="12.33" fill="#FFF" r="2.67" />
                  </g>
                  <span />
                </svg>
                <StyledSpan>Carpool</StyledSpan>
              </SpanWrapper>
              <AvailableNumberWrapper>{availableNumber}</AvailableNumberWrapper>
            </ButtonWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-width: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  position: sticky;
  top: 148px;
  transition: top 250ms ease-in-out;
  vertical-align: baseline;
  z-index: 4;
  border-bottom: 1px solid rgb(221, 221, 221);

  & > div {
    border-width: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin: 0 auto;
    padding: 0;
    vertical-align: baseline;
    width: calc(614px);

    & > div {
      border-width: 0;
      display: flex;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      margin: 0 auto;
      overflow: auto;
      padding: 0;
      vertical-align: baseline;
      justify-content: center;

      & > div {
        -webkit-box-pack: center;
        border-width: 0;
        display: flex;
        font-size: 16px;
        font-weight: 400;
        justify-content: center;
        line-height: 16px;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        width: calc(33.3333%);
      }

      &:-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

const ButtonWrapper = styled.button`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  background-color: #fff;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #00aff5;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  height: 100%;
  justify-content: center;
  line-height: normal;
  margin: 0;
  outline: none;
  padding: 16px;
  vertical-align: baseline;
  width: 100%;

  &:not(.kirk-tab-selected):hover {
    cursor: pointer;
  }
`;

const SpanWrapper = styled.span`
  -webkit-box-align: center;
  -webkit-box-flex: 1;
  align-items: center;
  border-width: 0;
  display: flex;
  flex-grow: 1;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  max-width: 100%;
  padding: 0;
  position: relative;
  vertical-align: baseline;
  white-space: normal;

  & > svg {
    box-sizing: border-box;
    fill: #00aff5;
    flex-shrink: 0;

    & > g {
      & > path {
        color: currentcolor;
      }
    }

    & > span {
      border-width: 0;
      font-size: 18px;
      font-weight: 400;
      line-height: normal;
      margin: 0 0 0 16px;
      overflow: hidden;
      padding: 0;
      text-align: left;
      text-overflow: ellipsis;
      vertical-align: baseline;
    }
  }
`;

const StyledSpan = styled.span`
  border-width: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin: 0 0 0 16px;
  overflow: hidden;
  padding: 0;
  text-align: left;
  text-overflow: ellipsis;
  vertical-align: baseline;
`;

const AvailableNumberWrapper = styled.span`
  border-width: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin: 8px 0 0;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  vertical-align: baseline;
  white-space: nowrap;
`;

export default SearchHeader;
