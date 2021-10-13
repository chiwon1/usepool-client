import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { bookRide, fetchRideDetails, postNewChatRoom } from '../api/ride';
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
  } = useQuery(['fetchRideDetails', { rideId }], fetchRideDetails(rideId));

  const { mutate } = useMutation(bookRide, {
    onSuccess: () => {
      void queryClient.invalidateQueries(['fetchRideDetails', { rideId }]);
      void queryClient.invalidateQueries([
        'fetchMyRidesAsPassenger',
        { id: user?.userId },
      ]);
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
            onClick={async () => {
              const roomId = await postNewChatRoom(rideId);

              history.push(`/chatRooms/${roomId}`);
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
