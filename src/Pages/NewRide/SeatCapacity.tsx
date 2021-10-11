import React, { FC, useContext, useState } from 'react';
import FormNewRide from '../../components/FormNewRide';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from './NewRide';
import { postNewRide } from '../../api/ride';

const SeatCapacity: FC = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const [inputCapacity, setInputCapacity] = useState<string>();

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setInputCapacity(ev.target.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    postNewRide({
      ...newRideInfo,
      seatCapacity: Number(inputCapacity),
    });

    handleNewRideInfo(null);

    history.push('/');
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
