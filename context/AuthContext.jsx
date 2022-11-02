import React, { useContext, useReducer } from 'react';
import AuthReducer from '../reducer/AuthReducer';

const defaultValue = {
  isLogged: true,
  accessToken: null,
  currentUser: null,
};

const AuthContext = React.createContext({
  authStateContext: defaultValue,
  dispatchAuth: () => {},
});

const AuthProvider = ({ children }) => {
  const [authStateContext, dispatchAuth] = useReducer(
    AuthReducer,
    defaultValue,
  );

  const authContextData = {
    authStateContext,
    dispatchAuth,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
