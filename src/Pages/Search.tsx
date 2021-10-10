import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchTopBar from '../components/SearchTopBar';
import styled from 'styled-components';

import SearchHeader from '../components/SearchHeader';
import SearchList from '../components/SearchList';
import SearchContentBox from '../components/SearchContentBox';
import SearchListBox from '../components/SearchListBox';

import useQueryString from '../hooks/useQueryString';
import { searchRide } from '../api/ride';
import { ISearchRide } from '../types/ride';

const Search: FC = () => {
  const history = useHistory();
  // const { departFrom, arriveAt, departDate } = useQueryString();
  const { departFrom, arriveAt, departDate } = useQueryString();
  const [rideList, setRideList] = useState<ISearchRide[]>();
  const [availableNumber, setAvailableNumber] = useState<number>(0);

  if (!departFrom || !departDate || !arriveAt) {
    history.push('/');
  }

  // if (!departFrom || !departDate || !arriveAt) {
  //   history.push('/');
  // }
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
              {rideList?.map((ride) => (
                <SearchList
                  key={ride._id.$oid}
                  departFrom={ride.departFrom}
                  arriveAt={ride.arriveAt}
                  departTime={ride.departTime}
                  profilePicture={ride.driver.profilePicture}
                />
              ))}
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
