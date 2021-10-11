import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { bookRide, getRideDetails } from '../api/ride';
import { ISearchRide } from '../types/ride';
import SearchList from '../components/searchPage/SearchList';
import styled from 'styled-components';
import { UserContext } from '../contexts/AuthProvider';

const RideDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [rideDetails, setRideDetails] = useState<ISearchRide>();
  const { user } = useContext(UserContext);
  const history = useHistory();

  const fetchDetails = async () => {
    const details = await getRideDetails(id);

    setRideDetails(details);
  };

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  useEffect(() => {
    void fetchDetails();
  }, []);

  return (
    <Wrapper>
      {rideDetails && (
        <>
          <SearchList
            departFrom={rideDetails.departFrom}
            arriveAt={rideDetails.arriveAt}
            departTime={rideDetails.departTime}
            nickname={rideDetails.driver.nickname}
            profilePicture={rideDetails.driver.profilePicture}
          />
          <button
            onClick={() =>
              console.log('rideDetails.driver._id', rideDetails.driver._id)
            }
          >
            Chat
          </button>
          <br />
          <br />
          <button
            onClick={() => {
              bookRide(rideDetails._id);

              history.push('/');
            }}
          >
            Book
          </button>
        </>
      )}
    </Wrapper>
  );
};

// SearchList.defaultProps = {
//   isBooked: false,
// };

const Wrapper = styled.div`
  li {
    list-style: none;
  }
`;

export default RideDetails;
