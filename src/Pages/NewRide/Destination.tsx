import React, { FC, useContext, useState } from 'react';
import LocationSearch from '../../components/LocationSearch';
import { useHistory } from 'react-router-dom';
import {
  DepartureCoordinateContext,
  ICoordinate,
  NewRideContext,
} from './NewRide';
import styled from 'styled-components';
import { ILocationInfo } from '../../types/ride';
import ContinueButton from '../../components/ContinueButton';
import Tmap from '../../components/map/Tmap';

const Destination: FC = () => {
  const history = useHistory();
  const { newRideInfo, handleNewRideInfo } = useContext(NewRideContext);
  const [destinationCoordinate, setDestinationCoordinate] =
    useState<ICoordinate | null>(null);

  const { departureCoordinate } = useContext(DepartureCoordinateContext);

  const handlePlaceSelect = (locationInfo: ILocationInfo) => {
    const { address, name, coordinate } = locationInfo;

    setDestinationCoordinate(coordinate);

    handleNewRideInfo({
      ...newRideInfo,
      destination: name,
      destinationAddress: address,
      destinationCoordinate: coordinate,
    });
  };

  const handleClick = () => {
    if (!destinationCoordinate) {
      return;
    }

    history.push('/newRide/departure-date');
  };

  return (
    <StyledForm>
      <Wrapper3>
        <Wrapper4>
          <Wrapper8 role="presentation">
            <Wrapper5>
              <H1Wrapper>{'Where are you heading?'}</H1Wrapper>
              <Wrapper7>
                <LocationSearch
                  handlePlaceSelect={handlePlaceSelect}
                  placeholder={'e.g, 여의도역'}
                />
              </Wrapper7>
              <ContinueButton handleClick={handleClick} />
            </Wrapper5>
            <MapWrapper>
              <Tmap
                departureCoordinate={departureCoordinate}
                destinationCoordinate={destinationCoordinate}
              />
            </MapWrapper>
          </Wrapper8>
        </Wrapper4>
      </Wrapper3>
    </StyledForm>
  );
};

const Wrapper8 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
`;

const MapWrapper = styled.div`
  width: 50%;
`;

const Wrapper3 = styled.div`
  position: relative !important;
  height: auto !important;
  min-height: 0 !important;
  flex-grow: 2;
`;

const Wrapper4 = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  min-height: 0 !important;
  height: 100%;
`;

const Wrapper5 = styled.div`
  width: 50%;
`;

const H1Wrapper = styled.h1`
  -webkit-font-smoothing: antialiased;
  border-width: 0;
  box-sizing: border-box;
  color: #054752;
  font-family: gt-eesti, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.06;
  margin: 0;
  padding: 24px 24px 32px;
  text-align: center;
  vertical-align: baseline;
  white-space: pre-line;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

const Wrapper7 = styled.div`
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
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

export default Destination;
