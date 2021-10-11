import React, { useContext, useEffect } from 'react';
import { postNewRide } from '../../api/ride';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from './NewRide';
import { useMutation, useQueryClient } from 'react-query';

const Submit = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(postNewRide, {
    onSuccess: () => {
      void queryClient.invalidateQueries('fetchMyRidesAsDriver');
      void queryClient.invalidateQueries('fetchSearchedRides');
    },
  });

  useEffect(() => {
    mutate(newRideInfo!);

    handleNewRideInfo(null);

    history.replace('/');
  }, []);

  return <></>;
};

export default Submit;
