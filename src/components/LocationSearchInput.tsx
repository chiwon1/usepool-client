import React, { FC } from 'react';
import styled from 'styled-components';
import { ILocationInfo } from '../types/ride';
import AutoCompleteSearchInput from './AutoCompleteSearchInput';

type Props = {
  placeholder: string;
  handlePlaceSelect: (locationInfo: ILocationInfo) => void;
};

const LocationSearchInput: FC<Props> = ({ placeholder, handlePlaceSelect }) => {
  return (
    <Wrapper>
      <div>
        <div>
          <div>
            <div>
              <SpanWrapper>
                <div aria-hidden="true" />
              </SpanWrapper>
              <StyledDiv />
              <AutoCompleteSearchInput
                placeholder={placeholder}
                handlePlaceSelect={handlePlaceSelect}
              />
            </div>
          </div>
        </div>
      </div>
      <div />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;

  & > div {
    border-width: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    vertical-align: baseline;

    & > div {
      border-width: 0;
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      margin: 0;
      opacity: 1;
      padding: 0;
      transform: translateX(0);
      transition-duration: 200ms;
      transition-property: opacity, transform;
      vertical-align: baseline;

      & > div {
        border-width: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        margin: 0;
        opacity: 1;
        padding: 0;
        transform: translateX(0);
        transition-duration: 200ms;
        transition-property: opacity, transform;
        vertical-align: baseline;

        & > div {
          -webkit-box-align: center;
          align-items: center;
          background-color: initial;
          background-image: none;
          border-style: none;
          box-sizing: border-box;
          color: #708c91;
          cursor: pointer;
          display: flex;
          font-size: 16px;
          font-weight: 400;
          height: 40px;
          line-height: 18px;
          margin: 0;
          min-width: 0;
          overflow: hidden;
          padding: 0 0 0 8px;
          text-align: left;
          vertical-align: baseline;
          white-space: nowrap;
          width: 240px;

          &:disabled {
            cursor: default;
          }
        }
      }
    }
  }
`;

const SpanWrapper = styled.span`
  border-width: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;

  & > div {
    background-color: #fff;
    border: 4px solid #708c91;
    border-radius: 50%;
    font-size: 16px;
    font-weight: 400;
    height: 18px;
    line-height: 18px;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    width: 18px;
  }
`;

const StyledDiv = styled.span`
  border-width: 0;
  box-sizing: border-box;
  color: #708c91;
  flex: 0 1 auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  vertical-align: baseline;
  white-space: nowrap;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

export default LocationSearchInput;
