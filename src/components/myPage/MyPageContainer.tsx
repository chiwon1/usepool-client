import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactElement;
};

const MyPageContainer: FC<Props> = ({ children }) => {
  return (
    <MyPageWrapper>
      <div>
        <Wrapper>{children}</Wrapper>
      </div>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  position: relative !important;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 662px;
`;

export default MyPageContainer;
