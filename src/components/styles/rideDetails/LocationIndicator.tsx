import React, { FC } from 'react';
import RightAddOnIcon from '../RightAddOnIcon';
import styled from 'styled-components';

type Props = {
  location: string;
  address: string;
};

const LocationIndicator: FC<Props> = ({ location, address }) => {
  return (
    <Wrapper>
      <LocationContainer>{location}</LocationContainer>
      <AddressContainer>{address}</AddressContainer>
      <RightAddOnIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  flex: 1 1 0;
  padding: 8px 24px 8px 0px;

  svg {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
  }
`;

const LocationContainer = styled.span`
  white-space: pre-line;
  color: rgb(5, 71, 82);
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
`;

const AddressContainer = styled.span`
  white-space: pre-line;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  display: block;
  color: rgb(5, 71, 82);
  margin-top: 4px;
`;

export default LocationIndicator;
