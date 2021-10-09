import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  numberOfPassenger: string;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const PassengerNumberInput = ({ numberOfPassenger, handleChange }: Props) => {
  return (
    <Wrapper>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <g>
          <path
            d="M8.526 3.037l-1.504.361a1.34 1.34 0 00-.994 1.578l.95 14.887c.034.191.076.308.133.417.217.417.669.683 1.132.716l2.401.004h6.026c.736 0 1.33-.601 1.33-1.34v-2.686l-.006-.13a1.334 1.334 0 00-1.324-1.21H11.06l.076-1.12c.153-2.395.16-3.656.082-5.558-.09-2.19-.449-3.793-1.208-5.242a1.327 1.327 0 00-1.485-.677zm.234.972a.327.327 0 01.366.17c.637 1.215.964 2.571 1.074 4.416l.02.403c.078 1.894.07 3.132-.088 5.566l-.145 2.07h6.683c.181 0 .33.15.33.34v2.686c0 .189-.149.34-.33.34H8.398c-.188.004-.348-.08-.4-.181a.346.346 0 01-.032-.09L7.017 4.843c-.047-.252.064-.43.238-.472L8.76 4.01z"
            fillRule="nonzero"
            fill="#708C91"
          />
        </g>
      </svg>
      <select value={numberOfPassenger} onChange={handleChange}>
        <option value="default">&nbsp;</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  -webkit-box-align: center;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #708c91;
  cursor: pointer;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  line-height: 24px;
  margin: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0 0 0 8px;
  text-align: left;
  vertical-align: baseline;
  white-space: nowrap;
`;

export default PassengerNumberInput;
