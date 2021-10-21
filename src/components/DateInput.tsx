import React, { FC } from 'react';

type Props = {
  departDate: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const DateInput: FC<Props> = ({ departDate, handleChange }) => {
  return (
    <>
      <input type="date" value={departDate} onChange={handleChange} />
    </>
  );
};

export default DateInput;
