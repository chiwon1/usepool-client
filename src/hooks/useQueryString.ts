import { useLocation } from 'react-router-dom';
import queryString, { ParsedQuery } from 'query-string';

const useQueryString = (): ParsedQuery<string> => {
  const { search } = useLocation();

  return queryString.parse(search);
};

export default useQueryString;
