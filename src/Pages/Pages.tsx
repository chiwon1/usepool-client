import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';
import NewRide from './NewRide';

const Pages: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/newRide" component={NewRide} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Pages;
