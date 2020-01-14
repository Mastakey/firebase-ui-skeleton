import { DELETE_MESSAGE } from "../types";

import { addMessageUtil } from "./actionsUtil.js";

export const addMessage = message => dispatch => {
  addMessageUtil(message, dispatch);
};

export const removeMessage = id => dispatch => {
  dispatch({ type: DELETE_MESSAGE, payload: id });
};
