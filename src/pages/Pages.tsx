import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('./Home'));
const Login = loadable(() => import('./Login'));
const KakaoAuth = loadable(() => import('./KakaoAuth'));
const NewRide = loadable(() => import('./NewRide'));
const Search = loadable(() => import('./Search'));
const RideDetails = loadable(() => import('./RideDetails'));
const ChatRoom = loadable(() => import('./ChatRoom'));
const RidesAsDriver = loadable(() => import('./myPage/RidesAsDriver'));
const RidesAsPassenger = loadable(() => import('./myPage/RidesAsPassenger'));
const Inbox = loadable(() => import('./Inbox'));

const Pages: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/kakaoAuth" component={KakaoAuth} />
      <Route path="/newRide" component={NewRide} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/rides/:rideId" component={RideDetails} />
      <Route exact path="/chatRooms/:chatRoomId" component={ChatRoom} />
      <Route exact path="/myRides/asDriver" component={RidesAsDriver} />
      <Route exact path="/myRides/asPassenger" component={RidesAsPassenger} />
      <Route exact path="/inbox" component={Inbox} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Pages;
