import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import KakaoAuth from './KakaoAuth';
import NewRide from './NewRide';
import Search from './Search';

const Pages: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/kakaoAuth" component={KakaoAuth} />
      <Route path="/newRide" component={NewRide} />
      <Route path="/:search?" component={Search} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Pages;
