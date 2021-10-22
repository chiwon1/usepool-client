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
    <StyledForm onSubmit={(ev) => ev.preventDefault()}>
      <Wrapper3>
        <Wrapper4>
          <Wrapper8 role="presentation">
            <Wrapper5>
              <H1Wrapper>{'Where are you leaving from?'}</H1Wrapper>
              <Wrapper7>
                <LocationSearch
                  handlePlaceSelect={handlePlaceSelect}
                  placeholder={'e.g, 역삼역'}
                />
              </Wrapper7>
              <ContinueButton handleClick={handleClick} />
            </Wrapper5>
            <MapWrapper>
              <Tmap departureCoordinate={departureCoordinate} />
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

const StyledForm = styled.form`
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

export default DepartureLocation;
