import firebase from 'firebase/compat';
import initializeApp = firebase.initializeApp;
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

initializeApp(firebaseConfig);

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = (): Promise<firebase.auth.UserCredential> =>
  auth.signInWithPopup(googleProvider);

export const logout = () => auth.signOut();
