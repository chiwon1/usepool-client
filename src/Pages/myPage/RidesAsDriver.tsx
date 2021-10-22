import React, { FC, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useQuery } from 'react-query';

import MyPageRideList from '../../components/myPage/MyPageRideList';
import MyPageContainer from '../../components/myPage/MyPageContainer';

import { ListWrapper } from './RidesAsPassenger';
import { UserContext } from '../../contexts/AuthProvider';
import { StyledUl } from '../Search';

import { fetchMyRidesAsDriver } from '../../api/myRides';

const RidesAsDriver: FC = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { isLoading, data: rideList } = useQuery(
    ['fetchMyRidesAsDriver', { id: user?.userId }],
    fetchMyRidesAsDriver(),
  );

  const handleClick = (id: string) => {
    history.push(`/rides/${id}`);
  };

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  if (isLoading) {
    return <div />;
  }

  return (
    <MyPageContainer>
      <ListWrapper>
        <h1>My rides as driver</h1>
        <StyledUl>
          {rideList?.map(
            ({
              _id,
              departureLocation,
              destination,
              departureDate,
              departureTime,
            }) => (
              <MyPageRideList
                key={_id}
                departureLocation={departureLocation}
                destination={destination}
                departureDate={departureDate}
                departureTime={departureTime}
                handleClick={() => handleClick(_id)}
              />
            ),
          )}
        </StyledUl>
      </ListWrapper>
    </MyPageContainer>
  );
};

export default RidesAsDriver;
