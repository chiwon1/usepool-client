import React, { FC, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { useQuery } from 'react-query';

import { StyledUl } from '../Search';
import { UserContext } from '../../contexts/AuthProvider';
import MyPageRideList from '../../components/myPage/MyPageRideList';
import MyPageContainer from '../../components/myPage/MyPageContainer';

import { fetchMyRidesAsPassenger } from '../../api/myRides';

const RidesAsPassenger: FC = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { isLoading, data: rideList } = useQuery(
    ['fetchMyRidesAsPassenger', { id: user?.userId }],
    fetchMyRidesAsPassenger(),
  );

  const handleClick = (id: string) => {
    history.push(`/rides/${id}`);
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
    <MyPageContainer>
      <ListWrapper>
        <h1>My rides as passenger</h1>
        <StyledUl>
          {rideList?.map(
            ({
              _id,
              departureLocation,
              destination,
              departureDate,
              departureTime,
            }) => (
              <MyPageRideList
                key={_id}
                departureLocation={departureLocation}
                destination={destination}
                departureDate={departureDate}
                departureTime={departureTime}
                handleClick={() => handleClick(_id)}
              />
            ),
          )}
        </StyledUl>
      </ListWrapper>
    </MyPageContainer>
  );
};

export const ListWrapper = styled.div`
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
    margin: 0px;
    text-align: center;
    font-size: var(--font-size-desktop);
    padding: 24px 24px 32px;
  }

  ul {
    list-style: none;
  }
`;

export default RidesAsPassenger;
