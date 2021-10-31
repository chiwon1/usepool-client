import React, { FC, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { DepartureCoordinateContext, NewRideContext } from '../NewRide';

import LocationSearch from '../../../components/LocationSearch';
import ContinueButton from '../../../components/ContinueButton';
import Tmap from '../../../components/map/Tmap';

import { ILocationInfo } from '../../../types/ride';

const DepartureLocation: FC = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const { departureCoordinate, handleDepartureCoordinate: handleCoordinate } =
    useContext(DepartureCoordinateContext);

  const handlePlaceSelect = useCallback(
    (locationInfo: ILocationInfo) => {
      const { address, name, coordinate } = locationInfo;

      handleCoordinate(coordinate);

      handleNewRideInfo({
        ...newRideInfo,
        departureLocation: name,
        departureAddress: address,
        departureCoordinate: coordinate,
      });
    },
    [newRideInfo],
  );

  const handleClick = useCallback(() => {
    if (!departureCoordinate) {
      return;
    }

    history.push('/newRide/destination');
  }, [departureCoordinate]);

  return (
    <SearchLocationForm onSubmit={(ev) => ev.preventDefault()}>
      <SearchLocationInputWrapper>
        <div>
          <div role="presentation">
            <div>
              <SearchLocationTitle>
                {'Where are you leaving from?'}
              </SearchLocationTitle>
              <SearchInputWrapper>
                <LocationSearch
                  handlePlaceSelect={handlePlaceSelect}
                  placeholder={'e.g, 역삼역'}
                />
              </SearchInputWrapper>
              <ContinueButton handleClick={handleClick} />
            </div>
            <MapWrapper>
              <Tmap departureCoordinate={departureCoordinate} />
            </MapWrapper>
          </div>
        </div>
      </SearchLocationInputWrapper>
    </SearchLocationForm>
  );
};

export const SearchLocationInputWrapper = styled.div`
  position: relative !important;
  height: auto !important;
  min-height: 0 !important;
  flex-grow: 2;

  & > div {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    min-height: 0 !important;
    height: 100%;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      -webkit-box-flex: 1;
      flex-grow: 1;
      height: 100%;

      & > div {
        width: 50%;
      }
    }
  }
`;

export const SearchLocationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
`;

export const MapWrapper = styled.div`
  width: 50%;
`;

export const SearchLocationTitle = styled.h1`
  border-width: 0;
  color: ${({
    theme: {
      font: { color },
    },
  }) => color.navy};
  font-size: 40px;
  font-weight: 500;
  line-height: 1.06;
  padding: 24px 24px 32px;
  text-align: center;
  white-space: pre-line;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

export const SearchInputWrapper = styled.div`
  border-width: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

export default DepartureLocation;
