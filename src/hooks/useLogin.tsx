import React, { FC, useCallback, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/AuthProvider';
import { getAuth } from '../api/auth';
import { getUser } from '../api/user';

const useLogin = (authCode: string) => {
  const { handleUser } = useContext(UserContext);

  return useCallback(() => {
    async () => {
      await getAuth(authCode);

      const userInfo = await getUser();

      if (userInfo) {
        handleUser!(userInfo);
      }
    };
  }, []);
};

export default useLogin;
