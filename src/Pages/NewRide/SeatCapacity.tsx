import React, { FC, useContext, useState } from 'react';
import FormNewRide from '../../components/FormNewRide';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from './NewRide';

const SeatCapacity: FC = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const [inputCapacity, setInputCapacity] = useState<number>();

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setInputCapacity(Number(ev.target.value));
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    handleNewRideInfo({
      ...newRideInfo,
      seatCapacity: inputCapacity,
    });

    history.push('/newRide/submit');
  };

  return (
    <FormNewRide
      handleSubmit={handleSubmit}
      InputTitle={'How many passengers can you take?'}
    >
      <>
        <select value={inputCapacity} onChange={handleChange}>
          <option value="default">&nbsp;</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <input type="submit" />
      </>
    </FormNewRide>
  );
};

export default SeatCapacity;
