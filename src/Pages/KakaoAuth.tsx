import React from 'react';
import useLogin from '../hooks/useLogin';
import { Redirect } from 'react-router-dom';

const KakaoAuth = () => {
  console.log('KakaoAuth page');

  const authCode = new URL(window.location.href).searchParams.get('code');

  // useMutation 사용하여 login 로직 리팩토링 고려
  // TODO 2021/10/13 cw: 로그인 두번되며 회원가입 두번되는 버그 fix
  const handleGetAuth = useLogin(authCode!);

  handleGetAuth();

  return <Redirect to="/" />;
};

export default KakaoAuth;
