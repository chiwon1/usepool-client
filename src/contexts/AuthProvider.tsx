import React, { ReactElement, useState, createContext } from 'react';
import { IUserInfo } from '../types/user';
import { fetchUserInfo } from '../api/user';
import { useQuery } from 'react-query';

export const UserContext = createContext<{
  user: IUserInfo | null;
  handleUser: ((value: IUserInfo | null) => void) | null;
}>({ user: null, handleUser: null });

interface Props {
  children: ReactElement;
}

const AuthProvider = ({ children }: Props) => {
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
