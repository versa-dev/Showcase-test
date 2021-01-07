import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

export default function configureStore(initialState) {
  let store;

  if (process.env.REACT_APP_STAGE === "development") {
    store = createStoreWithMiddleware(
      rootReducer,
      initialState,
      composeWithDevTools()
    );
  } else {
    store = createStoreWithMiddleware(rootReducer, initialState);
  }

  sagaMiddleware.run(rootSaga);
  return store;
}
