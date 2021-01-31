import { v4 as uuidv4 } from "uuid";
import actionsTypes from "./phoneActionsTypes";

const addContact = (newContacts) => ({
  type: actionsTypes.ADD,
  payload: {
    phone: {
      id: uuidv4(),
      name: newContacts.name,
      number: newContacts.number,
    },
  },
});

const deleteContact = (e) => ({
  type: actionsTypes.DELETE,
  payload: {
    phone: {
      e,
    },
  },
});

const onHandleFilter = (e) => ({
  type: actionsTypes.FILTER,
  payload: {
    phone: {
      e,
    },
  },
});

const getFilteredContact = () => ({
  type: actionsTypes.CONTACTS,
  payload: {
    phone: {},
  },
});

export default {
  addContact,
  deleteContact,
  onHandleFilter,
  getFilteredContact,
};
