import { createContext, useState } from 'react';

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
  };

  const logout = () => {
    setToken(null);
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
}
