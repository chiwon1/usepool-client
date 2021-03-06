import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import dayjs from 'dayjs';

import RideSearchButton from '../components/RideSearchButton';
import DateWrapper from '../components/DateWrapper';
import DateInput from '../components/DateInput';
import LocationSearchInput from '../components/LocationSearchInput';
import ReverseLocationButton from '../components/ReverseLocationButton';
import HomeContentBox from '../components/HomeContentBox';

import { getToday } from '../utils';
import UI from '../constants/ui';
import { ILocationInfo } from '../types/ride';

const Home: FC = () => {
  const history = useHistory();
  const [departureInfo, setDepartureInfo] = useState<ILocationInfo | null>(
    null,
  );
  const [destinationInfo, setDestinationInfo] = useState<ILocationInfo | null>(
    null,
  );
  const [inputDepartureDate, setInputDepartureDate] = useState(getToday());

  const handleDepartureInfo = (locationInfo: ILocationInfo) => {
    setDepartureInfo(locationInfo);
  };

  const handleDestinationInfo = (locationInfo: ILocationInfo) => {
    setDestinationInfo(locationInfo);
  };

  const handleDepartDateChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputDepartureDate(ev.target.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const formattedDate = dayjs(inputDepartureDate).format('DD MMM YYYY');

    if (!departureInfo || !destinationInfo) {
      return;
    }

    history.push(
      `/search?departureLocation=${departureInfo.name}&departureCoordinate=${departureInfo.coordinate.lat}&departureCoordinate=${departureInfo.coordinate.lng}&departureDate=${formattedDate}&destination=${destinationInfo.name}&destinationCoordinate=${destinationInfo.coordinate.lat}&destinationCoordinate=${destinationInfo.coordinate.lng}`,
    );

    setDepartureInfo(null);
    setDestinationInfo(null);
    setInputDepartureDate(getToday());
  };

  return (
    <HomeContentBox>
      <Form onSubmit={handleSubmit}>
        <LocationSearchInput
          placeholder={UI.LEAVING_FROM}
          handlePlaceSelect={handleDepartureInfo}
        />
        <ReverseLocationButton />
        <StyledHr />
        <div />
        <LocationSearchInput
          placeholder={UI.GOING_TO}
          handlePlaceSelect={handleDestinationInfo}
        />
        <Wrapper>
          <hr />
          <DateWrapper>
            <DateInput
              departDate={inputDepartureDate}
              handleChange={handleDepartDateChange}
            />
          </DateWrapper>
        </Wrapper>
        <RideSearchButton />
      </Form>
    </HomeContentBox>
  );
};

const Form = styled.form`
  -webkit-box-align: center;
  align-items: center;
  background-color: ${({ theme: { background } }) => background.white};
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1pt 4pt, rgba(0, 0, 0, 0.08) 0 2pt 8pt;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  height: 56px;
  line-height: 16px;
  padding: 8px 0 8px 8px;
  position: relative;
  width: 780px;

  hr {
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    background-color: rgb(237, 237, 237);
    width: 1px;
    height: 40px;
    margin: 0;
  }
`;

export const StyledHr = styled.hr`
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  background-color: rgb(237, 237, 237);
  width: 1px;
  height: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
`;

export default Home;
