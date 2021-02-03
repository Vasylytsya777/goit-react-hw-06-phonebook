import { createStore, combineReducers } from "redux";
// import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import phonebookReducer from "./phonebook/phoneReducer";

// const rootReducer = combineReducers({ tasks: phonebookReducer });
const rootReducer = combineReducers({ contacts: phonebookReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
