import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import phonebookReducer from "./reducers/phoneReducer";

// ====== redux toolkit ==============================

const store = configureStore({
  reducer: { contacts: phonebookReducer },
});

export default store;

// // ====== redux toolkit ===СТАРА ВЕРСІЯ===========================

// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import phonebookReducer from "./reducers/phoneReducer";

// const rootReducer = combineReducers({ contacts: phonebookReducer });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

// // ====================== react - redux  =============================
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// const rootReducer = combineReducers({ contacts: phonebookReducer });

//  const store = createStore(rootReducer, composeWithDevTools());

//  export default store;
