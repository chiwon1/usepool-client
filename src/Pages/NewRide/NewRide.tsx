import React, { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Departure from './Departure';
import Arrival from './Arrival';
import Date from './Date';
import Seats from './Seats';
import { UserContext } from '../../contexts/AuthProvider';

export const NewRideContext = createContext<{
  newRideInfo: INewRide | null;
  handleNewRideInfo: (value: INewRide) => void;
}>({ newRideInfo: null, handleNewRideInfo: () => null });

export interface INewRide {
  departFrom?: string;
  departTime?: Date | null;
  arriveAt?: string;
  arriveTime?: Date | null;
  capacity?: number | null;
  driver?: string;
}

const NewRide = () => {
  const { user } = useContext(UserContext);

  const [newRideInfo, setNewRideInfo] = useState<INewRide | null>({
    departFrom: '',
    departTime: null,
    arriveAt: '',
    arriveTime: null,
    capacity: null,
    driver: user?.nickname,
  });

  console.log('newRideInfo', newRideInfo);

  console.log('New Ride page');
  const handleNewRideInfo = (value: INewRide) => {
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
        <Route exact path="/newRide/date" component={Date} />
        <Route exact path="/newRide/seats" component={Seats} />
      </Switch>
    </NewRideContext.Provider>
  );
};

export default NewRide;
