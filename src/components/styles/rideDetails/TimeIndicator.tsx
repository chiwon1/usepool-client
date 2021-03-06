import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  time?: string;
};

const TimeIndicator: FC<Props> = ({ time }) => {
  return (
    <Wrapper>
      <time>{time}</time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;

  time {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    width: 48px;
    display: initial;
    flex-shrink: 0;
  }
`;

export default TimeIndicator;
