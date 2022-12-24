import React, { useContext, useReducer } from 'react';
import RegisterReducer from '../reducer/RegisterReducer';

export const defaultValue = {
  firstname: '',
  lastname: '',
  email: '',
  birthday: '',
  phone: '',
  gender: '',
  password: '',
};

const RegisterContext = React.createContext({
  registerState: defaultValue,
  dispatchRegister: () => {},
});

const RegisterProvider = ({ children }) => {
  const [registerState, dispatchRegister] = useReducer(
    RegisterReducer,
    defaultValue,
  );

  return (
    <RegisterContext.Provider
      value={{
        registerState,
        dispatchRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);

export default RegisterProvider;
