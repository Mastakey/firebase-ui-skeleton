import { ADD_MESSAGE, DELETE_MESSAGE } from "../types";

export const addMessageUtil = (message, dispatch) => {
  let id = new Date().getTime() * Math.floor(Math.random() * Math.floor(10000));
  const alert = {
    id: id,
    message: message.message
  };
  dispatch({ type: ADD_MESSAGE, payload: alert });
  if (message && message.timeout && message.timeout > 0) {
    setTimeout(function() {
      dispatch({ type: DELETE_MESSAGE, payload: id });
    }, 4000);
  }
};
