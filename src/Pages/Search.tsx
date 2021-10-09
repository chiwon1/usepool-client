import React, { FC, useEffect, useState } from 'react';
import { searchRide } from '../api/ride';
import useQueryString from '../hooks/useQueryString';
import { useHistory } from 'react-router-dom';

const Search: FC = () => {
  const history = useHistory();
  const { departFrom, departDate, arriveAt } = useQueryString();
  const [searchedList, setSearchedList] = useState();

  if (!departFrom || !departDate || !arriveAt) {
    history.push('/');
  }

  useEffect(() => {
    void (async () => {
      const list = (await searchRide({
        departFrom: departFrom as string,
        departDate: departDate as string,
        arriveAt: arriveAt as string,
      })) as any;

      setSearchedList(list);
    })();
  }, []);

  return <div></div>;
};

export default Search;
