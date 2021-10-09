import React, { FC, useEffect, useState } from 'react';
import { searchRide } from '../api/ride';
import useQueryString from '../hooks/useQueryString';
import { useHistory } from 'react-router-dom';
import SearchTopBar from '../components/SearchTopBar';
import styled from 'styled-components';
import SearchHeader from '../components/SearchHeader';
import SearchListLi from '../components/SearchListLi';
import SearchListBox from '../components/SearchListBox';
import SearchContentBox from '../components/SearchContentBox';

const Search: FC = () => {
  const history = useHistory();
  // const { departFrom, arriveAt, departDate } = useQueryString();
  const [rideList, setRideList] = useState();

  const departFrom = '강남역';
  const arriveAt = '수원역';
  const departDate = '10/16/2021';

  // if (!departFrom || !departDate || !arriveAt) {
  //   history.push('/');
  // }

  // useEffect(() => {
  //   void (async () => {
  //     const list = (await searchRide({
  //       departFrom: departFrom as string,
  //       departDate: departDate as string,
  //       arriveAt: arriveAt as string,
  //     })) as any;
  //
  //     console.log('list', list);
  //
  //     setSearchedList(list);
  //   })();
  // }, []);

  return (
    <>
      <SearchTopBar
        departFrom={departFrom as string}
        arriveAt={arriveAt as string}
        departDate={departDate as string}
      />
      <SearchContentBox>
        <Wrapper role="presentation">
          <SearchHeader availableNumber={2} />
          <SearchListBox>
            <StyledUl>
              <SearchListLi
                departFrom="출발지"
                arriveAt="도착지"
                departTime="10:25"
                profilePicture=""
              />
              <SearchListLi
                departFrom="출발지"
                arriveAt="도착지"
                departTime="10:25"
                profilePicture=""
              />
              <SearchListLi
                departFrom="출발지"
                arriveAt="도착지"
                departTime="10:25"
                profilePicture=""
              />
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
