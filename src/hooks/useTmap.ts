// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react';

const useTmap = () => {
  const [mapInstance, setMapInstance] = useState();

  useEffect(() => {
    const initTmap = () => {
      const map = new Tmapv2.Map('map', {
        center: new Tmapv2.LatLng(37.49806390818841, 127.02758541543777),
        width: '100%',
        height: '100%',
        zoom: 15,
      });

      setMapInstance(map);
    };

    initTmap();
  }, []);

  return mapInstance;
};

export default useTmap;
