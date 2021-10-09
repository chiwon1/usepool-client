import React, { useState } from 'react';
import styled from 'styled-components';
import RideSearchButton from '../components/RideSearchButton';
import DateWrapper from '../components/DateWrapper';
import DateInput from '../components/DateInput';
import PassengerNumberInput from '../components/PassengerNumberInput';
import LocationSearchInput from '../components/LocationSearchInput';
import ReverseLocationButton from '../components/ReverseLocationButton';
import HomeContentBox from '../components/HomeContentBox';
import UI from '../constants/ui';
import { searchRide } from '../api/ride';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const [inputDepartFrom, setInputDepartFrom] = useState('');
  const [inputArriveAt, setInputArriveAt] = useState('');
  const [inputDepartDate, setInputDepartDate] = useState('');
  const [inputNumberOfPassenger, setInputNumberOfPassenger] = useState('');

  const handleDepartFromChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputDepartFrom(ev.target.value);
  };

  const handleArriveAtChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputArriveAt(ev.target.value);
  };

  const handleDepartDateChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const date = new window.Date(ev.target.value).toLocaleDateString();

    setInputDepartDate(date);
  };

  const handleNumberOfPassengerInput = (
    ev: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setInputNumberOfPassenger(ev.target.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    history.push(
      `/search?departFrom=${inputDepartFrom}&departDate=${inputDepartDate}&arriveAt=${inputArriveAt}`,
    );

    setInputDepartFrom('');
    setInputArriveAt('');
    setInputDepartDate('');
    setInputNumberOfPassenger('');
  };

  return (
    <HomeContentBox>
      <Form onSubmit={handleSubmit}>
        <Link to="/search">SEARCH 페이지로 이동</Link>
        <LocationSearchInput
          placeholder={UI.LEAVING_FROM}
          departFrom={inputDepartFrom}
          handleChange={handleDepartFromChange}
        />
        <ReverseLocationButton />
        <hr></hr>
        <div></div>
        <LocationSearchInput
          placeholder={UI.GOING_TO}
          departFrom={inputArriveAt}
          handleChange={handleArriveAtChange}
        />
        <Wrapper>
          <DateWrapper>
            <DateInput
              departDate={inputDepartDate}
              handleChange={handleDepartDateChange}
            />
          </DateWrapper>
          <div></div>
          <hr></hr>
          <DateWrapper>
            <PassengerNumberInput
              numberOfPassenger={inputNumberOfPassenger}
              handleChange={handleNumberOfPassengerInput}
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
  width: 928px;

  hr {
    background-color: #ededed;
    border-style: none;
    box-sizing: border-box;
    height: 40px;
    margin: 0;
    width: 1px;
  }
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
