import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider';
import { fetchMyRidesAsPassenger } from '../../api/myRides';
import PageWrapper from '../../components/PageWrapper';
import { StyledUl } from '../Search';
import SearchList from '../../components/searchPage/SearchList';
import { useQuery } from 'react-query';

const RidesAsPassenger = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const {
    isLoading,
    error,
    data: rideList,
  } = useQuery(
    ['fetchMyRidesAsPassenger', { id: user?.userId }],
    fetchMyRidesAsPassenger(),
  );

  const handleClick = (id: string) => {
    history.push(`/ride/${id}`);
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
    <PageWrapper>
      <div>
        <div>My rides as passenger</div>
        <StyledUl>
          {rideList?.map(
            ({ _id, departFrom, arriveAt, departTime, driver }) => (
              <SearchList
                key={_id}
                departFrom={departFrom}
                arriveAt={arriveAt}
                departTime={departTime}
                nickname={driver.nickname}
                profilePicture={driver.profilePicture}
                handleClick={() => handleClick(_id)}
              />
            ),
          )}
        </StyledUl>
      </div>
    </PageWrapper>
  );
};

export default RidesAsPassenger;
