import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider';
import { ISearchRide } from '../../types/ride';
import { getMyRidesAsPassenger } from '../../api/myRides';
import PageWrapper from '../../components/PageWrapper';
import { StyledUl } from '../Search';
import SearchList from '../../components/searchPage/SearchList';

const RidesAsPassenger = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [rideList, setRideList] = useState<ISearchRide[]>();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  useEffect(() => {
    void (async () => {
      const rides = await getMyRidesAsPassenger();

      console.log(rides);

      if (!rides) {
        return console.log('Fail to fetch rides');
      }

      setRideList(rides);

      setIsLoading(false);
    })();
  }, []);

  return (
    <PageWrapper>
      {isLoading ? (
        <div />
      ) : (
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

export default RidesAsPassenger;
