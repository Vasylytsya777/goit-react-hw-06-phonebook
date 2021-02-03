import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import phonebookReducer from "./reducers/phoneReducer";

const rootReducer = combineReducers({ contacts: phonebookReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
