import React, { useContext, useReducer } from 'react';
import AuthReducer from '../reducer/AuthReducer';

const defaultValue = {
  isLogged: false,
  isLoading: true,
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

  return (
    <AuthContext.Provider value={{ authStateContext, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
