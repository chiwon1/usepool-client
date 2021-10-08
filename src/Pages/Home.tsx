import React from 'react';
import styled from 'styled-components';
import RideSearchButton from '../components/RideSearchButton';
import DateWrapper from '../components/DateWrapper';
import DateInput from '../components/DateInput';
import PassengerNumberInput from '../components/PassengerNumberInput';
import LocationSearchInput from '../components/LocationSearchInput';
import ReverseLocationButton from '../components/ReverseLocationButton';

const Home = () => {
  console.log('home');
  return (
    <>
      <Wrapper1>
        <Wrapper2></Wrapper2>
        <Wrapper3>
          <H1Wrapper>Usepool</H1Wrapper>
          <Wrapper4>
            <Form>
              <LocationSearchInput placeholder="Leaving from..." />
              <ReverseLocationButton />
              <hr></hr>
              <div></div>
              <LocationSearchInput placeholder="Going to.." />
              <Wrapper5>
                <DateWrapper>
                  <DateInput />
                </DateWrapper>
                <div></div>
                <hr></hr>
                <DateWrapper>
                  <PassengerNumberInput />
                </DateWrapper>
              </Wrapper5>
              <RideSearchButton />
            </Form>
          </Wrapper4>
        </Wrapper3>
      </Wrapper1>
      <div></div>
    </>
  );
};

const Wrapper1 = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
  width: 100%;
  min-height: 45vh;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

const Wrapper2 = styled.div`
  -webkit-font-smoothing: antialiased;
  background-position: center center;
  background-position: center center;
  background-size: cover;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 45vh;
  left: 0;
  line-height: 16px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  vertical-align: baseline;
  width: 100%;
  z-index: -1;

  &:after {
    background-color: initial;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 30%, transparent 100%);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Wrapper3 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  max-width: 1016px;
  padding: 0 24px;
  vertical-align: baseline;
  width: 100%;
`;

const H1Wrapper = styled.div`
  -webkit-box-pack: center;
  -webkit-font-smoothing: antialiased;
  align-items: flex-start;
  border-width: 0;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 60px;
  font-weight: 500;
  height: 9vh;
  justify-content: center;
  line-height: 60px;
  margin: 4.5vh 0 0;
  padding: 0;
  text-align: center;
  vertical-align: baseline;
  width: 100%;
`;

const Wrapper4 = styled.div`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  line-height: 16px;
  margin: 18vh 0 0;
  min-height: 13.5vh;
  padding: 0;
  vertical-align: baseline;
  width: 100%;
`;

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

const Wrapper5 = styled.div`
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
