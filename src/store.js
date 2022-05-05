// import { createStore } from "redux";
import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducer/rootReducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
