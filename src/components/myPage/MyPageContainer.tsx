import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactElement;
};

const MyPageContainer = ({ children }: Props) => {
  return (
    <MyPageWrapper>
      <div>
        <Wrapper2>{children}</Wrapper2>
      </div>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  position: relative !important;
  -webkit-box-flex: 1;
  flex-grow: 1;
  min-height: 872px;
  height: auto;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

const Wrapper2 = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 662px;
`;

export default MyPageContainer;
