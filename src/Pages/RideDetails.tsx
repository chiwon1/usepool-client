import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRideDetails } from '../api/ride';
import { ISearchRide } from '../types/ride';

const RideDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [rideDetails, setRideDetails] = useState<ISearchRide>();

  console.log('RideDetails');

  useEffect(() => {
    void (async () => {
      const details = await getRideDetails(id);

      setRideDetails(details);
    })();
  }, []);

  return <div></div>;
};

export default RideDetails;
