import React, { useContext, useState } from 'react';
import { NewRideContext } from './NewRide';
import { useHistory } from 'react-router-dom';
import InputNewRide from '../../components/InputNewRide';

const Departure = () => {
  const history = useHistory();

  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const [inputDepartFrom, setInputDepartFrom] = useState('');

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputDepartFrom((prev) => ev.target.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    handleNewRideInfo({
      ...newRideInfo,
      departFrom: inputDepartFrom,
    });

    history.push('/newRide/arrival');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputNewRide
        inputDepartFrom={inputDepartFrom}
        handleChange={handleChange}
        InputTitle={'Where are you leaving from?'}
      />
    </form>
  );
};

export default Departure;
