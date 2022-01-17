import React, { FC } from 'react';
import useLogin from '../hooks/useLogin';
import { Redirect } from 'react-router-dom';

const KakaoAuth: FC = () => {
  const authCode = new URL(window.location.href).searchParams.get('code');

  const handleGetAuth = useLogin(authCode!);

  handleGetAuth();

  return <Redirect to="/" />;
};

export default KakaoAuth;
