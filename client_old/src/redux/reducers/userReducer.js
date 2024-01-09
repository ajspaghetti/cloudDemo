// src/redux/reducers/userReducer.js

const initialState = {
    isAuthenticated: false,
  };

  function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  }

  export default userReducer;
