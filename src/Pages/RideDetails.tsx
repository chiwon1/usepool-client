import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { UserContext } from '../contexts/AuthProvider';
import { bookRide, fetchRideDetails, postNewChatRoom } from '../api/ride';

import RideDetailsTopBar from '../components/styles/rideDetails/RideDetailsTopBar';
import Bookbutton from '../components/styles/rideDetails/Bookbutton';
import ContactButton from '../components/styles/rideDetails/ContactButton';
import DriverInfoBox from '../components/styles/rideDetails/DriverInfoBox';
import ItineraryBox from '../components/styles/rideDetails/ItineraryBox';

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

  const handleContactClick = useCallback(async () => {
    const roomId = await postNewChatRoom(rideId);

    history.push(`/chatRooms/${roomId}`);
  }, [rideId]);

  const handleBookClick = useCallback(() => {
    mutate(rideDetails!._id);

    history.push('/');
  }, [rideDetails]);

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  if (isLoading) {
    return null;
  }

  if (!rideDetails) {
    return null;
  }

  return (
    <Wrapper>
      <div>
        <Wrapper2>
          <RideDetailsTopBar date={rideDetails.departDate} />
          <ItineraryBox
            departTime={rideDetails.departTime}
            departFrom={rideDetails.departFrom}
            arriveAt={rideDetails.arriveAt}
          />
          <DriverInfoBox
            nickname={rideDetails.driver.nickname}
            profilePicture={rideDetails.driver.profilePicture}
          />
        </Wrapper2>
      </div>
      <ContactButton
        handleClick={handleContactClick}
        nickname={rideDetails.driver.nickname}
      />
      <Bookbutton handleClick={handleBookClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

const Wrapper2 = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 662px;

  h1 {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 30px;
    line-height: 1.06;
    font-weight: 500;
    --space-bottom: 32px;
    --font-size-desktop: 40px;
    padding-left: 24px;
    padding-right: 24px;
    margin: 0px;
    text-align: center;
    font-size: var(--font-size-desktop);
    padding: 24px 24px 32px;
  }

  ul {
    list-style: none;

    li {
      min-height: 32px;
    }
  }
`;

export default RideDetails;
