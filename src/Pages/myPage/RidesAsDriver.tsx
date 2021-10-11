import React, { useContext, useEffect, useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
import { UserContext } from '../../contexts/AuthProvider';
import { useHistory } from 'react-router-dom';
import { getMyRidesAsDriver } from '../../api/myRides';
import { ISearchRide } from '../../types/ride';
import SearchList from '../../components/searchPage/SearchList';
import { StyledUl } from '../Search';

const RidesAsDriver = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [rideList, setRideList] = useState<ISearchRide[]>();

  const fetchRides = async () => {
    const rides = await getMyRidesAsDriver();

    if (!rides) {
      return console.log('Fail to fetch rides');
    }

    setRideList(rides);

    setIsLoading(false);
  };

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  useEffect(() => {
    void fetchRides();
  }, []);

  return (
    <PageWrapper>
      {isLoading ? (
        <div />
      ) : (
        <div>
          <div>My rides as driver</div>
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
                  handleClick={() => console.log('_id', _id)}
                />
              ),
            )}
          </StyledUl>
        </div>
      )}
    </PageWrapper>
  );
};

export default RidesAsDriver;
