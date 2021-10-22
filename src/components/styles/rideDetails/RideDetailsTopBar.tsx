import React, { FC } from 'react';

type Props = {
  date: string;
};

const RideDetailsTopBar: FC<Props> = ({ date }) => {
  return <h1>{date}</h1>;
};

export default RideDetailsTopBar;
