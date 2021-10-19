import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '770px',
};

export const mapCenter = {
  lat: 37.553878,
  lng: 126.96961,
};

type Libraries = (
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'places'
  | 'visualization'
)[];

export const libraries: Libraries = ['places'];

const SearchMap = () => {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={10}
    />
  );
};

export default React.memo(SearchMap);
