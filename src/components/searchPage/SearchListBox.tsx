import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

type Props = {
  children: ReactElement;
  departureLocation: string;
  destination: string;
  availableNumber: number;
  departureDate: string;
};

const SearchListBox: FC<Props> = ({
  departureLocation,
  destination,
  availableNumber,
  children,
  departureDate,
}) => {
  return (
    <div>
      <div>
        <Container>
          <div />
          <Wrapper>
            <StyledDiv aria-hidden="true" />
            <div>
              <ItineraryContainer>
                <div>
                  <h2>{dayjs(departureDate).format('DD MMM')}</h2>
                  <div>
                    <div>
                      <h1>
                        {`${departureLocation} → ${destination}: 
                        ${availableNumber} rides available`}
                      </h1>
                    </div>
                  </div>
                  {children}
                </div>
              </ItineraryContainer>
            </div>
          </Wrapper>
        </Container>
      </div>
    </div>
  );
};

const Container = styled.div`
  opacity: 1;
`;

const Wrapper = styled.div`
  position: relative;
`;

const StyledDiv = styled.div`
  position: absolute;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 420ms ease-in-out 0s, visibility 420ms ease-in-out 0s;
`;

const ItineraryContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 614px;
    margin: 0 auto;

    & > h2 {
      white-space: pre-line;
      color: rgb(5, 71, 82);
      font-size: 22px;
      line-height: 24px;
      font-weight: 500;
      padding: 24px 24px 8px;
    }

    & > div {
      -webkit-font-smoothing: antialiased;
      border-width: 0;
      box-sizing: border-box;
      font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      margin: 0;
      padding: 0 24px;
      vertical-align: baseline;

      & > div {
        display: flex !important;

        & > h1 {
          -webkit-font-smoothing: antialiased;
          border-width: 0;
          box-sizing: border-box;
          color: #708c91;
          flex: 1 1 0;
          font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          margin: 0;
          padding: 8px 0;
          vertical-align: baseline;
          white-space: pre-line;
        }
      }
    }
  }
`;

export default SearchListBox;
