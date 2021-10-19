import React, { FC, useContext } from 'react';
import FormNewRide from '../../../components/FormNewRide';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from '../NewRide';
import { TimePicker } from '../../../components/timePicker';
import styled from 'styled-components';

const DepartureTime: FC = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);

  const [inputTime, setInputTime] = React.useState<string>();

  const handleChange = (value: string) => {
    setInputTime(value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    handleNewRideInfo({
      ...newRideInfo,
      departureTime: inputTime,
    });

    history.push('/newRide/submit');
  };

  return (
    <FormNewRide
      InputTitle={'At what time will you pick passengers up?'}
      handleSubmit={handleSubmit}
    >
      <div>
        <TimePicker
          name="timePicker"
          onChange={({ value }) => handleChange(String(value))}
        />
        <ButtonWrapper>
          <button type="submit">Submit</button>
        </ButtonWrapper>
      </div>
    </FormNewRide>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 5%;
  justify-content: center !important;
  padding: 24px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 96px;
  -webkit-box-flex: 1;
  flex-grow: 1;

  button {
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
    padding: 0px 24px;
    border: 1px solid transparent;
    border-radius: 48px;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    height: 48px;
    min-width: 48px;
    max-width: 100%;
    overflow: hidden;
    user-select: none;
    -webkit-box-align: center;
    align-items: center;
    transition: max-width 500ms ease-in 0s, background-color 200ms ease-in 0s;
    white-space: nowrap;
    background-color: rgb(0, 175, 245);
    color: rgb(255, 255, 255);
  }
`;

export default DepartureTime;
