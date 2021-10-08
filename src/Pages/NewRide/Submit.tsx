import React, { useContext, useEffect } from 'react';
import { postNewRide } from '../../api/ride';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from './NewRide';

const Submit = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);

  useEffect(() => {
    postNewRide(newRideInfo!);
  }, []);

  return <></>;
};

export default Submit;
