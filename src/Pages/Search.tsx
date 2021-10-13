import React, { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import SearchTopBar from '../components/searchPage/SearchTopBar';
import SearchHeader from '../components/searchPage/SearchHeader';
import SearchList from '../components/searchPage/SearchList';
import PageWrapper from '../components/PageWrapper';
import SearchListBox from '../components/searchPage/SearchListBox';

import useQueryString from '../hooks/useQueryString';
import { fetchSearchedRides } from '../api/ride';
import { UserContext } from '../contexts/AuthProvider';
import { useQuery } from 'react-query';

const Search: FC = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { departFrom, arriveAt, departDate } = useQueryString();
  const query = useQueryString();

  const [availableNumber, setAvailableNumber] = useState<number>(0);
  const {
    isLoading,
    error,
    data: rideList,
  } = useQuery(
    'fetchSearchedRides',
    fetchSearchedRides({
      departFrom: departFrom as string,
      departDate: departDate as string,
      arriveAt: arriveAt as string,
    }),
  );

  const handleClick = (id: string) => {
    history.push(`/rides/${id}`);
  };

  if (!departFrom || !arriveAt || !departDate) {
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
        departFrom={departFrom as string}
        arriveAt={arriveAt as string}
        departDate={departDate as string}
      />
      <PageWrapper>
        <Wrapper role="presentation">
          <SearchHeader availableNumber={availableNumber} />
          <SearchListBox
            departFrom={departFrom as string}
            arriveAt={arriveAt as string}
            availableNumber={availableNumber}
          >
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
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

export const StyledUl = styled.ul`
  list-style: none;

  ul {
    list-style: none;
  }
`;

export default Search;
