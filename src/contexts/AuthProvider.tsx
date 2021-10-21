import React, { useState, createContext, FC } from 'react';
import { IUserInfo } from '../types/user';

export const UserContext = createContext<{
  user: IUserInfo | null;
  handleUser: ((value: IUserInfo | null) => void) | null;
}>({ user: null, handleUser: null });

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUserInfo | null>(null);

  const handleUser = (value: IUserInfo | null) => {
    setUser(value);
  };

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
