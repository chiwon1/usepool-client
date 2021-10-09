import React, { useCallback, useContext } from 'react';
import { UserContext } from '../contexts/AuthProvider';
import { getAuth } from '../api/auth';
import { getUser } from '../api/user';

const useLogin = (authCode: string) => {
  const { handleUser } = useContext(UserContext);

  return useCallback(() => {
    void (async () => {
      await getAuth(authCode);

      const userInfo = await getUser();

      if (userInfo) {
        handleUser!(userInfo);
      }
    })();
  }, []);
};

export default useLogin;
