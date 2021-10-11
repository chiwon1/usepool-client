import React, { useContext, useEffect } from 'react';
import PageWrapper from '../../components/PageWrapper';
import { UserContext } from '../../contexts/AuthProvider';
import { useHistory } from 'react-router-dom';
import { fetchMyRidesAsDriver } from '../../api/myRides';
import SearchList from '../../components/searchPage/SearchList';
import { StyledUl } from '../Search';
import { useQuery } from 'react-query';

const RidesAsDriver = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { isLoading, error, data } = useQuery(
    'fetchMyRidesAsDriver',
    fetchMyRidesAsDriver(),
  );

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
        <div>My rides as driver</div>
        <StyledUl>
          {data?.map(({ _id, departFrom, arriveAt, departTime, driver }) => (
            <SearchList
              key={_id}
              departFrom={departFrom}
              arriveAt={arriveAt}
              departTime={departTime}
              nickname={driver.nickname}
              profilePicture={driver.profilePicture}
              handleClick={() => console.log('_id', _id)}
            />
          ))}
        </StyledUl>
      </div>
    </PageWrapper>
  );
};

export default RidesAsDriver;
