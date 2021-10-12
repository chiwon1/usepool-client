import React, { FC, useContext, useState } from 'react';
import InputLocation from '../../components/InputLocation';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from './NewRide';
import FormNewRide from '../../components/FormNewRide';

const Destination: FC = () => {
  const history = useHistory();

  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const [inputArriveAt, setInputArriveAt] = useState('');

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputArriveAt(ev.target.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    handleNewRideInfo({
      ...newRideInfo,
      arriveAt: inputArriveAt,
    });

    history.push('/newRide/departure-date');
  };

  return (
    <FormNewRide
      handleSubmit={handleSubmit}
      InputTitle={'Where are you heading?'}
    >
      <InputLocation
        inputDepartFrom={inputArriveAt}
        handleChange={handleChange}
      />
    </FormNewRide>
  );
};

export default Destination;
