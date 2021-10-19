import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';
import { ILocationInfo } from '../types/ride';
import AutoCompleteSearchInput from './AutoCompleteSearchInput';

type Props = {
  handlePlaceSelect: (value: ILocationInfo) => void;
  placeholder: string;
};

const LocationSearch = ({ handlePlaceSelect, placeholder }: Props) => {
  return (
    <Wrapper8 role="combobox">
      <Wrapper9>
        <Wrapper10>
          <button>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1"
                stroke="#708C91"
              >
                <SearchIcon />
              </g>
            </svg>
          </button>
          <AutoCompleteSearchInput
            handlePlaceSelect={handlePlaceSelect}
            placeholder={placeholder}
          />
        </Wrapper10>
      </Wrapper9>
    </Wrapper8>
  );
};

const Wrapper8 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

const Wrapper9 = styled.div`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 8px 24px;
  position: relative;
  vertical-align: baseline;
`;

const Wrapper10 = styled.div`
  -webkit-font-smoothing: antialiased;
  background-color: #ededed;
  border: 1px solid #ededed;
  border-radius: 16px;
  border-radius: 16px;
  box-shadow: none;
  box-sizing: border-box;
  color: #054752;
  display: flex;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;

  button {
    -webkit-box-align: center;
    -webkit-font-smoothing: antialiased;
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: inherit;
    box-sizing: border-box;
    color: #708c91;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-stretch: inherit;
    font-style: inherit;
    font-variant-caps: inherit;
    font-variant-east-asian: inherit;
    font-variant-ligatures: inherit;
    font-variant-numeric: inherit;
    font-weight: inherit;
    height: auto;
    line-height: 0;
    margin: 0;
    max-width: 100%;
    min-height: inherit;
    min-width: inherit;
    overflow: hidden;
    padding: 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: max-width 500ms ease-in, background-color 200ms ease-in;
    user-select: none;
    vertical-align: baseline;
    white-space: normal;
    width: 48px;
  }

  button:hover {
    outline: 0;
  }

  button:active {
    outline: 0;
  }

  svg {
    box-sizing: border-box;
    fill: #708c91;
    flex-shrink: 0;
    margin: 0;
  }

  input {
    -webkit-font-smoothing: antialiased;
    appearance: textfield;
    background-color: #ededed;
    border-radius: 16px;
    border-width: 0;
    box-shadow: none;
    box-sizing: content-box;
    caret-color: #00aff5;
    color: #054752;
    flex: 1 1 0;
    font-family: inherit;
    font-size: 16px;
    font-stretch: inherit;
    font-style: inherit;
    font-variant-caps: inherit;
    font-variant-east-asian: inherit;
    font-variant-ligatures: inherit;
    font-variant-numeric: inherit;
    font-weight: inherit;
    line-height: 20px;
    margin: 0 48px 0 0;
    padding: 16px 0 16px 16px;
    vertical-align: baseline;
    width: 100%;
  }

  input:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding-left: 0;
  }

  input::-webkit-input-placeholder {
    color: #708c91;
  }

  input::placeholder {
    color: #708c91;
  }

  input:focus {
    border-color: #ededed;
    outline: none;
  }

  input::-webkit-search-cancel-button {
    appearance: none;
  }

  input::-webkit-search-decoration {
    appearance: none;
  }
`;

export default LocationSearch;
