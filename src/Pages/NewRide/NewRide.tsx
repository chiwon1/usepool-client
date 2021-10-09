import React, { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Departure from './departure/Departure';
import Arrival from './Arrival';
import DepartureDate from './departure/DepatureDate';
import SeatCapacity from './SeatCapacity';
import { UserContext } from '../../contexts/AuthProvider';
import DepartureTime from './departure/DepartureTime';
import Submit from './Submit';
import { IRide } from '../../types/ride';

export const NewRideContext = createContext<{
  newRideInfo: IRide | null;
  handleNewRideInfo: (value: IRide) => void;
}>({ newRideInfo: null, handleNewRideInfo: () => null });

const NewRide = () => {
  const { user } = useContext(UserContext);

  const [newRideInfo, setNewRideInfo] = useState<IRide | null>({
    departFrom: '',
    departTime: null,
    arriveAt: '',
    seatCapacity: null,
    driverNickname: user?.nickname,
  });

  console.log('newRideInfo', newRideInfo);

  const handleNewRideInfo = (value: IRide) => {
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
        <Route exact path="/newRide/departure" component={Departure} />
        <Route exact path="/newRide/arrival" component={Arrival} />
        <Route exact path="/newRide/departure-date" component={DepartureDate} />
        <Route exact path="/newRide/departure-time" component={DepartureTime} />
        <Route exact path="/newRide/seatCapacity" component={SeatCapacity} />
        <Route exact path="/newRide/submit" component={Submit} />
      </Switch>
    </NewRideContext.Provider>
  );
};

export default NewRide;
