import React, { ReactElement, useState, createContext, useEffect } from 'react';
import { IUserInfo } from '../types';
import { getUser } from '../api/user';

export const UserContext = createContext<{
  user: IUserInfo | null;
  handleUser: ((value: IUserInfo | null) => void) | null;
}>({ user: null, handleUser: null });

interface Props {
  children: ReactElement;
}

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<IUserInfo | null>(null);

  const handleUser = (value: IUserInfo | null) => {
    setUser(value);
  };

  const fetchUser = async function () {
    const userInfo = await getUser();

    console.log('userInfo', userInfo);

    if (userInfo) {
      setUser(userInfo);
    }
  };

  useEffect(() => {
    void fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
