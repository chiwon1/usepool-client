import React, { ReactElement, useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../config/firebaseAuth';
import { updateToken } from '../api';
import firebase from 'firebase/compat';

export const UserContext = createContext<firebase.User | null>(null);

interface Props {
  children: ReactElement;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        console.log('로그인됨');

        const token = await firebaseUser.getIdToken();

        updateToken(token);
        setUser(firebaseUser);
      } else {
        console.log('로그인 안됨');
        setUser(null);
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default AuthProvider;
