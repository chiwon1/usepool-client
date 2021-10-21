import React, { FC } from 'react';
import TimeIndicator from './TimeIndicator';
import LocationIndicator from './LocationIndicator';
import styled from 'styled-components';
import UpperRouteIcon from '../UpperRouteIcon';
import LowerRouteIcon from '../LowerRouteIcon';

type Props = {
  departureTime?: string;
  depatureLocation: string;
  depatureAddress: string;
  destination: string;
  destinationAddress: string;
};

const ItineraryBox: FC<Props> = ({
  departureTime,
  depatureLocation,
  depatureAddress,
  destination,
  destinationAddress,
}) => {
  return (
    <>
      <ul>
        <li>
          <Wrapper6>
            <TimeIndicator time={departureTime} />
            <UpperRouteIcon />
            <LocationIndicator
              location={depatureLocation}
              address={depatureAddress}
            />
          </Wrapper6>
        </li>
        <li>
          <Wrapper6>
            <TimeIndicator />
            <LowerRouteIcon />
            <LocationIndicator
              location={destination}
              address={destinationAddress}
            />
          </Wrapper6>
        </li>
      </ul>
      <Wrapper3>
        <hr />
      </Wrapper3>
    </>
  );
};

const Wrapper6 = styled.div`
  color: rgb(0, 175, 245);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
`;

const Wrapper3 = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;

  hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border: none;
    background-color: rgb(237, 237, 237);
    height: 1px;
    margin: 0px;
    height: 8px;
  }
`;

export default ItineraryBox;
