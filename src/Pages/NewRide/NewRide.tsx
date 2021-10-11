import React, { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import DepartLocation from './departure/DepartLocation';
import Arrival from './Arrival';
import DepartureDate from './departure/DepatDate';
import SeatCapacity from './SeatCapacity';
import { UserContext } from '../../contexts/AuthProvider';
import DepartTime from './departure/DepartTime';
import Submit from './Submit';
import { IRide } from '../../types/ride';

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
          <Redirect to="/newRide/departure" />
        </Route>
        <Route exact path="/newRide/departure" component={DepartLocation} />
        <Route exact path="/newRide/arrival" component={Arrival} />
        <Route exact path="/newRide/departure-date" component={DepartureDate} />
        <Route exact path="/newRide/departure-time" component={DepartTime} />
        <Route exact path="/newRide/seatCapacity" component={SeatCapacity} />
        <Route exact path="/newRide/submit" component={Submit} />
      </Switch>
    </NewRideContext.Provider>
  );
};

export default NewRide;
