import { objectSort } from "../../helpers/utils";

const initialState = {
  name: "",
  educations: [],
};

export const setName = (state, { payload }) => ({
  ...state,
  name: payload,
});

export const addEducation = (state, { payload }) => {
  let newArray = objectSort([...state.educations, payload]);
  return {
    ...state,
    educations: newArray,
  };
};

export default initialState;
