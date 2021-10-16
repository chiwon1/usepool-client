import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/AuthProvider';
import { useHistory } from 'react-router-dom';
import { fetchMyRidesAsDriver } from '../../api/myRides';
import { StyledUl } from '../Search';
import { useQuery } from 'react-query';
import MyPageRideList from '../../components/myPage/MyPageRideList';
import MyPageContainer from '../../components/myPage/MyPageContainer';
import { ListWrapper } from './RidesAsPassenger';

const RidesAsDriver = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const {
    isLoading,
    error,
    data: rideList,
  } = useQuery(
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
            ({ _id, departDate, departFrom, arriveAt, departTime, driver }) => (
              <MyPageRideList
                key={_id}
                departDate={departDate}
                departFrom={departFrom}
                arriveAt={arriveAt}
                departTime={departTime}
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
