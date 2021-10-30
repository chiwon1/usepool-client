// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { FC, useEffect, useState } from 'react';
import useTmap from '../../hooks/useTmap';
import { ICoordinate } from '../../types/ride';

export const mapCenter = {
  lat: 37.553878,
  lng: 126.96961,
};

type Props = {
  departureCoordinate?: ICoordinate | null;
  destinationCoordinate?: ICoordinate | null;
};

const Tmap: FC<Props> = ({
  departureCoordinate,
  destinationCoordinate,
}: Props) => {
  const mapInstance = useTmap();
  const [markerState, setMarkerState] = useState(null);

  const createMarker = (coordinate) => {
    const marker = new window.Tmapv2.Marker({
      position: new window.Tmapv2.LatLng(coordinate.lat, coordinate.lng),
      map: mapInstance,
    });

    setMarkerState(marker);
  };

  const onComplete = function () {
    const jsonObject = new window.Tmapv2.extension.GeoJSON();
    const jsonForm = jsonObject.rpTrafficRead(this._responseData);
    const trafficColors = {
      trafficDefaultColor: '#000000',
      trafficType1Color: '#009900',
      trafficType2Color: '#7A8E0A',
      trafficType3Color: '#8E8111',
      trafficType4Color: '#FF0000',
    };
    jsonObject.drawRouteByTraffic(mapInstance, jsonForm, trafficColors);
    const midpointCoordinate = {
      lat: (departureCoordinate.lat + destinationCoordinate.lat) / 2,
      lng: (departureCoordinate.lng + destinationCoordinate.lng) / 2,
    };
    mapInstance?.setCenter(
      new window.Tmapv2.LatLng(midpointCoordinate.lat, midpointCoordinate.lng),
    );
    mapInstance?.setZoom(12);
  };

  const onError = () => {
    alert('onError');
  };

  const getRP = (baseCoordinate, targetCoordinate) => {
    const sLatlng = new window.Tmapv2.LatLng(
      baseCoordinate.lat,
      baseCoordinate.lng,
    );
    const eLatlng = new window.Tmapv2.LatLng(
      targetCoordinate.lat,
      targetCoordinate.lng,
    );

    const optionObj = {
      reqCoordType: 'WGS84GEO',
      resCoordType: 'WGS84GEO',
      trafficInfo: 'Y',
    };

    const params = {
      onComplete: onComplete,
      onError: onError,
    };

    const tData = new window.Tmapv2.extension.TData();

    tData.getRoutePlanJson(sLatlng, eLatlng, optionObj, params);
  };

  useEffect(() => {
    if (destinationCoordinate) {
      markerState?.setMap(mapInstance, null);

      getRP(departureCoordinate, destinationCoordinate);
    } else if (departureCoordinate && !markerState) {
      createMarker(departureCoordinate);

      mapInstance?.setCenter(
        new window.Tmapv2.LatLng(
          departureCoordinate.lat,
          departureCoordinate.lng,
        ),
      );
    }
  });

  return <div id="map" />;
};

export default React.memo(Tmap);
