// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/* global Tmapv2 */

import React, { useContext, useEffect } from 'react';
import useTmap from '../../hooks/useTmap';
import {
  DepartureCoordinateContext,
  ICoordinate,
} from '../../Pages/NewRide/NewRide';

export const mapCenter = {
  lat: 37.553878,
  lng: 126.96961,
};

const { Tmapv2 } = window;

type Props = {
  destinationCoordinate?: ICoordinate | null;
};

const SearchMap = ({ destinationCoordinate }: Props) => {
  const mapInstance = useTmap();
  const { departureCoordinate, handleDepartureCoordinate } = useContext(
    DepartureCoordinateContext,
  );

  const createMarker = (coordinate) => {
    new Tmapv2.Marker({
      position: new Tmapv2.LatLng(coordinate.lat, coordinate.lng), //Marker의 중심좌표 설정.
      map: mapInstance, //Marker가 표시될 Map 설정..
    });
  };

  if (departureCoordinate) {
    createMarker(departureCoordinate);

    mapInstance?.setCenter(
      new Tmapv2.LatLng(departureCoordinate.lat, departureCoordinate.lng),
    );
  }

  console.log('departureCoordinate', departureCoordinate);
  console.log('destinationCoordinate', destinationCoordinate);

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

    mapInstance?.setZoom(11);
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
      getRP(departureCoordinate, destinationCoordinate);
    }
  }, [destinationCoordinate]);

  return <div id="map" />;
};

export default React.memo(SearchMap);
