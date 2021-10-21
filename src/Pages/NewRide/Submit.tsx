import React, { useContext, useEffect } from 'react';
import { postNewRide } from '../../api/ride';
import { useHistory } from 'react-router-dom';
import { NewRideContext } from './NewRide';
import { useMutation, useQueryClient } from 'react-query';
import { UserContext } from '../../contexts/AuthProvider';

const Submit = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(postNewRide, {
    onSuccess: () => {
      void queryClient.invalidateQueries([
        'fetchMyRidesAsDriver',
        { id: user?.userId },
      ]);
      void queryClient.invalidateQueries('fetchSearchedRides');
    },
  });

  useEffect(() => {
    mutate(newRideInfo!);

    history.replace('/');

    return () => {
      handleNewRideInfo(null);
    };
  }, []);

  return <></>;
};

export default Submit;
