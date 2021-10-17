import { useCallback, useContext } from 'react';
import { UserContext } from '../contexts/AuthProvider';
import { getAuth } from '../api/auth';
import { updateToken } from '../api/axios';

const useLogin = (authCode: string) => {
  const { handleUser } = useContext(UserContext);

  const getAuthAndUserInfo = async () => {
    const res = await getAuth(authCode);

    // TODO 2021/10/11 cw: 리팩토링. 로그인 후 바로 getUser하는 로직이 AuthProvider의 getUser와 겹치므로 로그인시 get user 필요없어보임

    if (res) {
      updateToken(res.token);
      handleUser!(res.userInfo);
    }
  };

  return useCallback(() => {
    void getAuthAndUserInfo();
  }, []);
};

export default useLogin;
