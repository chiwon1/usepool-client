import React, { useContext, useState } from 'react';
import { NewRideContext } from '../NewRide';
import { useHistory } from 'react-router-dom';
import InputLocation from '../../../components/InputLocation';
import FormNewRide from '../../../components/FormNewRide';

const DepartureLocation = () => {
  const history = useHistory();

  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const [inputDepartFrom, setInputDepartFrom] = useState('');

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputDepartFrom(ev.target.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    handleNewRideInfo({
      ...newRideInfo,
      departFrom: inputDepartFrom,
    });

    history.push('/newRide/destination');
  };

  return (
    <FormNewRide
      handleSubmit={handleSubmit}
      InputTitle={'Where are you leaving from?'}
    >
      <InputLocation
        inputDepartFrom={inputDepartFrom}
        handleChange={handleChange}
      />
    </FormNewRide>
  );
};

export default DepartureLocation;
