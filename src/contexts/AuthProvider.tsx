import React, { ReactElement, useEffect, useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';

import { initKakao } from '../config/kakao';
import { userInfo } from '../types';

export const UserContext = createContext<userInfo | null>(null);

interface Props {
  children: ReactElement;
}

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<userInfo | null>(null);
  const history = useHistory();

  useEffect(() => {
    initKakao();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default AuthProvider;
