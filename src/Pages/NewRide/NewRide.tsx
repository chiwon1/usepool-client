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
const SeatCapacity = loadable(() => import('./SeatCapacity'));
const Submit = loadable(() => import('./Submit'));

export const NewRideContext = createContext<{
  newRideInfo: IRide | null;
  handleNewRideInfo: (value: IRide | null) => void;
}>({ newRideInfo: null, handleNewRideInfo: () => null });

const NewRide = () => {
  const { user } = useContext(UserContext);

  const [newRideInfo, setNewRideInfo] = useState<IRide | null>(null);

  const handleNewRideInfo = (value: IRide | null) => {
    setNewRideInfo(value);
  };

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  return (
    <NewRideContext.Provider value={{ newRideInfo, handleNewRideInfo }}>
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
        <Route exact path="/newRide/departure-date" component={DepartureDate} />
        <Route exact path="/newRide/departure-time" component={DepartureTime} />
        <Route exact path="/newRide/seatCapacity" component={SeatCapacity} />
        <Route exact path="/newRide/submit" component={Submit} />
      </Switch>
    </NewRideContext.Provider>
  );
};

export default NewRide;
