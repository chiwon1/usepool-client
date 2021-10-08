import React, { FC, useContext, useState } from 'react';
import FormNewRide from '../../../components/FormNewRide';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from '../NewRide';

const DepartureDate: FC = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const date = new window.Date(ev.target.value).toLocaleDateString();

    handleNewRideInfo({
      ...newRideInfo,
      departDate: date,
    });

    history.push('/newRide/departure-time');
  };

  return (
    <FormNewRide InputTitle={'When are you going?'}>
      <input type="date" min="2021-10-01" onChange={handleChange} />
    </FormNewRide>
  );
};

export default DepartureDate;
