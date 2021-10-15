import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider';
import { fetchMyRidesAsPassenger } from '../../api/myRides';
import PageWrapper from '../../components/PageWrapper';
import { StyledUl } from '../Search';
import SearchList from '../../components/searchPage/SearchList';
import { useQuery } from 'react-query';
import styled from 'styled-components';

const RidesAsPassenger = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const {
    isLoading,
    error,
    data: rideList,
  } = useQuery(
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
    <PageWrapper>
      <Wrapper>
        <h1>My rides as passenger</h1>
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
      </Wrapper>
    </PageWrapper>
  );
};

const Wrapper = styled.div`
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
