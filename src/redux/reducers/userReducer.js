import {
  SET_AUTH,
  SET_UNAUTH,
  SET_USER,
  LOADING_USER,
  SIGNUP_USER
} from "../types";

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case SET_AUTH:
      return {
        ...state,
        authenticated: true,
        loading: false
      };
    case SET_UNAUTH:
      return initialState;
    case SET_USER:
      if (state.authenticated) {
        return {
          authenticated: true,
          loading: false,
          ...action.payload
        };
      }
      return {
        ...state,
        authenticated: false,
        loading: false
      };
    case SIGNUP_USER:
      return {
        ...state
      };
    default:
      return state;
  }
}
