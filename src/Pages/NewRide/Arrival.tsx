import React, { FC, useContext, useState } from 'react';
import InputNewRide from '../../components/InputNewRide';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from './NewRide';

const Arrival: FC = () => {
  const history = useHistory();

  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const [inputArriveAt, setInputArriveAt] = useState('');

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputArriveAt((prev) => ev.target.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    handleNewRideInfo({
      ...newRideInfo,
      arriveAt: inputArriveAt,
    });

    history.push('/newRide/date');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputNewRide
        inputDepartFrom={inputArriveAt}
        handleChange={handleChange}
        InputTitle={'Where are you heading?'}
      />
    </form>
  );
};

export default Arrival;
