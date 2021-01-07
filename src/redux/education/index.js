import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handler";

export const actions = createActions({
  SET_NAME: undefined,
});

const reducer = handleActions(
  new Map([[actions.setName, handlers.setName]]),
  initialState
);

export default reducer;
