import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { bookRide, fetchRideDetails } from '../api/ride';
import SearchList from '../components/searchPage/SearchList';
import styled from 'styled-components';
import { UserContext } from '../contexts/AuthProvider';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const RideDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(UserContext);
  const history = useHistory();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(
    'fetchRideDetails',
    fetchRideDetails(id),
  );

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
              mutate(data._id);

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
