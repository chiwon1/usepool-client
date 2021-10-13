import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { bookRide, fetchRideDetails } from '../api/ride';
import SearchList from '../components/searchPage/SearchList';
import styled from 'styled-components';
import { UserContext } from '../contexts/AuthProvider';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const RideDetails = () => {
  const { rideId } = useParams<{ rideId: string }>();
  const { user } = useContext(UserContext);
  const history = useHistory();
  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: rideDetails,
  } = useQuery('fetchRideDetails', fetchRideDetails(rideId));

  const { mutate } = useMutation(bookRide, {
    onSuccess: () => {
      void queryClient.invalidateQueries('fetchRideDetails');
      void queryClient.invalidateQueries('fetchMyRidesAsPassenger');
    },
  });

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
      {rideDetails && (
        <>
          <SearchList
            departFrom={rideDetails.departFrom}
            arriveAt={rideDetails.arriveAt}
            departTime={rideDetails.departTime}
            nickname={rideDetails.driver?.nickname}
            profilePicture={rideDetails.driver?.profilePicture}
          />
          <button
            onClick={() => {
              history.push(`/rides/${rideId}/chats/${user!.userId}`);
            }}
          >
            Chat
          </button>
          <br />
          <br />
          <button
            onClick={() => {
              mutate(rideDetails._id);

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
