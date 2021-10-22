import React, { FC } from 'react';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';

const RideSearchButton: FC = () => {
  return (
    <Wrapper>
      <button>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            stroke="#FFF"
          >
            <SearchIcon />
          </g>
        </svg>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;

  button {
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-font-smoothing: antialiased;
    align-items: center;
    background-color: #00aff5;
    background-image: none;
    border-radius: 0 16px 16px 0;
    border-style: none;
    box-sizing: border-box;
    color: #708c91;
    cursor: pointer;
    display: flex;
    font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 56px;
    justify-content: center;
    line-height: 24px;
    margin: 0;
    min-width: 0;
    overflow: hidden;
    padding: 0;
    text-align: left;
    vertical-align: baseline;
    white-space: nowrap;
    width: 90px;

    &:disabled {
      cursor: default;
    }

    svg {
      box-sizing: border-box;
      fill: #fff;
      flex: 0 0 auto;
      margin: 0;

      g {
        box-sizing: border-box;

        line {
          box-sizing: border-box;
        }

        circle {
          box-sizing: border-box;
        }
      }
    }
  }
`;

export default RideSearchButton;
