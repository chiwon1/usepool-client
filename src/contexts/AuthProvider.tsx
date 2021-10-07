import React, { ReactElement, useState, createContext } from 'react';
import { IUserInfo } from '../types';

export const UserContext = createContext<{
  user: IUserInfo | null;
  handleUser: ((value: IUserInfo) => void) | null;
}>({ user: null, handleUser: null });

interface Props {
  children: ReactElement;
}

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<IUserInfo | null>(null);

  const handleUser = (value: IUserInfo) => {
    setUser(value);
  };

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
