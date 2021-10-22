import { useCallback, useContext } from 'react';
import { UserContext } from '../contexts/AuthProvider';
import { getAuth } from '../api/auth';
import { updateToken } from '../utils/axios';

const useLogin = (authCode: string): (() => void) => {
  const { handleUser } = useContext(UserContext);

  const getAuthAndUserInfo = async () => {
    const res = await getAuth(authCode);

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
