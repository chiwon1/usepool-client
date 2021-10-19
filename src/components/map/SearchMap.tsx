// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/* global Tmapv2 */

import React from 'react';
import useTmap from '../../hooks/useTmap';

export const mapCenter = {
  lat: 37.553878,
  lng: 126.96961,
};

const { Tmapv2 } = window;

const SearchMap = () => {
  const mapInstance = useTmap();

  const createMarker = () => {
    new Tmapv2.Marker({
      position: new Tmapv2.LatLng(37.553756, 126.925356), //Marker의 중심좌표 설정.
      map: mapInstance, //Marker가 표시될 Map 설정..
    });
  };

  createMarker();

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

    mapInstance?.setCenter(
      new Tmapv2.LatLng(37.55676159947993, 126.94734232774672),
    );

    mapInstance?.setZoom(14);
  };

  const onProgress = () => {
    console.log('progress');
  };

  const onError = () => {
    alert('onError');
  };

  const getRP = () => {
    const sLatlng = new Tmapv2.LatLng(37.553756, 126.925356);
    const eLatlng = new Tmapv2.LatLng(37.554034, 126.975598);

    const optionObj = {
      reqCoordType: 'WGS84GEO',
      resCoordType: 'WGS84GEO',
      trafficInfo: 'Y',
    };

    const params = {
      onComplete: onComplete,
      onProgress: onProgress,
      onError: onError,
    };

    const tData = new Tmapv2.extension.TData();

    tData.getRoutePlanJson(sLatlng, eLatlng, optionObj, params);
  };

  getRP();

  return <div id="map" />;
};

export default React.memo(SearchMap);
