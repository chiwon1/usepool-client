import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { bookRide, fetchRideDetails, fetchSearchedRides } from '../api/ride';
import { ISearchRide } from '../types/ride';
import SearchList from '../components/searchPage/SearchList';
import styled from 'styled-components';
import { UserContext } from '../contexts/AuthProvider';
import { useQuery } from 'react-query';

const RideDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(UserContext);
  const history = useHistory();
  const { isLoading, error, data } = useQuery(
    'fetchRideDetails',
    fetchRideDetails(id),
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
    <Wrapper>
      {data && (
        <>
          <SearchList
            departFrom={data.departFrom}
            arriveAt={data.arriveAt}
            departTime={data.departTime}
            nickname={data.driver?.nickname}
            profilePicture={data.driver?.profilePicture}
          />
          <button
            onClick={() =>
              console.log('rideDetails.driver._id', data.driver._id)
            }
          >
            Chat
          </button>
          <br />
          <br />
          <button
            onClick={() => {
              bookRide(data._id);

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
