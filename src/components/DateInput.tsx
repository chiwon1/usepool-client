import React, { FC } from 'react';

const DateInput: FC = () => {
  return (
    <>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
        <g>
          <path
            d="M18.087 4.174h3.478v17.391H2.435V4.174h3.478m1.74 0h8.695"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#708C91"
          ></path>
          <path
            d="M5.913 2.435h1.74v3.478h-1.74V2.435zm10.435 0h1.739v3.478h-1.74V2.435zM2.435 9.39h19.13-19.13zM5.913 12.87h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm-5.217 4.347h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm5.218-4.347h1.739v.87h-1.74v-.87z"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#708C91"
          ></path>
          <path
            d="M5.913 12.87h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm-5.217 4.347h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm5.218-4.347h1.739v.87h-1.74v-.87z"
            fillRule="nonzero"
            fill="#708C91"
          ></path>
        </g>
      </svg>
      <input type="date" />
    </>
  );
};

export default DateInput;
