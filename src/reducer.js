import { actionTypes } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        token: action.payload.token
      };
    case actionTypes.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        token: null
      };
    case actionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language
      };
    default:
      return state;
  }
};