import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_MESSAGES,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  CLEAR_MESSAGES
} from "../types";

const initialState = {
  loading: false,
  errors: null,
  messages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        messages: []
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          message => message.id !== action.payload
        )
      };
    default:
      return state;
  }
}
