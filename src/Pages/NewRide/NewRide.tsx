import React, { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider';
import { IRide } from '../../types/ride';

import loadable from '@loadable/component';

const DepartureLocation = loadable(
  () => import('./departure/DepartureLocation'),
);
const Destination = loadable(() => import('./Destination'));
const DepartureDate = loadable(() => import('./departure/DepartureDate'));
const DepartureTime = loadable(() => import('./departure/DepartureTime'));
const Submit = loadable(() => import('./Submit'));

export const NewRideContext = createContext<{
  newRideInfo: IRide | null;
  handleNewRideInfo: (value: IRide | null) => void;
}>({ newRideInfo: null, handleNewRideInfo: () => null });

export interface ICoordinate {
  lat: number;
  lng: number;
}

export const DepartureCoordinateContext = createContext<{
  departureCoordinate: ICoordinate | null;
  handleDepartureCoordinate: (value: ICoordinate | null) => void;
}>({ departureCoordinate: null, handleDepartureCoordinate: () => null });

const NewRide = () => {
  const { user } = useContext(UserContext);

  const [newRideInfo, setNewRideInfo] = useState<IRide | null>(null);
  const [departureCoordinate, setDepartureCoordinate] =
    useState<ICoordinate | null>(null);

  const handleNewRideInfo = (value: IRide | null) => {
    setNewRideInfo(value);
  };

  const handleDepartureCoordinate = (value: ICoordinate | null) => {
    setDepartureCoordinate(value);
  };

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  return (
    <NewRideContext.Provider value={{ newRideInfo, handleNewRideInfo }}>
      <DepartureCoordinateContext.Provider
        value={{ departureCoordinate, handleDepartureCoordinate }}
      >
        <Switch>
          <Route exact path="/newRide">
            <Redirect to="/newRide/departure-location" />
          </Route>
          <Route
            exact
            path="/newRide/departure-location"
            component={DepartureLocation}
          />
          <Route exact path="/newRide/destination" component={Destination} />
          <Route
            exact
            path="/newRide/departure-date"
            component={DepartureDate}
          />
          <Route
            exact
            path="/newRide/departure-time"
            component={DepartureTime}
          />
          <Route exact path="/newRide/submit" component={Submit} />
        </Switch>
      </DepartureCoordinateContext.Provider>
    </NewRideContext.Provider>
  );
};

export default NewRide;
