import React, { FC } from 'react';
import styled from 'styled-components';

const PageWrapper: FC = ({ children }) => {
  return (
    <Wrapper>
      <Wrapper2>{children}</Wrapper2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-width: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const Wrapper2 = styled.div`
  border-width: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

export default PageWrapper;
