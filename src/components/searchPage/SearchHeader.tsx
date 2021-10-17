import React from 'react';
import styled from 'styled-components';

type Props = {
  availableNumber: number;
};

const SearchHeader = ({ availableNumber }: Props) => {
  return (
    <Wrapper4>
      <Wrapper5>
        <Wrapper7
          aria-multiselectable="false"
          aria-orientation="horizontal"
          role="tablist"
        >
          <Wrapper8>
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
                  <SpanWrapper2></SpanWrapper2>
                </svg>
                <SpanWrapper3>Carpool</SpanWrapper3>
              </SpanWrapper>
              <SpanWrapper4>{availableNumber}</SpanWrapper4>
            </ButtonWrapper>
          </Wrapper8>
        </Wrapper7>
      </Wrapper5>
    </Wrapper4>
  );
};

const Wrapper4 = styled.div`
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
`;

const Wrapper5 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0 auto;
  padding: 0;
  vertical-align: baseline;
  width: calc(614px);
`;

const Wrapper6 = styled.div`
  -webkit-font-smoothing: antialiased;
  background-color: #054752;
  border-width: 0;
  bottom: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 2px;
  //left: 372px;
  left: 50%;
  line-height: 16px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 92px;
  transition-duration: 200ms;
  transition-property: width, left;
  transition-timing-function: ease-in-out;
  vertical-align: baseline;
  width: 204.656px;
  z-index: 2;
`;

const Wrapper7 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0 auto;
  overflow: auto;
  padding: 0;
  vertical-align: baseline;
  justify-content: center;

  &:-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper8 = styled.div`
  -webkit-box-pack: center;
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  width: calc(33.3333%);
`;

const ButtonWrapper = styled.button`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: #fff;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #00aff5;
  display: flex;
  flex-direction: column;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
  -webkit-font-smoothing: antialiased;
  align-items: center;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  max-width: 100%;
  padding: 0;
  position: relative;
  vertical-align: baseline;
  white-space: normal;

  svg {
    box-sizing: border-box;
    fill: #00aff5;
    flex-shrink: 0;

    g {
      path {
        color: currentcolor;
      }
    }
  }
`;

const SpanWrapper2 = styled.span`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

const SpanWrapper3 = styled.span`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

const SpanWrapper4 = styled.span`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
