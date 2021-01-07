import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handler";

export const actions = createActions({
  SET_NAME: undefined,
  ADD_EDUCATION: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.setName, handlers.setName],
    [actions.addEducation, handlers.addEducation],
  ]),
  initialState
);

export default reducer;
