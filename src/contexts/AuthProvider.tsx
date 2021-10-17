import React, { ReactElement, useState, createContext, useEffect } from 'react';
import { IUserInfo } from '../types/user';
import { fetchUserInfo } from '../api/user';
import { useQuery } from 'react-query';
import { fetchRideDetails } from '../api/ride';

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

  const { data: userInfo } = useQuery(['fetchUserInfo'], fetchUserInfo(), {
    onSuccess: () => {
      if (userInfo) {
        setUser(userInfo);
      }
    },
  });

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
