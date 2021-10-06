import React, { ReactElement, useState, createContext } from 'react';
import { userInfo } from '../types';

export const UserContext = createContext<{
  user: null;
  handleUser: ((value: any) => void) | null;
}>({ user: null, handleUser: null });

interface Props {
  children: ReactElement;
}

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState(null);

  const handleUser = (value: any) => {
    setUser(value);
  };

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
