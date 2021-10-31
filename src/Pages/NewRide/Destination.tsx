import React, { FC, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { DepartureCoordinateContext, NewRideContext } from './NewRide';

import LocationSearch from '../../components/LocationSearch';
import ContinueButton from '../../components/ContinueButton';
import Tmap from '../../components/map/Tmap';

import { ICoordinate, ILocationInfo } from '../../types/ride';
import {
  MapWrapper,
  SearchInputWrapper,
  SearchLocationForm,
  SearchLocationInputWrapper,
  SearchLocationTitle,
} from './departure/DepartureLocation';

const Destination: FC = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const [destinationCoordinate, setDestinationCoordinate] =
    useState<ICoordinate | null>(null);

  const { departureCoordinate } = useContext(DepartureCoordinateContext);

  const handlePlaceSelect = useCallback(
    (locationInfo: ILocationInfo) => {
      const { address, name, coordinate } = locationInfo;

      setDestinationCoordinate(coordinate);

      handleNewRideInfo({
        ...newRideInfo,
        destination: name,
        destinationAddress: address,
        destinationCoordinate: coordinate,
      });
    },
    [newRideInfo],
  );

  const handleClick = useCallback(() => {
    if (!destinationCoordinate) {
      return;
    }

    history.push('/newRide/departure-date');
  }, [destinationCoordinate]);

  return (
    <SearchLocationForm>
      <SearchLocationInputWrapper>
        <div>
          <div role="presentation">
            <div>
              <SearchLocationTitle>
                {'Where are you heading?'}
              </SearchLocationTitle>
              <SearchInputWrapper>
                <LocationSearch
                  handlePlaceSelect={handlePlaceSelect}
                  placeholder={'e.g, 여의도역'}
                />
              </SearchInputWrapper>
              <ContinueButton handleClick={handleClick} />
            </div>
            <MapWrapper>
              <Tmap
                departureCoordinate={departureCoordinate}
                destinationCoordinate={destinationCoordinate}
              />
            </MapWrapper>
          </div>
        </div>
      </SearchLocationInputWrapper>
    </SearchLocationForm>
  );
};

export default Destination;
