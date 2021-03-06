import React, { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import SearchTopBar from '../components/searchPage/SearchTopBar';
import SearchHeader from '../components/searchPage/SearchHeader';
import SearchList from '../components/searchPage/SearchList';
import PageWrapper from '../components/PageWrapper';
import SearchListBox from '../components/searchPage/SearchListBox';

import useQueryString from '../hooks/useQueryString';
import { fetchSearchedRides } from '../api/ride';
import { UserContext } from '../contexts/AuthProvider';

const Search: FC = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const {
    departureLocation,
    departureCoordinate,
    departureDate,
    destination,
    destinationCoordinate,
  } = useQueryString();

  const [availableNumber, setAvailableNumber] = useState<number>(0);
  const { isLoading, data: rideList } = useQuery(
    'fetchSearchedRides',
    fetchSearchedRides({
      departureCoordinate: {
        lat: Number(departureCoordinate?.[0]),
        lng: Number(departureCoordinate?.[1]),
      },
      departureDate: departureDate as string,
      destinationCoordinate: {
        lat: Number(destinationCoordinate?.[0]),
        lng: Number(destinationCoordinate?.[1]),
      },
    }),
  );

  const handleClick = (id: string) => {
    history.push(`/rides/${id}`);
  };

  if (!departureLocation || !destination || !departureDate) {
    history.push(`/`);
  }

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  useEffect(() => {
    if (rideList) {
      setAvailableNumber(rideList.length);
    }
  }, [rideList]);

  if (isLoading) {
    return <div />;
  }

  return (
    <>
      <SearchTopBar
        departFrom={departureLocation as string}
        departDate={departureDate as string}
        arriveAt={destination as string}
      />
      <PageWrapper>
        <Wrapper role="presentation">
          <SearchHeader availableNumber={availableNumber} />
          <SearchListBox
            departureLocation={departureLocation as string}
            destination={destination as string}
            departureDate={departureDate as string}
            availableNumber={availableNumber}
          >
            <StyledUl>
              {rideList?.map(
                ({
                  _id,
                  departureLocation,
                  destination,
                  departureTime,
                  driver,
                }) => (
                  <SearchList
                    key={_id}
                    departureLocation={departureLocation}
                    arriveAt={destination}
                    departureTime={departureTime}
                    nickname={driver.nickname}
                    profilePicture={driver.profilePicture}
                    handleClick={() => handleClick(_id)}
                  />
                ),
              )}
            </StyledUl>
          </SearchListBox>
        </Wrapper>
      </PageWrapper>
    </>
  );
};

const Wrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  position: relative;
`;

export const StyledUl = styled.ul`
  list-style: none;

  ul {
    list-style: none;
  }
`;

export default Search;
