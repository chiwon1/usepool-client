import React, { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Departure from './Departure';
import Arrival from './Arrival';
import Seats from './Seats';
import { UserContext } from '../../contexts/AuthProvider';

export const NewRideContext = createContext<{
  newRideInfo: INewRide | null;
  handleNewRideInfo: (value: INewRide) => void;
} | null>(null);

interface INewRide {
  departFrom: string;
  departTime: Date;
  arriveAt: string;
  arriveTime: Date;
  capacity: number;
  driver: string;
}

const NewRide = () => {
  const [newRideInfo, setNewRideInfo] = useState<INewRide | null>(null);
  console.log('New Ride page');
  const handleNewRideInfo = (value: INewRide) => {
    setNewRideInfo(value);
  };

  const history = useHistory();

  const { user } = useContext(UserContext);
  console.log(user);

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
        <Route exact path="/newRide/seats" component={Seats} />
      </Switch>
    </NewRideContext.Provider>
  );
};

export default NewRide;
