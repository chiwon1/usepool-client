import React from 'react';

type Props = {
  date: string;
};

const RideDetailsTopBar = ({ date }: Props) => {
  return <h1>{date}</h1>;
};

export default RideDetailsTopBar;
