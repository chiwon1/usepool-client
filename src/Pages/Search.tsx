import React, { FC, useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import SearchTopBar from '../components/searchPage/SearchTopBar';
import SearchHeader from '../components/searchPage/SearchHeader';
import SearchList from '../components/searchPage/SearchList';
import SearchContentBox from '../components/searchPage/SearchContentBox';
import SearchListBox from '../components/searchPage/SearchListBox';

import useQueryString from '../hooks/useQueryString';
import { searchRide } from '../api/ride';
import { ISearchRide } from '../types/ride';
import { UserContext } from '../contexts/AuthProvider';

const Search: FC = () => {
  const history = useHistory();
  // const { departFrom, arriveAt, departDate } = useQueryString();
  const { user } = useContext(UserContext);
  const { departFrom, arriveAt, departDate } = useQueryString();
  const [rideList, setRideList] = useState<ISearchRide[]>();
  const [availableNumber, setAvailableNumber] = useState<number>(0);

  const handleClick = (id: string) => {
    history.push(`/ride/${id}`);
  };

  if (!departFrom || !arriveAt || !departDate) {
    history.push(`/`);
  }

  // if (!departFrom || !departDate || !arriveAt) {
  //   history.push('/');
  // }
  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  useEffect(() => {
    void (async () => {
      const list = await searchRide({
        departFrom: departFrom as string,
        departDate: departDate as string,
        arriveAt: arriveAt as string,
      });

      setAvailableNumber(list.length);

      setRideList(list);
    })();
  }, []);

  return (
    <>
      <SearchTopBar
        departFrom={departFrom as string}
        arriveAt={arriveAt as string}
        departDate={departDate as string}
      />
      <SearchContentBox>
        <Wrapper role="presentation">
          {availableNumber && (
            <SearchHeader availableNumber={availableNumber} />
          )}
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
                    profilePicture={driver.profilePicture}
                    handleClick={() => handleClick(_id)}
                  />
                ),
              )}
            </StyledUl>
          </SearchListBox>
        </Wrapper>
      </SearchContentBox>
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

const StyledUl = styled.ul`
  list-style: none;

  ul {
    list-style: none;
  }
`;

export default Search;
