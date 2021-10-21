import React, { FC, useState } from 'react';
import { ILocationInfo } from '../types/ride';
import { Autocomplete } from '@react-google-maps/api';
import styled from 'styled-components';

type Props = {
  handlePlaceSelect: (value: ILocationInfo) => void;
  placeholder: string;
};

const AutoCompleteSearchInput: FC<Props> = ({
  handlePlaceSelect,
  placeholder,
}) => {
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  };

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete?.getPlace().place_id) {
      const { formatted_address: formattedAddress, name } =
        autocomplete.getPlace();

      const { lat, lng } = autocomplete.getPlace().geometry!.location as any;

      const info: ILocationInfo = {
        address: formattedAddress!,
        name: name!,
        coordinate: { lat: lat(), lng: lng() },
      };

      setInputValue(name!);

      handlePlaceSelect(info);
    } else {
      setInputValue('');
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
