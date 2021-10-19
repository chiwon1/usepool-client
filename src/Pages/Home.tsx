import React, { useState } from 'react';
import styled from 'styled-components';
import RideSearchButton from '../components/RideSearchButton';
import DateWrapper from '../components/DateWrapper';
import DateInput from '../components/DateInput';
import LocationSearchInput from '../components/LocationSearchInput';
import ReverseLocationButton from '../components/ReverseLocationButton';
import HomeContentBox from '../components/HomeContentBox';
import UI from '../constants/ui';
import { useHistory } from 'react-router-dom';
import { getToday } from '../utils';
import AutoCompleteSearchInput from '../components/AutoCompleteSearchInput';
import { ILocationInfo } from '../types/ride';
import dayjs from 'dayjs';

const Home = () => {
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

    history.push(
      `/search?departureLocation=${departureInfo!.name}&departureCoordinate=${
        departureInfo!.coordinate[0]
      }&departureCoordinate=${
        departureInfo!.coordinate[1]
      }&departureDate=${formattedDate}&destination=${
        destinationInfo!.name
      }&destinationCoordinate=${
        destinationInfo!.coordinate[0]
      }&destinationCoordinate=${destinationInfo!.coordinate[1]}`,
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
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  border-width: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1pt 4pt, rgba(0, 0, 0, 0.08) 0 2pt 8pt;
  box-sizing: border-box;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 56px;
  line-height: 16px;
  margin: 0;
  padding: 8px 0 8px 8px;
  position: relative;
  vertical-align: baseline;
  width: 780px;

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
    width: 1px;
    height: 40px;
    margin: 0px;
  }
`;

export const StyledHr = styled.hr`
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border: none;
  background-color: rgb(237, 237, 237);
  width: 1px;
  height: 40px;
  margin: 0px;
`;

const Wrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

export default Home;
