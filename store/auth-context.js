import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const authenticate = (token) => {
    setToken(token);
    AsyncStorage.setItem('token', token);
  };

  const logout = () => {
    setToken(null);
    AsyncStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
