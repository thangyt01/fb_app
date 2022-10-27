const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        accessToken: action.payload.token,
        currentUser: action.payload.currentUser,
        isLogged: true,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        accessToken: null,
        currentUser: null,
        isLogged: false,
      };

    case 'REFRESH_TOKEN':
      return {
        ...state,
        accessToken: action.payload.refreshToken,
      };
    default:
      return state;
  }
};

export default AuthReducer;
