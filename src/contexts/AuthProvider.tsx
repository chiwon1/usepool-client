import React, { ReactElement, useEffect, useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { updateToken } from '../api';
import { getAuth } from '../api/auth';
import { userInfo } from '../types';

export const UserContext = createContext<userInfo | null>(null);

interface Props {
  children: ReactElement;
}

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<userInfo | null>(null);
  const history = useHistory();

  useEffect(() => {
    const authCode = new URL(window.location.href).searchParams.get('code');

    console.log('authCode', authCode);

    if (authCode) {
      try {
        void (async function () {
          const res = await getAuth(authCode);

          if (res) {
            updateToken(res.token);
            setUser(res.userInfo);
            console.log('로그인 완료');
          }
        })();
      } catch (err) {
        console.log('로그인 에러', err);
      } finally {
        history.replace('/');
      }
    }
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default AuthProvider;
