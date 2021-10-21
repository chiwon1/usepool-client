// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/* global Tmapv2 */

import React, { useEffect, useState } from 'react';
import useTmap from '../../hooks/useTmap';
import { ICoordinate } from '../../Pages/NewRide/NewRide';

export const mapCenter = {
  lat: 37.553878,
  lng: 126.96961,
};

const { Tmapv2 } = window;

type Props = {
  departureCoordinate?: ICoordinate | null;
  destinationCoordinate?: ICoordinate | null;
};

const Tmap = ({
  departureCoordinate,
  destinationCoordinate,
}: Props): JSX.Element => {
  const mapInstance = useTmap();
  const [markerState, setMarkerState] = useState(null);

  const createMarker = (coordinate) => {
    const marker = new Tmapv2.Marker({
      position: new Tmapv2.LatLng(coordinate.lat, coordinate.lng), //Marker의 중심좌표 설정.
      map: mapInstance, //Marker가 표시될 Map 설정..
    });

    setMarkerState(marker);
  };

  const onComplete = function () {
    const jsonObject = new Tmapv2.extension.GeoJSON();
    const jsonForm = jsonObject.rpTrafficRead(this._responseData);
    const trafficColors = {
      trafficDefaultColor: '#000000', //교통 정보가 없을 때
      trafficType1Color: '#009900', //원할
      trafficType2Color: '#7A8E0A', //서행
      trafficType3Color: '#8E8111', //정체
      trafficType4Color: '#FF0000', //정체
    };
    jsonObject.drawRouteByTraffic(mapInstance, jsonForm, trafficColors);
    const midpointCoordinate = {
      lat: (departureCoordinate.lat + destinationCoordinate.lat) / 2,
      lng: (departureCoordinate.lng + destinationCoordinate.lng) / 2,
    };
    mapInstance?.setCenter(
      new Tmapv2.LatLng(midpointCoordinate.lat, midpointCoordinate.lng),
    );
    mapInstance?.setZoom(12);
  };
  // const onProgress = () => {};
  const onError = () => {
    alert('onError');
  };

  const getRP = (baseCoordinate, targetCoordinate) => {
    const sLatlng = new Tmapv2.LatLng(baseCoordinate.lat, baseCoordinate.lng);
    const eLatlng = new Tmapv2.LatLng(
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
      // onProgress: onProgress,
      onError: onError,
    };

    const tData = new Tmapv2.extension.TData();

    tData.getRoutePlanJson(sLatlng, eLatlng, optionObj, params);
  };
  useEffect(() => {
    if (destinationCoordinate) {
      markerState?.setMap(mapInstance, null);

      getRP(departureCoordinate, destinationCoordinate);
    } else if (departureCoordinate && !markerState) {
      createMarker(departureCoordinate);

      mapInstance?.setCenter(
        new Tmapv2.LatLng(departureCoordinate.lat, departureCoordinate.lng),
      );
    }
  });

  return <div id="map" />;
};

export default React.memo(Tmap);
