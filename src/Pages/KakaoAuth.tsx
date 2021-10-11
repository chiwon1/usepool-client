import React from 'react';
import useLogin from '../hooks/useLogin';
import { Redirect } from 'react-router-dom';

const KakaoAuth = () => {
  console.log('KakaoAuth page');

  const authCode = new URL(window.location.href).searchParams.get('code');

  // useMutation 사용하여 login 로직 리팩토링 고려
  const handleGetAuth = useLogin(authCode!);

  handleGetAuth();

  return <Redirect to="/" />;
};

export default KakaoAuth;
