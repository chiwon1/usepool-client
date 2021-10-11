import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import KakaoAuth from './KakaoAuth';
import NewRide from './NewRide';
import Search from './Search';
import RideDetails from './RideDetails';
import RidesAsDriver from './myPage/RidesAsDriver';
import RidesAsPassenger from './myPage/RidesAsPassenger';

const Pages: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/kakaoAuth" component={KakaoAuth} />
      <Route path="/newRide" component={NewRide} />
      <Route exact path="/:search?" component={Search} />
      <Route exact path="/ride/:id" component={RideDetails} />
      <Route exact path="/myRides/asDriver" component={RidesAsDriver} />
      <Route exact path="/myRides/asPassenger" component={RidesAsPassenger} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Pages;
