import React, { FC, useContext, useEffect } from 'react';
import { loginWithKakao } from '../utils/kakaoLogin';
import { UserContext } from '../contexts/AuthProvider';
import { Redirect, useHistory } from 'react-router-dom';

const Login: FC = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  console.log('Login page');

  if (!user) {
    loginWithKakao();
  }

  return <>{user && <Redirect to="/" />}</>;
};

export default Login;
