import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from '../firebase'

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // CREATING NEW USERS
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
