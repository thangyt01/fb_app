const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLogged: true,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        currentUser: null,
        isLogged: false,
      };

    case 'REFRESH_TOKEN':
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLogged: true,
        isLoading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
};

export default AuthReducer;
