import React from 'react';

type Props = {
  departDate: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const DateInput = ({ departDate, handleChange }: Props) => {
  return (
    <>
      <input type="date" value={departDate} onChange={handleChange} />
    </>
  );
};

export default DateInput;
