const initialState = {
  name: "",
};

export const setName = (state, { payload }) => ({
  ...state,
  name: payload,
});

export default initialState;
