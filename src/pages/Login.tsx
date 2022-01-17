import React, { FC, useContext } from 'react';
import { loginWithKakao } from '../utils/kakaoLogin';
import { UserContext } from '../contexts/AuthProvider';
import { Redirect } from 'react-router-dom';

const Login: FC = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    loginWithKakao();
  }

  return <>{user && <Redirect to="/" />}</>;
};

export default Login;
