import { combineReducers } from "redux";
import actionsTypes from "./phoneActionsTypes";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD:
      return [...state, payload.phone];

    case actionsTypes.DELETE:
      return state.filter((task) => task.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionsTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
