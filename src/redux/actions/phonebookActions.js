import { v4 as uuidv4 } from "uuid";
import actionsTypes from "../reducers/phoneActionsTypes";

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

const deleteContact = (id) => ({
  type: actionsTypes.DELETE,
  payload: id,
});

const onHandleFilter = (filter) => ({
  type: actionsTypes.FILTER,
  payload: filter,
});

export default {
  addContact,
  deleteContact,
  onHandleFilter,
};
