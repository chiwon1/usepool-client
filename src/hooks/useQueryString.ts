import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const useQueryString = () => {
  const { search } = useLocation();

  return queryString.parse(search);
};

export default useQueryString;
