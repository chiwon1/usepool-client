import React, { useState } from 'react';
import { ILocationInfo } from '../types/ride';
import { Autocomplete } from '@react-google-maps/api';
import styled from 'styled-components';

type Props = {
  handlePlaceSelect: (value: ILocationInfo) => void;
  placeholder: string;
};

const AutoCompleteSearchInput = ({ handlePlaceSelect, placeholder }: Props) => {
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  };

  const onLoad = (autocomplete: any) => {
    setAutocomplete(autocomplete);
  };

  // lat : 위도
  const onPlaceChanged = () => {
    if (autocomplete.getPlace().place_id) {
      const {
        formatted_address: formattedAddress,
        name,
        geometry: {
          location: { lat, lng },
        },
      } = autocomplete.getPlace();

      const info: ILocationInfo = {
        address: formattedAddress,
        name: name,
        coordinate: { lat: lat(), lng: lng() },
      };

      setInputValue(name);

      handlePlaceSelect(info);
    } else {
      setInputValue('');

      console.log('autocomplete is not loaded yet');
    }
  };

  return (
    <Wrapper>
      <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
        restrictions={{ country: 'kr' }}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(ev) => handleChange(ev)}
          required
        />
      </Autocomplete>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default AutoCompleteSearchInput;
