import React, { FC, useContext } from 'react';
import FormNewRide from '../../../components/FormNewRide';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from '../NewRide';

const DepartureTime: FC = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    handleNewRideInfo({
      ...newRideInfo,
      departTime: ev.target.value,
    });

    history.push('/newRide/seatCapacity');
  };

  return (
    <FormNewRide InputTitle={'At what time will you pick passengers up?'}>
      <input type="time" onChange={handleChange} />
    </FormNewRide>
  );
};

export default DepartureTime;
