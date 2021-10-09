import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactElement;
};

const SearchContentBox = ({ children }: Props) => {
  return (
    <Wrapper>
      <Wrapper2>{children}</Wrapper2>
    </Wrapper>
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
  vertical-align: baseline;
`;

const Wrapper2 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

export default SearchContentBox;
