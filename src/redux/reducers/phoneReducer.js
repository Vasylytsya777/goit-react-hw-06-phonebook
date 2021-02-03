import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actionsTypes from "../actions/phonebookActions";

// ========================= redux toolkit createReducer ========================

const items = createReducer([], {
  [actionsTypes.addContact]: (state, action) => [
    ...state,
    action.payload.phone,
  ],
  [actionsTypes.deleteContact]: (state, action) =>
    state.filter((task) => task.id !== action.payload),
});

const filter = createReducer("", {
  [actionsTypes.onHandleFilter]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });

// ========================= redux toolkit====================
// import { combineReducers } from "redux";
// import actionsTypes from "../actions/phonebookActions";
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionsTypes.addContact.type:
//       return [...state, payload.phone];

//     case actionsTypes.deleteContact.type:
//       return state.filter((task) => task.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionsTypes.onHandleFilter.type:
//       return payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({ items, filter });

// ========================= react - redux ========================
// import { combineReducers } from "redux";
// import actionsTypes from "./phoneActionsTypes";
// тут ще були заіпротровані константи (які збережені в попередньому коміті)
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionsTypes.ADD:
//       return [...state, payload.phone];

//     case actionsTypes.DELETE:
//       return state.filter((task) => task.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionsTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({ items, filter });
