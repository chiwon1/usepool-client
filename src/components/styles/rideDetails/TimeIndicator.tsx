import React from 'react';
import styled from 'styled-components';

type Props = {
  time?: string;
};

const TimeIndicator = ({ time }: Props) => {
  return (
    <Wrapper7>
      <time>{time}</time>
    </Wrapper7>
  );
};

const Wrapper7 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;

  time {
    white-space: pre-line;
    color: rgb(5, 71, 82);
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    font-weight: 500;
    width: 48px;
    display: initial;
    flex-shrink: 0;
  }
`;

export default TimeIndicator;
